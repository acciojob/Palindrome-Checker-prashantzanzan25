// complete the given function

function palindrome(str){
	str = str.toLowerCase();
	
	str = str.replace(/[^a-z0-9]/g, '');

    let start = 0;
    let end = str.length - 1;

    while (start < end) {
        if (str[start] !== str[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
}
module.exports = palindrome
