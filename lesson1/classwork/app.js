let nextVersion = function (currentversion) {
    let current = [];

    function increment(int, isFirst = false) {
        int = parseInt(int);
        return isFirst ? int++ : (int === 9 ? 0 : int+1);
    };

    current = currentversion.split('.');

    let shouldProceed = true;
    for (let i = current.length-1; i > -1; i--){
        if(shouldProceed){
            current[i] = increment(current[i], i===0);
            if (current[i] ===0){shouldProceed=true}
            else {shouldProceed=false};
        }
    }

    let toReturn = '';
    toReturn = current.join(".");
    return toReturn;
};


console.log(nextVersion("1.2.3"));

console.log(nextVersion("0.9.9"));

console.log(nextVersion("1"));

console.log(nextVersion("1.2.3.4.5.6.7.8"));

console.log(nextVersion("9.9"));
