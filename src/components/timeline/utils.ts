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

/**
 * URL parameter management for modal deep linking
 */
export function getEntrySlugFromURL(): string | null {
  if (typeof window === 'undefined') return null;
  const params = new URLSearchParams(window.location.search);
  return params.get('e');
}

export function setEntrySlugInURL(slug: string): void {
  if (typeof window === 'undefined') return;
  const url = new URL(window.location.href);
  url.searchParams.set('e', slug);
  window.history.pushState({}, '', url.toString());
}

export function removeEntrySlugFromURL(): void {
  if (typeof window === 'undefined') return;
  const url = new URL(window.location.href);
  url.searchParams.delete('e');
  window.history.pushState({}, '', url.toString());
}

/**
 * Fetch pre-rendered entry HTML from static route
 */
export async function fetchEntryHTML(slug: string): Promise<string> {
  const response = await fetch(`/entry/${slug}/`);
  
  if (!response.ok) {
    throw new Error(`Failed to fetch entry: ${response.status} ${response.statusText}`);
  }
  
  const html = await response.text();
  return html;
}

/**
 * Extract main content from static entry HTML
 */
export function extractEntryContent(html: string): string {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  
  // Find the main content area (article with prose class)
  const articleContent = doc.querySelector('article.prose');
  if (articleContent) {
    return articleContent.innerHTML;
  }
  
  // Fallback: find main tag content
  const mainContent = doc.querySelector('main');
  if (mainContent) {
    return mainContent.innerHTML;
  }
  
  // Last resort: return the body content
  return doc.body.innerHTML;
}

/**
 * Focus trap utilities for modal accessibility
 */
export function getFocusableElements(container: HTMLElement): HTMLElement[] {
  const focusableSelectors = [
    'button',
    '[href]',
    'input',
    'select',
    'textarea',
    '[tabindex]:not([tabindex="-1"])',
    '[contenteditable]'
  ].join(', ');
  
  const elements = Array.from(container.querySelectorAll(focusableSelectors)) as HTMLElement[];
  return elements.filter(el => !el.hasAttribute('disabled') && !el.getAttribute('aria-hidden'));
}

export function trapFocus(event: KeyboardEvent, container: HTMLElement): void {
  if (event.key !== 'Tab') return;
  
  const focusableElements = getFocusableElements(container);
  if (focusableElements.length === 0) return;
  
  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];
  
  if (event.shiftKey) {
    // Shift + Tab: moving backwards
    if (document.activeElement === firstElement) {
      event.preventDefault();
      lastElement.focus();
    }
  } else {
    // Tab: moving forwards
    if (document.activeElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
    }
  }
}

/**
 * Scroll lock utilities to prevent background scrolling
 */
export function lockScroll(): void {
  if (typeof document === 'undefined') return;
  
  // Store the current scroll position
  const scrollY = window.scrollY;
  document.body.style.position = 'fixed';
  document.body.style.top = `-${scrollY}px`;
  document.body.style.width = '100%';
  document.body.dataset.scrollY = scrollY.toString();
}

export function unlockScroll(): void {
  if (typeof document === 'undefined') return;
  
  const scrollY = document.body.dataset.scrollY;
  document.body.style.position = '';
  document.body.style.top = '';
  document.body.style.width = '';
  
  if (scrollY) {
    window.scrollTo(0, parseInt(scrollY));
    delete document.body.dataset.scrollY;
  }
}
