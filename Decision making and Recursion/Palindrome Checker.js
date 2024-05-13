function isPalindrome(str) {
    // Remove spaces, punctuation, and convert to lowercase
    str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    if (str.length <= 1) {
        return true;
    }

    if (str[0] !== str[str.length - 1]) {
        return false;
    }

    // Recursively check the substring excluding the first and last characters
    return isPalindrome(str.substring(1, str.length - 1));
}

// Example usage
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("race car")); // true
console.log(isPalindrome("hello")); // false
