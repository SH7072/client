import {  connect } from "nats";

const main = async () => {
  const nc = await connect({ servers: "nats://localhost:4222" });
//   const sc = StringCodec();
  const sub = nc.subscribe("test");
  for await (const m of sub) {
    console.log(`[${sub.getProcessed()}]: ${m.data}`);
  }
  console.log("subscription closed");
};
main();

