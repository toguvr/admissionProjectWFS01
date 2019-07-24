
var clique = document.querySelector('input.button');
var textoDigitado = document.querySelector('input[name=email]');

clique.onclick = function textoEmail(){
    if( document.forms[0].email.value==" " 
    || document.forms[0].email.value.indexOf('@')==-1 
    || document.forms[0].email.value.indexOf('.')==-1 )
    {
            alert( "Por favor, informe um email valido!" );     

            return false;
    }else{
        var email = textoDigitado.value;
        alert('O email ' + email + ' foi enviado');

        var elemento = document.createElement('h1');
        var criaTexto = document.createTextNode('Bem Vindo, '+ email);
        elemento.appendChild(criaTexto);
        var local = document.querySelector('#msg');
        local.appendChild(elemento);
        return false;
            
       
         }   
}



