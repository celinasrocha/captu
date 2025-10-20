const botaocadastro= document.getElementById('botao cadastro')
function entrar (){
    const usuario= document.getElementById('nome').value
    const senha= document.getElementById('senha').value
    fetch('https://backend-info1.vercel.app/criarLogin',{
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
            alert('cadastro realizado com sucesso')
             window.location.href='captu.html'
        }
    })
}
botaocadastro.addEventListener('click',entrar)