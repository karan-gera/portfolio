// Timeline component types and interfaces

export interface TimelineEntry {
  slug: string;
  type: 'project' | 'work';
  title: string;
  role?: string;
  org?: string;
  location?: string;
  start: string; // YYYY-MM format
  end: string | null; // YYYY-MM format or null for ongoing
  summary: string;
  tags: string[];
  links: Array<{
    label: string;
    url: string;
  }>;
  metrics: string[];
  images: {
    hero?: string;
    gallery: string[];
  };
  featured: boolean;
}

export interface TimelineProps {
  entries: TimelineEntry[];
  onEntrySelect?: (entry: TimelineEntry) => void;
  className?: string;
}

export interface EntryCardProps {
  entry: TimelineEntry;
  isActive: boolean;
  isFocused: boolean;
  onClick: () => void;
  onFocus: () => void;
  onKeyDown: (event: React.KeyboardEvent) => void;
  className?: string;
}

// Helper types for date formatting and duration calculation
export interface FormattedDate {
  display: string;
  iso: string;
}

export interface Duration {
  months: number;
  years: number;
  display: string;
}

// Navigation state for keyboard controls
export interface TimelineNavigation {
  focusedIndex: number;
  activeIndex: number | null;
}

// Animation and interaction states
export interface TimelineState extends TimelineNavigation {
  isKeyboardNavigating: boolean;
  lastInteractionType: 'mouse' | 'keyboard';
}

// Modal component types
export interface EntryModalProps {
  isOpen: boolean;
  entry: TimelineEntry | null;
  onClose: () => void;
  className?: string;
}

export interface ModalState {
  isLoading: boolean;
  content: string | null;
  error: string | null;
  lastFetchedSlug: string | null;
}

// URL synchronization
export interface URLParams {
  entrySlug?: string;
}

// Focus trap utilities
export interface FocusTrapElements {
  firstFocusable: HTMLElement | null;
  lastFocusable: HTMLElement | null;
  focusableElements: HTMLElement[];
}
