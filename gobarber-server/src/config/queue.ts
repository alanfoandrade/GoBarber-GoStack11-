export default {
  limiter: {
    max: 90,
    duration: 1000,
  },
  redis: {
    host: process.env.REDIS_HOST,
    port: Number(process.env.REDIS_CACHE_PORT),
    password: process.env.REDIS_PASS || undefined,
  },
};
