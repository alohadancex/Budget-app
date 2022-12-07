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
const balanceValue = document.getElementById('balance-amount')
const list = document.getElementById('list')
let tempAmount = 0

// Set Budget Part
totalAmountButton.addEventListener('click', () => {
	tempAmount = totalAmount.value
	// check empty or negavite value in input
	if (tempAmount === '' || tempAmount === 0) {
		errorMessage.classList.remove('hide')
	} else {
		errorMessage.classList.add('hide')

		// set value in total budget
		amount.innerText = tempAmount

		// set value in balance
		balanceValue.innerText = tempAmount - expenditureValue.innerText

		// clear input
		totalAmount.value = ''
	}
})
// Set Budget Part

// function to disable edit and delete button
const disableButton = bool => {
	let editButtons = document.getElementsByClassName('edit')
	Array.from(editButtons).forEach(elem => {
		elem.disabled = bool
	})
}
// function to disable edit and delete button

// function to create list
const listCreator = (expenseName, esxpenseValue) => {
	console.log(expenseName)
	console.log(esxpenseValue)
	let sublistContent = document.createElement('div')
	sublistContent.classList.add('sublist-content', 'flex-space')
	list.appendChild(sublistContent)
	sublistContent.innerHTML = `<p class="product">${expenseName}</p> 
	<p class="amount">${esxpenseValue}</p>
	`
	let editButton = document.createElement('button')
	editButton.classList.add('fa-solid', 'fa-pen-to-square', 'edit')
	editButton.style.fontSize = '1.2em'
	editButton.addEventListener('click', () => {
		modifyElemet(editButton, true)
	})
	let deleteButton = document.createElement('button')
	deleteButton.classList.add('fa-solid', 'fa-trash-can', 'delete')
	deleteButton.style.fontSize = '1.2em'
	deleteButton.addEventListener('click', () => {
		modifyElemet(deleteButton)
	})
	sublistContent.appendChild(editButton)
	sublistContent.appendChild(deleteButton)
	document.getElementById('list').appendChild(sublistContent)
}
// function to create list

// function to modify list
const modifyElemet = (element, edit = false) => {
	let parentDiv = element.parentElement
	let currentBalace = balanceValue.innerText
	let currentExpense = expenditureValue.innerText
	let parentAmount = parentDiv.querySelector('.amount').innerText
	if (edit) {
		let parentText = parentDiv.querySelector('.product').innerText
		productTitle.value = parentText
		userAmount.value = parentAmount
		disableButton(true)
	}
	balanceValue.innerText = parseInt(currentBalace) + parseInt(parentAmount)
	expenditureValue.innerText = parseInt(currentExpense) - parseInt(parentAmount)
	parentDiv.remove()
}
// function to modify list

// function to Add expenses
checkAmountButton.addEventListener('click', () => {
	// empty check
	if (!userAmount.value || !productTitle.value) {
		productTitleError.classList.remove('hide')
		return false
	}
	// enable button
	disableButton(false)
	// Expense
	let expenditure = parseInt(userAmount.value)
	// Total expense ( existin + new)

	let sum = parseInt(expenditureValue.innerText) + expenditure
	expenditureValue.innerText = sum
	// total balance(budget - total exspense)
	const totalBalance = tempAmount - sum
	balanceValue.innerText = totalBalance
	//create list
	listCreator(productTitle.value, userAmount.value)
	// empty inputs
	productTitle.value = ''
	userAmount.value = ''
})
// function to Add expenses
