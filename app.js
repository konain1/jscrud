
const form = document.querySelector('.form')
const inputText = document.getElementById('inputText')
const addbtn = document.querySelector('.addbtn')
const taskDiv = document.querySelector('.taskDiv')
const task = document.querySelector('.task')


// events

addbtn.addEventListener('click',(e)=>{
    e.preventDefault()

    let data = inputText.value;

    if(data === ''){
        let pre = document.createElement('p')
        pre.innerHTML = 'Do not make empty task'

        form.appendChild(pre)
        setTimeout(() => {
            pre.innerHTML = ''
        }, 3000);
      
    }else{

        console.log(data)
        createTask(data)
    }

})

function createTask(data){
    let newTask = document.createElement('div')
    newTask.className = 'task'
    newTask.innerHTML = `
    
    <span>${data}</span>
    <div class="icons">
        <i class="fa-solid fa-pen-to-square editbtn"></i>
        <i class="fa-solid fa-trash deletebtn"></i>
    </div>

    `;

    taskDiv.appendChild(newTask)

    const deletebtn = newTask.querySelector('.deletebtn');
    const editbtn = newTask.querySelector('.editbtn');

    deletebtn.addEventListener('click',()=>{
   
        deletebtn.parentElement.parentElement.remove()
    })

    editbtn.addEventListener('click',()=>{

       let val = newTask.querySelector('span').innerHTML
       inputText.value = val
       newTask.remove()
    })
}

