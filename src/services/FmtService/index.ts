import { format } from 'date-fns';

// Convert title from the form `Sample Title` to the form `sample-title`
export function fmtTitle(title: string): string {
  return title.trim().replace(/\s+/g, '-').toLowerCase();
}

export function fmtDate(date: string) {
  return format(new Date(date), 'MMM dd, yyy');
}
