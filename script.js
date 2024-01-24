"use strict";
//O modo estrito torna mais fácil escrever JavaScript "seguro".
//LINK: https://www.w3schools.com/js/js_strict.asp

var GP=[
    {
        titulo:"Histórias",
        descricao:`Panasonic Avionics enfrentou o desafio da digitalização em meio a uma infra-estrutura centralizada
        em hardware e armazenamento local limitado.</br>
        Ao buscar uma transformação digital, migraram para a Amazon Web Services (AWS) com a ajuda da
        SecureKloud Technologies.`,
        img: "./src/im-hist.jpg"
    },
    {
        titulo:"Motivo",
        descricao:`Com uma infra-estrutura local que gera muitos gastos e buscando melhorar a confiabilidade e a
        redundância de seus bancos de dados, viram na AWS a solução.`,
        img: "./src/im-moti.jpg"
    },
    {
        titulo:"Migração",
        descricao:`Após a migração para a AWS, a Panasonic Avionics pode coletar, analisar e armazenar dados de forma
        mais eficiente e em grande escala.</br>
        Essa migração envolveu 10 TB de dados para a nuvem.`,
        img: "./src/im-migr.jpg"
    },
    {
        titulo:"Benefícios",
        descricao:`Com a nuvem, houve uma gestão mais eficaz dos recursos, liberando fundos para impulsionar outras
        iniciativas cruciais para a empresa.</br>
        Uma redução de 78% nos custos de armazenamento e 86% com gastos em infra-estrutura, são alguns dos
        benefícios de trabalhar com a AWS, além de ficar livre das restrições de data centers locais.`,
        img: "./src/im-bene.jpg"
    },
    {
        titulo:"Segurança",
        descricao:`Fortalecendo as defesas cibernéticas com o Amazon GuardDuty e AWS Security Hub, garantiram
        conformidade com as rigorosas regulamentações do setor.</br>
        Protegendo dados sensíveis com a AWS, cultivaram maior confiança entre passageiros, fabricantes e
        parceiros aéreos.`,
        img: "./src/im-segu.jpg"
    },
    {
        titulo:"Tempo",
        descricao:` Os desenvolvedores experimentaram notável otimização no tempo de implementação de soluções e
        atualizações.</br>
        Com entregas mais rápidas, alcançadas com nuvem, impulsionaram a inovação e aprimorando a eficiência
        operacional.`,
        img: "./src/im-temp.jpg"
    },
    {
        titulo:"Clientes",
        descricao:`A Panasonic Avionics sempre está inovando para entregar a melhor experiência durante o vôo aos seus
        clientes.</br>
        Com uma redução de 20% do tempo de consulta e a segurança que só a AWS é capaz de entregar serviços
        com a excelência que os clientes merecem.`,
        img: "./src/im-clie.jpg"
    },
    {
        titulo:"Mais",
        descricao:`Conheça a história de sucesso atravez do link abaixo:</br></br>
        <a href="https://aws.amazon.com/pt/solutions/case-studies/panasonic-avionics-amazon-aurora-case-study/" title="História de sucesso da Panasonic!">https://aws.amazon.com/pt/solutions/case-studies/panasonic-avionics-amazon-aurora-case-study/</a></br>`,
        img: "./src/im-mais.jpg"
    }
];  

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function inforGP(id){
    const ttGP = document.querySelector("#divGP div h1"),  dsGP = document.querySelector("#divGP div p"), imGP = document.querySelector("#divGP div img"), legGP = document.querySelector("#divGP div figcaption");
    dsGP.style.opacity = ttGP.style.opacity = 0.0;
    ttGP.innerHTML = GP[id].titulo;
    dsGP.innerHTML = GP[id].descricao;
    imGP.src = GP[id].img;
    for (var i = 0.0; i < 1.0; i += 0.1) {
        dsGP.style.opacity = ttGP.style.opacity = "" + i + "";
         await sleep(40);}
}

inforGP(0);