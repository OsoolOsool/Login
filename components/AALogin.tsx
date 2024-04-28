'use client';
import { CHAIN } from "@/app/chain";
import { client } from "@/app/clients";
import { ConnectButton } from "thirdweb/react";
import{inAppWallet} from "thirdweb/wallets";

const wallets =[
    inAppWallet(),
]

const accountAbstraction ={
    chain: CHAIN,
    factoryAddress:"0x61Cb179C539caD7b226CDf5298BBd6461119DE83",
    gasless: true,


}
export const AALogin = () => {
    return (
        <ConnectButton
            client={client}
            chain={CHAIN}
            wallets={wallets}
            accountAbstraction={accountAbstraction}
            connectButton={{
                label: "AA Login"
            }}
        />
    )

};