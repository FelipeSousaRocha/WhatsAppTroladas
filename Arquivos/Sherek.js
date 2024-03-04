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
SHREK

Escrito por

William Steig & Ted Elliott




SHREK
Era uma vez uma adorável 
princesa. Mas ela estava enfeitiçada 
por um feitiço 
terrível que só poderia ser quebrado pelo primeiro beijo de amor. 
Ela estava trancada em um castelo guardado 
por um terrível dragão cuspidor de fogo. 
Muitos bravos cavaleiros tentaram 
libertá-la dessa prisão terrível, 
mas nenhum prevaleceu. Ela esperava no 
a torre mais alta do castelo para o amor verdadeiro 
e o primeiro beijo de amor. (risos) 
Como se isso fosse acontecer. Que 
besteira - (descarga do vaso sanitário)

Allstar - de Smashmouth começa a tocar. Shrek segue sua 
rotina diária. Enquanto em uma cidade próxima, os aldeões se reúnem para ir 
atrás do ogro.

NOITE - PERTO DA CASA DE SHREK

HOMEM1
Acha que está lá dentro?

HOMEM2
Tudo bem. Vamos pegá-lo!

HOMEM1
Ei. Esperem. Vocês sabem o que 
aquele bicho pode fazer com vocês?

HOMEM3
Sim, ele vai moer seus ossos 
para fazer seu pão.

Shrek se aproxima sorrateiramente deles e ri.

SHREK
Sim, na verdade, isso seria um 
gigante. Agora, ogros, oh eles são muito piores. 
Eles vão fazer um terno com sua pele 
recém-descascada.

HOMENS
Não!

SHREK
Eles vão raspas seu fígado. Espremer 
a geleia de seus olhos! Na verdade, é 
bastante bom em torradas.

HOMEM1
Atrás! Atrás, besta! Atrás! Eu aviso vocês! 
(agita a tocha para Shrek.)

Shrek calmamente lambe os dedos e apaga a tocha. Os 
homens recuam. Shrek ruge muito alto e longo 
e seu hálito apaga todas as tochas restantes até que os 
homens estejam no escuro.

SHREK
Esta é a parte onde vocês fogem. 
(Os homens se esforçam para fugir. Ele ri.) 
E fiquem fora! (olha para baixo e pega 
um pedaço de papel. Lê.) "Procurados. 
Criaturas de contos de fadas."(Ele suspira e 
joga o papel sobre o ombro.)


NO DIA SEGUINTE

Há uma fila de criaturas de contos de fadas. O chefe da guarda 
senta-se em uma mesa pagando as pessoas por trazerem as criaturas 
de contos de fadas para ele. Há gaiolas por toda parte. Algumas das pessoas na fila 
são Peter Pan, que está carregando a Sininho em uma gaiola, Gepeto 
que está carregando Pinóquio, e um fazendeiro que está carregando os três 
porquinhos.

GUARDA
Tudo bem. Esta está cheia. Leve embora! Avance! Levante-se!


CHEFE DA GUARDA
Próximo!

GUARDA
(pegando a vassoura da bruxa) Me dê isso! 
Seus dias de voo acabaram. (quebra a 
vassoura ao meio)

CHEFE DA GUARDA
São 20 moedas de prata para a bruxa. 
Próximo!

GUARDA
Levante-se! Vamos lá!

CHEFE DA GUARDA
Vinte moedas.

URSOZINHO
(chorando) Esta gaiola é muito pequena.

BURRO
Por favor, não me entregue. Eu nunca 
serei teimoso novamente. Eu posso mudar. Por favor! 
Dê-me outra chance!

VELHA
Oh, cale-se. (puxa a corda dele)

BURRO
Oh!

CHEFE DA GUARDA
Próximo! O que você tem?

GEPETO
Este pequeno boneco de madeira.

PINÓQUIO
Eu não sou um boneco. Eu sou um menino de verdade. (seu 
nariz cresce)

CHEFE DA GUARDA
Cinco xelins pelo brinquedo possuído. 
Leve embora.

PINÓQUIO
Papai, por favor! Não deixe eles fazerem isso! 
Me ajude!

Gepeto pega o dinheiro e sai. A velha se aproxima 
da mesa.

CHEFE DA GUARDA
Próximo! O que você tem?

VELHA
Bem, eu tenho um burro falante.

CHEFE DA GUARDA
Certo. Bem, isso é bom por dez xelins, 
se você puder provar.

VELHA
Oh, vá em frente, amiguinho.

