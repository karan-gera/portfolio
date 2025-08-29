// Timeline component exports
export { Timeline } from './Timeline';
export { EntryCard } from './EntryCard';
export { TimelineWrapper } from './TimelineWrapper';
export type { 
  TimelineProps, 
  TimelineEntry, 
  EntryCardProps,
  TimelineState,
  TimelineNavigation 
} from './types';
export { 
  formatDate, 
  calculateDuration, 
  formatTags, 
  generateEntryAriaLabel 
} from './utils';
