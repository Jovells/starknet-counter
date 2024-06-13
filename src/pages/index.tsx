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
useMemo;
function App() {
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();
  const { isConnected, address } = useAccount();
  const [value, setValue] = useState(0)

  // const { data, isError, isLoading, error } = useContractRead({
  //   functionName: "get_counter",
  //   abi,
  //   address: COUNTER_CONTRACT_ADDRESS,
  //   watch: true,
  // });

  // write action
  // const { contract } = useContract({
  //   abi: abi,
  //   address: COUNTER_CONTRACT_ADDRESS,
  // });

  // const calls: any = useMemo(() => {
  //   if (!address || !contract) {
  //     return [];
  //   }
  //   return contract.populateTransaction["increment_counter"]!()
  // }, [contract, address]);

  // const {
  //   writeAsync,
  //   data: result,
  //   isPending,
  // } = useContractWrite({
  //   calls,
  // });

  const handleGetCount = async() =>{

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
            className="bg-gray-400 p-2 rounded-lg"
            onClick={() => disconnect()}
            type="button"
          >
            Disconnect
          </button>
        ) : (
          // <div className="flex justify-between ">
          //   {connectors.map((connector) => (
          //     <div className="mr-2" key={connector.id}>
          //       <button onClick={() => connect({ connector })}>
          //         {connector.name}
          //       </button>
          //     </div>
          //   ))}
          // </div>
          <button
          className="bg-gray-400 p-2 rounded-lg"
          type="button"
        >
          Connect
        </button>
        )}
      </header>
      <main className="flex justify-center">
        <div className="">
          <div className="text-center my-4">
            <h2>Ensure to connect to Sepolia Test network! </h2>
            <p className="description">Connected Address: {address}</p>
            <h2>
              {/* Count: {isLoading && "Loading"} {value} */}
            </h2>
            {/* <h2>{isError && error?.message}</h2> */}
            <div>
              <div className="flex justify-center space-x-4 my-4">
                <div>
                  <button  className="bg-green-500 p-2 rounded-lg" type="button">
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
