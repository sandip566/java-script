function longestConsecutive(nums) {
    if (nums.length === 0) return 0;

    let numSet = new Set(nums);
    let maxLength = 0;

    for (let num of numSet) {
        if (!numSet.has(num - 1)) { // Check if num is the start of a sequence
            let currentNum = num;
            let currentLength = 1;

            while (numSet.has(currentNum + 1)) { // Count the length of the sequence
                currentNum++;
                currentLength++;
            }

            maxLength = Math.max(maxLength, currentLength); // Update maxLength
        }
    }

    return maxLength;
}

// Test cases
console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // Output: 4 (sequence: 1, 2, 3, 4)
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])); // Output: 9 (sequence: 0, 1, 2, 3, 4, 5, 6, 7, 8)
console.log(longestConsecutive([])); 