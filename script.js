let menu = document.getElementById("menu")
let iconeBarras = document.getElementById("icone-barras")
let iconeX = document.getElementById("icone-x")

function abreFechaMenu() {    
    // Menu fechado - tem a classe menu-fechado
    // Menu aberto - não tem a classe menu-fechado

    // Alterna a classe "menu-fechado" no menu
    // menu.classList.toggle("menu-fechado")

    // Se o menu contem a classe menu-fechado
    if ( menu.classList.contains("menu-fechado") ) {
        // Abrir o menu - remover a classe menu-fechado
        menu.classList.remove("menu-fechado")

        // Esconder icone barras
        iconeBarras.style.display = "none"

        // Mostrar o icone do X
        iconeX.style.display = "inline"

    } else {
        // Fechar o menu - adicionar a classe menu-fechado
        menu.classList.add("menu-fechado")

        // Esconder icone do X
        iconeX.style.display = "none"

        // Mostrar o icone barras
        iconeBarras.style.display = "inline"

    }
}

// if (window.innerWidth < 1300) {
//     menu.classList.add("menu-fechado")
//     iconeBarras.style.display = "inline"
//     iconeX.style.display = "none"
// }

onresize = () => {
    // Abrir o menu - remover a classe menu-fechado
    menu.classList.remove("menu-fechado")

    // Esconder icone barras
    iconeBarras.style.display = "none"

    // Mostrar o icone do X
    iconeX.style.display = "inline"
}
function solicitarOrcamento (event) {
    //recebendo input do usuario (guardar em algum lugar as informacoes do usuario)
    //receber os dados digitados no campo nome.
    let valorNome = document.getElementById("campo-nome").value//(valor)
    //receber os dados digitados no campo email.
    let valorEmail = document.getElementById("campo-email").value
    //receber os dados digitados no campo descreva
    let valorTexto = document.getElementById("campo-texto").value

    //criar objeto.
    let dadosForm = {
        nome: valorNome,
        email: valorEmail,
        texto: valorTexto
    }
    console.log (dadosForm);

    //requisicao API(garcom)
    //criar metodo post (criar)
    fetch("http://localhost:3000/solicitacoes",{
        method:"POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify (dadosForm)
    })
    //se for sucesso
    .then(resposta => {
        console.log (resposta)

        alert ("Gravado com sucesso")
    })

    //caso erro
    .catch(erro => {
        console.log (erro)

        alert ("Dados incorretos")
    })
    event.preventDefault()
}

