async function enviarScript(scriptText){
	const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
	main = document.querySelector("#main"),
	textarea = main.querySelector(`div[contenteditable="true"]`)
	
	if(!textarea) throw new Error("Não há uma conversa aberta")
	
	for(const line of lines){
		console.log(line)
	
		textarea.focus();
		document.execCommand('insertText', false, line);
		textarea.dispatchEvent(new Event('change', {bubbles: true}));
	
		setTimeout(() => {
			(main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
		}, 100);
		
		if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
	}
	
	return lines.length;
}

enviarScript(`
Filme BEE

Escrito por Jerry Seinfeld & Andy Robin & Barry Marder & Spike Feresten


Filme BEE
De acordo com todas as leis conhecidas da aviação, não há como uma abelha conseguir voar.
Suas asas são muito pequenas para levantar seu corpinho gordo do chão.
A abelha, é claro, voa mesmo assim porque as abelhas não se importam com o que os humanos pensam ser impossível.
Amarelo, preto. Amarelo, preto. Amarelo, preto. Amarelo, preto.
Oh, preto e amarelo!
Vamos agitar um pouco.
Barry! O café da manhã está pronto!
Já vou!
Só um segundo.
Alô?
Barry?
Adam?
Você acredita que isso está acontecendo?
Eu não posso acreditar.
Eu vou te buscar.
Com um visual afiado.
Use as escadas, Seu pai pagou uma boa quantia por elas.
Desculpe. Estou animado.
Aqui está o formando.
Estamos muito orgulhosos de você, filho.
Um boletim perfeito, tudo B.
Muito orgulhoso.
Mãe! Eu tenho um negócio aqui.
Você tem fiapos no seu pó.
Ai! Isso sou eu!
Acene para nós! Estaremos na fileira 118.000.
Tchau!
Barry, eu te disse, pare de voar dentro de casa!
Ei, Adam.
Ei, Barry.
É gel de pelugem?
Um pouco. Dia especial, formatura.
Nunca pensei que chegaria lá.
Três dias na escola primária, três dias no ensino médio.
Foi meio estranho.
Três dias na faculdade. Fico feliz por ter tirado um dia e viajado ao redor da Colmeia.
Você voltou diferente.
Oi, Barry. Artie, deixando o bigode crescer? Fica bom.
Ouviu falar do Frankie?
Sim.
Você vai ao funeral?
Não, eu não vou.
Todo mundo sabe, pica alguém, você morre.
Não desperdice isso com um esquilo.
Ele é tão quente.
Acho que ele poderia ter apenas saído do caminho.
Eu adoro a ideia de incluir um parque de diversões no nosso dia.
É por isso que não precisamos de férias.
Cara, bastante pompa nas circunstâncias.
Bem, Adam, hoje nós somos homens.
Nós somos!
Homens-abelha.
Amém!
Aleluia!
Alunos, professores, abelhas distinguidas,
por favor, deem as boas-vindas ao Decano Buzzwell.
Bem-vindo, turma de formandos da Cidade Nova da Colmeia às 9:15.
Isso conclui nossas cerimônias e começa sua carreira na Indústrias Honex!
Vamos escolher nosso trabalho hoje?
Ouvi dizer que é apenas uma orientação.
Atenção! Aqui vamos nós.
Mantenham suas mãos e antenas dentro do bonde o tempo todo.
Imaginem como será?
Um pouco assustador.
Bem-vindos à Honex, uma divisão da Honesco e parte do Grupo Hexágono.
É isso!
Uau.
Uau.
Sabemos que você, como uma abelha, trabalhou a vida toda para chegar ao ponto onde pode trabalhar a vida inteira.
O mel começa quando nossos bravos Coletores de Pólen trazem o néctar para a Colmeia.
Nossa fórmula secreta é automaticamente corrigida de cor, ajustada de acordo com o cheiro e contornada com bolhas para formar este xarope doce e calmante com seu brilho dourado característico que você conhece como... Mel!
Aquela garota estava muito quente.
Ela é minha prima!
É?
Sim, somos todos primos.
Certo. Você está certo.
Na Honex, nos esforçamos constantemente para melhorar todos os aspectos da existência das abelhas.
Essas abelhas estão testando uma nova tecnologia de capacete.
O que você acha que ele faz?
Não o suficiente.
Aqui temos o nosso mais recente avanço, o Krelman.
O que isso faz?
Pega aquela pequena gota de mel que fica depois de você despejar.
Nos economiza milhões.
Qualquer um pode trabalhar no Krelman?
Claro. A maioria dos empregos de abelha é pequena.
Mas as abelhas sabem que cada trabalho pequeno, se for bem feito, significa muito.
Mas escolha com cuidado, porque você ficará no trabalho que escolher pelo resto da sua vida.
O mesmo trabalho pelo resto da vida? Eu não sabia disso.
Qual a diferença?
Você ficará feliz em saber que as abelhas, como espécie, não tiveram um dia de folga em 27 milhões de anos.
Então você vai trabalhar até a morte com a gente?
Vamos tentar, com certeza.
Uau! Isso explodiu minha mente!
"Qual a diferença?"
Como você pode dizer isso?
Um trabalho para sempre?
Essa é uma escolha insana para se ter que fazer.
Estou aliviado. Agora só temos que tomar uma decisão na vida.
Mas, Adam, como eles nunca nos contaram isso?
Por que você questionaria alguma coisa? Somos abelhas.
Somos a sociedade mais perfeitamente funcional da Terra.
Você já pensou que talvez as coisas funcionem um pouco demais aqui?
Tipo o quê? Me dê um exemplo.
Não sei. Mas você sabe do que estou falando.
Por favor, limpe o portão. Força Aérea do Néctar Real se aproximando.
Espere um segundo. Olha só.
Ei, aqueles são os Coletores de Pólen!
Uau.
Nunca os vi tão de perto.
Eles sabem como é lá fora da Colmeia.
Sim, mas alguns não voltam.
Ei, Coletores!
Oi, Coletores!
Vocês foram incríveis!
Vocês são monstros!
Vocês são loucos do céu! Eu amo isso! Eu amo isso!
Eu me pergunto onde eles estavam.
Não sei.
O dia deles não é planejado.
Fora da Colmeia, voando, quem sabe para onde, fazendo quem sabe o que.
Você não pode simplesmente decidir ser um Coletor de Pólen. Você precisa ser criado para isso.
Certo.
Olha. Isso é mais pólen do que você e eu veremos em toda uma vida.
É apenas um símbolo de status.
As abelhas dão muito valor a isso.
Talvez. A menos que você esteja usando e as moças te vejam usando.
Aquelas moças?
Não são nossas primas também?
Distantes. Distantes.
Olhe para esses dois.
Um par de abelhas do tipo Colmeia.
Vamos nos divertir com eles.
Deve ser perigoso ser um Coletor de Pólen.
Sim. Uma vez um urso me prendeu contra um cogumelo!
Ele tinha uma pata na minha garganta e com a outra, estava me batendo!
Oh, meu Deus!
Eu nunca pensei que o derrubaria.
O que você estava fazendo durante isso?
Tentando alertar as autoridades.
Eu posso autografar isso.
Um pouco ventoso lá fora hoje, não é, camaradas?
Sim. Ventoso.
Nós estamos indo para um campo de girassóis a seis milhas daqui amanhã.
Seis milhas, hein?
Barry!
Um salto de poça para nós, mas talvez você não esteja pronto para isso.
Talvez eu esteja.
Você não está!
Nós vamos sair às 9 horas na porta J.
O que você acha, zumbi-boy?
Você é abelha o suficiente?
Eu posso ser. Depende do que é 9 horas.
Ei, Honex!
Pai, você me pegou de surpresa.
Você decidiu pelo que está interessado?
Bem, há muitas opções.
Mas você só pode escolher uma.
Você já ficou entediado fazendo o mesmo trabalho todos os dias?
Filho, deixe-me te contar sobre mexer.
Você pega aquele pau, e você só o move ao redor, e o mexe ao redor.
Você entra em um ritmo.
É uma coisa bonita.
Você sabe, pai, quanto mais eu penso nisso,
talvez o campo do mel não seja o certo para mim.
Você estava pensando em quê, fazer bichinhos de balão?
Isso é um trabalho ruim para um cara com um ferrão.
Janet, seu filho não tem certeza se quer entrar no mel!
Barry, você é tão engraçado às vezes.
Eu não estou tentando ser engraçado.
Você não é engraçado! Você vai para o mel. Nosso filho, o mexedor!
Você vai ser um mexedor?
Ninguém está me ouvindo!
Espere até ver os paus que eu tenho.
Eu poderia dizer qualquer coisa agora mesmo.
Eu vou fazer uma tatuagem de formiga!
Vamos abrir um pouco de mel e comemorar!
Talvez eu faça um furo na minha caixa torácica. Barbear minhas antenas. Me amarrar com um gafanhoto. Colocar um dente de ouro e chamar todo mundo de "cara"!
Eu estou tão orgulhoso.
Nós estamos começando a trabalhar hoje!
Hoje é o dia.
Vamos lá! Todos os bons empregos estarão ocupados.
Sim, claro.
Contagem de pólen, abelha de manobra, despejador, mexedor, recepcionista, remoção de pelos...
Ainda está disponível?
Espere. Dois à esquerda!
Um deles é seu! Parabéns!
Passo para o lado.
O que você conseguiu?
Escolher pedaços de sujeira. Sensacional!
Uau!
Alguns novatos?
Sim, senhor! Nosso primeiro dia! Estamos prontos!
Faça sua escolha.
Você quer ir primeiro?
Não, você vai.
Oh, meu. O que está disponível?
O atendente do banheiro está vago, mas não pelo motivo que você pensa.
Alguma chance de conseguir o Krelman?
Claro, você está dentro.
Desculpe, o Krelman acabou de fechar.
O macaco de cera está sempre aberto.
O Krelman abriu novamente.
O que aconteceu?
Uma abelha morreu. Isso criou uma vaga. Viu? Ele está morto. Outro morto.
Morto. Mortificado. Mais dois mortos.
Morto da cabeça para baixo. Morto do pescoço para baixo. É a vida!
Oh, isso é tão difícil!
Aquecimento, refrigeração, abelha de manobra, despejador, mexedor, zumbido, inspetor número sete, coordenador de fiapos, supervisor de listras, domador de ácaros.
Barry, o que você acha que eu deveria... Barry?
Barry!
Tudo bem, temos o campo de girassóis no quadrante nove...
O que aconteceu com você?
Onde você está?
Eu estou saindo.
Saindo? Saindo para onde?
Lá fora.
Oh, não!
Eu tenho que, antes de ir trabalhar pelo resto da minha vida.
Você vai morrer! Você está louco! Alô?
Outra chamada entrando.
Se alguém estiver se sentindo corajoso, há uma delicatessen coreana na 83 que recebe suas rosas hoje.
Ei, pessoal.
Olhem isso.
Não é aquele garoto que vimos ontem?
Segure, filho, o convés de voo é restrito.
Está tudo bem, Lou. Nós vamos levá-lo.
Sério? Se sentindo sortudo, está?
Assine aqui, aqui. Apenas inicie isso.
Obrigado.
OK.
Você tem um aviso de chuva hoje, e como todos sabem, as abelhas não podem voar na chuva.
Então tenha cuidado. Como sempre, cuide das suas vassouras, tacos de hóquei, cães, pássaros, ursos e morcegos.
Além disso, recebi alguns relatos de refrigerante de raiz sendo derramado em nós.
Murphy está em um lar por causa disso, tagarelando como uma cigarra!
Isso é horrível.
E um lembrete para você, novatos, lei das abelhas número um, absolutamente nenhuma conversa com humanos!
Tudo certo, posições de lançamento!
Zumbido, zumbido, zumbido, zumbido! Zumbido, zumbido, zumbido, zumbido! Zumbido, zumbido, zumbido, zumbido!
Preto e amarelo!
Alô!
Você está pronto para isso, valentão?
Sim. Sim, vamos lá.
Vento, verifique.
Antenas, verifique.
Pacote de néctar, verifique.
Asas, verifique.
Ferrão, verifique.
OK, senhores. Vamos nos mover para frente em T minus dez.
Contagem regressiva para o lançamento. Dezesseis, quinze, quatorze, treze, doze, onze, dez, nove, oito, sete, seis, cinco, quatro, três, dois, um.
Cabeça!
Quem é capaz de me fazer sentir assim?
Quem é capaz de fazer um beijo assim?
Não há ninguém até agora, eim?
Acho que estamos bem
Muito legal!
Sim!
O que é?
Eu não sei.
Mas eu realmente gosto de música.
Ei, minhas patas estão batendo!
Sim, música.
Música, é isso!
Música, música, música.
Woo-hoo!
Isso é tão legal!
E é por isso que não podemos deixar as abelhas morrerem.
Podemos fazer isso! Encore! Encore!
Cairam para baixo! Cairam para baixo! Cairam para baixo!
Ela disse cairam para baixo?
Eu posso escutar você?
Não vamos pular uma batida aqui.
Vamos, pessoal!
Acabou! Acabou! Acabou!
Isso foi tão memorável.
Música, a batida certa para você.
Olá, Barry.
Artie, cresceu o bigode? Fica bem.
Escute, temos que sair.
Eu tinha que abrir minha boca e falar.
O que você está falando?
Não fizemos a escolha certa.
Voltar para o mel?
Sim.
Eu quero fazer isso pela colmeia.
Eu não acredito que eles estão comemorando!
Temos que fazer alguma coisa.
Faça alguma coisa.
Você sabe, eu ouvi uma coisa.
Você pode ajudar-me com isso, Kenny?
É a tradição.
Você sabe, a correria do fim de semana.
O que aconteceu aqui?
O que você está falando?
Nada.
Eu acabei de fechar.
Cuide-se, Barry.
Eu posso dizer que vi algo.
Parece bem legal.
Ei, você acha que eu deveria...
Barry?
Sim?
Vou tirar esses pelinhos.
Barry!
Eu acho que nós vamos fazer isso.
Todos aqui é?
Todos aqui é?
Então sejamos quem somos! Juntos!
Livre.
Nada mais que uma abelha.
Apenas um pouco de mel.
Até mais.
Barry, estou feliz que você esteja de volta. Estou feliz que você esteja bem.
Esta é uma cidade de sonho.
Nunca dorme.
Nunca é um dia ruim aqui em Nova York.
Eu estava preocupado com você. Você me pegou de surpresa.
Mãe, este é o suficiente.
Você, seu pai, sua irmã, eu. Você teve que fazer esta noite.
Ei, Barry, é isso mesmo?
Você está de volta!
Você vai jantar?
Eu acho que estou fora.
Ele está de volta, aqui está ele. Ele está no banheiro.
Ei, pessoal!
Você se juntou ao clube?
Eu não posso acreditar que fizemos isso!
Tudo está de volta ao normal.
Bem, se você considerar morto normal.
É tão emocionante!
Estamos nos preparando para o grande salto do zumbido!
Todo mundo está pronto?
Todo mundo é?
Então salta! Gire o ventilador!
Salta! Gire o ventilador!
Salta! Gire o ventilador!
Salta! Gire o ventilador!
Salta! Gire o ventilador!
Salta! Gire o ventilador!
Salta! Gire o ventilador!
Salta! Gire o ventilador!
Fora da Colmeia, voando, quem sabe para onde, fazendo quem sabe o que.
Oh, não!
Parece que está do lado de fora da Colmeia.
Barry!
Ei, Blumers!
Tudo bem?
Meu Deus!
Esse é o Barry!
Eles estão ajudando ele!
Eles estão ajudando Barry!
Eu sei que estou sonhando.
Sr. Rainha?
É aquele?
Ele está morto? Olhe para isso.
Ele é morto. Ele é morto. Levanta!
Não faça isso. Por favor, não faça isso. Eu sou um advogado.
Não faça isso!
Ele é um ser humano!
Não, ele não é!
Ele é um homem de negócios. Está tentando matar-me.
Levanta, abelha! Nós vamos te salvar.
Acho que você gostaria disso.
Acho que a água está em sua cabeça.
Espero que seja. Deixe-me te pegar.
Voar! Estamos voando!
Voe! Voe, abelha! Voe!
Sinta aí! Eu ouvi um som!
O que é isso?
Faça isso! Isso! Faça isso!
Estamos voando! Estamos voando!
Estamos voando, olha! Não, pare!
Quem é?
Ooh, que som é esse?
Não importa. É ali!
Naquela direção.
Aqui, nessa direção. Segue esse som.
Naquela direção. Segue esse som.
Naquela direção. Segue esse som.
Naquela direção. Segue esse som.
Naquela direção. Segue esse som.
Naquela direção. Segue esse som.
Naquela direção. Segue esse som.
Naquela direção. Segue esse som.
Este é o lugar!
Este é o lugar!
Ele ouviu o som!
Olhe para esta!
Sim! Isto é!
Não!
Espera um segundo!
Eu sou um advogado!
Ooh, ooh!
Ela é tão grande!
Ela é tão grande!
Ela é tão grande!
Ela é tão grande!
Ela é tão grande!
Ela é tão grande!
Ela é tão grande!
Ela é tão grande!
Nós somos apenas amigas.
Certo, vamos lá.
Senhoras e senhores, por favor, livre-se de seus cartões de embarque e prepare-se para sair.
Resumo do filme feito por Sub-Ti
www.subti.com.br
`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)