O burro apenas olha para ela.

CHEFE DA GUARDA
Bem?

VELHA
Oh, oh, ele está apenas...ele está apenas um pouco 
nervoso. Ele é realmente um tagarela. 
Fale, seu estúpido teimoso...

CHEFE DA GUARDA
Chega. Já ouvi o bastante. Guardas!


VELHA
Não, não, ele fala! Ele fala. (finge 
ser Burro) Eu posso falar. Adoro falar. Eu sou o mais falador 
bicho que você já viu.

CHEFE DA GUARDA
Tire-a da minha vista.

VELHA
Não, não! Eu juro! Oh! Ele pode falar!

Os guardas agarram a velha e ela luta com eles. Uma 
de suas pernas voa e chuta a Sininho das mãos de Peter Pan, e sua 
gaiola cai na cabeça de Burro. Ele é polvilhado 
com pó de fada e é capaz de voar.

BURRO
Ei! Eu posso voar!

PETER PAN
Ele pode voar!

3 PORQUINHOS
Ele pode voar!

CHEFE DA GUARDA
Ele pode falar!

BURRO
Ha, ha! Isso mesmo, idiota! Agora eu sou 
um burro voador e falante. Você pode 
ter visto uma mosca doméstica, talvez até uma mosca voadora 
mas aposto que você nunca viu um burro 
voar. Ha, ha! (o pó de fada começa 
a desaparecer) Uh-oh. (ele começa a afundar 
no chão.)

Ele atinge o chão com um baque.

CHEFE DA GUARDA
Peguem ele! (Burro começa a correr.) 
Depois dele!

GUARDAS
Ele está fugindo! Peguem ele! Por aqui! 
Vire!

Burro continua correndo e eventualmente se choca com Shrek. Literalmente. 
Shrek se vira para ver quem esbarrou nele. Burro parece assustado 
por um momento e depois avista os guardas subindo o caminho. Ele 
rapidamente se esconde atrás de Shrek.

CHEFE DA GUARDA
Você aí. Ogro!

SHREK
Sim?

CHEFE DA GUARDA
Por ordem do Lorde Farquaad, estou autorizado 
a prender vocês dois e transportá-los para uma instalação de reassentamento 
designada.


SHREK
Ah, é mesmo? Você e que exército?

Ele olha para trás do guarda e o guarda também se vira 
para olhar, e vemos que os outros homens fugiram. O guarda 
foge. Shrek ri e volta aos seus negócios e 
começa a caminhar de volta para sua cabana.

BURRO
Posso dizer uma coisa para você? Escute, 
você realmente era algo 
aqui atrás. Incrível!

SHREK
Você está falando com...(ele se vira 
e o Burro sumiu) comigo? (ele se vira de volta 
e o Burro está bem na sua frente.) Uau!

BURRO
Sim. Eu estava falando com você. Posso dizer 
que você era ótimo aqui atrás? Aqueles guardas! Eles pensaram que eles 
eram tudo isso. Então você apareceu, 
e bam! Eles estavam tropeçando uns nos outros 
como crianças no bosque. Isso realmente 
me fez sentir bem em ver isso.

SHREK
Ah, isso é ótimo. Realmente.

BURRO
Cara, é bom ser livre.

SHREK
Agora, por que você não vai comemorar sua 
liberdade com seus próprios amigos? Hmm?


BURRO
Mas, uh, eu não tenho amigos. E eu não quero 
sair por aí sozinho. Ei, 
espera aí! Eu tenho uma ótima ideia! Eu vou 
ficar com você. Você é mau, verde, 
uma máquina de luta. Juntos vamos assustar 
qualquer um que cruzar nosso caminho.

Shrek se vira e olha para o Burro por um momento antes de rugir muito 
alto.

BURRO
Uau! Isso foi realmente assustador. Se você 
não se importa que eu diga, se isso não 
funcionar, seu hálito certamente vai conseguir, porque 
você definitivamente precisa de alguns Tic Tacs ou algo assim, porque 
seu hálito fede! Você quase queimou 
os cabelos do meu nariz, assim como da 
última vez...(Shrek cobre a boca dele, mas o Burro 
continua falando, então Shrek remove 
sua mão.) ...então eu comi algumas frutas podres. Eu tive gases fortes 
saindo da minha bunda aquele dia.

SHREK
Por que você está me seguindo?

