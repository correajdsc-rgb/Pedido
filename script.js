/* ==================================================
   PEDIDO DE NAMORO
   RELEASE 0.2.2
   Sistema de motivos
   ================================================== */

// ------------------------------------------------------------
// Motivos para namorar comigo
// ------------------------------------------------------------

const reasons = [

    {
        text: "Eu te faço rir e tenho uma infinidade de piadinhas",
        image: "motivos para namorar comigo/Motivo1.jpg"
    },

    {
        text: "Eu sou muito paciente, então consigo lidar com seus surtos",
        image: "motivos para namorar comigo/Motivo2.jpg"
    },

    {
        text: "Você me acha nerdzinha e disse que esse é seu tipo",
        image: "motivos para namorar comigo/Motivo3.png"
    },

    {
        text: "Faça uma boa ação e namore com uma LCD (lésbica com deficiência)",
        image: "motivos para namorar comigo/Motivo4.jpg"
    },

    {
        text: "Porque eu gosto de apanhar de você",
        image: "motivos para namorar comigo/Motivo5.jpg"
    },

    {
        text: "Eu vou me interessar pelos seus interesses e seus amigos porque eles são importantes para você",
        image: "motivos para namorar comigo/Motivo7.jpg"
    },

    {
        text: "Vou me esforçar para que os nossos encontros não sejam só ficar em casa e ir ver jogos",
        image: "motivos para namorar comigo/Motivo8.jpg"
    },

    {
        text: "Jamais vou pedir pra você abrir mão da sua individualidade e dos seus gostos, eu quero que você tenha momentos que são só seus",
        image: "motivos para namorar comigo/Motivo9.jpg"
    },

    {
        text: "Não sou ciumenta, o que não diminui o que eu sinto por você, apenas que confio nas suas atitudes e que se um dia você não estiver mais feliz comigo, nós vamos conversar, não ter uma traição",
        image: "motivos para namorar comigo/Motivo10.jpg"
    },

    {
        text: "Eu to apaixonada por você, né, foda...",
        image: "motivos para namorar comigo/Motivo6.jpg"
    }

];


// ------------------------------------------------------------
// Motivos para não namorar comigo
// ------------------------------------------------------------

const reasonsNo = [

    {
        text: "Não sou combativa, então vou chorar se você levantar a voz para mim",
        image: "motivos para não namorar comigo/Motivo1.jpg"
    },

    {
        text: "Quando eu estou muito estressada eu me afasto sem avisar",
        image: "motivos para não namorar comigo/Motivo2.jpg"
    },

    {
        text: "Sempre vou discutir sobre quem vai pagar a conta",
        image: "motivos para não namorar comigo/Motivo3.jpg"
    },

    {
        text: "Sou carinhosa mas não sei pedir afeto e vou ficar te olhando assim até você entender que quero você perto",
        image: "motivos para não namorar comigo/Motivo4.jpg"
    },

    {
        text: "Minha alimentação é questionável (vício em Monster)",
        image: "motivos para não namorar comigo/Motivo5.jpg"
    },

    {
        text: "Vou querer te contar sobre os meus interesses enquanto eu te encaro exatamente assim",
        image: "motivos para não namorar comigo/Motivo6.jpg"
    },

    {
        text: "Tenho problemas em regular meu sono e você já disse que eu ronco baixinho",
        image: "motivos para não namorar comigo/Motivo7.jpg"
    },

    {
        text: "Claramente tenho algum trauma com abandono que nunca foi tratado (não é o único problema psicológico)",
        image: "motivos para não namorar comigo/Motivo8.jpg"
    },

    {
        text: "Eu sou caseira e sei que você gosta de sair para conhecer novos lugares, bares, restaurantes, então nossa ideia de descontração pode não ser igual muitas vezes",
        image: "motivos para não namorar comigo/Motivo9.jpg"
    }

];


// ------------------------------------------------------------
// Respostas ao botão NÃO
// ------------------------------------------------------------

