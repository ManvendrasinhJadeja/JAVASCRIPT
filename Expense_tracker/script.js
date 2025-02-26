
const expenseForm = document.getElementById("expense-form");
const expenseNameInput = document.getElementById("expense-name");
const expenseAmountInput = document.getElementById("expense-amount");
const expenseCategoryInput = document.getElementById("expense-category");
const expenseList = document.getElementById("expense-list");
const totalExpenseDisplay = document.getElementById("total-expense");
const filterCategory = document.getElementById("filter-category");
const display = document.getElementById("display");


let expenses = JSON.parse(localStorage.getItem("expenses")) || [];


function addExpense(e){
    e.preventDefault();

    const name =expenseNameInput.value.trim()
    const amount =parseFloat( expenseAmountInput.value.trim())
    const category =expenseCategoryInput.value

    if (name===""|| amount<=0) {
        alert("Enter valid expense value!")
        return;
    }
    const newExpense={

        name,amount,category
    }
    expenses.push(newExpense);

    localStorage.setItem("expenses",JSON.stringify(expenses))

    expenseForm.reset();

    displayExpenses();

}


function displayExpenses(filter = "All"){
    expenseList.innerHTML = "";

    let filetedExpenses = expenses;

    if (filter !=="All") {
        filetedExpenses = expenses.filter(expense => expense.category === filter);
    }
    
    filetedExpenses.forEach((expense,index )=> {
        const li =document.createElement("li");
        li.classList.add("flex", "justify-between", "items-center", "p-4", "border", "border-white", "rounded-lg", "mt-2");
        li.innerHTML = `
            <div>
                <p class="font-bold">${expense.name} - ₹${expense.amount}</p>
                <p class="text-sm text-gray-400">${expense.category} </p>
            </div>
            <div class="flex gap-2">
                <button onclick="editExpense(${index})" class="bg-white text-black px-3 py-1 rounded-lg">✏️</button>
                <button onclick="deleteExpense(${index})" class="bg-red-500 px-3 py-1 rounded-lg">🗑️</button>
            </div>
        `;
        expenseList.appendChild(li);
    });

    const totalAmount = filetedExpenses.reduce((sum,expense)=>sum+expense.amount,0);
    totalExpenseDisplay.textContent = `₹${totalAmount}`;

}
function deleteExpense(index){

    expenses.splice(index,1)
    localStorage.setItem("expenses", JSON.stringify(expenses));
    displayExpenses();
    
}


function editExpense(index){
    const expenseToEdit = expenses[index];

    expenseNameInput.value = expenseToEdit.name;
    expenseAmountInput.value = expenseToEdit.amount;
    expenseCategoryInput.value = expenseToEdit.category;

    expenses.splice(index, 1);
    localStorage.setItem("expenses", JSON.stringify(expenses));
    displayExpenses();
}
filterCategory.addEventListener("change", (e) => {
    displayExpenses(e.target.value);
});
expenseForm.addEventListener("submit", addExpense);
window.addEventListener("DOMContentLoaded", () => displayExpenses());