BURRO
Eu vou te dizer por que. (cantando) Porque 
eu estou sozinho, Não há ninguém aqui ao meu lado, 
Meus problemas desapareceram, Não há 
ninguém para me ridicularizar, Mas você tem que ter 
fé...

SHREK
Pare de cantar! Não é de admirar que você não tenha 
amigos.

BURRO
Uau. Só um verdadeiro amigo seria tão cruelmente honesto.

SHREK
Escute, burrico. Dê uma olhada em 
mim. O que sou eu?

BURRO
(olha até em cima para Shrek) Uh ...realmente 
alto?

SHREK
Não! Eu sou um ogro! Você sabe. "Pegue sua 
tocha e forcado." Isso não te incomoda?

BURRO
Não.

SHREK
Sério?

BURRO
Sério, sério.

SHREK
Ah.

BURRO
Cara, eu gosto de você. Qual é o seu nome?

SHREK
Uh, Shrek.

BURRO
Shrek? Bem, sabe o que eu gosto em você, Shrek? Você tem aquele tipo de eu-não-me-importo-com-o-que-ninguém-pensa-de-mim. Eu gosto disso. Eu respeito isso, 
Shrek. Você está bem. (Eles chegam a uma colina e você pode 
ver a cabana de Shrek.) Uau! Olha isso. Quem iria querer viver 
num lugar assim?

SHREK
Essa seria minha casa.

BURRO
Oh! E é adorável! Simplesmente lindo. 
Você sabe que você é um decorador e tanto. 
É incrível o que você fez com um orçamento tão modesto. Eu gosto daquela pedra. 
É uma pedra bonita. Acho que você 
não entretém muito, não é?

SHREK
Eu gosto da minha privacidade.

BURRO
Você sabe, eu também. Isso é outra coisa 
que temos em comum. Tipo, eu odeio quando 
tem alguém na sua cara. Você tenta dar a entender, e eles 
não saem. Aí tem aquele silêncio constrangedor. 
(silêncio constrangedor) Posso ficar com você?


SHREK
Uh, o que?

BURRO
Posso ficar com você, por favor?

SHREK
(sarcasticamente) Claro!

BURRO
É sério?

SHREK
Não.

BURRO
Por favor! Eu não quero voltar lá! 
Você não sabe como é ser considerado um aberração. (pausa enquanto ele 
olha para Shrek) Bem, talvez você saiba. 
Mas é por isso que precisamos ficar juntos. 
Você tem que me deixar ficar! Por favor! Por favor!


SHREK
Tudo bem! Tudo bem! Mas só por uma noite.

BURRO
Ah! Obrigado! (ele corre para dentro da cabana)


SHREK
O que você está...? (Burro pula em uma cadeira.) Não! Não!

BURRO
Isso vai ser divertido! Podemos ficar acordados até tarde, trocando histórias de machões, e de manhã eu vou fazer waffles.

SHREK
Oh!

BURRO
Onde, uh, eu durmo?

SHREK
(irritado) Lá fora!

BURRO
Oh, bem, eu acho que é legal. Quer dizer, 
eu não te conheço, e você não me conhece, então eu acho que fora é melhor, sabe. Aqui vou eu. Boa noite. (Shrek 
bate a porta com força.) (suspiro) Quer dizer, eu até 
gosto do ar livre. Eu sou um burro. Eu nasci fora. Eu vou 
estar sentado sozinho lá fora, eu acho, sabe. Sozinho, fora. Eu estou sozinho...não há ninguém aqui ao meu lado...

CABANA DE SHREK - NOITE

Shrek e Fiona se beijam...e o beijo se transforma em...

O PÂNTANO

...o beijo de casamento deles. Shrek e Fiona agora estão casados. 'I'm 
a Believer' de Smashmouth é tocada ao fundo. Shrek e Fiona 
se separam e correm pela multidão até sua carruagem esperando. Que é feita de uma cebola gigante. Fiona joga seu buquê 
que tanto Cinderela quanto Branca de Neve tentam pegar. Mas elas acabam 
entrando em uma briga de gatas e então o dragão pega o buquê. O homem-biscoito foi consertado em parte e agora 
tem uma perna e anda com uma bengala de cana de açúcar. Shrek e Fiona 
saem enquanto o resto dos convidados festejam e o Burro começa a cantar a música.

HOMEM-BISCOITO
Deus nos abençoe, a todos.

BURRO
(quando termina de cantar e desvanecemos para 
o preto) Oh, isso é engraçado. Oh. Oh. Eu não consigo 
respirar. Eu não consigo respirar.

FIM
`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)
