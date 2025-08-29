import React from 'react';
import { Calendar, MapPin, Users, ExternalLink } from 'lucide-react';
import type { EntryCardProps } from './types';
import { formatDate, calculateDuration, formatTags, generateEntryAriaLabel } from './utils';

export const EntryCard: React.FC<EntryCardProps> = ({
  entry,
  isActive,
  isFocused,
  onClick,
  onFocus,
  onKeyDown,
  className = ''
}) => {
  const startDate = formatDate(entry.start);
  const endDate = entry.end ? formatDate(entry.end) : null;
  const duration = calculateDuration(entry.start, entry.end);
  const { visible: visibleTags, overflow: overflowCount } = formatTags(entry.tags, 3);
  const ariaLabel = generateEntryAriaLabel(entry);

  const baseClasses = [
    // Layout and spacing
    'relative flex flex-col p-6 rounded-lg transition-all duration-200',
    // Base styling
    'bg-slate-900/50 border border-slate-700/50',
    // Interactive states
    'cursor-pointer select-none',
    // Focus and hover states
    'focus:outline-none focus:ring-2 focus:ring-tui-green/50 focus:border-tui-green/50',
    'hover:bg-slate-800/50 hover:border-slate-600/70',
    // Animation
    'transform-gpu',
    className
  ];

  const activeClasses = isActive ? [
    'bg-slate-800/70 border-tui-green/30',
    'shadow-lg shadow-tui-green/10'
  ] : [];

  const focusedClasses = isFocused ? [
    'ring-2 ring-tui-green/50 border-tui-green/50',
    'scale-[1.02] shadow-xl shadow-tui-green/20'
  ] : [];

  const typeClasses = entry.type === 'work' 
    ? 'border-l-4 border-l-tui-green/60' 
    : 'border-l-4 border-l-tui-amber/60';

  const allClasses = [
    ...baseClasses,
    ...activeClasses,
    ...focusedClasses,
    typeClasses
  ].join(' ');

  return (
    <div
      className={allClasses}
      onClick={onClick}
      onFocus={onFocus}
      onKeyDown={onKeyDown}
      tabIndex={0}
      role="button"
      aria-label={ariaLabel}
      aria-pressed={isActive}
      data-entry-slug={entry.slug}
    >
      {/* Header Section */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1 min-w-0">
          {/* Type Badge */}
          <div className="mb-2">
            <span
              className={`inline-flex items-center px-2 py-1 rounded text-xs font-mono font-medium ${
                entry.type === 'work'
                  ? 'bg-tui-green/20 text-tui-green border border-tui-green/30'
                  : 'bg-tui-amber/20 text-tui-amber border border-tui-amber/30'
              }`}
            >
              {entry.type === 'work' ? 'WORK' : 'PROJECT'}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-mono text-lg font-medium text-white mb-1 leading-tight">
            {entry.title}
          </h3>

          {/* Role and Organization */}
          {(entry.role || entry.org) && (
            <div className="flex flex-wrap items-center gap-2 mb-2 text-sm">
              {entry.role && (
                <span className="text-tui-cyan font-medium">{entry.role}</span>
              )}
              {entry.org && (
                <div className="flex items-center gap-1 text-slate-300">
                  <Users className="w-3 h-3" />
                  <span>{entry.org}</span>
                </div>
              )}
              {entry.location && (
                <div className="flex items-center gap-1 text-slate-400">
                  <MapPin className="w-3 h-3" />
                  <span className="text-xs">{entry.location}</span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Featured indicator */}
        {entry.featured && (
          <div className="flex-shrink-0 ml-3">
            <div className="w-2 h-2 bg-tui-amber rounded-full animate-pulse" 
                 title="Featured entry" />
          </div>
        )}
      </div>

      {/* Timeline Section */}
      <div className="flex items-center gap-2 mb-3 text-sm font-mono text-slate-300">
        <Calendar className="w-4 h-4 text-slate-400" />
        <span>
          {startDate.display} - {endDate?.display || 'Present'}
        </span>
        <span className="text-slate-500">({duration.display})</span>
      </div>

      {/* Summary */}
      <p className="text-slate-300 text-sm leading-relaxed mb-4 line-clamp-3">
        {entry.summary}
      </p>

      {/* Tags Section */}
      {entry.tags.length > 0 && (
        <div className="flex flex-wrap items-center gap-1 mb-3">
          {visibleTags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center px-2 py-1 rounded text-xs font-mono bg-slate-800/70 text-slate-300 border border-slate-600/50"
            >
              {tag}
            </span>
          ))}
          {overflowCount > 0 && (
            <span className="inline-flex items-center px-2 py-1 rounded text-xs font-mono text-slate-500">
              +{overflowCount} more
            </span>
          )}
        </div>
      )}

      {/* Footer Section */}
      <div className="flex items-center justify-between pt-3 border-t border-slate-700/50">
        {/* Metrics indicator */}
        <div className="flex items-center gap-3 text-xs text-slate-500">
          {entry.metrics.length > 0 && (
            <span>{entry.metrics.length} metric{entry.metrics.length !== 1 ? 's' : ''}</span>
          )}
          {entry.links.length > 0 && (
            <div className="flex items-center gap-1">
              <ExternalLink className="w-3 h-3" />
              <span>{entry.links.length} link{entry.links.length !== 1 ? 's' : ''}</span>
            </div>
          )}
        </div>

        {/* Action hint */}
        <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
          <span className="hidden sm:inline">
            {isFocused ? 'Press Enter to view' : 'Click to view'}
          </span>
          <span className="text-tui-cyan">→</span>
        </div>
      </div>

      {/* Accessibility enhancement: Screen reader content */}
      <div className="sr-only">
        Press Enter or Space to view details for {entry.title}.
        {entry.summary}
        Technologies: {entry.tags.join(', ')}.
        {entry.metrics.length > 0 && `${entry.metrics.length} key metrics available.`}
      </div>
    </div>
  );
};
