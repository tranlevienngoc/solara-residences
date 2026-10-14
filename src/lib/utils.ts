export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function padZero(num: number): string {
  return num < 10 ? `0${num}` : `${num}`;
}
