
function doubleValues(arr){
    return arr.map(function (number) {
        return number * 2;
    });
}


function onlyEvenValues(arr){
    return arr.filter(function (number) {
        return number % 2 === 0;
    });
}


function showFirstAndLast(arr){
    return arr.map(function (word) {
        if (word.length < 2) {
            return word;
        }
        return [word[0] + word[word.length - 1]];
    });
}


function addKeyAndValue(arr,key,value){
    return arr.map(function (object) {
        return {...object, [key]: value};
    });
}


function vowelCount(str){
    const vowelCounts = {};

    const lowerStr = str.toLowerCase();
  
    const vowels = "aeiou";
  
    for (let char of lowerStr) {
      if (vowels.includes(char)) {
        vowelCounts[char] = (vowelCounts[char] || 0) + 1;
      }
    }
  
    return vowelCounts;
}

function doubleValuesWithMap(arr) {
    return arr.map(function (value) {
        return arr * 2;
        });
}

function valTimesIndex(arr){
    return arr.map(function (value, index) {
        return value * index;
      });
}

function extractKey(arr, key){
    return arr.map(function (obj) {
        return obj[key];
    });
}

function extractFullName(arr){
    return arr.map(function (obj) {
        return obj.first + ' ' + obj.last;
      });
}

function filterByValue(arr, key) {
    return arr.filter(function (obj) {
        return obj.hasOwnProperty(key);
      });
}

function find(arr, searchValue) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === searchValue) {
          return arr[i]; 
        }
      }
      return undefined; 
}

function findInObj(arr, key, searchValue) {
    for (let i = 0; i < arrOfObjects.length; i++) {
        if (arr[i][key] === searchValue) {
          return arr[i];
        }
      }
      return null;
}

function removeVowels(str) {
    return str.toLowerCase().replace(/[aeiou]/g, '');
}

function doubleOddNumbers(arr) {
    return arr.filter(function (number) {
        return number % 2 !== 0; 
      }).map(function (oddNumber) {
        return oddNumber * 2; 
      });
}
