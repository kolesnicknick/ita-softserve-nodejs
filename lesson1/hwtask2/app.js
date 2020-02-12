function sortWordsInString(str) {
    let findNumberInWord = function(word){
        return word.split('').find(i => (i >= '0' && i <= '9'));
    };

    console.log(findNumberInWord("Thi1s"));
    const initial = str.split(' ');
    let final = [];
    initial.forEach(i => { final[findNumberInWord(i) - 1] = i; });

    return final.join(' ');
}

console.log(sortWordsInString("is2 Thi1s T4est 3a"));
