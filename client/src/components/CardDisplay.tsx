import { Card } from "@/data/cards";
import { Share2, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CardDisplayProps {
  card: Card;
  onRefresh: () => void;
  onShare: (type: 'whatsapp' | 'stories') => void;
}

export default function CardDisplay({ card, onRefresh, onShare }: CardDisplayProps) {
  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Card Container */}
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-accent mb-8">
        {/* Card Image */}
        <div className="aspect-[2/3] bg-gradient-to-br from-accent via-primary to-[#1C1C2E] flex items-center justify-center relative overflow-hidden">
          <img 
            src={card.imageUrl} 
            alt={card.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Card Info */}
        <div className="p-6 md:p-8 bg-white">
          {/* Message */}
          <div className="mb-8">
            <h3 className="font-display text-xl text-primary mb-4">Mensagem</h3>
            <p className="text-foreground leading-relaxed text-lg">{card.message}</p>
          </div>

          {/* Question */}
          <div className="mb-8 p-6 bg-accent/10 rounded-xl border-2 border-accent">
            <p className="text-foreground font-semibold text-center italic text-base">
              "{card.question}"
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={() => onShare('whatsapp')}
              variant="outline"
              className="flex-1 flex items-center justify-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white"
            >
              <Share2 size={18} />
              Compartilhar WhatsApp
            </Button>
            <Button
              onClick={() => onShare('stories')}
              variant="outline"
              className="flex-1 flex items-center justify-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white"
            >
              <Share2 size={18} />
              Compartilhar Stories
            </Button>
            <Button
              onClick={onRefresh}
              className="flex-1 flex items-center justify-center gap-2 bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <RefreshCw size={18} />
              Nova Carta
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
