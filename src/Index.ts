import config from './Config';
import { FetchSuspectlist } from './Calls';
console.log("System is starting up...")

console.log("Network ID: " + config.networkid)
FetchSuspectlist();

setInterval(FetchSuspectlist, 300000); // Checks every  5 min due to sometimes the API not updating the list
