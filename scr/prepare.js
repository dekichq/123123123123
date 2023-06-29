function prepare(){
    let array = [
        {name: "AnnePro2", type: "Both" , connect: "Bluetooth, USB", button: "Mechanical", color: "Black", pictname: "AnnePro2.jpg"},
        {name: "CorsairK70RGB", type: "Non-Wireless" , connect: "USB", button: "Mechanical", color: "Black", pictname: "CorsairK70RGB.jpg"},
        {name: "DuckyOne2Mini", type: "Non-Wireless" , connect: "USB-C", button: "Mechanical", color: "Black", pictname: "DuckyOne2Mini.jpg"},
        {name: "HyperXAlloyFPSPro", type: "Non-Wireless" , connect: "USB-C", button: "Mechanical", color: "Black", pictname: "HyperXAlloyFPSPro.jpg"},
        {name: "KeychronK6", type: "Both" , connect: "Bluetooth, USB-A", button: "Mechanical", color: "Gray", pictname: "KeychronK6.jpg"},
    ]
    
    localStorage.clear() 
    

    for (let i=0; i<array.length; i++) {   
        let row = array[i]
        let rowSt = JSON.stringify(row)
        localStorage.setItem(`${i}`, rowSt)
    }

    location.reload();  
}