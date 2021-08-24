import Redis from "ioredis"

export const redis = new Redis({
    port: +(process.env.REDIS_PORT as string),
    password: process.env.REDIS_PASSWORD as string,
    host: process.env.REDIS_HOST as string
})

redis.on('error', err => {
    console.log('Error ' + err);
});