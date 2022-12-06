let totalAmount = document.getElementById('total-amount')
let userAmount = document.getElementById('user-amount')

const checkAmountButton = document.getElementById('check-amount')
const totalAmountButton = document.getElementById('total-amount-button')
const productTitle = document.getElementById('product-title')
const errorMessage = document.getElementById('budget-error')
const productTitleError = document.getElementById('product-title-error')
const productCostError = document.getElementById('product-cost-error')
const amount = document.getElementById('amount')
const expenditureValue = document.getElementById('expenditure-value')
console.log(expenditureValue)
const balanceValue = document.getElementById('balance-amount')
const list = document.getElementById('list')
let tempAmount = 0

//Set Budget Part
totalAmountButton.addEventListener('click', () => {
	tempAmount = totalAmount.value
	// check on empty or negavite value
	if (tempAmount === '' || tempAmount === 0) {
		errorMessage.classList.remove('hide')
	} else {
		errorMessage.classList.add('hide')

		// set value on total budget
		amount.innerText = tempAmount
		//clear input
		totalAmount.value = ''
		//set value on balance
		balanceValue.innerText = tempAmount - expenditureValue.innerText
	}
})
//Set Budget Part

