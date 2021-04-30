import "./styles.css";
import jQuery from "jquery";


jQuery(document).ready(function () {


        const submitForm = document.querySelector('.add__modal .todoList__modal__form');
        const addButton = document.querySelector('.add-todo');
        const todoList = document.querySelector('.todoList__content__inner');
        const list = document.querySelectorAll('.todoList__content__inner li');


        let listLenght = list.lenght;



        /* generate Tempalate */
        const generateTempalate = (todo) => {

            const html = `<li>
                      <input type="checkbox" id="todo_${listLenght}">
                      <label for="todo_${listLenght}" class="label">
                        <span class="check"></span>
                        <span class="todoList__content__text">${todo}</span>            
                      </label>
                       <i class="fas fa-pen-square edit"></i>
                       <i class="fas fa-trash delete"></i>
                    </li>`
            todoList.innerHTML += html;
        };


        /* Added Todos */
        function addTodos(e) {
            e.preventDefault();
            const todo = submitForm.add.value.trim();
            if (todo.length) {
                listLenght = listLenght + 1;
                generateTempalate(todo);
                submitForm.reset();
                jQuery(".add__modal").fadeOut();
            }
        }

        submitForm.addEventListener('submit', addTodos);
        addButton.addEventListener('click', addTodos);



        /* delete Todos */

        function deleteTodos(e) {
            if (e.target.classList.contains('delete')) {
                e.target.parentElement.remove();
            }
        }

        todoList.addEventListener('click', deleteTodos);



        //fade in modal window

        $('.todoList__button').on('click', function(){
            $('.add__modal').fadeIn();
        });





           // Added button
           let newSpanText;
           let spanEl;

        jQuery(".todoList__content__inner").on("click", ".edit", function(e) {

            let currentEl = e.target;
            let closestLi = currentEl.closest('li');
            let indexOfLi = $(closestLi).index();
            spanEl = closestLi.getElementsByClassName('todoList__content__text');
            let currentSpanText = spanEl[0].innerHTML;

            document.getElementById('edit__modal-input').value = currentSpanText;
    });



        // Save value added button

        jQuery(document).on('click', '.added-todo', function(e) {

            newSpanText = document.getElementById('edit__modal-input').value;
            spanEl[0].innerHTML = newSpanText;
            document.getElementById('edit__modal-input').value = "";
        });




});