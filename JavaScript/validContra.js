
var check = function() {
    if (document.getElementById('password').value ==
        document.getElementById('confirm_password').value) {
        document.getElementById('message').style.color = 'green';
        document.getElementById('message').innerHTML = 'Son iguales';
    } else {
        document.getElementById('message').style.color = 'red';
        document.getElementById('message').innerHTML = 'Tienen que ser iguales';
    }
    if(document.getElementById('password').value== null || 
    document.getElementById('password').value== ""){
        document.getElementById('message').style.color = 'red';
        document.getElementById('message').innerHTML = 'Favor de llenar los campos';
    }
    if(document.getElementById('confirm_password').value== null || 
    document.getElementById('confirm_password').value== ""){
        document.getElementById('message').style.color = 'red';
        document.getElementById('message').innerHTML = 'Favor de llenar los campos';
    }
}      

var checkLogin = function(){
    if(document.getElementById('usuarioLogin').value == null ||
        document.getElementById('usuarioLogin').value == ""){
            document.getElementById('msLogin').style.color= 'red';
        document.getElementById('msLogin').innerHTML ='Favor llenar campos';
        }
    if(document.getElementById('passwordLogin').value == null||
    document.getElementById('passwordLogin').value == ""){
        document.getElementById('msLogin').style.color= 'red';
        document.getElementById('msLogin').innerHTML ='Favor llenar campos';
    }
}