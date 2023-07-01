// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batchs = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:

const isValidMessage = 'Is a VALID credit card number!';
const isInvalidMessage= 'Is NOT A VALID credit card number';






//Remove the last element from the array, storing in a new array and reverse the array (now without the last digit).


const validateCred = (arr) => {
  const newArr = [];
  
  for (let i = 0; i < arr.length; i++) {
    const subArray = arr[i].slice();
    subArray.pop();
    subArray.reverse();
    newArr.push(subArray);
  }
  //Multiply the digits in odd positions (e.g. first digit, third, fifth…etc) by 2. If the resulting number is over 9, subtract 9 from the number.
  
  for (let i = 0; i < newArr.length; i++) {
    const arrayInception = newArr[i];
    
    for (let j = 0; j < arrayInception.length; j++) {
      if (j % 2 === 0) {
        let num = arrayInception[j] * 2;
        if (num > 9) {
          num -= 9;
        }
        
        arrayInception[j] = num;
      }
    }

    // //Add up all the numbers in the array 
  
    let sum = arrayInception.reduce((acc, cur) => acc + cur, 0);
    arrayInception.length = 0;
    arrayInception.push(sum)


  }
  
  return newArr;
}



const result = validateCred(batchs);

//Get the dropped digit. If the sum modulo 10 is 0 then the array contains a valid number. Conversely, if the result is any number but 0, then the array contains an invalid number.



const originalArrCopy = batchs.map((arr) => arr.map(num => num))

result.forEach((arr, index)=> {
  const lastNum = originalArrCopy[index][originalArrCopy[index].length - 1];
 arr.forEach((num, i)=>{
  arr[i]=  num + lastNum; 
 })

});
console.log('Test',result)



// Conversely, if the result is any number but 0, then the array contains an invalid number.



const checker = (result)=>{
  const messages = result.map((num) => {
    if(num % 10 === 0){
      return `${num} es un número válido. Pertenece al array en el índice.`;
    }else{
      return `${num} es un número NO válido. Pertenece al array en el índice .`;
    }

  })
  return messages;
};

const solution = checker(result);
console.log(solution)

//to check through the nested array for which numbers are invalid, and return another nested array of invalid cards.
const findInvalidCards =(nestedArray)=>{
  const invalidCards =[]
  for(let i = 0; i < nestedArray.length; i++){
    const cardNum = nestedArray[i];

    if(!checker(cardNum).includes(isInvalidMessage)){
      invalidCards.push(cardNum)
    }
  }
  return invalidCards;
}

const invalidCards = findInvalidCards(batchs);
console.log(isInvalidMessage,invalidCards)

//to identify the credit card companies that have possibly issued these faulty numbers.

const idInvalidCardCompanies =(invalidCards)=>{

  const companies = [];

  for(let i =0; i < invalidCards.length; i++){
    const cardNum = invalidCards[i];
    let company = '';

    if(cardNum[0] === 3){
      company = 'Amex (American Express)'
    } else if( cardNum[0] === 4){
      company = 'Visa'
    }else if(cardNum[0] === 5){
      company = '	Mastercard'
    }else if (cardNum[0] === 6){
      companies.push('Discover')
    }else{
      company = 'company not found'
    }
    companies.push({index: i, company: company})
  }
 return companies;
}

const companiesList = idInvalidCardCompanies(invalidCards);
console.log('THE LIST',companiesList)




