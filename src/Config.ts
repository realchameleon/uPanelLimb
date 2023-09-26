import * as fs from 'fs';
import * as toml from 'toml';

interface uPanel {
    networkid: string;
    apikey: string;
    suspectfetchurl: string;
}

let config: uPanel;

try {
    const tomlData = fs.readFileSync('config.toml', 'utf-8');
    config = toml.parse(tomlData);

    config.suspectfetchurl = `https://upanel.one/api/players/network/${config.networkid}/suspects?min19`;
  } catch (error) {
    console.error('Error reading or parsing config.toml:', error);
    process.exit(1);
  }

export default config;

