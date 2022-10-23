function isEven(number){
    
    if(number > 1){
        return isEven(number - 2)
    }

    if(number == 0){
        return true;
    }

    return false
}

console.log(isEven(11));