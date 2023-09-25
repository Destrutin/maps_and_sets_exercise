// Quick Question #1 

// 1,2,3,4

// Quick Question #2

//"ref"

// Quick Question #3

// 0: {Array(3) => true}
// 1: {Array(3) => false}


const hasDuplicate = arr => new Set(arr).size !== arr.length

function vowelCount(str) {
    str = str.toLowerCase();
    const vowelsMapped = new Map();
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    for(let char of str) {
        if(vowels.includes(char)) {
            if(vowelsMapped.has(char)) {
                vowelsMapped.set(char, vowelsMapped.get(char) + 1);
            } else {
                vowelsMapped.set(char, 1);
            }
        }
    }
    return vowelsMapped;
}