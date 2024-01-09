export const getDisplayingValue = (value: string): string => {
  if (value.slice(-1) === '.') {
    if (value.length === 1) {
      return '0,';
    }
    return `${parseFloat(value)},`;
  }

  if (value.slice(-2) === '.0') {
    return `${parseFloat(value)},0`;
  }

  if (value.indexOf('.') !== -1) {
    return `${value.replace('.', ',')}`;
  }

  return parseFloat(value).toLocaleString();
};
