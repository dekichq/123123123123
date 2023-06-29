function getArrayFromStorage() {
    let keyNumbers = Object.keys(localStorage).length
    let element = {}
    let incomingArr = []
    
    for (let i = 0; i < keyNumbers; i++) {
        let keyName = localStorage.key(i)
        let row = JSON.parse(localStorage.getItem(keyName))
        element = {}         
        element.id = keyName;
        element.name = row.name;
        element.type = row.type;
        element.connect = row.connect;
        element.button = row.button;
        element.color = row.color;
        element.pictname = row.pictname;
        incomingArr.push(element)
    }
    return incomingArr
}

function sortElements(){
    let checkBox = document.getElementById("sortcheckbox");
    if (checkBox.checked == true){
       let arrayForSort = getArrayFromStorage()

        function byName(a, b) {
          if ( a.name < b.name ){
            return -1;
          }
          if ( a.name > b.name ){
            return 1;
          }
          return 0;
        }
        
        arrayForSort.sort(byName);
        
        document.getElementsByClassName("displayzone")[0].innerHTML = ''
        for (let n = 0; n <arrayForSort.length; n++) {
            let tempEl = arrayForSort[n]
            buildElementToPage(tempEl.id, tempEl)
        }
      } else {
        setTimeout(location.reload(), 1000) 
      }
}

function searchElements(){
  document.getElementsByClassName("displayzone")[0].innerHTML = ''
  let searchtArr = getArrayFromStorage()
  let str = document.querySelector("#csearch").value
  let serchStr = str.toLowerCase();
  let regExp = new RegExp(`${serchStr}`, "gi")
  let isFounded = false
  for (let i=0; i<searchtArr.length; i++) {
      let row = searchtArr[i]
      let strN = row.name.toLowerCase();
      let strT = row.type.toLowerCase();
      let strCol = row.color.toLowerCase();
      let strC = row.connect.toLowerCase();
      if (regExp.test(strN) || regExp.test(strT) || regExp.test(strC) || regExp.test(strCol)) {buildElementToPage(row.id, row)
                                                                        isFounded = true}
      }
  if (!isFounded) {document.getElementsByClassName("displayzone")[0].innerHTML = '<h1 style="color:red; width:100%; text-align: center;" >No matches found</h1>'}
   
}

refresh = () => location.reload()

sortcheckbox.addEventListener('click', sortElements)

searchbtn.addEventListener('click', searchElements)

cancelbtn.addEventListener('click', refresh)
