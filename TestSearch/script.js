var data = [
    { judul: "The Witcher 3: Wild Hunt", isi: "Game RPG open-world dengan cerita mendalam dan dunia yang luas." },
    { judul: "Elden Ring", isi: "Game action RPG dari FromSoftware dengan dunia terbuka yang luas dan tantangan tinggi." },
    { judul: "Red Dead Redemption 2", isi: "Game aksi-petualangan bertema koboi dengan alur cerita yang kuat." },
    { judul: "Cyberpunk 2077", isi: "Game RPG bertema futuristik dengan dunia yang penuh eksplorasi dan cerita menarik." },
    { judul: "Minecraft", isi: "Game sandbox yang memungkinkan pemain membangun dan menjelajah dunia tanpa batas." },
    { judul: "God of War", isi: "Game aksi-petualangan dengan mitologi Nordik dan pertarungan yang epik." },
    { judul: "Dark Souls 3", isi: "Game action RPG yang menantang dengan sistem pertarungan yang kompleks." },
    { judul: "GTA V", isi: "Game open-world yang memungkinkan pemain menjelajahi kota Los Santos dengan berbagai aktivitas." },
    { judul: "Hollow Knight", isi: "Game Metroidvania dengan dunia gelap dan eksplorasi yang mendalam." },
    { judul: "Sekiro: Shadows Die Twice", isi: "Game action dengan gameplay berbasis pertarungan samurai yang cepat dan intens." }
];

function showData(filterData = data){
    let listData = "";
    
    filterData.forEach((showData) =>{
        listData += `
        <div class = "tampilList">
            <h3> ${ showData.judul } </h3>
            <p> ${ showData.isi } </p>
        </div>
        `
    });
    document.getElementById("list").innerHTML = listData ;
}

function searchData(){

    let search = document.getElementById("searchInput").value.toLowerCase();

    let filterData = data.filter(item => 
        item.judul.toLowerCase().includes(search)
    );
    
    if(!filterData){
        load(null);
    } else {
        load(filterData);
    }
}

function load(filterData = data){

    let loading = document.getElementById("load");
    let handle = document.getElementById("list");

    loading.style.display = "block";
    handle.innerHTML = " ";

    setTimeout(() => {

        loading.style.display = "none";

        !filterData || filterData.length === 0 ? 
            handle.innerHTML = "<p>Data tidak ditemukan</p>" :
            showData(filterData); 
            
    }, 1000);
}

showData();

function register(){

    const username = document.getElementById("usernameRegis").value;
    const password = document.getElementById("passwordRegis").value;

    if(username.trim() === "" && username.length === 0 || password.length === 0 && password.trim() === ""){
        alert("username dan password harus diisi");
        return
    }

    localStorage.setItem("username", username);
    localStorage.setItem("password", password); 

    alert("registrasi berhasil");

}

function login(){

    const username = document.getElementById("usernameLogin").value;
    const password = document.getElementById("passwordLogin").value;

    const checkUsername = localStorage.getItem("username");
    const checkPassword = localStorage.getItem("password");

    if(username != checkUsername || password != checkPassword){
        return alert("username atau password salah");
    } else if (username === checkUsername && password === checkPassword){
        alert("login berhasil");
        window.location.href = "index.html";
    }

}