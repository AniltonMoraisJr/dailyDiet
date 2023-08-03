export function timeMask(value: string | null | undefined) {
  if (!value) {
    return undefined;
  }
  const newValue = value.replaceAll(/[^0-9 ]/g, "").slice(0, 4);
  if (newValue.length >= 4) {
    return `${newValue.slice(0, 2)}:${newValue.slice(2, 4)}`;
  } else if (newValue.length >= 3) {
    return `${newValue.slice(0, 2)}:${newValue.slice(2)}`;
  }
  return newValue;
}
