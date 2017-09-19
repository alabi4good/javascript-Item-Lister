var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);

// Delete event
document.querySelector('#items').addEventListener('click', removeItem);

//filter event
filter.addEventListener('keyup', filterList);

function addItem(e) {
        let li, delBtn, btnText;
    
        //prevent default action
        e.preventDefault();
        
         //grab the text value from input field
         var item = document.getElementById('item');
        if(item.value === ''){
            alert('please enter an item');
            return;
        }
        //create li and add bootstrap class
        li = document.createElement('li');
    
        //add bootstrap class
        li.className = 'list-group-item';
        
        //insert the input text into the li
        li.appendChild(document.createTextNode(item.value));
    
        //create delete button 
        delBtn = document.createElement('button');
        
        //add class to button
        delBtn.className = 'btn btn-danger btn-sm float-right delete';
    
        //append btnText to button
        delBtn.appendChild(document.createTextNode('X'));
    
        //append button to li
        li.appendChild(delBtn);
    
        //insert the li into the list so as to display in the UI
        itemList.insertAdjacentElement('beforeend', li);

        //clear the input field
        item.value = '';

        //focus
        item.focus();
    };

//Remove Item
function removeItem(e) { 
    var item, items;  

    item = e.target.parentElement;
    //confirms if the delete button was clicked 
     if(e.target.classList.contains('delete')) {
        if(confirm('Are you sure?')) {
            //add remove class to animate the remove motion
            item.classList.add('remove');

            //select the parent element which is the ul
            items = e.target.parentElement.parentElement;

            //remove the child li from DOM after transition end,could have used the transition end event but its all good
            setTimeout(function() {
                items.removeChild(item);
            }, 1000);
            
        }
     }
}


//filter list item

function filterList(e) {
    let filterVal, allList, listTxt; 
  filterVal = e.target.value.toLowerCase();

 //select all list items
 allList = document.querySelectorAll('li');

 //convert the nodeList into an Array
 Array.from(allList).forEach(item => {

    //get the text content of the first child
    listTxt = item.firstChild.textContent.toLowerCase();
    if(listTxt.startsWith(filterVal)) {
        item.style.display = 'block';
    }else{
        item.style.display = 'none';
    }
 });
}