import { Character } from "@/modules/dashboard/domain/character";
import { Card, CardContent } from "@/components/card";
import { Badge } from "@/components/badge";
import { CircleAlert, MapPin, Users } from "lucide-react";

interface CharacterCardProps {
  character: Character;
}

export function CharacterCard({ character }: CharacterCardProps) {
  const getStatusColor = (status: Character["status"]) => {
    const statusCss = {
        Alive: "bg-green-500",
        Dead: "bg-red-500",
        unknown: "bg-gray-500",
        default: "bg-gray-500",
    }
    if (!status) {
      return statusCss.default;
    }
    return statusCss[status] || statusCss.default;
  };

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={character.image}
          alt={character.name}
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
        />
      </div>
      
      <CardContent className="p-4">
        <div className="mb-2 flex items-center gap-2">
          <span className={`inline-block w-2 h-2 rounded-full ${getStatusColor(character.status)}`} />
          <span className="text-sm text-muted-foreground">{character.status}</span>
        </div>
        
        <h3 className="font-bold text-lg mb-1 truncate">{character.name}</h3>
        
        <div className="text-sm text-muted-foreground space-y-1 mt-3">
          <div className="flex items-center gap-1">
            <Users className="h-3.5 w-3.5" />
            <span>{character.species}</span>
            {character.type && <Badge variant="outline" className="ml-1 text-xs">{character.type}</Badge>}
          </div>
          
          <div className="flex items-center gap-1">
            <CircleAlert className="h-3.5 w-3.5" />
            <span>{character.gender}</span>
          </div>
          
          <div className="flex items-center gap-1 truncate">
            <MapPin className="h-3.5 w-3.5 shrink-0" />
            <span className="truncate">{character.location?.name}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}