const noResponses = [

    {
        text: "Acho que você clicou no botão errado, é o da esquerda 😬",
        image: "Imagens de Gatinhos - não e sim/N1.jpg"
    },

    {
        text: "Anna, botão errado!",
        image: "Imagens de Gatinhos - não e sim/N2.jpg"
    },

    {
        text: "Três vezes já é padrão, não coincidência",
        image: "Imagens de Gatinhos - não e sim/N3.jpg"
    },

    {
        text: "To começando a achar que você não quer namorar comigo",
        image: "Imagens de Gatinhos - não e sim/N4.jpg"
    },

    {
        text: "NAMORA COMIGO POR FAVOR TO PEDINDO COM JEITINHO",
        image: "Imagens de Gatinhos - não e sim/N5.jpg"
    },

    {
        text: "Só me maltrata, só me humilha",
        image: "Imagens de Gatinhos - não e sim/N6.jpg"
    },

    {
        text: "CHEGA. Você PERDEU seu direito de escolha",
        image: "Imagens de Gatinhos - não e sim/N7.jpg"
    }

];

// ------------------------------------------------------------
// Respostas ao botão SIM
// ------------------------------------------------------------

const yesResponses = [

    {
        text: "Agora você é MINHA MULHER",
        image: "Imagens de Gatinhos - não e sim/SIM1.gif"
    },

    {
        text: "Obrigada por mudar de ideia 🥺",
        image: "Imagens de Gatinhos - não e sim/SIM2.jpg"
    },

    {
        text: "Que bom que você percebeu que essa era a única opção 😁",
        image: "Imagens de Gatinhos - não e sim/SIM3.jpg"
    }

];


// ============================================================
// ELEMENTOS DO HTML
// ============================================================


// ------------------------------------------------------------
// Modal dos motivos para SIM
// ------------------------------------------------------------

const reasonsYesButton =
    document.getElementById("reasons-yes-button");

const reasonsModal =
    document.getElementById("reasons-modal");

const closeReasonsModal =
    document.getElementById("close-reasons-modal");

const reasonTitle =
    document.getElementById("reason-title");

const reasonText =
    document.getElementById("reason-text");

const reasonImage =
    document.getElementById("reason-image");

const reasonCounter =
    document.getElementById("reason-counter");

const previousReason =
    document.getElementById("previous-reason");

const nextReason =
    document.getElementById("next-reason");


// ------------------------------------------------------------
// Modal dos motivos para NÃO
// ------------------------------------------------------------

const reasonsNoButton =
    document.getElementById("reasons-no-button");

const reasonsNoModal =
    document.getElementById("reasons-no-modal");

const closeReasonsNoModal =
    document.getElementById("close-reasons-no-modal");

const reasonNoTitle =
    document.getElementById("reason-no-title");

const reasonNoText =
    document.getElementById("reason-no-text");

const reasonNoImage =
    document.getElementById("reason-no-image");

const reasonNoCounter =
    document.getElementById("reason-no-counter");

const previousReasonNo =
    document.getElementById("previous-reason-no");

const nextReasonNo =
    document.getElementById("next-reason-no");


// ------------------------------------------------------------
// Botões central
// ------------------------------------------------------------

const noButton =
    document.getElementById("no-button");

const yesButton =
    document.getElementById("yes-button");


// ------------------------------------------------------------
// Modal das respostas ao NÃO
// ------------------------------------------------------------

const noResponseModal =
    document.getElementById("no-response-modal");

const closeNoResponseModal =
    document.getElementById("close-no-response-modal");

const noResponseTitle =
    document.getElementById("no-response-title");

const noResponseText =
    document.getElementById("no-response-text");

const noResponseImage =
    document.getElementById("no-response-image");

// ------------------------------------------------------------
// Modal das respostas ao SIM
// ------------------------------------------------------------

const yesResponseModal =
    document.getElementById("yes-response-modal");

const closeYesResponseModal =
    document.getElementById("close-yes-response-modal");

const yesResponseTitle =
    document.getElementById("yes-response-title");

const yesResponseText =
    document.getElementById("yes-response-text");

const yesResponseImage =
    document.getElementById("yes-response-image");


// ============================================================
// ESTADO
// ============================================================

let currentReason = 0;

let currentReasonNo = 0;

let noClickCount = 0;

let noButtonIsRunning = false;

let yesButtonScale = 1;

let yesWasSelected = false;


// ============================================================
// MOTIVOS PARA NAMORAR COMIGO
// ============================================================

function updateReason() {

    const reason = reasons[currentReason];

    reasonTitle.textContent =
        `Motivo #${currentReason + 1}`;

    reasonText.textContent =
        reason.text;

    reasonImage.src =
        reason.image;

    reasonCounter.textContent =
        `${currentReason + 1} / ${reasons.length}`;

}


// ============================================================
// MOTIVOS PARA NÃO NAMORAR COMIGO
// ============================================================

