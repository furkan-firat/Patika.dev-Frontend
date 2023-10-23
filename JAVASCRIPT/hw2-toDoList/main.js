let taskDOM = document.querySelector("#task")
let ulDOM = document.querySelector("#list")


function newElement() {
    // Creating li elements and the close button 
    let liDOM = document.createElement("li")
    let removeBtn = document.createElement("span");
    removeBtn.classList.add("close")
    removeBtn.innerHTML = '&times;';
    
    if (taskDOM.value.trim().length === 0){
        $('#liveToastError').toast('show')
    }else{
        ulDOM.append(liDOM) 
        $('#liveToastSuccess').toast('show')
        liDOM.append(taskDOM.value)
        liDOM.append(removeBtn);
        taskDOM.value=""
        
    }
    
    
    storeData()
}
// If task clicked get the checked class
ulDOM.addEventListener('click', function(event){
    if (event.target.tagName === 'LI'){
        event.target.classList.toggle('checked');
        storeData()
    }
})

ulDOM.addEventListener('click', function(event){
    if (event.target.tagName === 'SPAN'){
        event.target.parentElement.remove()
        console.log(event.target.parentElement)
        storeData()
    }
})










function storeData() {
    localStorage.setItem("data", ulDOM.innerHTML)
}

function showData(){
    ulDOM.innerHTML = localStorage.getItem("data")
}

showData()







