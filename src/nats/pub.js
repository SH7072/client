import React from "react";
import { connect, StringCodec } from "nats.ws";

const publisher = async () => {
  const nc = await connect({ servers: "nats://localhost:4222" });
  console.log("connected as Publisher");
  //   const sc = StringCodec();
  nc.publish("test", "hello world");
  //   const sub = nc.subscribe("test");
  //   for await (const m of sub) {
  //     console.log(`[${sub.getProcessed()}]: ${m.data}`);
  //   }
};

const pub = () => {
  publisher();
  return <div>pub</div>;
};

export default pub;