function updateReasonNo() {

    const reason = reasonsNo[currentReasonNo];

    reasonNoTitle.textContent =
        `Motivo #${currentReasonNo + 1}`;

    reasonNoText.textContent =
        reason.text;

    reasonNoImage.src =
        reason.image;

    reasonNoCounter.textContent =
        `${currentReasonNo + 1} / ${reasonsNo.length}`;

}


// ============================================================
// RESPOSTAS AO BOTÃO NÃO
// ============================================================

function updateNoResponse(index) {

    const response =
        noResponses[index];

    noResponseTitle.textContent =
        `Resposta #${index + 1}`;

    noResponseText.textContent =
        response.text;

    noResponseImage.src =
        response.image;

}

// ============================================================
// RESPOSTA AO BOTÃO SIM
// ============================================================

function updateYesResponse() {

    let response;


    // --------------------------------------------------------
    // SIM de primeira
    // --------------------------------------------------------

    if (noClickCount === 0) {

        response = yesResponses[0];

    }


    // --------------------------------------------------------
    // SIM depois de 1 até 6 cliques no NÃO
    // --------------------------------------------------------

    else if (noClickCount < 7) {

        response = yesResponses[1];

    }


    // --------------------------------------------------------
    // SIM depois de 7 ou mais cliques no NÃO
    // --------------------------------------------------------

    else {

        response = yesResponses[2];

    }


    // Atualiza o modal

    yesResponseTitle.textContent =
        response.text;

    yesResponseText.textContent =
        "";

    yesResponseImage.src =
        response.image;

}


// ============================================================
// ABRIR MODAL — MOTIVOS PARA SIM
// ============================================================

reasonsYesButton.addEventListener(
    "click",
    function () {

        currentReason = 0;

        updateReason();

        reasonsModal.classList.add("active");

    }
);


// ============================================================
// FECHAR MODAL — MOTIVOS PARA SIM
// ============================================================

closeReasonsModal.addEventListener(
    "click",
    function () {

        reasonsModal.classList.remove("active");

    }
);


// ============================================================
// CLIQUE FORA DO MODAL — MOTIVOS PARA SIM
// ============================================================

reasonsModal.addEventListener(
    "click",
    function (event) {

        if (event.target === reasonsModal) {

            reasonsModal.classList.remove("active");

        }

    }
);


// ============================================================
// MOTIVO ANTERIOR — SIM
// ============================================================

previousReason.addEventListener(
    "click",
    function () {

        currentReason--;

        if (currentReason < 0) {

            currentReason =
                reasons.length - 1;

        }

        updateReason();

    }
);


// ============================================================
// PRÓXIMO MOTIVO — SIM
// ============================================================

nextReason.addEventListener(
    "click",
    function () {

        currentReason++;

        if (currentReason >= reasons.length) {

            currentReason = 0;

        }

        updateReason();

    }
);


// ============================================================
// ABRIR MODAL — MOTIVOS PARA NÃO
// ============================================================

reasonsNoButton.addEventListener(
    "click",
    function () {

        currentReasonNo = 0;

        updateReasonNo();

        reasonsNoModal.classList.add("active");

    }
);


// ============================================================
// FECHAR MODAL — MOTIVOS PARA NÃO
// ============================================================

closeReasonsNoModal.addEventListener(
    "click",
    function () {

        reasonsNoModal.classList.remove("active");

    }
);


// ============================================================
// CLIQUE FORA DO MODAL — MOTIVOS PARA NÃO
// ============================================================

reasonsNoModal.addEventListener(
    "click",
    function (event) {

        if (event.target === reasonsNoModal) {

            reasonsNoModal.classList.remove("active");

        }

    }
);


// ============================================================
// MOTIVO ANTERIOR — NÃO
// ============================================================

previousReasonNo.addEventListener(
    "click",
    function () {

        currentReasonNo--;

        if (currentReasonNo < 0) {

            currentReasonNo =
                reasonsNo.length - 1;

        }

        updateReasonNo();

    }
);


// ============================================================
// PRÓXIMO MOTIVO — NÃO
// ============================================================

nextReasonNo.addEventListener(
    "click",
    function () {

        currentReasonNo++;

        if (currentReasonNo >= reasonsNo.length) {

            currentReasonNo = 0;

        }

        updateReasonNo();

    }
);


// ============================================================
// BOTÃO NÃO CENTRAL
// ============================================================

