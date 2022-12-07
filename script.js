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

//Set Budget Part
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
//Set Budget Part

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
	editButton.classList.add('fa-thin', 'fa-money-check-pen', 'edit')
	editButton.style.fontSize = '24px'
	editButton.addEventListener('click', () => {
		modifyElement(editButton, true)
	})
	let deleteButton = document.createElement('button')
	deleteButton.classList.add('fa-thin', 'fa-eraser', 'delete')
	deleteButton.style.fontSize = '24px'
	deleteButton.addEventListener('click', () => {
		modifyElement(deleteButton)
	})
	sublistContent.appendChild(editButton)
	sublistContent.appendChild(deleteButton)
	document.getElementById('list').appendChild(sublistContent)
}
//function to create list
