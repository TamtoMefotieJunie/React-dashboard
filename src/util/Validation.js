
export const MTNPhoneNumber = (tel) =>{
    const string = tel.substring(1,3);
    const number= parseInt(string);
    var isValid;
    if(tel.length != 9){
        isValid = false;
    }
    else {
     if(tel.substring(0,1) != 6){
        isValid = false;
    }
    else {
        if( number >= 50 && number <= 54)
        isValid=true;
        else if(number >= 70 && number <= 90)
        isValid = true;
    }
    }
    return isValid;
}


export const OrangePhoneNumber = (tel) =>{
    const integer = tel.substring(1,3);
    const number= parseInt(integer);
    var isValid;
    if(tel.length != 9){
        isValid=false;
    }
    else {
    if(tel.substring(0,1) != 6){
        isValid=false;
    }
    else {
        if( number >= 54 && number <= 58)
         isValid = true;
        else if(number >= 90 && number <= 99)
        isValid = true;
        else 
        isValid = false;
    }
    }
    return isValid;
}