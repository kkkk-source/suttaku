import { format } from 'date-fns';

// Convert title from the form `Sample Title` to the form `sample-title`
export function formatTitle(title: string): string {
  return title.trim().replace(/\s+/g, '-').toLowerCase();
}

export function formateDate(date: string) {
  return format(new Date(date), 'MMM dd, yyy');
}

export function getYearOf(date: string) {
  return format(new Date(date), 'yyyy');
}
