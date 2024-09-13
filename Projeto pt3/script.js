const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Após um dia de trabalho, você chega em casa e se depara com uma nova tecnologia capaz de criar e responder diversas perguntas",
        alternativas: [
            {
                texto:"Isso vai dar problema...",
                afirmacao: "No início ficou com medo do que essa tecnologia pode fazer.",
            },
            {
                texto:"Isso pode ser ótimo!",
                afirmacao: "Procurou saber como essa tecnologia funciona.",
            }
        ]
    },
    {
        enunciado: "Com a descoberta dessa nova tecnologia nomeada Inteligência Artificial, seu chefe decide que você e seus colegas podem realizar um trabalho utilizando ela, qual sua reação?",
        alternativas: [
            {
                texto:"Utiliza de uma ferramenta IA na internet para que possa realizar o trabalho com tranquilidade.",
                afirmacao: "Usufruiu da tecnologia sem problemas."
            },
            {
                texto:"Realiza o trabalho somente com o que foi conversado com seus colegas",
                afirmacao: "Preferiu usar metódos nos quais você mais confia.",
            }
        ]
    },
    {
        enunciado: "Após a elaboração do trabalho, o seu chefe realizou um debate entre seus colegas para entender como o trabalho foi realizado. Nessa conversa também foi levantado um ponto muito importante: como a IA impacta o trabalho do futuro. Nesse debate, como você se posiciona?",
        alternativas: [
            {
                texto:"Acreditou que possa ser um grande avanço para a sociedade no futuro.",
                afirmacao: "Defendeu a ideia"
            },
            {
                texto: "Teve medo de que a IA possa roubar o emprego das pessoas no futuro.",
                afirmacao: "Foi contra a ideia com medo das consequências futuras."
            }
            
            
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
        alternativas: [
            {
                texto:"Utilizou de aplicativos como o Paint para criar a imagem",
                afirmacao:"Novamente, preferiu ter certeza no metódo."
            },
            {
                texto: "Utilizou de uma IA para gerar a imagem",
                afirmacao:"Confiou no que um dia será o futuro."
            }  
    
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz? ",
        alternativas: [
            {
                texto:"Enviou diferentes comandos para o chat até alcançar o que desejava.",
                afirmacao:"Preferiu tentar mais vezes"
            },
            {
                texto:"Preferiu revisar o trabalho e por em roda diferentes perspectivas para realizar o trabalho.",
                afirmacao:"Preferiu deixar o novo metódo de lado e usar o mais convencional"
            }
            
            
        ]
    }
]
 
 let atual = 0;
 let peguntaAtual;
 let historiaFinal = "";

 function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
 }

 function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa)); 
        caixaAlternativas.appendChild(botaoAlternativas);
        }
 }

 function respostaSelecionada(opcaoSelecionada){
        const afirmacoes = opcaoSelecionada.afirmacoes;
        historiaFinal += afirmacoes + "" ;
        atual++;
        mostraPergunta();
 }

 function mostraResultado(){
    caixaPerguntas.textContent = "Em 2049...";
    caixaResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = " ";
 }
 mostraPergunta();