function redireccion(){
    username = document.getElementById("txtusuario").value;
    password = document.getElementById("txtusuario").value;
    if((username=="kenshin@gmail.com") && (password=="2592000")){
        window.href="/view/perfil.html"
    }
    else{
        alert("Usuario o contraseña incorrectos");
    }
}