export function getLabelByValue(
  arr: {
    label: string;
    value: string | number;
  }[],
  value: string | number
): string {
  const item = arr.find(item => item.value === value);
  return item ? item.label : "";
}
