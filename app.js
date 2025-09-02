let input = document.getElementById('input');
let newTask = document.getElementById('newTask');

function render(){
    const output = document.getElementById('output');

        for(let i = 0; i < localStorage.length; i++){
            const key = localStorage.key(i);
            const value = localStorage.getItem(key);
            let p = document.createElement('p');
            p.classList.add('textOutput');
            
            let valueSpan = document.createElement('span');
            valueSpan.textContent = value;
            p.appendChild(valueSpan);
            
            let deleteBtn = document.createElement('span');
            deleteBtn.classList.add('right');
            deleteBtn.textContent = "X";
            p.appendChild(deleteBtn);
            output.appendChild(p)
            
            deleteBtn.addEventListener('click', ()=>{
                alert(`The item ${value} was removed`)
                localStorage.removeItem(key)
                window.location.reload();
            })
        }

}

function addTask(){
    let tasklist = []
    let setNewTask = input.value.trim()
    if(!setNewTask){
        alert('Please enter a task in the text field')
        return;
    }else{

        tasklist = setNewTask
        localStorage.setItem(tasklist, setNewTask);
        window.location.reload();
    }
    
}
render();

newTask.addEventListener('click', addTask)