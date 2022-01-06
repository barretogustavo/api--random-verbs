function randomVerbs(request, response){

    const humanDate = new Date();

    response.setHeader('Cache-Control', 's-maxage=20, stale-while-revalidate');

    response.json([
        {currentDate: humanDate.toGMTString()},
        {id:0, name:'To add', traducao:'Adicionar', audio:'audio.mp3',  exemplo:'I want to ask you a question, if you don’t mind.', tradExemplo: 'Eu quero te fazer uma pergunta, se você não se importa.'},
        {id:1, name:'To ask', traducao:'Perguntar', audio:'audio.mp3', exemplo:'I want to ask you a question, if you don’t mind.', tradExemplo: 'Eu quero te fazer uma pergunta, se você não se importa.', simplePast:'asked', simplePastModel:'ask + ed', simplePastTrad:'Perguntou', simplePastExample:'He asked my name.', simplePastExampleTrad:'Ele perguntou meu nome.', simplePastAudio:'spaudio.mp3'}, 
        {id:2, name:'To be', traducao:'Ser/Estar', audio:'audio.mp3',  exemplo:'I want to ask you a question, if you don’t mind.', tradExemplo: 'Eu quero te fazer uma pergunta, se você não se importa.', simplePast:'asked', simplePastModel:'ask + ed', simplePastTrad:'Perguntou', simplePastExample:'He asked my name.', simplePastExampleTrad:'Ele perguntou meu nome.', simplePastAudio:'spaudio.mp3'},
        {id:3, name:'To allow', traducao:'Permitir/Autorizar', audio:'audio.mp3',  exemplo:'I want to ask you a question, if you don’t mind.', tradExemplo: 'Eu quero te fazer uma pergunta, se você não se importa.', simplePast:'asked', simplePastModel:'ask + ed', simplePastTrad:'Perguntou', simplePastExample:'He asked my name.', simplePastExampleTrad:'Ele perguntou meu nome.', simplePastAudio:'spaudio.mp3'},
        {id:4, name:'To appear', traducao:'Aparecer', audio:'audio.mp3',  exemplo:'I want to ask you a question, if you don’t mind.', tradExemplo: 'Eu quero te fazer uma pergunta, se você não se importa.', simplePast:'asked', simplePastModel:'ask + ed', simplePastTrad:'Perguntou', simplePastExample:'He asked my name.', simplePastExampleTrad:'Ele perguntou meu nome.', simplePastAudio:'spaudio.mp3'},
        {id:5, name:'To become', traducao:'Tornar-se', audio:'audio.mp3',  exemplo:'I want to ask you a question, if you don’t mind.', tradExemplo: 'Eu quero te fazer uma pergunta, se você não se importa.', simplePast:'asked', simplePastModel:'ask + ed', simplePastTrad:'Perguntou', simplePastExample:'He asked my name.', simplePastExampleTrad:'Ele perguntou meu nome.', simplePastAudio:'spaudio.mp3'},
        {id:6, name:'To believe', traducao:'Acreditar', audio:'audio.mp3',  exemplo:'I want to ask you a question, if you don’t mind.', tradExemplo: 'Eu quero te fazer uma pergunta, se você não se importa.', simplePast:'asked', simplePastModel:'ask + ed', simplePastTrad:'Perguntou', simplePastExample:'He asked my name.', simplePastExampleTrad:'Ele perguntou meu nome.', simplePastAudio:'spaudio.mp3'},
        {id:7, name:'To build', traducao:'Construir', audio:'audio.mp3',  exemplo:'I want to ask you a question, if you don’t mind.', tradExemplo: 'Eu quero te fazer uma pergunta, se você não se importa.', simplePast:'asked', simplePastModel:'ask + ed', simplePastTrad:'Perguntou', simplePastExample:'He asked my name.', simplePastExampleTrad:'Ele perguntou meu nome.', simplePastAudio:'spaudio.mp3'},
        {id:8, name:'To call', traducao:'Telefonar/Chamar', audio:'audio.mp3',  exemplo:'I want to ask you a question, if you don’t mind.', tradExemplo: 'Eu quero te fazer uma pergunta, se você não se importa.', simplePast:'asked', simplePastModel:'ask + ed', simplePastTrad:'Perguntou', simplePastExample:'He asked my name.', simplePastExampleTrad:'Ele perguntou meu nome.', simplePastAudio:'spaudio.mp3'},
        {id:9, name:'To change', traducao:'Mudar/Alterar', audio:'audio.mp3',  exemplo:'I want to ask you a question, if you don’t mind.', tradExemplo: 'Eu quero te fazer uma pergunta, se você não se importa.', simplePast:'asked', simplePastModel:'ask + ed', simplePastTrad:'Perguntou', simplePastExample:'He asked my name.', simplePastExampleTrad:'Ele perguntou meu nome.', simplePastAudio:'spaudio.mp3'}
    ]);
}

export default randomVerbs;