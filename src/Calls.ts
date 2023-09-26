import axios, { AxiosResponse } from 'axios';
import config from './Config';

const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${config.apikey}`
};

export function FetchSuspectlist() {
    axios.get(config.suspectfetchurl, { headers: headers })
    .then((response: AxiosResponse) => {
        const players = response.data;

        const limbPlayers = players.filter((player: any) => {
            return player.flags.includes('limb') && player.banned == true;
          });

        limbPlayers.forEach((player: any) => {
            console.log('Player detected with "limb" flag and is not banned:', player.id);
          });

    })
    .catch((error) => {
        console.error(error);
    });
}


function BanPlayer(steamid: string) {
    

}

