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

// Additional test cases
console.log(isPalindrome("")); // true (empty string is a palindrome)
console.log(isPalindrome("a")); // true (single character is a palindrome)
console.log(isPalindrome("Aibohphobia")); // true (case-insensitive palindrome)
console.log(isPalindrome("Step on no pets")); // true (ignores spaces)
console.log(isPalindrome("Was it a car or a cat I saw")); // true (ignores spaces and punctuation)
console.log(isPalindrome("Palindrome")); // false (non-palindrome)
console.log(isPalindrome("12321")); // false (only alphabetic characters are considered)
