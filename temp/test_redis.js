import { createClient } from "redis"

const client = createClient({
  url: "rediss://default:gQAAAAAAARvbAAIncDJmMzEyMjNmMmNkNjk0YmFjYjE3N2Y0NThmNDliMzFjOHAyNzI2Njc@comic-crawdad-72667.upstash.io:6379"
});

client.on("error", function(err) {
  throw err;
});
await client.connect()
await client.set('foo','bar');

// Disconnect after usage
await client.disconnect();