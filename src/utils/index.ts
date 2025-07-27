import { ImageSourcePropType } from "react-native";

/**
 * Format a date string to `dd MMM yyyy` format.
 * Example: "2025-06-06" => "06 Jun 2025"
 */
export const formatDateToDayMonthYear = (dateString: string): string => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = date.toLocaleString('en-US', { month: 'short' });
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
};

/**
 * Format a date string to `dd/mm/yyyy` format.
 * Example: "2025-06-06" => "06/06/2025"
 */
export const formatDateToDMYSlash = (dateStr: string): string => {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // 0-indexed
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};


export const getYearFromDate = (dateStr: string): string => {
  if (!dateStr) return '';
  return dateStr.split('-')[0];
};

export const getImageSource = (
  path: string | null | undefined,
  fallback: ImageSourcePropType
): ImageSourcePropType | { uri: string } => {
  return path ? { uri: path } : fallback;
};

export const isShallowDifferent = (a?: any, b?: any) => {
  if (!a || !b) return true; // if either is null or undefined
  
  const aKeys = Object.keys(a);
  const bKeys = Object.keys(b);

  if (aKeys.length !== bKeys.length) return true;

  return aKeys.some((key) => a[key] !== b[key]);
};
