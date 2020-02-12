function countOfOnes(decimal) {

    function numberOfCharInWord(word, char){
        return word.split('').filter(i => i===char).length;
    }

    return numberOfCharInWord((decimal).toString(2), '1');
}


console.log(countOfOnes(1234));
