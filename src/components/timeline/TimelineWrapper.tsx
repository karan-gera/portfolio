import React, { useState, useEffect, useCallback } from 'react';
import { Timeline } from './Timeline';
import { EntryModal } from './EntryModal';
import type { TimelineEntry } from './types';
import { 
  getEntrySlugFromURL, 
  setEntrySlugInURL, 
  removeEntrySlugFromURL 
} from './utils';

interface TimelineWrapperProps {
  entries: TimelineEntry[];
}

export const TimelineWrapper: React.FC<TimelineWrapperProps> = ({ entries }) => {
  const [selectedEntry, setSelectedEntry] = useState<TimelineEntry | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle entry selection from timeline
  const handleEntrySelect = useCallback((entry: TimelineEntry) => {
    setSelectedEntry(entry);
    setIsModalOpen(true);
    setEntrySlugInURL(entry.slug);
  }, []);

  // Handle modal close
  const handleModalClose = useCallback(() => {
    setIsModalOpen(false);
    setSelectedEntry(null);
    removeEntrySlugFromURL();
  }, []);

  // Handle browser back/forward navigation
  const handlePopState = useCallback(() => {
    const slugFromURL = getEntrySlugFromURL();
    
    if (slugFromURL) {
      const entry = entries.find(e => e.slug === slugFromURL);
      if (entry) {
        setSelectedEntry(entry);
        setIsModalOpen(true);
      }
    } else {
      setIsModalOpen(false);
      setSelectedEntry(null);
    }
  }, [entries]);

  // Check URL on mount and set up popstate listener
  useEffect(() => {
    // Check for entry slug in URL on page load
    const slugFromURL = getEntrySlugFromURL();
    if (slugFromURL) {
      const entry = entries.find(e => e.slug === slugFromURL);
      if (entry) {
        setSelectedEntry(entry);
        setIsModalOpen(true);
      } else {
        // Invalid slug in URL, remove it
        removeEntrySlugFromURL();
      }
    }

    // Listen for browser navigation
    window.addEventListener('popstate', handlePopState);
    
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [entries, handlePopState]);

  return (
    <>
      <Timeline
        entries={entries}
        onEntrySelect={handleEntrySelect}
        className="w-full"
      />
      
      <EntryModal
        isOpen={isModalOpen}
        entry={selectedEntry}
        onClose={handleModalClose}
      />
    </>
  );
};
