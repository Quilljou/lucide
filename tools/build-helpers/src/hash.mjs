/**
 * djb2 hashing function
 *
 * @param {string} string
 * @param {number} seed
 * @returns {string} A hashed string of 6 characters
 */
export const hash = (string, seed = 5381) => {
  let i = string.length;

  while (i) {
    // eslint-disable-next-line no-bitwise, no-plusplus
    seed = (seed * 33) ^ string.charCodeAt(--i);
  }

  // eslint-disable-next-line no-bitwise
  return (seed >>> 0).toString(36).substr(0, 6);
};
