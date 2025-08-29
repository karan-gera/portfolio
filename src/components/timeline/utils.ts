import type { FormattedDate, Duration } from './types';

/**
 * Format a YYYY-MM date string for display
 */
export function formatDate(dateString: string): FormattedDate {
  const [year, month] = dateString.split('-');
  const date = new Date(parseInt(year), parseInt(month) - 1);
  
  return {
    display: date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short' 
    }),
    iso: dateString
  };
}

/**
 * Calculate duration between two dates
 */
export function calculateDuration(start: string, end: string | null): Duration {
  const startDate = new Date(start + '-01');
  const endDate = end ? new Date(end + '-01') : new Date();
  
  const diffTime = endDate.getTime() - startDate.getTime();
  const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30.44)); // Average month length
  
  const years = Math.floor(diffMonths / 12);
  const months = diffMonths % 12;
  
  let display: string;
  if (diffMonths < 12) {
    display = `${diffMonths} mo${diffMonths !== 1 ? 's' : ''}`;
  } else if (months === 0) {
    display = `${years} yr${years !== 1 ? 's' : ''}`;
  } else {
    display = `${years}y ${months}m`;
  }
  
  return {
    months: diffMonths,
    years,
    display
  };
}

/**
 * Format a list of tags for display with truncation
 */
export function formatTags(tags: string[], maxTags: number = 4): {
  visible: string[];
  overflow: number;
} {
  return {
    visible: tags.slice(0, maxTags),
    overflow: Math.max(0, tags.length - maxTags)
  };
}

/**
 * Generate aria-label for entry cards
 */
export function generateEntryAriaLabel(entry: {
  title: string;
  type: string;
  org?: string;
  start: string;
  end: string | null;
}): string {
  const duration = calculateDuration(entry.start, entry.end);
  const organization = entry.org ? ` at ${entry.org}` : '';
  const timeframe = entry.end ? `from ${entry.start} to ${entry.end}` : `since ${entry.start}`;
  
  return `${entry.title}${organization}, ${entry.type}, ${timeframe}, duration ${duration.display}`;
}

/**
 * Debounce function for performance optimization
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}
