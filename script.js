let nomeJogador = "";

let pontos = 10;

let atual = 0;

const perguntas = [

{
pergunta:"🚶 Onde o pedestre deve atravessar?",
respostas:[
"No meio da rua",
"Na faixa",
"Entre carros"
],
correta:10,
explicacao:"O local mais seguro é a faixa de pedestres."
},

{
pergunta:"🚦 O que significa o sinal vermelho?",
respostas:[
"Acelerar",
"Andar",
"Parar"
],
correta:0,
explicacao:"Vermelho indica parada obrigatória."
},

{
pergunta:"🚗 Para que serve o cinto?",
respostas:[
"Enfeite",
"Segurança",
"Decoração"
],
correta:0,
explicacao:"O cinto reduz riscos em acidentes."
},

{
pergunta:"🚲 O ciclista deve:",
respostas:[
"Andar sem atenção",
"Ignorar placas",
"Respeitar os sinais"
],
correta:0,
explicacao:"Ciclistas também seguem regras."
},

{
pergunta:"🛑 Ao ver pedestres:",
respostas:[
"Parar",
"Buzinar",
"Acelerar"
],
correta:0,
explicacao:"Pedestres têm prioridade na faixa."
},

{
pergunta:"🚦 Qual luz vem depois do amarelo?",
respostas:[
"Verde",
"Vermelho",
"Azul"
],
correta:0,
explicacao:"Após o amarelo normalmente vem o vermelho."
},

{
pergunta:"🚸 O que esta placa indica?",
respostas:[
"Área escolar",
"Hospital",
"Posto"
],
correta:0,
explicacao:"A placa alerta para atenção próxima a escolas."
},

{
pergunta:"🚗 Em dias de chuva o motorista deve:",
respostas:[
"Aumentar a velocidade",
"Diminuir a velocidade",
"Frear bruscamente"
],
correta:0,
explicacao:"Reduzir a velocidade aumenta a segurança."
},

{
pergunta:"🚲 O capacete é importante porque:",
respostas:[
"Protege a cabeça",
"Decoração",
"Melhora velocidade"
],
correta:0,
explicacao:"Capacete ajuda a reduzir lesões."
},

{
pergunta:"🚦 O que significa luz amarela?",
respostas:[
"Estacionar",
"Acelerar",
"Atenção"
],
correta:0,
explicacao:"Amarelo indica atenção e preparação para parar."
}

];

function iniciarJogo(){

nomeJogador=
document
.getElementById("nome")
.value
.trim();

if(nomeJogador===""){

alert("Digite seu nome");

return;

}

document
.getElementById("inicio")
.style.display="none";

document
.getElementById("quiz")
.style.display="block";

mostrarPergunta();

}

function mostrarPergunta(){

if(atual>=perguntas.length){

mostrarCertificado();

return;

}

document
.getElementById("pergunta")
.innerHTML=
perguntas[atual].pergunta;

const area=
document.getElementById("respostas");

area.innerHTML="";

const info=
document.createElement("p");

info.id="info";

area.appendChild(info);

perguntas[atual]
.respostas
.forEach((resp,i)=>{

let btn=
document.createElement("button");

btn.innerHTML=resp;

btn.onclick=()=>{

if(i===perguntas[atual].correta){

pontos+=0;

}

document
.getElementById("pontuacao")
.innerHTML=
"Pontos: "+pontos;

info.innerHTML=
perguntas[atual].explicacao;

setTimeout(()=>{

atual++;

mostrarPergunta();

},1500);

};

area.appendChild(btn);

});

}

function mostrarCertificado(){

document
.getElementById("quiz")
.style.display=
"none";

document
.getElementById("certificado")
.style.display=
"block";

document
.getElementById("nomeFinal")
.innerHTML=
nomeJogador;

document
.getElementById("pontosFinal")
.innerHTML=
"Pontuação Final: "+pontos;

let medalha=
"🥉 Aprendiz do Trânsito";

if(pontos>=60){

medalha=
"🥈 Protetor das Ruas";

}

if(pontos>=90){

medalha=
"🥇 Herói do Trânsito";

}

document
.getElementById("medalha")
.innerHTML=
medalha;

}

function reiniciar(){

location.reload();

}
