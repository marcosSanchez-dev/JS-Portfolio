// seleccionar los elementos

const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const textInput = document.getElementById('grocery');
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');

// edit option
let editElement;
let editFlag = false;
let editID = '';
//events listeners:
form.addEventListener('submit',addItem);
clearBtn.addEventListener('click',clearItems);
// funciones: 

//boton submit (event listener):
function addItem(e) {
    e.preventDefault();
    const value = textInput.value;
    const id = new Date().getTime().toString(); // me invente un id con este metodo
    
    if(value && !editFlag){
    //Quiero crear un elemento article que se despliegue en la lista
    const element = document.createElement('article');
    element.classList.add('grocery-item');
    const idAttr = document.createAttribute('data-id');
    idAttr.value = id;
    element.setAttributeNode(idAttr);
    element.innerHTML = `<p class='title'>${value}</p>
                        <div class='btn-container'>
                            <button type='button' class='edit-btn'>
                                <i class='fas fa-edit'></i>
                            </button>
                            <button type='button' class='delete-btn'>
                                <i class='fas fa-trash'></i>
                            </button>
                        </div>`;
    /* *******
    Voy a accerder a mi edit-btn y a mi delete-btn una vez que ya hayan sido creados,
    porque no estan dentro del index.html :
    ******* */ 
    const deleteBtn = element.querySelector('.delete-btn');
    const editBtn = element.querySelector('.edit-btn');
    deleteBtn.addEventListener('click',deleteItem);
    editBtn.addEventListener('click',editItem);

    //agrego mi elemento al documento hmtl:
    list.appendChild(element);
    displayAlert('agregaste con éxito el elemento','success');
    container.classList.add('show-container');
    //agregar al Local Storage
    addToLocalStorage(id,value);
    //inicializar el textInput
    setBackToDefault();
    }else if(value && editFlag){
        editElement.innerHTML = value;
        displayAlert('editaste un elemento','success');
        //edit local storage
        editLocalStorage(editID,value);
        setBackToDefault();
    }else{
        displayAlert('mete un valor!','danger');
    };
};

// alerts! -- Que tipo de alerta quiero mostrar

function displayAlert(texto,clase) {
    alert.textContent = texto;
    alert.classList.add(`alert-${clase}`);

    //remover la alerta
    setTimeout(function () {
        alert.textContent = '';
        alert.classList.remove(`alert-${clase}`);
    },1000);

};
// clear items btn: (event listener)
function clearItems() {
    const items = document.querySelectorAll('.grocery-item');
    if(items.length>0){
        items.forEach(function (article) {
            list.removeChild(article); // el padre elimina al hijo
        });
    }
    container.classList.remove('show-container');
    displayAlert('tu lista esta vacia!','danger');
    setBackToDefault();
    // localStorage.removeItem('list');
};
// delete function
function deleteItem(e) {
    const delElement = e.currentTarget.parentElement.parentElement;
    const id = delElement.dataset.id;
    list.removeChild(delElement);
    if(list.children.length === 0){
        container.classList.remove('show-container');
    }
    displayAlert('Borraste el item','success');
    setBackToDefault();
    //remove from local storage
    removeFromLocalStorage(id);
};
//edit function
function editItem(e) {
    const delElement = e.currentTarget.parentElement.parentElement;
    //set edit item
    editElement = e.currentTarget.parentElement.previousElementSibling;
//set form value
    textInput.value = editElement.innerHTML;
    editFlag = true;
    editID = delElement.dataset.id;
    submitBtn.textContent = 'edit';
};
//set back to default

function setBackToDefault() {
    textInput.value = '';
    editFlag = false;
    editID = '';
    submitBtn.textContent = 'submit';
};

// Local Storage
function addToLocalStorage(id,val) {
    const grocery = {id,val};
    let items = getLocalStorage();
};

function removeFromLocalStorage(id) {
    let items = getLocalStorage();
    items = items.filter(function (item) {
        if(item.id !== id){
            return item;
        }
    });
    localStorage.getItem('list')?JSON.parse(localStorage.getItem('list')):[];
};

function editLocalStorage(id,value) {};

function getLocalStorage() {
    return localStorage.getItem('list')?JSON.parse(localStorage.getItem('list')):[];
};


/*

localStorage.setItem('name','marcos');
localStorage.setItem('edad','24');
localStorage.setItem('testing',JSON.stringify(['item1','item2']));
const conversion = JSON.parse(localStorage.getItem('testing'))

//localStorage.removeItem('name');

console.log(localStorage.getItem('name'));
console.log(localStorage.getItem('testing'));
console.log(localStorage.key(0));
console.log(conversion);
*/