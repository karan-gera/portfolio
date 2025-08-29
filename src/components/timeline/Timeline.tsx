import React, { useState, useEffect, useRef, useCallback } from 'react';
import { EntryCard } from './EntryCard';
import type { TimelineProps, TimelineState, TimelineEntry } from './types';
import { debounce } from './utils';

export const Timeline: React.FC<TimelineProps> = ({
  entries,
  onEntrySelect,
  className = ''
}) => {
  // State management
  const [state, setState] = useState<TimelineState>({
    focusedIndex: -1,
    activeIndex: null,
    isKeyboardNavigating: false,
    lastInteractionType: 'mouse'
  });

  // Refs for DOM manipulation
  const timelineRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Update card refs array when entries change
  useEffect(() => {
    cardRefs.current = cardRefs.current.slice(0, entries.length);
  }, [entries.length]);

  // Scroll focused card into view
  const scrollToCard = useCallback(
    debounce((index: number) => {
      const card = cardRefs.current[index];
      if (card) {
        card.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
      }
    }, 100),
    []
  );

  // Handle keyboard navigation
  const handleKeyDown = useCallback((event: React.KeyboardEvent) => {
    const { key } = event;
    
    // Only handle specific keys for timeline navigation
    if (!['ArrowUp', 'ArrowDown', 'Enter', ' ', 'Escape', 'Home', 'End'].includes(key)) {
      return;
    }

    event.preventDefault();
    
    setState(prev => {
      const newState = {
        ...prev,
        isKeyboardNavigating: true,
        lastInteractionType: 'keyboard' as const
      };

      switch (key) {
        case 'ArrowUp': {
          const newIndex = Math.max(0, prev.focusedIndex - 1);
          newState.focusedIndex = newIndex;
          scrollToCard(newIndex);
          break;
        }
        
        case 'ArrowDown': {
          const newIndex = Math.min(entries.length - 1, prev.focusedIndex + 1);
          newState.focusedIndex = newIndex;
          scrollToCard(newIndex);
          break;
        }
        
        case 'Home': {
          newState.focusedIndex = 0;
          scrollToCard(0);
          break;
        }
        
        case 'End': {
          const lastIndex = entries.length - 1;
          newState.focusedIndex = lastIndex;
          scrollToCard(lastIndex);
          break;
        }
        
        case 'Enter':
        case ' ': {
          if (prev.focusedIndex >= 0 && prev.focusedIndex < entries.length) {
            newState.activeIndex = prev.focusedIndex;
            const entry = entries[prev.focusedIndex];
            if (entry && onEntrySelect) {
              onEntrySelect(entry);
            }
          }
          break;
        }
        
        case 'Escape': {
          newState.activeIndex = null;
          newState.focusedIndex = -1;
          newState.isKeyboardNavigating = false;
          break;
        }
      }

      return newState;
    });
  }, [entries, onEntrySelect, scrollToCard]);

  // Handle card click
  const handleCardClick = useCallback((entry: TimelineEntry, index: number) => {
    setState(prev => ({
      ...prev,
      activeIndex: index,
      focusedIndex: index,
      lastInteractionType: 'mouse'
    }));
    
    if (onEntrySelect) {
      onEntrySelect(entry);
    }
  }, [onEntrySelect]);

  // Handle card focus (mouse hover or keyboard focus)
  const handleCardFocus = useCallback((index: number) => {
    setState(prev => ({
      ...prev,
      focusedIndex: index
    }));
  }, []);

  // Handle individual card keyboard events
  const handleCardKeyDown = useCallback((event: React.KeyboardEvent, index: number) => {
    // Let the timeline handle navigation
    handleKeyDown(event);
  }, [handleKeyDown]);

  // Initialize keyboard navigation when timeline receives focus
  const handleTimelineFocus = useCallback(() => {
    setState(prev => ({
      ...prev,
      focusedIndex: prev.focusedIndex >= 0 ? prev.focusedIndex : 0,
      isKeyboardNavigating: true,
      lastInteractionType: 'keyboard'
    }));
  }, []);

  // Clear keyboard navigation state when clicking outside
  const handleTimelineBlur = useCallback((event: React.FocusEvent) => {
    // Only clear if focus is moving outside the timeline
    if (!timelineRef.current?.contains(event.relatedTarget as Node)) {
      setState(prev => ({
        ...prev,
        focusedIndex: -1,
        isKeyboardNavigating: false
      }));
    }
  }, []);

  // Mouse interaction handlers
  const handleMouseEnter = useCallback(() => {
    setState(prev => ({
      ...prev,
      lastInteractionType: 'mouse'
    }));
  }, []);

  // Generate timeline rail nodes
  const renderTimelineRail = () => {
    return (
      <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-slate-600 via-slate-500 to-slate-600">
        {entries.map((entry, index) => {
          const isFocused = state.focusedIndex === index;
          const isActive = state.activeIndex === index;
          
          return (
            <div
              key={entry.slug}
              className="absolute left-1/2 transform -translate-x-1/2"
              style={{ top: `${(index + 0.5) * (100 / entries.length)}%` }}
            >
              <div
                className={`w-3 h-3 rounded-full border-2 transition-all duration-200 ${
                  isActive
                    ? 'bg-tui-green border-tui-green shadow-lg shadow-tui-green/50'
                    : isFocused
                    ? 'bg-tui-cyan border-tui-cyan shadow-md shadow-tui-cyan/30'
                    : entry.type === 'work'
                    ? 'bg-slate-700 border-tui-green/40 hover:border-tui-green/60'
                    : 'bg-slate-700 border-tui-amber/40 hover:border-tui-amber/60'
                }`}
              />
              
              {/* Node glow effect */}
              {(isFocused || isActive) && (
                <div
                  className={`absolute inset-0 w-3 h-3 rounded-full animate-pulse ${
                    isActive ? 'bg-tui-green/20' : 'bg-tui-cyan/20'
                  }`}
                />
              )}
            </div>
          );
        })}
      </div>
    );
  };

  const timelineClasses = [
    'relative w-full',
    'focus:outline-none',
    className
  ].join(' ');

  return (
    <div
      ref={timelineRef}
      className={timelineClasses}
      onKeyDown={handleKeyDown}
      onFocus={handleTimelineFocus}
      onBlur={handleTimelineBlur}
      onMouseEnter={handleMouseEnter}
      tabIndex={0}
      role="region"
      aria-label="Professional timeline with keyboard navigation. Use arrow keys to navigate, Enter to view details."
    >
      {/* Timeline Rail */}
      {renderTimelineRail()}
      
      {/* Timeline Cards */}
      <div className="pl-16 space-y-8">
        {entries.map((entry, index) => (
          <div
            key={entry.slug}
            ref={(el) => { cardRefs.current[index] = el; }}
            className="relative"
          >
            <EntryCard
              entry={entry}
              isActive={state.activeIndex === index}
              isFocused={state.focusedIndex === index}
              onClick={() => handleCardClick(entry, index)}
              onFocus={() => handleCardFocus(index)}
              onKeyDown={(event) => handleCardKeyDown(event, index)}
            />
            
            {/* Connection line from rail to card */}
            <div
              className={`absolute left-[-2.5rem] top-6 w-6 h-px transition-colors duration-200 ${
                state.focusedIndex === index
                  ? 'bg-tui-cyan'
                  : entry.type === 'work'
                  ? 'bg-tui-green/30'
                  : 'bg-tui-amber/30'
              }`}
            />
          </div>
        ))}
      </div>

      {/* Keyboard navigation instructions */}
      <div className="mt-8 p-4 border border-slate-700/50 rounded-lg bg-slate-900/30">
        <div className="text-xs text-slate-500 font-mono space-y-1">
          <div className="flex items-center justify-between">
            <span>Keyboard Navigation:</span>
            <span className={state.isKeyboardNavigating ? 'text-tui-green' : 'text-slate-600'}>
              {state.isKeyboardNavigating ? 'Active' : 'Inactive'}
            </span>
          </div>
          <div className="flex flex-wrap gap-4 text-slate-400">
            <span><kbd className="text-tui-cyan">↑↓</kbd> Navigate</span>
            <span><kbd className="text-tui-cyan">Enter</kbd> Select</span>
            <span><kbd className="text-tui-cyan">Home/End</kbd> Jump</span>
            <span><kbd className="text-tui-cyan">Esc</kbd> Reset</span>
          </div>
        </div>
      </div>

      {/* Debug info (development only) */}
      {process.env.NODE_ENV === 'development' && (
        <div className="mt-4 p-3 border border-slate-700/30 rounded text-xs font-mono text-slate-600">
          <div>Focused: {state.focusedIndex} | Active: {state.activeIndex} | 
               Navigation: {state.lastInteractionType} | 
               Entries: {entries.length}</div>
        </div>
      )}
    </div>
  );
};
