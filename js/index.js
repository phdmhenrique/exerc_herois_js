const inputUniverso = document.getElementById("inputUniverso")
const inputHeroi    = document.getElementById("inputHeroi")
const btnEnviar     = document.getElementById("btnEnviar")
const adicionarImg  = document.querySelector(".adicionarImg")
const principal     = document.querySelector(".principal")
const erro          = document.querySelector(".erro")

// remover a classe da div que mostra a imagem do heroi
adicionarImg.classList.add('removerImg')

// função que ocorrerá apenas quando o botão for clicado
function btnHerois() 
{
    erro.innerHTML = ''
    erro.classList.remove("mostrarErro")
    adicionarImg.innerHTML = ""
    principal.style.backgroundColor = ''

    if (inputUniverso.value == 'Marvel') 
    {
        universoMarvel()
    }

    else if (inputUniverso.value == 'DC') 
    {
        universoDc()
    }

    // tratamento de erros
    else
    {
        verificacao()
    }
}

// tratamento de erros
function verificacao () 
{
    adicionarImg.classList.add('removerImg')
    adicionarImg.innerHTML = ""

    // verifica se ambos os campos estão vazios
    if (inputHeroi.value == '' || inputUniverso.value == '') 
    {
        erro.classList.add("mostrarErro")
        erro.innerHTML += 'Não pode deixar nenhum campo vazio.'
    }

    // se o valor do input de universo for diferente dos dois permitidos
    else if (inputUniverso.value != 'Marvel' || inputUniverso.value != 'DC')
    {
        erro.classList.add("mostrarErro")
        erro.innerHTML += 'O universo digitado é inválido.'
    }

    else
    {
        erro.classList.add("mostrarErro")
        erro.innerHTML += 'O campo universo não pode ser vazio.'
    }
}

// apenas herois do universo marvel
function universoMarvel() {
    principal.style.backgroundColor = 'rgb(136, 6, 6)'
    if (inputHeroi.value == 'Hulk') 
    {
        adicionarImg.classList.remove('removerImg')
        adicionarImg.innerHTML += "<img src='./imgs/marvel/hulk.jpeg'>"
    }

    else if (inputHeroi.value == 'Capitão América') 
    {
        adicionarImg.classList.remove('removerImg')
        adicionarImg.innerHTML += "<img src='./imgs/marvel/capitao_america.jpg'>"
    }

    else if (inputHeroi.value == 'Doutor Estranho') 
    {
        adicionarImg.classList.remove('removerImg')
        adicionarImg.innerHTML += "<img src='./imgs/marvel/dr_estranho.jpg'>"
    }

    else if (inputHeroi.value == 'Falcão') 
    {
        adicionarImg.classList.remove('removerImg')
        adicionarImg.innerHTML += "<img src='./imgs/marvel/falcao.jpg'>"
    }

    else if (inputHeroi.value == 'Homem Aranha') 
    {
        adicionarImg.classList.remove('removerImg')
        adicionarImg.innerHTML += "<img src='./imgs/marvel/homem_aranha.jpg'>"
    }

    else if (inputHeroi.value == 'Homem de Ferro') 
    {
        adicionarImg.classList.remove('removerImg')
        adicionarImg.innerHTML += "<img src='./imgs/marvel/homem_de_ferro.jpg'>"
    }

    else if (inputHeroi.value == 'Homem Formiga') 
    {
        adicionarImg.classList.remove('removerImg')
        adicionarImg.innerHTML += "<img src='./imgs/marvel/homem_formiga.jpg'>"
    }

    else if (inputHeroi.value == 'Pantera Negra') 
    {
        adicionarImg.classList.remove('removerImg')
        adicionarImg.innerHTML += "<img src='./imgs/marvel/pantera_negra.jpg'>"
    }

    else if (inputHeroi.value == 'Thor') 
    {
        adicionarImg.classList.remove('removerImg')
        adicionarImg.innerHTML += "<img src='./imgs/marvel/thor.jpg'>"
    }

    else if (inputHeroi.value == 'Viuva Negra') 
    {
        adicionarImg.classList.remove('removerImg')
        adicionarImg.innerHTML += "<img src='./imgs/marvel/viuva_negra.jpg'>"
    }

    else if (inputHeroi.value == '')
    {
        adicionarImg.classList.add('removerImg')
        adicionarImg.innerHTML = ""
        erro.classList.add('mostrarErro')
        erro.innerHTML += 'Você deve digitar o nome de algum herói.'
        principal.style.backgroundColor = ''
    }

    else{
        adicionarImg.classList.add('removerImg')
        adicionarImg.innerHTML = ""
        principal.style.backgroundColor = ''
        erro.classList.add('mostrarErro')
        erro.innerHTML += 'O herói não pertence a esse universo.'
    }
}

