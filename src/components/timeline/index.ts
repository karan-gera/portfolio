// Timeline component exports
export { Timeline } from './Timeline';
export { EntryCard } from './EntryCard';
export { EntryModal } from './EntryModal';
export { TimelineWrapper } from './TimelineWrapper';
export type { 
  TimelineProps, 
  TimelineEntry, 
  EntryCardProps,
  EntryModalProps,
  TimelineState,
  TimelineNavigation,
  ModalState
} from './types';
export { 
  formatDate, 
  calculateDuration, 
  formatTags, 
  generateEntryAriaLabel,
  getEntrySlugFromURL,
  setEntrySlugInURL,
  removeEntrySlugFromURL,
  fetchEntryHTML,
  extractEntryContent
} from './utils';
