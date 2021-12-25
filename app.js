function main() {

    const list = document.querySelector('#movie-list ul');
    const forms = document.forms;



    ////delete movie

    list.addEventListener('click',function(e){
            if (e.target.className == 'delete') {
                let li = e.target.parentElement;
                li.parentNode.removeChild(li);
            }

        });


        ////add movie

const addForm = forms['add-movie'];
addForm.addEventListener('submit',function(e){
e.preventDefault();
})

////create elements

const value = addForm.querySelector('input[type="text"]').value;
const li = document.createElement('li');
const movieName = document.createElement('span');
const deleteBtn = document.createElement('span');
const inputtt = document.getElementById('lastInput')

///// add text content

movieName.textContent = inputtt.value;
deleteBtn.textContent = "delete";

//// add classes 
movieName.classList.add('name');
deleteBtn.classList.add('delete');

//// append your content

li.appendChild(movieName);
li.appendChild(deleteBtn);
list.appendChild(li);


}