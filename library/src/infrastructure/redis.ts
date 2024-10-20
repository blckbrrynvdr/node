import * as redis from 'redis';
import config from "../infrastructure/config";

const client = redis.createClient({ url: config.REDIS_URL });

(async () => {
    await client.connect();
})()

export default client;