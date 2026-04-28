import { Card } from "@/data/cards";
import { RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CardDisplayProps {
  card: Card;
  onRefresh: () => void;
}

export default function CardDisplay({ card, onRefresh }: CardDisplayProps) {


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
          <div className="flex justify-center">
            <Button
              onClick={onRefresh}
              className="flex items-center justify-center gap-2 bg-accent text-accent-foreground hover:bg-accent/90 px-8"
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
