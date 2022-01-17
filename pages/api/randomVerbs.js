function randomVerbs(request, response){

    const humanDate = new Date();

    //Permite que qualquer pessoa faça requisição a esta API
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Headers", "Origin, X-Request-Width, Content-Type, Accept")
    response.setHeader('Cache-Control', 's-maxage=20, stale-while-revalidate');


    response.json([
        {currentDate: humanDate.toGMTString()},
        {id:0, name:'To add', traducao:'Adicionar',  exemplo:'Follow the onscreen prompts to add a payment method.', tradExemplo: 'Siga as instruções na tela para adicionar um método de pagamento.', simplePast:'added', simplePastModel:'add + ed', simplePastTrad:'Adicionou', simplePastExample:'She added him on Facebook.', simplePastExampleTrad:'Ela o adicionou no Facebook.'},
        {id:1, name:'To ask', traducao:'Perguntar', exemplo:'I want to ask you a question, if you don’t mind.', tradExemplo: 'Eu quero te fazer uma pergunta, se você não se importa.', simplePast:'asked', simplePastModel:'ask + ed', simplePastTrad:'Perguntou', simplePastExample:'He asked my name.', simplePastExampleTrad:'Ele perguntou meu nome.'}, 
        {id:2, name:'To be', traducao:'Ser/Estar',  exemplo:'A person who wants to be concentrated has to be motivated.', tradExemplo: 'Quem quiser se concentrar, tem que estar motivado.', simplePast:'Was/Were', simplePastModel:'Verbo Irregular', simplePastTrad:'Era/Estava', simplePastExample:' I was really tired. / They were my teachers.', simplePastExampleTrad:'Eu estava muito cansado. / Eles eram meus professores.'},
        {id:3, name:'To allow', traducao:'Permitir/Autorizar',  exemplo:'If Location Services is set to allow only wifi positioning.', tradExemplo: 'Se os Serviços de Localização está definida para permitir apenas o posicionamento Wi-Fi.', simplePast:'allowed', simplePastModel:'allow + ed', simplePastTrad:'Permitiu', simplePastExample:'Smoking is not allowed here.', simplePastExampleTrad:'Não é permitido fumar aqui.'},
        {id:4, name:'To appear', traducao:'Aparecer',  exemplo:'Perhaps to appear more often in results lists.', tradExemplo: 'alvez seja para aparecer mais vezes nas listas de resultados.', simplePast:'appeared', simplePastModel:'appear + ed', simplePastTrad:'Apareceu', simplePastExample:'They appeared on TV.', simplePastExampleTrad:'Eles apareceram na TV.'},
        {id:5, name:'To become', traducao:'Tornar-se',  exemplo:'Sacrifice is needed to become a greater vessel.', tradExemplo: 'O sacrifício é uma condição para tornar-se um grande vaso.', simplePast:'became', simplePastModel:'Verbo Irregular', simplePastTrad:'Tornou-se', simplePastExample:'We became friends.', simplePastExampleTrad:'Nos tornamos amigos.'},
        {id:6, name:'To believe', traducao:'Acreditar',  exemplo:'If we choose to belive in luck, then we must also accept its dark side.', tradExemplo: 'Se escolhermos acreditar na sorte então devemos também aceitar o seu lado obscuro.', simplePast:'believed', simplePastModel:'believ + ed', simplePastTrad:'Acreditou', simplePastExample:'He believed in the team.', simplePastExampleTrad:'Ele acreditou no time.'},
        {id:7, name:'To build', traducao:'Construir',  exemplo:'I need this to build a house', tradExemplo: 'Eu preciso disso para construir uma casa', simplePast:'built', simplePastModel:'Verbo Irregular', simplePastTrad:'Construiu', simplePastExample:'A new building was built in front of the park.', simplePastExampleTrad:'Foi construído um novo prédio em frente ao parque.'},
        {id:8, name:'To call', traducao:'Telefonar/Chamar',  exemplo:'Ask to call your attorney before speaking.', tradExemplo: 'Peça para chamar o seu advogado antes de falar.', simplePast:'called', simplePastModel:'call + ed', simplePastTrad:'Telefonou/Chamou', simplePastExample:'I will call Mary and invite her for my party.', simplePastExampleTrad:'Vou telefonar para a Mary e convidá-la para a minha festa.'},
        {id:9, name:'To change', traducao:'Mudar/Alterar',  exemplo:'Select anywhere on the dashboard to change which information shows.', tradExemplo: 'Selecione qualquer lugar do painel para alterar as informações que serão exibidas.', simplePast:'changed', simplePastModel:'chang + ed', simplePastTrad:'Mudou/Alterou', simplePastExample:'I changed my vacation destiny.', simplePastExampleTrad:'Mudei meu destino de férias.'}
    ]);
}

export default randomVerbs;