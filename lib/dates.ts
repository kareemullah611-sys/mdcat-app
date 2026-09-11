export function currentDate(): Date {
  return new Date();
}

export function daysAgo(days: number): Date {
  return new Date(currentDate().getTime() - days * 24 * 60 * 60 * 1000);
}