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
// TODO: Setup provider
  return (
    children
  )
}

export default StarknetProvider