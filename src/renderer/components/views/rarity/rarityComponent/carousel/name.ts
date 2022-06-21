export const getName = (value: string): string => {
  if (value !== undefined) {
    var parts = value.split("/");
    var result = parts[parts.length - 1]; // Or parts.pop();
    var second = result.replace("-", " ");
    return second.replace('.png', '').toLocaleUpperCase();
  }
  return "";
};

export const getRarityName = (value: string): string => {
  if (value === undefined) return "";
  var parts = value.split("/");
  var result = parts[parts.length - 2]; // Or parts.pop();

  return result.replace('.png', '').toLowerCase();
};
