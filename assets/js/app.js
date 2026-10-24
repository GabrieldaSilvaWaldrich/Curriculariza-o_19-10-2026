/**
 * Aventura do Saber - Lógica do jogo (estado, narração, navegação)
 * Depende de assets/js/banco-perguntas.js (constante QuestionBank).
 */

/**
 * 1. CONFIGURAÇÃO DE IMAGENS E ESTADO GLOBAL DA APLICAÇÃO
 */
const AppState = {
    player: {
        name: '',
        school: '',
        age: ''
    },
    currentLevel: 'facil',
    currentQuestions: [], // Armazena as questões embaralhadas do nível atual
    questionIndex: 0,
    score: 0,
    selectedSyllables: [],
    speechSynthesis: window.speechSynthesis || null
};

/**
 * FUNÇÃO UTILITÁRIA PARA EMBARALHAR ARRAYS (Algoritmo Fisher-Yates)
 */
function shuffleArray(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

/**
 * 2. Banco de perguntas
 * Movido para assets/js/banco-perguntas.js (carregado antes deste arquivo).
 */

/**
 * 3. gerenciador de rotas / Navegaçao entre telas
 */
function showScreen(screenId) {
    const screens = ['screen-welcome', 'screen-levels', 'screen-game', 'screen-correct', 'screen-wrong', 'screen-finish'];
    screens.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            if (id === screenId) {
                el.classList.remove('hidden');
            } else {
                el.classList.add('hidden');
            }
        }
    });
}

function startGame() {
    const nameInput = document.getElementById('player-name').value.trim();
    const schoolInput = document.getElementById('player-school').value.trim();
    const ageInput = document.getElementById('player-age').value.trim();

    if (!nameInput) return;

    AppState.player.name = nameInput;
    AppState.player.school = schoolInput;
    AppState.player.age = ageInput;

    showLevelSelection();
}

function showLevelSelection() {
    showScreen('screen-levels');
}

function selectLevel(levelKey) {
    AppState.currentLevel = levelKey;
    AppState.questionIndex = 0;
    AppState.score = 0;
    
    // 1. Clona as perguntas do nível selecionado para não alterar o banco original
    let questionsForLevel = JSON.parse(JSON.stringify(QuestionBank[levelKey]));
    
    // 2. Embaralha a ordem das perguntas
    AppState.currentQuestions = shuffleArray(questionsForLevel);
    
    // 3. Embaralha a ordem das opções/respostas dentro de cada pergunta
    AppState.currentQuestions.forEach(q => {
        if (q.options && Array.isArray(q.options)) {
            q.options = shuffleArray(q.options);
        }
    });

    loadQuestion();
}

/**
 * 4. LÓGICA DE NARRATIVA EM ÁUDIO E CARREGAMENTO DE QUESTÃO
 */
function loadQuestion() {
    const levelQuestions = AppState.currentQuestions;
    
    if (!levelQuestions || AppState.questionIndex >= levelQuestions.length) {
        const scoreDisplay = document.getElementById('final-score-display');
        if (scoreDisplay) {
            scoreDisplay.innerText = `Você acertou ${AppState.score} de ${levelQuestions ? levelQuestions.length : 0}!`;
        }
        showScreen('screen-finish');
        speakText(`Parabéns! Você terminou o nível e acertou ${AppState.score} perguntas!`);
        return;
    }

    const currentQ = levelQuestions[AppState.questionIndex];
    if (!currentQ) return;

    showScreen('screen-game');
    AppState.selectedSyllables = [];

    const playerInfo = document.getElementById('game-player-info');
    if (playerInfo) playerInfo.innerText = `Jogador: ${AppState.player.name || 'Jogador'}`;
    
    const badge = document.getElementById('game-level-badge');
    if (badge) badge.innerText = AppState.currentLevel.toUpperCase();

    const questionText = document.getElementById('question-text');
    if (questionText) questionText.innerText = currentQ.text || '';

    renderVisualContainer(currentQ);
    renderAnswersContainer(currentQ);

    speakCurrentQuestion();
}

function speakCurrentQuestion() {
    const levelQuestions = AppState.currentQuestions;
    if (!levelQuestions || AppState.questionIndex < 0 || AppState.questionIndex >= levelQuestions.length) {
        return;
    }
    
    const currentQ = levelQuestions[AppState.questionIndex];
    if (!currentQ) return;

    let textToSpeak = currentQ.audioTriggerText || currentQ.text;
    if (textToSpeak) {
        speakText(textToSpeak);
    }
}

function speakText(text) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'pt-BR';
        utterance.rate = 0.9;
        window.speechSynthesis.speak(utterance);
    }
}

function playAudioFile(path) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
    }

    if (!path || path.includes('caminho/para/seu/audio')) {
        speakText('au au!');
        console.warn("Áudio real não configurado. Usando voz sintética temporária.");
        return;
    }
    
    const audio = new Audio(path);
    audio.play().catch(e => console.error("Erro ao tentar tocar o áudio:", e));
}

