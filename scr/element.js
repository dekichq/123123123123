function buildElementToPage(id, elem) {                               
    const element = document.createElement('div')
    element.classList.add('element')
    element.insertAdjacentHTML('afterbegin', `
    <div class="element-data">
        <img src="img/${elem.pictname}" class="element-img">
        <div class="element-name">${elem.name}</div>
        <p class="element-text">Type: <span class="element-type">${elem.type}</span></p> 
        <p class="element-text">Connectivity Technology: <span class="element-connect">${elem.connect}</span></p> 
        <p class="element-text">Buttons Type: <span class="element-buttons">${elem.button}</span></p>
        <p class="element-text">Color: <span class="element-color">${elem.color}</span></p>
    </div>
    <div class="element-footer">
        <button class="button" onclick="modifyModalToEdit(${id})">Edit</button><span> </span>
        <button class="button" onclick="removeElementFromStorage(${id})">Delete</button>
    </div>
    <p></p>
    `)
    document.getElementsByClassName("displayzone")[0].appendChild(element)
}

function modifyModalToCreate() {
    document.getElementsByClassName("modal-title")[0].innerText = "Create new keyboard"
    document.getElementById("submitbtn").setAttribute("onclick", `addElementToLocalStorage()`)
    document.getElementById("submitbtn").innerText = "Create"
    document.getElementById("img-prev-section").setAttribute("style", "display: none")
    document.getElementById("label-select-img").innerText = "Select image file:"
    modal.open()
}

function modifyModalToEdit(id) {
    document.getElementsByClassName("modal-title")[0].innerText = "Edit keyboard"
    document.getElementById("submitbtn").innerText = "Update"
    document.getElementById("submitbtn").setAttribute("onclick", `editElementInLocalStorage(${id})`)
    let editElement = JSON.parse(localStorage.getItem(id))
    document.getElementById("name").value = editElement.name;   
    document.getElementById("type").value = editElement.type;   
    document.getElementById("connect").value = editElement.connect;   
    document.getElementById("button").value = editElement.button; 
    document.getElementById("color").value = editElement.color; 
    document.getElementById("imgprev").setAttribute("src", `img/${editElement.pictname}`)
    document.getElementById("label-select-img").innerText = "You can choose another image file:"
    document.getElementById("img-prev-section").setAttribute("style", "display: block")
    modal.open()
}

function showPrewImg(){
    let filename = document.getElementById("imgfile").value.replace(/C:\\fakepath\\/, ''); // Обрізаємо C:\fakepath\
    document.getElementById("imgprev").setAttribute("src", `img/${filename}`)
    document.getElementById("label-select-img").innerText = "You can choose another image file:"
    document.getElementById("img-prev-section").setAttribute("style", "display: block")
}

document.getElementById("imgfile").addEventListener("change", showPrewImg)


function validKeyboard(){
    let valid = true;
    let showMsg = '';
    let formName = document.getElementById("name").value.trim();
    let formType = document.getElementById("type").value.trim();

    if (!formName) {
        showMsg = 'Keyboard name field is empty. INPUT KEYBOARDs NAME . '
        valid = false;
    }  
    
    if (!formType) {
        showMsg = showMsg + 'Keyboard type field is empty. INPUT the KEYBOARD TYPE. '
        valid = false;
    } else
    if (formType != "Both" && formType != "Wireless" && formType != "Non-Wireless") {
        showMsg = showMsg + 'Keyboard type is not Both or Wireless or Non-Wireless, input correct type. '
        valid = false;
    } 
    
    if (valid) {return valid} else {alert (showMsg)}
   
}
function validImg() {
    if (document.getElementById("imgfile").value) {return true} 
    else {
        alert ("The image for the keyboard was not selected. SELECT an IMAGE for the KEYBOARD. ")
        return false} ;
}

function addElementToLocalStorage(){
            
    if (validKeyboard() && validImg()) {
        let keyArr = [];
        for(let i=0; i<localStorage.length; i++) {
            let key = Number(localStorage.key(i)) ;
            keyArr[i] = key
        }
        const freeKey = Math.max(...keyArr) + 1; 
        let filename = document.getElementById("imgfile").value.replace(/C:\\fakepath\\/, '');
        const newElem = {};
        newElem.name =  document.getElementById("name").value;   
        newElem.type = document.getElementById("type").value;   
        newElem.connect = document.getElementById("connect").value; 
        newElem.button = document.getElementById("button").value;
        newElem.color = document.getElementById("color").value;  
        newElem.pictname = filename;   
        let rowSt = JSON.stringify(newElem)
        localStorage.setItem(`${freeKey}`, rowSt)
        modal.close()
        setTimeout(location.reload(), 1000)
    }
}
   

function editElementInLocalStorage(id) {s
    if (validKeyboard()) {
        let editElement = JSON.parse(localStorage.getItem(id))
        editElement.name =  document.getElementById("name").value;   
        editElement.type = document.getElementById("type").value;   
        editElement.connect = document.getElementById("connect").value;
        editElement.button = document.getElementById("button").value;
        editElement.color = document.getElementById("color").value;    
        if (document.getElementById("imgfile").value) {
            let filename = document.getElementById("imgfile").value.replace(/C:\\fakepath\\/, '');
            editElement.pictname = filename; 
        }
        let rowSt = JSON.stringify(editElement)
        localStorage.setItem(`${id}`, rowSt)
        modal.close()
        setTimeout(location.reload(), 1000)
    }
   
}

function removeElementFromStorage(id){
    if (confirm("Are you sure you want to delete?")) {
        localStorage.removeItem(id)
        location.reload();      
    }

} 

let keyNumbers = Object.keys(localStorage).length 

for (let k=0; k<keyNumbers; k++) {
    let keyName = localStorage.key(k)
    let row = JSON.parse(localStorage.getItem(keyName))
    buildElementToPage(keyName, row)
}

