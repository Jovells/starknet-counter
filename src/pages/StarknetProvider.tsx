"use client";
import { sepolia } from "@starknet-react/chains";
import {
  StarknetConfig,
  publicProvider,
  argent,
  braavos,
  useInjectedConnectors,
  starkscan
} from "@starknet-react/core";
interface IStarknet{
  children: React.ReactNode
}

function StarknetProvider({children}:IStarknet) {

  const { connectors } = useInjectedConnectors({
    // Show these connectors if the user has no connector installed.
    recommended: [
      argent(),
      braavos(),
    ],
    // Hide recommended connectors if the user has any connector installed.
    includeRecommended: "onlyIfNoConnectors",
    // Randomize the order of the connectors.
    order: "random"
  });

  return (
    <StarknetConfig
    chains={[sepolia]}
    provider={publicProvider()}
    connectors={connectors}
    autoConnect={true}
    explorer={starkscan}
    >
        {children}
    </StarknetConfig>
  )
}

export default StarknetProvider