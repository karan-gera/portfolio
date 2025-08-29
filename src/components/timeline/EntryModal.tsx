import React, { useState, useEffect, useRef, useCallback } from 'react';
import { X, ExternalLink, AlertCircle, Loader2 } from 'lucide-react';
import type { EntryModalProps, ModalState } from './types';
import { 
  fetchEntryHTML, 
  extractEntryContent, 
  trapFocus, 
  lockScroll, 
  unlockScroll,
  formatDate,
  calculateDuration
} from './utils';

export const EntryModal: React.FC<EntryModalProps> = ({
  isOpen,
  entry,
  onClose,
  className = ''
}) => {
  const [modalState, setModalState] = useState<ModalState>({
    isLoading: false,
    content: null,
    error: null,
    lastFetchedSlug: null
  });

  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  // Fetch entry content when modal opens or entry changes
  useEffect(() => {
    if (!isOpen || !entry) {
      setModalState(prev => ({ ...prev, content: null, error: null }));
      return;
    }

    // Skip fetch if we already have this content
    if (modalState.lastFetchedSlug === entry.slug && modalState.content) {
      return;
    }

    const fetchContent = async () => {
      setModalState(prev => ({ 
        ...prev, 
        isLoading: true, 
        error: null 
      }));

      try {
        const html = await fetchEntryHTML(entry.slug);
        const content = extractEntryContent(html);
        
        setModalState({
          isLoading: false,
          content,
          error: null,
          lastFetchedSlug: entry.slug
        });
      } catch (error) {
        console.error('Failed to fetch entry content:', error);
        setModalState({
          isLoading: false,
          content: null,
          error: error instanceof Error ? error.message : 'Failed to load entry',
          lastFetchedSlug: entry.slug
        });
      }
    };

    fetchContent();
  }, [isOpen, entry, modalState.lastFetchedSlug, modalState.content]);

  // Handle scroll lock and focus management
  useEffect(() => {
    if (isOpen) {
      // Store the currently focused element
      previousActiveElement.current = document.activeElement as HTMLElement;
      
      // Lock scroll
      lockScroll();
      
      // Focus the close button when modal opens
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 100);
    } else {
      // Unlock scroll
      unlockScroll();
      
      // Restore focus to the previously focused element
      if (previousActiveElement.current) {
        previousActiveElement.current.focus();
      }
    }

    return () => {
      if (isOpen) {
        unlockScroll();
      }
    };
  }, [isOpen]);

  // Handle keyboard events (ESC to close, Tab trapping)
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (!isOpen) return;

    if (event.key === 'Escape') {
      event.preventDefault();
      onClose();
    }

    if (event.key === 'Tab' && modalRef.current) {
      trapFocus(event, modalRef.current);
    }
  }, [isOpen, onClose]);

  // Add/remove keyboard event listeners
  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  // Handle backdrop click
  const handleBackdropClick = useCallback((event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  }, [onClose]);

  // Handle view full page
  const handleViewFullPage = useCallback(() => {
    if (entry) {
      window.location.href = `/entry/${entry.slug}`;
    }
  }, [entry]);

  if (!isOpen || !entry) {
    return null;
  }

  const startDate = formatDate(entry.start);
  const endDate = entry.end ? formatDate(entry.end) : null;
  const duration = calculateDuration(entry.start, entry.end);

  const baseClasses = [
    'fixed inset-0 z-50 flex items-center justify-center p-4',
    'bg-black/75 backdrop-blur-sm',
    className
  ].join(' ');

  const modalClasses = [
    'relative w-full max-w-4xl max-h-[90vh] overflow-hidden',
    'bg-tui-panel border border-gray-600 rounded-lg shadow-2xl',
    'flex flex-col',
    'transform transition-all duration-200 ease-out',
    'animate-in zoom-in-95 fade-in duration-200'
  ].join(' ');

  return (
    <div
      className={baseClasses}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <div
        ref={modalRef}
        className={modalClasses}
      >
        {/* Header */}
        <div className="flex items-start justify-between p-6 border-b border-gray-700">
          <div className="flex-1 min-w-0">
            <div className="mb-2">
              <span
                className={`inline-flex items-center px-2 py-1 rounded text-xs font-mono font-medium ${
                  entry.type === 'work'
                    ? 'bg-tui-green/20 text-tui-green border border-tui-green/30'
                    : 'bg-tui-amber/20 text-tui-amber border border-tui-amber/30'
                }`}
              >
                {entry.type === 'work' ? 'WORK EXPERIENCE' : 'PROJECT'}
              </span>
            </div>
            
            <h2 id="modal-title" className="font-mono text-2xl font-medium text-white mb-2">
              {entry.title}
            </h2>
            
            {entry.role && (
              <p className="text-lg text-tui-cyan mb-2">{entry.role}</p>
            )}
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300">
              {entry.org && <span>{entry.org}</span>}
              {entry.location && <span>• {entry.location}</span>}
              <span>• {startDate.display} - {endDate?.display || 'Present'} ({duration.display})</span>
            </div>
          </div>
          
          <button
            ref={closeButtonRef}
            onClick={onClose}
            className="ml-4 p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700/50 focus:outline-none focus:ring-2 focus:ring-tui-green"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          {modalState.isLoading && (
            <div className="flex items-center justify-center h-64">
              <div className="flex items-center space-x-3 text-tui-cyan">
                <Loader2 className="w-6 h-6 animate-spin" />
                <span className="font-mono">Loading content...</span>
              </div>
            </div>
          )}

          {modalState.error && (
            <div className="p-6">
              <div className="flex items-center space-x-3 p-4 bg-red-900/20 border border-red-500/30 rounded-lg">
                <AlertCircle className="w-6 h-6 text-red-400 flex-shrink-0" />
                <div>
                  <p className="font-mono text-red-400 mb-1">Failed to load content</p>
                  <p className="text-sm text-red-300">{modalState.error}</p>
                  <button
                    onClick={handleViewFullPage}
                    className="mt-2 text-sm text-tui-cyan hover:text-tui-green underline"
                  >
                    View full page instead →
                  </button>
                </div>
              </div>
            </div>
          )}

          {modalState.content && !modalState.isLoading && (
            <div className="p-6">
              {/* Summary */}
              <div className="mb-6 p-4 bg-tui-bg/50 border border-gray-700 rounded-lg">
                <p id="modal-description" className="text-gray-300 leading-relaxed">
                  {entry.summary}
                </p>
              </div>

              {/* Dynamic Content */}
              <div 
                className="prose prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: modalState.content }}
              />
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-gray-700 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {/* Tags Preview */}
              {entry.tags.length > 0 && (
                <div className="flex items-center space-x-2">
                  <span className="text-xs text-gray-500 font-mono">Technologies:</span>
                  <div className="flex flex-wrap gap-1">
                    {entry.tags.slice(0, 4).map(tag => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-2 py-1 rounded text-xs font-mono bg-slate-800/70 text-slate-300 border border-slate-600/50"
                      >
                        {tag}
                      </span>
                    ))}
                    {entry.tags.length > 4 && (
                      <span className="text-xs text-gray-500">+{entry.tags.length - 4} more</span>
                    )}
                  </div>
                </div>
              )}
            </div>

            <div className="flex items-center space-x-3">
              <button
                onClick={handleViewFullPage}
                className="inline-flex items-center space-x-2 px-4 py-2 bg-tui-green/20 border border-tui-green rounded font-mono text-sm text-tui-green hover:bg-tui-green/30 transition-colors focus:outline-none focus:ring-2 focus:ring-tui-green"
              >
                <ExternalLink className="w-4 h-4" />
                <span>View Full Page</span>
              </button>
              
              <button
                onClick={onClose}
                className="px-4 py-2 bg-gray-700/50 border border-gray-600 rounded font-mono text-sm text-gray-300 hover:bg-gray-600/50 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
