// import { connect, disconnect } from '@argent/get-starknet'
import { useState, useEffect } from "react";
import { Contract } from "starknet";

function App() {
  const [connection, setConnection] = useState();
  const [account, setAccount] = useState();
  const [address, setAddress] = useState<string>("hello");

  const [retrievedValue, setRetrievedValue] = useState<number>(0);

  const connectWallet = async () => {};

  const disconnectWallet = async () => {};

  const increaseCounter = async () => {};

  const decreaseCounter = async () => {};

  const getCounter = async () => {};

  return (
    <div className="">
      <header className="flex justify-between p-2">
        <div className="">
          <h1 className="text-2xl">
            {" "}
            Number<a href="#"> Counter</a>
          </h1>
        </div>
        <div>
          {" "}
          <button className="bg-blue-500 p-2 rounded-lg" onClick={connectWallet}>
            Connect wallet
          </button>
        </div>
      </header>
      <main className="flex justify-center">
        <div className="">
          <div className="text-center my-4">
            <h2>Ensure to connect to Sepolia Test network! </h2>
            <p className="description">Connected Address: {address}</p>
            <h2>Count: {retrievedValue}</h2>
          <div>
            

            <div className="flex items-center space-x-4 my-4">
              <div>
                <button className="bg-green-500 p-2 rounded-lg" type="button">Increment Counter</button>
              </div>
              <div>
              <button className="bg-red-500 p-2 rounded-lg" type="button">Decrement Counter</button>
              </div>

              <div>
              <button className="bg-yellow-500 p-2 rounded-lg" type="button">Get Counter</button>
              </div>
            </div>
          </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
