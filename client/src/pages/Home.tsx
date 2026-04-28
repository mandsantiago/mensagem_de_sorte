import { useEffect, useState } from "react";
import CardDisplay from "@/components/CardDisplay";
import { cards, Card } from "@/data/cards";

export default function Home() {
  const [currentCard, setCurrentCard] = useState<Card | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Get random card on mount
  useEffect(() => {
    const randomCard = cards[Math.floor(Math.random() * cards.length)];
    setCurrentCard(randomCard);
    setIsLoading(false);
  }, []);

  const handleRefresh = () => {
    setIsLoading(true);
    setTimeout(() => {
      const randomCard = cards[Math.floor(Math.random() * cards.length)];
      setCurrentCard(randomCard);
      setIsLoading(false);
    }, 300);
  };

  if (isLoading || !currentCard) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin">
            <div className="text-6xl">✨</div>
          </div>
          <p className="mt-4 text-foreground font-display text-xl">Carregando sua mensagem...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white border-b-4 border-accent py-6 md:py-8 shadow-sm">
        <div className="container max-w-4xl mx-auto px-4">
          <h1 className="font-display text-3xl md:text-4xl text-center text-primary mb-2">
            Mensagem de Sorte
          </h1>
          <p className="text-center text-foreground/70 font-body">
            Sua carta do dia, um guia para a jornada
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container max-w-4xl mx-auto px-4 py-8 md:py-12">
        {/* Intro Text */}
        <div className="text-center mb-12">
          <p className="text-foreground text-lg leading-relaxed max-w-2xl mx-auto">
            Bem-vinda ao <span className="font-display text-primary">Oráculo Florescer</span>. 
            A cada visita, uma carta diferente surge para iluminar seu caminho com sabedoria e inspiração.
          </p>
        </div>

        {/* Card Display */}
        <CardDisplay 
          card={currentCard} 
          onRefresh={handleRefresh}
        />

        {/* Banner Afiliado */}
        <a 
          href="https://go.hotmart.com/G105596417T" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block mt-16 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
        >
          <img 
            src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663030313244/wYAkbdhLlVgwWvDu.webp" 
            alt="Mapa Numerológico" 
            className="w-full h-auto"
          />
        </a>

        {/* Texto sobre o Oráculo */}
        <div className="mt-12 max-w-3xl mx-auto">
          <div className="space-y-6 text-foreground leading-relaxed">
            <p>
              Há momentos em que a vida parece sussurrar. Um sonho que não sai da cabeça, uma música que toca no momento exato, uma palavra que aparece três vezes no mesmo dia. Não é coincidência. É o universo criando pontes entre o que você sente por dentro e o que se manifesta por fora.
            </p>
            
            <p>
              O Oráculo Florescer nasceu para ser uma dessas pontes.
            </p>
            
            <p>
              Todo dia, uma carta é revelada para você. Uma mensagem de sorte, uma luz suave sobre o caminho — não para ditar o que fazer, mas para convidar você a olhar com mais atenção para o que já está acontecendo dentro de si.
            </p>
            
            <hr className="my-8 border-accent/30" />
            
            <h2 className="font-display text-2xl text-primary mt-8 mb-4">Como a sua mensagem de sorte é escolhida</h2>
            
            <p>
              Você pode se perguntar: como uma carta pode ter algo a ver comigo?
            </p>
            
            <p>
              A resposta está além da lógica — e isso é exatamente o ponto.
            </p>
            
            <p>
              O destino não opera em linhas retas. Ele tece. Ele entrelaça momentos, pessoas, sentimentos e símbolos de formas que a mente racional leva tempo para compreender. A sorte do dia que você recebe no Oráculo Florescer não foi escolhida por um algoritmo frio. Ela foi chamada pelo momento em que você chegou aqui — pelo que você carrega, pelo que está pronto para ver, pelo que o universo já preparou mas ainda não entregou.
            </p>
            
            <p>
              Pense assim: o destino não é um roteiro fixo. É uma conversa. E cada mensagem do dia é uma fala dessa conversa que existe entre você e a vida.
            </p>
            
            <hr className="my-8 border-accent/30" />
            
            <h2 className="font-display text-2xl text-primary mt-8 mb-4">Quando a mensagem parece não fazer sentido</h2>
            
            <p>
              Às vezes você abre sua carta e pensa: isso não tem nada a ver comigo agora.
            </p>
            
            <p>
              Guarde essa sensação — porque ela pode ser a parte mais importante de toda a leitura.
            </p>
            
            <p>
              As mensagens mais poderosas de um oráculo não são as que chegam como uma resposta imediata. São as que chegam como uma semente. Aquela palavra, aquela frase, aquele símbolo que hoje parece estranho pode ser exatamente o que você vai precisar lembrar daqui a três dias, três semanas ou três meses.
            </p>
            
            <p>
              O oráculo fala em três tempos:
            </p>
            
            <p>
              <strong>O que já foi</strong> — padrões, ciclos e histórias que ainda habitam em você mesmo depois de encerrados. Às vezes a mensagem de sorte do dia é um eco de algo que você viveu e ainda não terminou de integrar. Um relacionamento, uma escolha, uma dor que pensou ter deixado para trás. O passado não desaparece — ele se transforma, e muitas vezes retorna em forma de símbolo para ser finalmente compreendido e liberado.
            </p>
            
            <p>
              <strong>O que é agora</strong> — o presente que você às vezes não consegue ver porque está ocupada demais vivendo-o. A carta do dia pode ser um espelho gentil: olha aqui, presta atenção nisso que você está ignorando.
            </p>
            
            <p>
              <strong>O que ainda está por vir</strong> — não uma profecia, mas uma preparação. O universo anuncia antes de entregar. A mensagem que você recebe hoje pode ser a chave para uma porta que só vai aparecer no seu caminho amanhã.
            </p>
            
            <p>
              Por isso, nunca descarte uma leitura. Anote. Carregue a pergunta do dia com você. Deixe que ela se revele no tempo certo — porque o tempo do destino raramente é o mesmo do relógio.
            </p>
            
            <hr className="my-8 border-accent/30" />
            
            <h2 className="font-display text-2xl text-primary mt-8 mb-4">A arte de pausar: por que a sua mensagem de sorte precisa de silêncio</h2>
            
            <p>
              Vivemos numa época de barulho constante. Notificações, decisões, opiniões alheias, a lista interminável de coisas a fazer. A mente humana foi feita para contemplar, mas raramente recebe permissão para isso.
            </p>
            
            <p>
              Aqui, você tem essa permissão.
            </p>
            
            <p>
              O momento em que você abre o Oráculo Florescer e recebe sua sorte do dia não é um gesto supérfluo. É um ato de cuidado com você mesma. É dizer: antes de qualquer coisa, antes do trabalho, das cobranças e do mundo lá fora — eu me ouço.
            </p>
            
            <p>
              Pesquisas em psicologia positiva confirmam o que as tradições espirituais já sabem há milênios: pessoas que criam rituais de reflexão diária relatam mais clareza mental, mais resiliência emocional e uma sensação mais profunda de propósito. Não é sobre ter respostas. É sobre aprender a fazer as perguntas certas.
            </p>
            
            <p>
              A sua mensagem do dia é um convite para essa prática.
            </p>
            
            <p>
              Você não precisa de uma hora de meditação. Não precisa de um altar elaborado nem de conhecimento esotérico. Precisa apenas de alguns minutos — um café ou chá ainda quente, uma respiração mais lenta, um olhar para dentro antes de virar o rosto para o mundo.
            </p>
            
            <hr className="my-8 border-accent/30" />
            
            <h2 className="font-display text-2xl text-primary mt-8 mb-4">O Que é um Oráculo — e por que ele fala com você</h2>
            
            <p>
              A palavra oráculo vem do latim <em>orare</em> — falar, rezar, pedir. Desde as civilizações mais antigas, os seres humanos buscaram formas de dialogar com o invisível: o oráculo de Delfos na Grécia Antiga, o I Ching na China milenar, os búzios nos terreiros sagrados da diáspora africana, as cartas ciganas na Europa.
            </p>
            
            <p>
              Em todas essas tradições, o oráculo nunca foi uma máquina de previsões. Foi sempre um espelho — uma forma de acessar o que já existe dentro de você, mas que às vezes precisa de uma forma, de uma imagem, de uma palavra para emergir à consciência.
            </p>
            
            <p>
              O oráculo diário do Oráculo Florescer segue essa mesma linhagem. Ele não diz o que vai acontecer. Ele pergunta: o que você já sabe, mas ainda não se permitiu ouvir?
            </p>
            
            <p>
              Cada carta carrega uma palavra-guia, uma mensagem e uma pergunta. A palavra nomeia. A mensagem contextualiza. A pergunta abre. E é na abertura que a transformação acontece.
            </p>
            
            <hr className="my-8 border-accent/30" />
            
            <h2 className="font-display text-2xl text-primary mt-8 mb-4">Autoconhecimento como prática cotidiana</h2>
            
            <p>
              Autoconhecimento não é um destino. É uma direção.
            </p>
            
            <p>
              Você não acorda um dia "pronta" — iluminada, resolvida, sem contradições. O autoconhecimento é o processo diário de se observar com curiosidade e gentileza, de notar seus padrões, de honrar suas necessidades, de questionar o que você repete sem perceber.
            </p>
            
            <p>
              A sorte do dia pode ser uma porta de entrada para esse processo. Quando você lê a mensagem do oráculo e algo ressoa — uma pontada no peito, um "é exatamente isso" silencioso, ou até uma resistência, um "não quero pensar nisso" — preste atenção. Porque é justamente aí, nessa reação, que mora algo valioso.
            </p>
            
            <hr className="my-8 border-accent/30" />
            
            <h2 className="font-display text-2xl text-primary mt-8 mb-4">Para a Mulher que está no Entre-Lugar</h2>
            
            <p>
              Se você chegou até aqui, talvez esteja num daqueles momentos da vida em que tudo parece estar se reorganizando. Talvez você esteja no meio de uma escolha difícil. Talvez sinta que algo está mudando mas ainda não sabe o quê. Talvez esteja simplesmente cansada — e cansaço também é um recado.
            </p>
            
            <p>
              O Oráculo Florescer foi criado para você. Para o momento em que você precisa de uma âncora, não de uma resposta. Para quando você precisa lembrar que não está sozinha na própria jornada — que o universo está em diálogo constante com você, mesmo nos dias em que ele parece silencioso.
            </p>
            
            <p>
              Sua mensagem de sorte hoje não é só uma palavra numa tela. É um convite. Para dentro. Para a sua sabedoria mais profunda. Para o que você já sabe e ainda está aprendendo a confiar.
            </p>
            
            <hr className="my-8 border-accent/30" />
            
            <h2 className="font-display text-2xl text-primary mt-8 mb-4">Perguntas Frequentes</h2>
            
            <p>
              <strong>O oráculo diário do Oráculo Florescer é baseado em tarot?</strong> Não exatamente. O oráculo é uma forma mais livre e acessível de leitura simbólica, sem a estrutura complexa do tarot. Cada carta traz uma palavra, uma mensagem e uma pergunta — simples o suficiente para o cotidiano, profunda o suficiente para tocar o que importa. O conceito do Oráculo foi criado por mim: Amanda Santiago. Não sou leitora de nenhum tipo de sorte mas eu confio muito no destino e tenho vários oráculos que faço consulta principalmente em momentos mais difíceis, por isso resolvi criar o meu próprio oráculo online com foco na Natureza que é minha grande paixão.
            </p>
            
            <p>
              <strong>Preciso acreditar em espiritualidade para usar?</strong> De forma alguma. Muitas pessoas usam o Oráculo Florescer como uma prática de reflexão e mindfulness, sem conotação religiosa ou esotérica. A mensagem do dia funciona como um gatilho de consciência — independente da sua crença.
            </p>
            
            <p>
              <strong>A sorte do dia muda a cada 24 horas?</strong> Não, na verdade toda vez que você entrar no site uma nova carta é revelada. A ideia é criar um ritual diário — uma pausa pequena e significativa antes de começar o dia, você deve entrar no oráculo apenas uma vez para ver o que o destino te reservou como mensagem do dia.
            </p>
            
            <hr className="my-8 border-accent/30" />
            
            <h2 className="font-display text-2xl text-primary mt-8 mb-4">Até breve — e que cada dia traga sua mensagem</h2>
            
            <p>
              Você vai embora agora — de volta ao movimento do dia, às suas responsabilidades, ao mundo que não para.
            </p>
            
            <p>
              Mas algo ficou.
            </p>
            
            <p>
              Uma palavra. Uma pergunta. Um pequeno grão de atenção plantado no solo da sua consciência.
            </p>
            
            <p>
              O destino age assim: em camadas finas, silenciosas, quase imperceptíveis. E de repente, quando você menos espera, aquela mensagem que pareceu banal se revela como exatamente o que você precisava ouvir.
            </p>
            
            <p>
              Volte amanhã. Uma nova sorte do dia estará esperando por você.
            </p>
            
            <p>
              O universo não repete — ele evolui. E a cada carta revelada, uma versão um pouco mais desperta de você emerge.
            </p>
            
            <p className="text-center font-display text-lg text-primary mt-8">
              Com amor e intenção, Oráculo Florescer ✦
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t-4 border-accent mt-16 py-6">
        <div className="container max-w-4xl mx-auto px-4 text-center text-foreground/60 font-body text-sm">
          <p>© 2026 Mensagem de Sorte. Oráculo Florescer.</p>
        </div>
      </footer>
    </div>
  );
}
