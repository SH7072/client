import logo from "./logo.svg";
import "./App.css";
import { connect, StringCodec } from "nats.ws/";


function App() {
  const publisher = async () => {
    let nc;
    try{

      nc = await connect({ servers: "nats://localhost:4222" });
      console.log("connected as Publisher");
      //   const sc = StringCodec();
      nc.publish("test", "hello world");
      //   const sub = nc.subscribe("test");
      //   for await (const m of sub) {
        //     console.log(`[${sub.getProcessed()}]: ${m.data}`);
        //   }
      }
      catch(error){
        console.log(error);
      }
  }
  publisher();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      
    </div>
  );
}

export default App;
