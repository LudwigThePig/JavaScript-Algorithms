/**
 * @param {string}
 * @return {number}
 * 
 * Given a string, find the length of the longest substring without repeating characters.

    Example 1:

    Input: "abcabcbb"
    Output: 3 
    Explanation: The answer is "abc", with the length of 3. 
 */

/*
APPROACH:
    -Declare a counter, 'longestStr', and an empty string, 'currStr'. 
    -Loop through each character in the string
        -With each character, we will see if that character matches any other characters in 'curStr'.
        -If not match, we will add that character to 'curStr'
        -If match, we will compare the length of 'curStr' with 'longestStr'. The larger value will be assigned to 'longestStr'
            -Then we will clear the string and add the current character
    When we finish looping through every character, the last 'curStr' will not have been compared to 'longestStr'. So, we compare those two values.
        We return the larger value.

Time complexity
O(n)


LeetCode Ranking
76ms
99.38%
*/
var lengthOfLongestSubstring = function(s) {
    let longestStr = 0;
    let curStr = "";
    for (let i = 0; i < s.length; i++){
        let match = curStr.indexOf(s[i]);
        if (match === -1){
            currStr += s[i];
        } else {
            longestStr = Math.max(longestStr, curStr.length);
            currStr = curStr.substr(match + 1) + s[i];
        }
    }
    longestStr = Math.max(longestStr, curStr.length)
    return longestStr;
};

/*
Walkthrough

s = apple

longestStr = 0;
curstr = "";

s[0] = a
no match
curstr = 'a'

s[1] = p
no match
curstr = 'ap'

s[2] = p
match = 1
longestStr = 2
curstr = 'p'

s[3] = l
no match
curstr = 'pl'

s[4] = e
no match
curstr = 'ple'

end of for loop

compare (longestStr, curstr.length)
    curstr.length is the larger value (3)
assign curstr.length to longeststr
return longest str

*/