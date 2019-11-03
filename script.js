let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');

itemList.addEventListener('click', deleteItem);
filter.addEventListener('keyup', filterItems);

form.addEventListener('submit',function addItem(e) {

        e.preventDefault();

        let newItem = document.getElementById('item').value;
        let li = document.createElement('li');
        li.className = 'list-group-item';
        li.appendChild(document.createTextNode(newItem));
        let deleteButton =document.createElement('button');
        deleteButton.className = 'btn btn-danger btn-sm float-right delete';
        deleteButton.appendChild(document.createTextNode('X'));
        li.appendChild(deleteButton);
        itemList.appendChild(li);

});

function deleteItem(e) {
        if(e.target.classList.contains('delete')){
                if(confirm('Are You Sure You Want To Delete This?')){
                        let li = e.target.parentElement;
                        itemList.removeChild(li);
                }
        }
}

function filterItems(e){
        let text = e.target.value.toLowerCase();
        let items = itemList.getElementsByTagName('li');
        Array.from(items).forEach(function(item){
                let itemName = item.firstChild.textContent;
                if(itemName.toLowerCase().indexOf(text) != -1){
                        item.style.display ='block';
                }else{
                        item.style.display = 'none';
                }
        })
}