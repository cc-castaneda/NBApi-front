import { PipeTransform, Pipe } from '@angular/core'
import { Player } from '../models/player';


@Pipe({
    name: 'playerFilter'
})
// SE REALIZA FILTRO SIMPLE POR EQUIPO
export class PlayerFilterPipe implements PipeTransform {
    transform(players: Player[], searchPlayer: string ): Player[] {
        if ( !players || !searchPlayer ) {
            return players;
        }
        return players.filter(player => player.team.full_name.toLowerCase()
        .indexOf(searchPlayer.toLowerCase()) !== -1 );
    }
}