// apenas herois do universo dc
function universoDc() {
    principal.style.backgroundColor = 'rgb(41, 14, 138)'
    if (inputHeroi.value == 'Arqueiro Verde') 
    {
        adicionarImg.classList.remove('removerImg')
        adicionarImg.innerHTML += "<img src='./imgs/dc/arqueiro_verde.jpg'>"
    }

    else if (inputHeroi.value == 'Batman') 
    {
        adicionarImg.classList.remove('removerImg')
        adicionarImg.innerHTML += "<img src='./imgs/dc/batman.jpg'>"
    }

    else if (inputHeroi.value == 'Caçador de Marte') 
    {
        adicionarImg.classList.remove('removerImg')
        adicionarImg.innerHTML += "<img src='./imgs/dc/cacador_de_marte.jpg'>"
    }

    else if (inputHeroi.value == 'Canário Negro') 
    {
        adicionarImg.classList.remove('removerImg')
        adicionarImg.innerHTML += "<img src='./imgs/dc/canario_negro.jpg'>"
    }

    else if (inputHeroi.value == 'Doutor Manhatan') 
    {
        adicionarImg.classList.remove('removerImg')
        adicionarImg.innerHTML += "<img src='./imgs/dc/dr_manhatan.jpg'>"
    }

    else if (inputHeroi.value == 'Flash') 
    {
        adicionarImg.classList.remove('removerImg')
        adicionarImg.innerHTML += "<img src='./imgs/dc/flash.jpg'>"
    }

    else if (inputHeroi.value == 'Lanterna Verde') 
    {
        adicionarImg.classList.remove('removerImg')
        adicionarImg.innerHTML += "<img src='./imgs/dc/lanterna_verde.jpg'>"
    }

    else if (inputHeroi.value == 'Mulher Maravilha') 
    {
        adicionarImg.classList.remove('removerImg')
        adicionarImg.innerHTML += "<img src='./imgs/dc/mulher_maravilha.jpg'>"
    }

    else if (inputHeroi.value == 'Robin') 
    {
        adicionarImg.classList.remove('removerImg')
        adicionarImg.innerHTML += "<img src='./imgs/dc/robin.jpg'>"
    }

    else if (inputHeroi.value == 'Superman') 
    {
        adicionarImg.classList.remove('removerImg')
        adicionarImg.innerHTML += "<img src='./imgs/dc/superman.jpg'>"
    }

    else if (inputHeroi.value == '') 
    {
        adicionarImg.classList.add('removerImg')
        adicionarImg.innerHTML = ""
        erro.classList.add('mostrarErro')
        erro.innerHTML += 'Você deve digitar o nome de algum herói.'
        principal.style.backgroundColor = ''
    }

    else{
        adicionarImg.classList.add('removerImg')
        adicionarImg.innerHTML = ""
        principal.style.backgroundColor = ''
        erro.classList.add('mostrarErro')
        erro.innerHTML += 'O herói não pertence a esse universo.'
    }
}