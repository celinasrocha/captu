fetch  ( "https://backend-info1.vercel.app/v2/livros" )
.then (resposta => resposta.json())
.then (resposta => {
    console.log(resposta)
    resposta.forEach(item => {
        const novo_elemento = document.createElement("div")
       // novo_elemento.classList.add("item")
        novo_elemento.innerHTML = `
        <img src="${item.capa}" alt="Assim como nos Filmes" width="150">
        `
            document.getElementById ("livros").appendChild(novo_elemento)
    });
})