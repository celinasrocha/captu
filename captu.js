const botaoentrar= document.getElementById('botao entrar')
const botaocadastro= document.getElementById('botao cadastro')
function transiçao (){
    window.location.href='cadastro.html'

}
botaocadastro.addEventListener('click',transiçao)
function entrar (){
    const usuario= document.getElementById('nome').value
    const senha= document.getElementById('senha').value
    fetch('https://backend-info1.vercel.app/login',{
       method:'POST',
       headers:{
        'Content-Type':'application/json'
       },
       body:JSON.stringify({
        login: usuario,
        senha: senha
       })
    })
    .then(resposta=>resposta.json())
    .then(resposta=>{
        if(resposta.sucesso){
            alert('login realizado com sucesso')
             window.location.href='pag.html'
        }
    })
}
botaoentrar.addEventListener('click',entrar)