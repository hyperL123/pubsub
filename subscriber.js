import { createClient } from 'redis';

async function main(){
    const subscriber = createClient()
    await subscriber.connect()
    subscriber.subscribe('channel1', (message) => {
        console.log(message); // 'message'
    });
}

main()