import config from './Config';
import { FetchSuspectlist } from './Calls';
console.log("System is starting up...")

console.log("Network ID: " + config.suspectfetchurl)


setInterval(FetchSuspectlist, 1000);