function renderVisualContainer(q) {
    const container = document.getElementById('question-visual-container');
    container.innerHTML = '';

    if (q.id === 'f1') {
        container.innerHTML = `
            <button onclick="playAudioFile('${q.audioFile}')" class="btn-red-pill px-6 py-2.5 rounded-full font-bold text-sm tracking-wider flex items-center gap-2">
                <img src="assets/img/som.png" alt="Som" class="w-5 h-5">
                <span>OUVIR SOM</span>
            </button>
        `;
    } 
    else if (q.visualImage) {
        container.innerHTML = `
            <div class="p-2 bg-gray-50 rounded-2xl border border-gray-200">
                <img src="${q.visualImage}" alt="Imagem Ilustrativa da Pergunta" class="max-h-40 max-w-full rounded-xl object-contain">
            </div>
        `;
    }
}

function renderAnswersContainer(q) {
    const container = document.getElementById('answers-container');
    container.innerHTML = '';

    if (q.type === 'vertical-buttons') {
        const wrapper = document.createElement('div');
        wrapper.className = 'flex flex-col gap-3 w-full max-w-xs mx-auto';

        q.options.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'btn-red-pill w-full py-3 px-4 rounded-full text-base font-extrabold tracking-wider uppercase flex items-center justify-center gap-3';
            
            let imgHtml = '';
            if (opt.image) {
                imgHtml = `<img src="${opt.image}" alt="${opt.label}" class="w-8 h-8 rounded-full object-cover bg-white p-0.5">`;
            }
            
            btn.innerHTML = `${imgHtml} <span>${opt.label}</span>`;
            btn.onclick = () => checkAnswer(opt.isCorrect);
            wrapper.appendChild(btn);
        });

        container.appendChild(wrapper);
    }

    else if (q.type === 'grid-2x2') {
        const wrapper = document.createElement('div');
        wrapper.className = 'grid grid-cols-2 gap-4 w-full max-w-sm mx-auto';

        q.options.forEach(opt => {
            const card = document.createElement('div');
            card.className = 'grid-card-option p-4 flex flex-col items-center justify-center cursor-pointer min-h-[120px]';
            
            let imgHtml = `<img src="${opt.image || 'https://placehold.co/100x100/e2e8f0/333333?text=Imagem'}" alt="${opt.label}" class="w-16 h-16 object-contain mb-2 option-img">`;

            card.innerHTML = `
                ${imgHtml}
                <span class="font-extrabold text-gray-700 text-sm uppercase">${opt.label}</span>
            `;
            card.onclick = () => checkAnswer(opt.isCorrect);
            wrapper.appendChild(card);
        });

        container.appendChild(wrapper);
    }

    else if (q.type === 'horizontal-numbers') {
        const wrapper = document.createElement('div');
        wrapper.className = 'flex justify-center gap-4 w-full';

        q.options.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'btn-blue-level font-extrabold text-2xl w-16 h-16 rounded-2xl flex items-center justify-center transition-all hover:scale-105';
            btn.innerText = opt.label;
            btn.onclick = () => checkAnswer(opt.isCorrect);
            wrapper.appendChild(btn);
        });

        container.appendChild(wrapper);
    }

    else if (q.type === 'syllable-builder') {
        const wrapper = document.createElement('div');
        wrapper.className = 'flex flex-col items-center gap-4 w-full';

        const resultBox = document.createElement('div');
        resultBox.id = 'syllable-display';
        resultBox.className = 'min-h-[50px] w-full max-w-xs bg-gray-100 border-2 border-dashed border-gray-300 rounded-xl flex items-center justify-center gap-2 p-2 text-xl font-black text-blue-600';
        resultBox.innerText = 'Toque nas sílabas...';

        const syllablesGrid = document.createElement('div');
        syllablesGrid.className = 'grid grid-cols-2 gap-3 w-full max-w-xs';

        q.options.forEach(syl => {
            const btn = document.createElement('button');
            btn.className = 'bg-purple-500 hover:bg-purple-600 text-white font-black text-xl py-3 rounded-xl shadow-md transition-all active:scale-95';
            btn.innerText = syl;
            btn.onclick = () => handleSyllableClick(syl, q);
            syllablesGrid.appendChild(btn);
        });

        wrapper.appendChild(resultBox);
        wrapper.appendChild(syllablesGrid);
        container.appendChild(wrapper);
    }
}

function handleSyllableClick(syl, q) {
    AppState.selectedSyllables.push(syl);
    const display = document.getElementById('syllable-display');
    display.innerText = AppState.selectedSyllables.join(' - ');

    speakText(syl);

    if (AppState.selectedSyllables.length === q.targetSyllables.length) {
        const isMatch = AppState.selectedSyllables.every((val, index) => val === q.targetSyllables[index]);
        setTimeout(() => {
            checkAnswer(isMatch);
        }, 500);
    }
}

function checkAnswer(isCorrect) {
    if (isCorrect) {
        AppState.score++;
        showScreen('screen-correct');
        speakText('Muito bem! Você acertou!');
    } else {
        showScreen('screen-wrong');
        speakText('Quase! Vamos para a próxima!');
    }
}

function nextQuestion() {
    AppState.questionIndex++;
    loadQuestion();
}

function retryQuestion() {
    AppState.selectedSyllables = [];
    loadQuestion();
}

window.onload = function() {
    showScreen('screen-welcome');
};
