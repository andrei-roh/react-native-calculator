export const getDisplayingValue = (value: string): string => {
  if (value.slice(-1) === '.') {
    return value.length === 1 ? '0,' : `${parseFloat(value)},`;
  }

  if (value.slice(-2) === '.0') {
    return `${parseFloat(value)},0`;
  }

  if (value.indexOf('.') !== -1) {
    return `${value.replace('.', ',')}`;
  }

  return value.toLocaleString();
};
