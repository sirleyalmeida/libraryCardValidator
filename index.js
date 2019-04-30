const treatingNumbersCard = (numbersCard) => String(numbersCard).replace(/\-|\.|\/|\(|\)| \D+/g, '');
const isRepeatingNumbers = (numbersCard) => treatingNumbersCard(numbersCard).split('').every((elem) => elem === treatingNumbersCard(numbersCard)[0]);
const numbersDifferentToSixteen = (numbersCard) => {
	if (treatingNumbersCard(numbersCard).length !== 16) {
		return true
	}
}

function cardValidator(numbersCard) {
	if (isRepeatingNumbers(numbersCard) || numbersDifferentToSixteen(numbersCard)) {
		return false;
	}
	return true
}

module.exports.cardValidator = cardValidator;