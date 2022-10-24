import { createClient } from 'redis';
const publisher = createClient();

async function main(){
    await publisher.connect()
    await publisher.publish('channel1', 'hello world', function(){process.exit(0)});
}

main()

