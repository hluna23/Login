document.getElementById("btn_iniciar_sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn_registrate").addEventListener("click", register);
window.addEventListener("resize", anchoPagina);
//Declarando Variables
var contenerdor_login_register = document.querySelector('.contenedor_login-register'); 
var formulario_login = document.querySelector('.formulario_login');
var formulario_register = document.querySelector('.formulario_register');
var caja_trasera_login = document.querySelector('.caja_trasera-login');
var caja_trasera_register = document.querySelector('.caja_trasera-register');

function anchoPagina(){
  if(window.innerWidth > 850){
    caja_trasera_login.style.display = "block";
    caja_trasera_register.style.display = "block";
  }else{
    caja_trasera_register.style.display = "block";
    caja_trasera_register.style.opacity = "1";
    caja_trasera_login.style.display = "none";
    formulario_login.style.display = "block";
    formulario_register.style.display = "none";
    contenerdor_login_register.style.left = "0px";
  }
}

anchoPagina();

function iniciarSesion(){
  formulario_register.style.display = "none";
  contenerdor_login_register.style.left = "10px";
  formulario_login.style.display = "block";
  caja_trasera_register.style.opacity = "1";
  caja_trasera_login.style.opacity ="0";
}

function register(){
  formulario_register.style.display = "block";
  contenerdor_login_register.style.left = "410px";
  formulario_login.style.display = "none";
  caja_trasera_register.style.opacity = "0";
  caja_trasera_login.style.opacity ="1";
}