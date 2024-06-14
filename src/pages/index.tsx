"use client";
import {
  useAccount,
  useConnect,
  useDisconnect,
  useContractRead,
  useContractWrite,
  useContract,
} from "@starknet-react/core";
import abi from "../abi/abi.json";
import { COUNTER_CONTRACT_ADDRESS } from "@/util/constant";
import { useMemo, useState } from "react";

function App() {
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();
 const {isConnected, address} = useAccount()
  const [value, setValue] = useState<number>(0)



// read state 
const { data, isError, isLoading, error } = useContractRead({
  functionName: "get_counter",
  abi,
  address: COUNTER_CONTRACT_ADDRESS,
  watch: true,
});
// increment counter: write action
const { contract } = useContract({
  abi: abi,
  address: COUNTER_CONTRACT_ADDRESS,
});

const calls = useMemo(() => {
  if (!address || !contract) return;
  return contract.populateTransaction["increment_counter"]!();
}, [contract, address]);

const {
  writeAsync,
  data:result,
  isPending,
} = useContractWrite({
  calls,
});

// get counter value: read action
  const handleGetCount = async() =>{
    let counter = await contract?.get_counter();
    setValue(counter?.toString())

  }


  return (
    <div>
      <header className="flex justify-between p-2">
        <div className="">
          <h1 className="text-2xl">
            {" "}
            Number<a href="#"> Counter</a>
          </h1>
        </div>

        {isConnected ? (
          <button
          onClick={() => disconnect()}
            className="bg-gray-400 p-2 rounded-lg"
            type="button"
          >
            Disconnect
          </button>
        ) : (
          <div className="flex justify-between ">
            {connectors.map((connector) => (
              <div className="mr-2" key={connector.id}>
                <button onClick={() => connect({ connector })}>
                  {connector.name}
                </button>
              </div>
            ))}
          </div>
        )}
      </header>
      <main className="flex justify-center">
        <div className="">
          <div className="text-center my-4">
            <h2>Ensure to connect to Sepolia Test network! </h2>
            <p className="description">Connected Address: {address}</p>
            <h2>
              Count: {isLoading && "Loading"} {data?.toString()}
            </h2>
            <h2>
              value:  {value}
            </h2>
            {/* <h2>{isError && error?.message}</h2> */}
            <div>
              <div className="flex justify-center space-x-4 my-4">
                <div>
                  <button onClick={() =>  writeAsync()} className="bg-green-500 p-2 rounded-lg" type="button">
                    Increment Counter
                  </button>
                </div>
                <div>
                  <button className="bg-red-500 p-2 rounded-lg" type="button">
                    Decrement Counter
                  </button>
                </div>

                <div>
                  <button
                  onClick={handleGetCount}
                    className="bg-yellow-500 p-2 rounded-lg"
                    type="button"
                  >
                    Get Counter
                  </button>
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
