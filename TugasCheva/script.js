let data = [   
    {
        title : "Belajar HTML dan CSS",
        description : "Mempelajari dasar dasar HTML dan CSS agar dapat membuat website yang menarik",
        deadline : "2024-12-20"
    },

];


const addNewData = () => {

    const newTitle = document.getElementById("namaTugas").value;
    const newDescription = document.getElementById("deskripsi").value;
    const newDeadline = document.getElementById("date").value;

    if(!newTitle || !newDescription || !newDeadline){
        alert("Silahkan isi data dengan lengkap");  
        return
    }

    const newData = {
        title : newTitle,
        description: newDescription,
        deadline : newDeadline
    };

    let data = JSON.parse(localStorage.getItem("data") || []);

    data.push(newData);

    localStorage.setItem("data", JSON.stringify(data));

    document.getElementById("namaTugas").value = "";
    document.getElementById("deskripsi").value = "";
    document.getElementById("date").value = "";

    showAllData();
}

function showAllData(){

    let data = JSON.parse(localStorage.getItem("data") || []);
    let listData = "";    

    data.forEach((showData, index) => {
        listData += 
            `<div class ="tugas">
                <h3>${ showData.title }</h3>
                <p class = "penjelasan"> ${ showData.description } </p>
                <p class = "deadline"> ${ showData.deadline } </p>
                <button onclick = "deleteButton( ${ index } )">Hapus</button>
                <button onclick = "navigate('edit')">Edit</button>
            </div>`
        });

    document.getElementById("listData").innerHTML = listData ;
}   

function deleteButton(index){

    let data = JSON.parse(localStorage.getItem("data") || []);

    data.splice(index, 1);

    localStorage.setItem("data", JSON.stringify(data));
    showAllData();
}

showAllData();

function navigate(page){
    if(page === "edit"){
        window.location.href = "edit.html";
    } else if(page === "index"){
        window.location.href = "index.html";
    }
}