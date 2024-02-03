
var formElement = document.querySelector('form');

formElement.addEventListener('submit', function(event) {
    
    event.preventDefault();

    
    var amount=document.getElementById('amount').value;
    console.log(amount);
    var itemList=document.querySelector('select').value;
    console.log(itemList);
    var description=document.getElementById('description').value;
    console.log(description);

    var obj={
        amount,
        itemList,
        description
    }
    localStorage.setItem(obj.description,JSON.stringify(obj));
    showValueOnScreen(obj);
});
function showValueOnScreen(obj){
    const addItemOnScreen=document.getElementById('addItem');
    const createEle=document.createElement('li');
    createEle.className="liTagCreated";
    createEle.textContent=obj.amount+" - "+obj.itemList+" - "+obj.description+" ";
    
    // Delete Expense
     const createDeleteExpenseButt=document.createElement('button');
     createDeleteExpenseButt.textContent='Delete Expense';
     

     createDeleteExpenseButt.onclick=()=>{
        localStorage.removeItem(obj.description);
        addItemOnScreen.removeChild(createEle);
     }
     // Edit Expense
     const createEditExpenseButt=document.createElement('button');
     createEditExpenseButt.textContent='Edit Expense';

     createEditExpenseButt.onclick=()=>{
        localStorage.removeItem(obj.description);
        addItemOnScreen.removeChild(createEle);
        document.getElementById('amount').value=obj.amount;
        // console.log(obj.description,obj.amount);
        document.querySelector('select').value=obj.itemList;
        document.getElementById('description').value=obj.description;

     }
     createEle.appendChild(createDeleteExpenseButt);
     createEle.appendChild(createEditExpenseButt);
     addItemOnScreen.appendChild(createEle);
     


    
}