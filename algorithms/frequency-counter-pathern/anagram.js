//given thow string, determine if the second string is anagram of the first
//anagram is another word with the same letters
const fnAnagram = (s1, s2) => {
    if(s1.length !== s2.length)return false;

    let frequencyS1 = {}
    let frequencyS2 = {}

    for (const val of s1) {
        frequencyS1[val] = (frequencyS1[val] || 0)+1;
    }
    for (const val of s2) {
        frequencyS2[val] = (frequencyS2[val] || 0)+1;
    }

    for(let key in frequencyS1) {
        if(!(key in frequencyS2)) return false;
        if(frequencyS2[key] !== frequencyS1[key]) return false;
    }
    return true;
}

console.log(fnAnagram('hit','thi'))