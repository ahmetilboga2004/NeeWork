import { Redis } from "ioredis";

const redisClient = new Redis();
redisClient.on("error", (error) => {
  console.log(error);
});
redisClient.on("connect", (error) => {
  console.log("Redis bağlantısı başarılı bir şekilde gerçekleşti");
});

export default redisClient;
