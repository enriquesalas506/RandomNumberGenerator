
const ENGLISH_ALPHABET = "abcdefghijklmnopqrstuvwxyz"
const ENGLISH_ALPHABET_WITH_NUMBERS = "abcdefghijklmnopqrstuvwxyz0123456789"
const ENGLISH_ALPHABET_WITH_NUMBERS_AND_SYMBOLS = "abcdefghijklmnopqrstuvwxyz0123456789_-!@#$%^&*()+={[}]|:;<,>.?"



module.exports.random = () =>{

    return Math.random();
}
module.exports.randomNumberWithRange = (min,max) =>{

    return Math.random() * (max - min) + min;

}
module.exports.randomNumberWithRangeInteger = (min,max) =>{

    return Math.floor(Math.random() * (max - min) + min);

}

module.exports.randomStringLettersOnly = (length,capitalized) =>{

    let total = 0;
    let result = "";

    while (total < length) {

        let position = module.exports.randomNumberWithRangeInteger(0, ENGLISH_ALPHABET.length);
        let character = ENGLISH_ALPHABET.substr(position,1);

        result = result +character;


        total++;

    }


    if (capitalized == true){

        result = result.toUpperCase();
        return result;
    }

    return result;

}

module.exports.randomStringLettersAndNumbers = (length,capitalized) =>{

    let total = 0;
    let result = "";

    while (total < length) {

        let position = module.exports.randomNumberWithRangeInteger(0, ENGLISH_ALPHABET_WITH_NUMBERS.length);
        let character = ENGLISH_ALPHABET_WITH_NUMBERS.substr(position,1);

        result = result +character;


        total++;

    }


    if (capitalized == true){

        result = result.toUpperCase();
        return result;
    }

    return result;

}

module.exports.randomStringLettersAndNumbersAndSymbols = (length,capitalized) =>{

    let total = 0;
    let result = "";

    while (total < length) {

        let position = module.exports.randomNumberWithRangeInteger(0, ENGLISH_ALPHABET_WITH_NUMBERS_AND_SYMBOLS.length);
        let character = ENGLISH_ALPHABET_WITH_NUMBERS_AND_SYMBOLS.substr(position,1);

        result = result +character;


        total++;

    }


    if (capitalized == true){

        result = result.toUpperCase();
        return result;
    }

    return result;

}

module.exports.randomStringLettersAndNumbersAndSymbolsMixedCapitals = (length) =>{

    let total = 0;
    let result = "";

    while (total < length) {

        let capitalized = Math.random() < 0.5;

        let character = module.exports.randomStringLettersAndNumbersAndSymbols(1,capitalized);


        result = result +character;


        total++;

    }



    return result;

}

module.exports.randomStringLettersAndNumbersMixed = (length) =>{

    let total = 0;
    let result = "";

    while (total < length) {

        let capitalized = Math.random() < 0.5;

        let character = module.exports.randomStringLettersAndNumbers(1,capitalized);


        result = result +character;


        total++;

    }



    return result;

}


module.exports.randomStringCustomAlphabet = (length,alphabet) =>{



    let total = 0;
    let result = "";

    while (total < length) {

        let position = module.exports.randomNumberWithRangeInteger(0, alphabet.length);
        let character = alphabet.substr(position,1);

        result = result +character;


        total++;

    }




    return result;


}







console.log("random "+module.exports.random());
console.log("random with range float "+module.exports.randomNumberWithRange(0,10));
console.log("random with range integer "+module.exports.randomNumberWithRangeInteger(0,10));
console.log("random string with length  "+module.exports.randomStringLettersOnly(10,false));
console.log("random string with length capitalized "+module.exports.randomStringLettersOnly(10,true));
console.log("random string and numbers "+module.exports.randomStringLettersAndNumbers(10,false));
console.log("random string and numbers capitalized "+module.exports.randomStringLettersAndNumbers(10,true));
console.log("random string and numbers  with symbols"+module.exports.randomStringLettersAndNumbersAndSymbols(10,false));
console.log("random string and numbers capitalized with symbols "+module.exports.randomStringLettersAndNumbersAndSymbols(10,true));
console.log("random string and numbers and symbols mixed "+module.exports.randomStringLettersAndNumbersAndSymbolsMixedCapitals(10));
console.log("random string and numbers and symbols mixed "+module.exports.randomStringLettersAndNumbersMixed(10));
console.log("random string custom alphabet "+module.exports.randomStringCustomAlphabet(10,"АаБбВвГгДдЕеЁёЖжЗзИиЙйКкЛлМмНнОоПпСсТтУуФфХхЦцЧчШшЩщЪъЫыЬьЭэЮюЯя"));
