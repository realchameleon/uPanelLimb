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
            return player.flags.includes('limb') && player.banned == false;
          });

        limbPlayers.forEach((player: any) => {
            console.log('Player detected with "limb" flag and is not banned:', player.id);
            BanPlayer(player.id);
            console.log('Player banned:', player.id)
          });

    })
    .catch((error) => {
        console.error(error);
    });
}


function BanPlayer(steamid: string) {
    const banData = {
        "type": "ban",
        "steamId": steamid,
        "reason": "Cheating", 
        "global": true,
      };
    axios.post(config.banurl, banData, { headers: headers })
    .then((response: AxiosResponse) => {
        console.log(response.data);
    })
    .catch((error) => {
        console.error(error);
    });
}

