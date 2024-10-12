const form = document.getElementById('form-campo');
const campoA = document.getElementById('campo-a');
const campoB = document.getElementById('campo-b');
const errorMessage = document.querySelector('.error-message');
const successMessage = document.querySelector('.success-message');
let formEValido = false;

function validaCampos (a, b){
    const tamanhoCampoA = a.split('')
    const tamanhoCampoB = b.split('')
    return tamanhoCampoB.lenght > tamanhoCampoA.lenght;
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    formEValido = validaCampos(campoA.value, campoB.value)

    if(formEValido){
        successMessage.innerHTML = 'Formulário válido! O Campo B tem mais caracteres que o Campo A';
        successMessage.style.display = 'block';
        errorMessage.style.display = 'none';

        campoA.value='';
        campoB.value='';
    } else {
        errorMessage.style.display = 'block';
        successMessage.style.display = 'none'
        campoB.style.border = '1px solid red'
    }
});

campoB.addEventListener('keyup', function(){
    formEValido = validaCampos(campoA.value, campoB.value);
    if(!formEValido){
        errorMessage.style.display = 'block';
    } else{
        errorMessage.style.display = 'none'
    }
});
