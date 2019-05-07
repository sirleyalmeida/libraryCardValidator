const treatingNumbersCard = (numbersCard) => String(numbersCard).replace(/[^\d]+/g, '');
const isRepeatingNumbers = (numbersCard) => treatingNumbersCard(numbersCard).split('').every((elem) => elem === treatingNumbersCard(numbersCard)[0]);

const numbersDifferents = (numbersCard) => {
  return (treatingNumbersCard(numbersCard).length > 19 && treatingNumbersCard(numbersCard).length < 15) ? true : false;
};

const algorithmLuhn = (numbersCard) => {
  const numbersCardArray = (numbersCard) => Array.from(treatingNumbersCard(numbersCard));
  const mapNumbersCard = numbersCardArray(numbersCard)
    .reverse(numbersCard)
    .map((e) => parseInt(e))
    .map((elem, index) => index % 2 ? elem * 2 : elem)
    .map((elem) => elem > 9 ? (elem % 10) + 1 : elem)
    .slice(1)
    .reduce((a, b) => a + b) % 10;

  const rest = 10 - mapNumbersCard;
  const lastNumber = parseInt(numbersCardArray(numbersCard).pop());

  return (rest === lastNumber) ? true : false;
};

function cardValidator(numbersCard) {
  return (isRepeatingNumbers(numbersCard) || numbersDifferents(numbersCard)) ? false : algorithmLuhn(numbersCard);
}

module.exports = cardValidator;