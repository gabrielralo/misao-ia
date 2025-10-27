const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultados = document.querySelector(".caixa-resultados");
const textoResultados = document.querySelector(".texto-resultados");
const botaoJogarNovamente = document.querySelector(".novamente-botao");
const telaInicial = document.querySelector(".tela-inicial");
const botaoIniciar = document.querySelector(".iniciar-botao");

let atual = 0;
let perguntaAtual;
let historialFinal = "";

botaoInicial.addEventListener('click,iniciarJogo');
function iniciarJogo(){
    atual = 0;
    historialFinal = "";
    telaInicial.style.display = 'none';
    caixaPerguntas.classList.remove("mostrar");
    caixaPerguntas.classList.remove("mostar");
    caixaResultados.classList.remove("mostrar");
    mostraPergunta();
}

function mostraPergunta(){
    if(atual >=Perguntas.length ){
        mostraResultados();
        return;
    }
    perguntaAtual = Perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas;textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click" , () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativa);
    }
        function mostraAfirmacoes(){
            for(const Afirmacoes of perguntaAtual.Afirmacoes){

            }
        }
}
function respostaSelecionada(opcaoSelecionada){
    const Afirmacoes = aleatorio(opcaoSelecionada.Afirmacao);
    historialFinal += Afirmacao + "";
    if (opcaoSelecionada.proxima !== undefined) {
        atual = opcaoSelecionada.proxima;
    }else{
        mostraResultados();
        return;
    }
    mostraPergunta();
}
function mostraResultado (){
    caixaPerguntas.textContent = 'Em 2050, ${nome}';
    textoResultados.textContent = historialFinal;
    caixaAlternativas.textContent = "";
    caixaResultados.classList.add("mostrar");
    botaoJogarNovamente.addEventListener("click" , JogaNovamente);
}
function JogaNovamente(){
    atual = 0;
    historialFinal = "";
    caixaResultados.classList.remove("mostrar");
    mostraPergunta();
}
function substituiNome(){
for ( const pergunta of pergunta){
    pergunta.enunciado.replace(/você/ g ,nome);
    }
}
substituiNome();