noButton.addEventListener(
    "click",
    function () {

        // ----------------------------------------------------
        // SE O SIM JÁ FOI ESCOLHIDO
        // ----------------------------------------------------

        if (yesWasSelected) {

            // Usa a resposta 7
            const finalResponse =
                noResponses[6];

            // Coloca a imagem do N7
            noResponseImage.src =
                finalResponse.image;

            // Não mostra "Resposta #7"
            noResponseTitle.textContent =
                "";

            // Mostra apenas a frase do N7
            noResponseText.textContent =
                finalResponse.text;

            // Abre o popup
            noResponseModal.classList.add("active");

            return;
        }


        // ----------------------------------------------------
        // COMPORTAMENTO NORMAL DO NÃO
        // ----------------------------------------------------

        noClickCount++;


        if (noClickCount <= noResponses.length) {

            updateNoResponse(noClickCount - 1);

            noResponseModal.classList.add("active");

        }


        // Depois do 7º clique, começa a fugir
        if (noClickCount >= noResponses.length) {

            noButtonIsRunning = true;

        }

    }
);


// ============================================================
// FECHAR MODAL — RESPOSTAS AO NÃO
// ============================================================

closeNoResponseModal.addEventListener(
    "click",
    function () {

        noResponseModal.classList.remove("active");

    }
);


// ============================================================
// CLIQUE FORA DO MODAL — RESPOSTAS AO NÃO
// ============================================================

noResponseModal.addEventListener(
    "click",
    function (event) {

        if (event.target === noResponseModal) {

            noResponseModal.classList.remove("active");

        }

    }
);

// ============================================================
// POSIÇÕES SEGURAS DO BOTÃO NÃO
// ============================================================

const noButtonPositions = [

    { x: 10, y: 15 },  // superior esquerdo
    { x: 75, y: 15 },  // superior direito
    { x: 10, y: 70 },  // inferior esquerdo
    { x: 75, y: 70 },  // inferior direito
    { x: 15, y: 40 },  // meio esquerdo
    { x: 75, y: 40 },  // meio direito

];

let noButtonPositionIndex = 0;


// ============================================================
// MOVER O BOTÃO NÃO
// ============================================================

function moveNoButton() {

    // Só começa a fugir depois do 7º clique
    if (!noButtonIsRunning) {
        return;
    }

    // Faz o botão sair do fluxo normal da página
    noButton.style.position = "fixed";

    // Escolhe a próxima posição
    const position =
        noButtonPositions[noButtonPositionIndex];

    // Aplica a posição
    noButton.style.left =
        `${position.x}%`;

    noButton.style.top =
        `${position.y}%`;

    // Vai para a próxima posição
    noButtonPositionIndex++;

    // Quando chegar ao final da lista,
    // volta para a primeira posição
    if (
        noButtonPositionIndex >=
        noButtonPositions.length
    ) {

        noButtonPositionIndex = 0;

    }

}

// ============================================================
// INTERAÇÃO COM O BOTÃO NÃO
// ============================================================

noButton.addEventListener(
    "mouseenter",
    function () {

        // ----------------------------------------------------
        // O SIM só começa a crescer depois do 7º clique
        // ----------------------------------------------------

        if (noClickCount >= noResponses.length) {

            yesButtonScale += 0.15;

            yesButton.style.transform =
                `scale(${yesButtonScale})`;

        }


        // ----------------------------------------------------
        // O NÃO só começa a fugir depois do 7º clique
        // ----------------------------------------------------

        moveNoButton();

    }
);

// ============================================================
// BOTÃO SIM
// ============================================================

yesButton.addEventListener(
    "click",
    function () {

        // Registra que o SIM foi escolhido
        yesWasSelected = true;

        // Para o botão NÃO de fugir
        noButtonIsRunning = false;

        // Mostra a resposta correspondente
        // à quantidade de cliques no NÃO
        updateYesResponse();

        yesResponseModal.classList.add("active");

    }
);

// ============================================================
// FECHAR MODAL — RESPOSTA AO SIM
// ============================================================

closeYesResponseModal.addEventListener(
    "click",
    function () {

        yesResponseModal.classList.remove("active");

    }
);

// ============================================================
// CLIQUE FORA DO MODAL — RESPOSTA AO SIM
// ============================================================

yesResponseModal.addEventListener(
    "click",
    function (event) {

        if (event.target === yesResponseModal) {

            yesResponseModal.classList.remove("active");

        }

    }
);