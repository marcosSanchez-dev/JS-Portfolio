// module pattern

//Control de presupuesto

var budgetController = (function() {
    

})();

//Control de la interfaz del Usuario

var UIController = (function () {

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription : '.add__description',
        inputValue: '.add__value',
        inputBtn: ".add__btn"
    };

    return{
        getInput: function () {
            return {
                type : document.querySelector(DOMstrings.inputType).value,
                description : document.querySelector(DOMstrings.inputDescription).value,
                value : document.querySelector(DOMstrings.inputValue).value
            }           
        },
        getDOM: function () {
            return DOMstrings;
        } 

    }
    
})();

//Control global de la APP

var controller = (function (budgetCtrl,UICtrl) {

    var ctrlAddItem = function () { //esta funcion sigue el principio DRY y es llamada cuando se aprieta un boton o la tecla enter

        // 1. obtener los datos de entrada

        var input = UIController.getInput;
        console.log(input());

        // 2. agregar el item al budgetController

        // 3. agregar el item a la interfaz de Usuario

        // 4. Calcular el presupuesto

        // 5. Mostar el presupuesto en la interfaz

    }

    var DOM = UIController.getDOM();

    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress',function (e) {
        if(event.keycode === 13 || event.which === 13){
            ctrlAddItem();
        }
    })

})(budgetController,UIController); 