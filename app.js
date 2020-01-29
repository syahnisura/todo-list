const input = document.querySelector(".inputin");
const addBtn = document.querySelector(".tambah");
// const deletelist = document.querySelector(".hapus");
const listnya=document.querySelector(".list");

input.addEventListener("keyup", takeValue);
addBtn.addEventListener("click", addList);
// deletelist.addEventListener("click", deleteLi);

listnya.addEventListener('click', function(e){
    const test = e.target;
    const a = test.getAttribute("class");
    // console.log(listnya.childNodes[test]);
    if (a === "hapus"){
        // console.log(a);
        listnya.removeChild(listnya.childNodes[0]); 

    }
    
        

})


let isi=" ";
function takeValue(e) {
    let text=e.target.value;
    isi=text;    
}

function addList(e) {
    e.preventDefault()
    // console.log(isi)
    const el = document.createElement("li");
    const text = document.createTextNode(isi);
    const hapus = document.createElement("button");
    const texthapus = document.createTextNode("x");



    el.appendChild(text);
    hapus.appendChild(texthapus);
    hapus.classList.add("hapus");
    el.appendChild(hapus);
    listnya.appendChild(el);
    
    // listnya.appendChild(hapus);
    
}

// function deleteLi(e) {
//     console.log("hey")
// }
