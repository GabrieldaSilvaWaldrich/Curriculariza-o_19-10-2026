/**
 * Aventura do Saber - Banco de perguntas
 * Este arquivo contém APENAS os dados das questões.
 * Deve ser carregado ANTES de app.js (que usa a constante QuestionBank).
 */

/**
 * 2. BANCO DE DADOS COMPLETO DE PERGUNTAS COM CAMINHOS DE IMAGENS
 * SINALIZAÇÃO DE CAMINHOS: Cada elemento possui um comentário explicativo
 * indicando onde você deve inserir o caminho das suas imagens locais ou hospedadas.
 */
const QuestionBank = {
    facil: [
        {
            id: 'f1',
            text: 'Qual animal faz esse som?',
            audioFile: 'caminho/para/seu/audio/cachorro.mp3', // <-- CAMINHO DO ÁUDIO: Insira aqui o caminho para o arquivo mp3/wav do latido
            type: 'vertical-buttons',
            options: [
                { 
                    label: 'GATO', 
                    image: 'https://placehold.co/100x100/e2e8f0/333333?text=Gato', // <-- CAMINHO DA IMAGEM: ex: 'imagens/gato.png'
                    isCorrect: false 
                },
                { 
                    label: 'CACHORRO', 
                    image: 'https://placehold.co/100x100/e2e8f0/333333?text=Cachorro', // <-- CAMINHO DA IMAGEM: ex: 'imagens/cachorro.png'
                    isCorrect: true 
                },
                { 
                    label: 'PASSARINHO', 
                    image: 'https://placehold.co/100x100/e2e8f0/333333?text=Passarinho', // <-- CAMINHO DA IMAGEM: ex: 'imagens/passarinho.png'
                    isCorrect: false 
                }
            ]
        },
        {
            id: 'f2',
            text: 'Qual dessas figuras começa com o som de AAAA?',
            type: 'grid-2x2',
            options: [
                { 
                    label: 'Abelha', 
                    image: 'https://placehold.co/120x120/e2e8f0/333333?text=Abelha', // <-- CAMINHO DA IMAGEM: ex: 'imagens/abelha.png'
                    isCorrect: true 
                },
                { 
                    label: 'Bola', 
                    image: 'https://placehold.co/120x120/e2e8f0/333333?text=Bola', // <-- CAMINHO DA IMAGEM: ex: 'imagens/bola.png'
                    isCorrect: false 
                },
                { 
                    label: 'Carro', 
                    image: 'https://placehold.co/120x120/e2e8f0/333333?text=Carro', // <-- CAMINHO DA IMAGEM: ex: 'imagens/carro.png'
                    isCorrect: false 
                },
                { 
                    label: 'Barco', 
                    image: 'https://placehold.co/120x120/e2e8f0/333333?text=Barco', // <-- CAMINHO DA IMAGEM: ex: 'imaqgens/carro.png'
                    isCorrect: false 
                }
            ]
        },
        {
            id: 'f3',
            text: 'Quem está EMBAIXO da mesa?',
            visualImage: 'https://placehold.co/300x160/f1f5f9/333333?text=Gato+na+mesa+e+Cachorro+embaixo', // <-- CAMINHO DA IMAGEM DE APOIO
            type: 'vertical-buttons',
            options: [
                { 
                    label: 'GATO', 
                    image: 'https://placehold.co/100x100/e2e8f0/333333?text=Gato', // <-- CAMINHO DA IMAGEM
                    isCorrect: false 
                },
                { 
                    label: 'CACHORRO', 
                    image: 'https://placehold.co/100x100/e2e8f0/333333?text=Cachorro', // <-- CAMINHO DA IMAGEM
                    isCorrect: true 
                }
            ]
        },
        {
            id: 'f4',
            text: 'Toque no animal MAIOR.',
            type: 'grid-2x2',
            options: [
                { 
                    label: 'ELEFANTE', 
                    image: 'https://placehold.co/120x120/e2e8f0/333333?text=Elefante', // <-- CAMINHO DA IMAGEM
                    isCorrect: true 
                },
                { 
                    label: 'RATO', 
                    image: 'https://placehold.co/120x120/e2e8f0/333333?text=Rato', // <-- CAMINHO DA IMAGEM
                    isCorrect: false 
                },
                { 
                    label: 'GATO', 
                    image: 'https://placehold.co/120x120/e2e8f0/333333?text=Gato', // <-- CAMINHO DA IMAGEM
                    isCorrect: false 
                },
                { 
                    label: 'CAVALO', 
                    image: 'https://placehold.co/120x120/e2e8f0/333333?text=Cavalo', // <-- CAMINHO DA IMAGEM
                    isCorrect: false 
                }
            ]
        },
        {
            id: 'f5',
            text: 'Quantas maçãs temos aqui?',
            visualImage: 'https://placehold.co/260x120/f1f5f9/333333?text=3+Macas+Vermelhas', // <-- CAMINHO DA IMAGEM DA CENA DAS MAÇÃS
            type: 'horizontal-numbers',
            options: [
                { label: '1', isCorrect: false },
                { label: '2', isCorrect: false },
                { label: '3', isCorrect: true }
            ]
        },
        {
            id: 'f6',
            text: 'Essa fatia de pizza parece com qual forma?',
            visualImage: 'https://placehold.co/200x150/f1f5f9/333333?text=Fatia+de+Pizza', // <-- CAMINHO DA IMAGEM DA PIZZA
            type: 'grid-2x2',
            options: [
                { 
                    label: 'Círculo', 
                    image: 'https://placehold.co/100x100/e2e8f0/333333?text=Circulo', // <-- CAMINHO DA IMAGEM
                    isCorrect: false 
                },
                { 
                    label: 'Triângulo', 
                    image: 'https://placehold.co/100x100/e2e8f0/333333?text=Triangulo', // <-- CAMINHO DA IMAGEM
                    isCorrect: true 
                },
                { 
                    label: 'Quadrado', 
                    image: 'https://placehold.co/100x100/e2e8f0/333333?text=Quadrado', // <-- CAMINHO DA IMAGEM
                    isCorrect: false 
                }
            ]
        },
        {
            id: 'f7',
            text: 'Estoure o balão AZUL.',
            type: 'grid-2x2',
            options: [
                { 
                    label: 'Vermelho', 
                    image: 'https://placehold.co/100x100/ef4444/ffffff?text=Balao+Vermelho', // <-- CAMINHO DA IMAGEM
                    isCorrect: false 
                },
                { 
                    label: 'Azul', 
                    image: 'https://placehold.co/100x100/3b82f6/ffffff?text=Balao+Azul', // <-- CAMINHO DA IMAGEM
                    isCorrect: true 
                },
                { 
                    label: 'Roxo', 
                    image: 'https://placehold.co/100x100/a855f7/ffffff?text=Balao+Roxo', // <-- CAMINHO DA IMAGEM
                    isCorrect: false 
                },
                { 
                    label: 'Amarelo', 
                    image: 'https://placehold.co/100x100/eab308/ffffff?text=Balao+Amarelo', // <-- CAMINHO DA IMAGEM
                    isCorrect: false 
                }
            ]
        }
    ],

    medio: [
        {
            id: 'm1',
            text: 'Bata palmas junto com a palavra BO-LA. Quantos pedacinhos ela tem?',
            visualImage: 'assets/img/bola.png',
            type: 'horizontal-numbers',
            options: [
                { label: '1', isCorrect: false },
                { label: '2', isCorrect: true },
                { label: '3', isCorrect: false }
            ]
        },
        {
            id: 'm2',
            text: 'Qual animal começa com o mesmo som de GATO?',
            type: 'grid-2x2',
            options: [
                { 
                    label: 'Galinha', 
                    image: 'assets/img/galinha.png',
                    isCorrect: true 
                },
                { 
                    label: 'Pato', 
                    image: 'assets/img/pato.png',
                    isCorrect: false 
                },
                { 
                    label: 'Sapo', 
                    image: 'assets/img/sapo.png',
                    isCorrect: false 
                }
            ]
        },
        {
            id: 'm3',
            text: 'A criança está NA FRENTE ou ATRÁS da árvore?',
            visualImage: 'assets/img/crianca arvore.png',
            type: 'vertical-buttons',
            options: [
                { label: 'NA FRENTE', isCorrect: false },
                { label: 'ATRÁS', isCorrect: true }
            ]
        },
        {
            id: 'm4',
            text: 'Se você tem uma maçã e ganha mais uma, com quantas você fica?',
            visualImage: 'assets/img/macas.png',
            type: 'horizontal-numbers',
            options: [
                { label: '1', isCorrect: false },
                { label: '2', isCorrect: true },
                { label: '3', isCorrect: false }
            ]
        },
        {
            id: 'm5',
                       text: 'Qual número está faltando?',
                       visualImage: 'assets/img/numeros.png',
                       type: 'horizontal-numbers',
                       options: [
                           { label: '1', isCorrect: false },
                           { label: '3', isCorrect: true },
                           { label: '5', isCorrect: false }
            ]
        },
        {
            id: 'm6',
            text: 'Encontre o animal que é DIFERENTE.',
            visualImage: 'assets/img/cachorrogato.png',
            type: 'vertical-buttons',
            options: [
                { 
                    label: 'CACHORRO', 
                    image: 'assets/img/cachorro.png',
                    isCorrect: false 
                },
                { 
                    label: 'GATO', 
                    image: 'assets/img/gato.png',
                    isCorrect: true 
                }
            ]
        },
        {
            id: 'm7',
            text: 'Qual é a próxima cor dessa sequência?',
            visualImage: 'assets/img/vermelho azul.png',
            type: 'grid-2x2',
            options: [
                { 
                    label: 'Vermelho', 
                    image: 'https://placehold.co/100x100/ef4444/ffffff?text=Vermelho',
                    isCorrect: true 
                },
                { 
                    label: 'Azul', 
                    image: 'https://placehold.co/100x100/3b82f6/ffffff?text=Azul',
                    isCorrect: false 
                },
                { 
                    label: 'Roxo', 
                    image: 'https://placehold.co/100x100/a855f7/ffffff?text=Roxo',
                    isCorrect: false 
                },
                { 
                    label: 'Laranja', 
                    image: 'https://placehold.co/100x100/f97316/ffffff?text=Laranja',
                    isCorrect: false 
                }
            ]
        }
    ],

    dificil: [
        {
            id: 'd1',
            text: 'Toque na figura que rima com PÃO.',
            audioTriggerText: 'O que rima com PÃO?',
            type: 'grid-2x2',
            options: [
                { 
                    label: 'Mão', 
                    image: 'https://placehold.co/120x120/e2e8f0/333333?text=Mao', // <-- CAMINHO DA IMAGEM
                    isCorrect: true 
                },
                { 
                    label: 'Pé', 
                    image: 'https://placehold.co/120x120/e2e8f0/333333?text=Pe', // <-- CAMINHO DA IMAGEM
                    isCorrect: false 
                },
                { 
                    label: 'Gato', 
                    image: 'https://placehold.co/120x120/e2e8f0/333333?text=Gato', // <-- CAMINHO DA IMAGEM
                    isCorrect: false 
                }
            ]
        },
        {
            id: 'd2',
            text: 'Quais pedacinhos formam a palavra BOLA?',
            visualImage: 'https://placehold.co/200x140/f1f5f9/333333?text=Imagem+da+Bola', // <-- CAMINHO DA IMAGEM DA BOLA
            type: 'syllable-builder',
            targetSyllables: ['BO', 'LA'],
            options: ['LA', 'BO', 'CA', 'DA']
        },
        {
            id: 'd3',
            text: 'Qual acontece PRIMEIRO?',
            type: 'grid-2x2',
            options: [
                { 
                    label: 'Semente', 
                    image: 'https://placehold.co/120x120/e2e8f0/333333?text=Semente', // <-- CAMINHO DA IMAGEM
                    isCorrect: true 
                },
                { 
                    label: 'Plantinha', 
                    image: 'https://placehold.co/120x120/e2e8f0/333333?text=Plantinha', // <-- CAMINHO DA IMAGEM
                    isCorrect: false 
                },
                { 
                    label: 'Árvore', 
                    image: 'https://placehold.co/120x120/e2e8f0/333333?text=Arvore', // <-- CAMINHO DA IMAGEM
                    isCorrect: false 
                }
            ]
        },
        {
            id: 'd4',
            text: 'Tínhamos 3 balões, um estourou. Quantos sobraram?',
            visualImage: 'https://placehold.co/260x120/f1f5f9/333333?text=3+Baloes+(1+estourado)', // <-- CAMINHO DA IMAGEM
            type: 'horizontal-numbers',
            options: [
                { label: '1', isCorrect: false },
                { label: '2', isCorrect: true },
                { label: '3', isCorrect: false }
            ]
        },
        {
            id: 'd5',
            text: 'Qual desses se parece com uma ESFERA (redondo)?',
            type: 'grid-2x2',
            options: [
                { 
                    label: 'Dado', 
                    image: 'https://placehold.co/120x120/e2e8f0/333333?text=Dado', // <-- CAMINHO DA IMAGEM
                    isCorrect: false 
                },
                { 
                    label: 'Bola', 
                    image: 'https://placehold.co/120x120/e2e8f0/333333?text=Bola', // <-- CAMINHO DA IMAGEM
                    isCorrect: true 
                }
            ]
        },
        {
            id: 'd6',
            text: 'Qual desses é AZEDO?',
            audioTriggerText: 'Qual desses é AZEDO?',
            type: 'grid-2x2',
            options: [
                { 
                    label: 'LIMÃO', 
                    image: 'https://placehold.co/120x120/e2e8f0/333333?text=LIMAO', // <-- CAMINHO DA IMAGEM
                    isCorrect: true 
                },
                { 
                    label: 'PIMENTA', 
                    image: 'https://placehold.co/120x120/e2e8f0/333333?text=PIMENTA', // <-- CAMINHO DA IMAGEM
                    isCorrect: false 
                },
                { 
                    label: 'BOLO', 
                    image: 'https://placehold.co/120x120/e2e8f0/333333?text=BOLO', // <-- CAMINHO DA IMAGEM
                    isCorrect: false 
                },
                { 
                    label: 'PÃO', 
                    image: 'https://placehold.co/120x120/e2e8f0/333333?text=PAO', // <-- CAMINHO DA IMAGEM
                    isCorrect: false 
                }
            ]
        }
    ]
};
