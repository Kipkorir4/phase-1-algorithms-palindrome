function isPalindrome(str) {
  // Check if the string is empty or has only one character
  if (str.length <= 1) {
      return true;
  }

  // Convert the string to lowercase
  str = str.toLowerCase();

  // Initialize pointers for the start and end of the string
  let start = 0;
  let end = str.length - 1;

  // Iterate until the pointers meet
  while (start < end) {
      // If characters at start and end positions don't match, return false
      if (str[start] !== str[end]) {
          return false;
      }
      // Move pointers towards each other
      start++;
      end--;
  }

  // If the loop completes without returning false, the string is a palindrome
  return true;
}

module.exports = isPalindrome;
