import { useEffect, useState } from "react";
import CardDisplay from "@/components/CardDisplay";
import { cards, Card } from "@/data/cards";
import { toast } from "sonner";

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

  const handleShare = (type: 'whatsapp' | 'stories') => {
    if (!currentCard) return;

    const message = `🌸 *${currentCard.name}* - ${currentCard.theme}\n\n${currentCard.message}\n\n✨ Tire sua carta em: mensagemdesorte.com.br`;
    
    if (type === 'whatsapp') {
      const encodedMessage = encodeURIComponent(message);
      window.open(`https://wa.me/?text=${encodedMessage}`, '_blank');
      toast.success('Abrindo WhatsApp...');
    } else if (type === 'stories') {
      // For Stories, we'll copy to clipboard and show instructions
      navigator.clipboard.writeText(message);
      toast.success('Mensagem copiada! Cole nos seus Stories do Instagram');
    }
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
          onShare={handleShare}
        />

        {/* Banner Afiliado Space */}
        <div className="mt-16 p-8 bg-white rounded-xl border-4 border-dashed border-accent/40 text-center">
          <p className="text-foreground/50 font-body">
            Espaço para banner afiliado
          </p>
        </div>

        {/* Footer Info */}
        <div className="mt-12 text-center text-foreground/60 font-body text-sm">
          <p>Cada carta traz uma mensagem única para você refletir e crescer.</p>
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
