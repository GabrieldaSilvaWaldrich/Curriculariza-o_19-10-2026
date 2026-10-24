/**
 * Aventura do Saber - Banco de perguntas
 * Este arquivo contém apenas os dados das questões.
 * Deve ser carregado antes de app.js.
 */

const QuestionBank = {
    facil: [
        {
            id: 'f1',
            text: 'Qual animal faz esse som?',
            audioFile: 'caminho/para/seu/audio/cachorro.mp3',
            type: 'vertical-buttons',
            options: [
                {
                    label: 'GATO',
                    image: 'assets/img/gato.png',
                    isCorrect: false
                },
                {
                    label: 'CACHORRO',
                    image: 'assets/img/cachorro.png',
                    isCorrect: true
                },
                {
                    label: 'PASSARINHO',
                    image: 'assets/img/passarinho.png',
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
                    image: 'assets/img/abelha.png',
                    isCorrect: true
                },
                {
                    label: 'Bola',
                    image: 'assets/img/bolas.png',
                    isCorrect: false
                },
                {
                    label: 'Carro',
                    image: 'assets/img/carro.png',
                    isCorrect: false
                },
                {
                    label: 'Barco',
                    image: 'assets/img/barco.png',
                    isCorrect: false
                }
            ]
        },
        {
            id: 'f3',
            text: 'Quem está EMBAIXO da mesa?',
            visualImage: 'assets/img/caogatomesa.png',
            type: 'vertical-buttons',
            options: [
                {
                    label: 'GATO',
                    image: 'assets/img/gato.png',
                    isCorrect: false
                },
                {
                    label: 'CACHORRO',
                    image: 'assets/img/cachorro.png',
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
                    image: 'assets/img/elefante.png',
                    isCorrect: true
                },
                {
                    label: 'RATO',
                    image: 'assets/img/rato.png',
                    isCorrect: false
                },
                {
                    label: 'GATO',
                    image: 'assets/img/gato.png',
                    isCorrect: false
                },
                {
                    label: 'CAVALO',
                    image: 'assets/img/cavalo.png',
                    isCorrect: false
                }
            ]
        },
        {
            id: 'f5',
            text: 'Quantas maçãs temos aqui?',
            visualImage: 'assets/img/3maças.png',
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
            visualImage: 'assets/img/pizza.png',
            type: 'grid-2x2',
            options: [
                {
                    label: 'Círculo',
                    image: 'assets/img/circulo.png',
                    isCorrect: false
                },
                {
                    label: 'Triângulo',
                    image: 'assets/img/triangulo.png',
                    isCorrect: true
                },
                {
                    label: 'Quadrado',
                    image: 'assets/img/quadrado.png',
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
                    image: 'assets/img/balaovermelho.png',
                    isCorrect: false
                },
                {
                    label: 'Azul',
                    image: 'assets/img/balaoazul.png',
                    isCorrect: true
                },
                {
                    label: 'Roxo',
                    image: 'assets/img/balaoroxo.png',
                    isCorrect: false
                },
                {
                    label: 'Amarelo',
                    image: 'assets/img/balaoamarelo.png',
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
                    image: 'assets/img/mao.png',
                    isCorrect: true
                },
                {
                    label: 'Pé',
                    image: 'assets/img/pe.png',
                    isCorrect: false
                },
                {
                    label: 'Gato',
                    image: 'assets/img/gato.png',
                    isCorrect: false
                }
            ]
        },
        {
            id: 'd2',
            text: 'Quais pedacinhos formam a palavra BOLA?',
            visualImage: 'assets/img/bolas.png',
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
                    image: 'assets/img/semente.png',
                    isCorrect: true
                },
                {
                    label: 'Plantinha',
                    image: 'assets/img/muda.jpg',
                    isCorrect: false
                },
                {
                    label: 'Árvore',
                    image: 'assets/img/arvore.png',
                    isCorrect: false
                }
            ]
        },
        {
            id: 'd4',
            text: 'Tínhamos 3 balões, um estourou. Quantos sobraram?',
            visualImage: 'assets/img/baloes.png',
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
                    image: 'assets/img/dado.png',
                    isCorrect: false
                },
                {
                    label: 'Bola',
                    image: 'assets/img/bolas.png',
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
                    image: 'assets/img/limao.png',
                    isCorrect: true
                },
                {
                    label: 'PIMENTA',
                    image: 'assets/img/pimenta.png',
                    isCorrect: false
                },
                {
                    label: 'BOLO',
                    image: 'assets/img/bolo.png',
                    isCorrect: false
                },
                {
                    label: 'PÃO',
                    image: 'assets/img/pao.png',
                    isCorrect: false
                }
            ]
        }
    ]
};
