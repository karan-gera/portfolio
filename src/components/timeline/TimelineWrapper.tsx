import React from 'react';
import { Timeline } from './Timeline';
import type { TimelineEntry } from './types';

interface TimelineWrapperProps {
  entries: TimelineEntry[];
}

export const TimelineWrapper: React.FC<TimelineWrapperProps> = ({ entries }) => {
  const handleEntrySelect = (entry: TimelineEntry) => {
    // Navigate to entry detail page
    window.location.href = `/entry/${entry.slug}`;
  };

  return (
    <Timeline
      entries={entries}
      onEntrySelect={handleEntrySelect}
      className="w-full"
    />
  );
};
