/*************************************************
 *     XP GOLD EXERCICE
 * ------------------------------------
 * @author MELISSA KOUADIO <angemelisk@gmail.com>
 * @link <https://github.com/DiamondArt>
 * 
 * ***********************************************/


/**********************************************
 * Exercise 1 : Is_Blank
 * 
 * @function isBlank
 * @description: check if string is blank or not
 * @param: <string>
 * @returns boolean
 *******************************************/
function isBlank(str){

    if(str.length > 0) {
        return false;
    } else {
        return true;
    }
}
console.log(isBlank(""))
console.log(isBlank("hello"))

/*******************************************************************
 * Exercise 2 : Abbrev_name
 * 
 * @function abbrevName
 * @description: Write a JavaScript function to convert a string into an abbreviated form.
 * @param: <string>
 * @returns string
 *********************************************************************/
function abbrevName(str){
    var nameArr = str.trim().split(" ");
    if (nameArr.length > 1) {
        return (nameArr[0] + " " + nameArr[1].charAt(0) + ".");
    }
    return nameArr[0]; 
}
console.log(abbrevName("Robin Singh"));

/*******************************************************************
 * Exercise 3 : SwapCase
 * 
 * @function SwapCase
 * @param <string>
 * @description:Write a JavaScript function which takes a string as an argument and swaps the case of each character.
 *********************************************************************/
function SwapCase(sentence){
    var sentenceArr = sentence.trim().split(" ")
    for(const text in sentence.trim()) {
        let textArr = sentence[text]
        sentence[text] == sentence[text].toUpperCase() ? console.log(true) : console.log(false)
        // text.charAt(0) == text.charAt(0)
       
        console.log(text+"indexe = "+sentence[text]);
    }
    console.log(sentenceArr);
}
SwapCase("The Quick Brown Fox")

/*******************************************************************
 * Exercise 4 : Omnipresent Value
 * 
 * @function SwapCase
 * @param <string>
 * @description:Write a JavaScript function which takes a string as an argument and swaps the case of each character.
 *********************************************************************/

