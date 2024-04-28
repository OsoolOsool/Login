'use client';
import { CHAIN } from "@/app/chain";
import { client } from "@/app/clients";
import { ConnectButton } from "thirdweb/react";
import{inAppWallet} from "thirdweb/wallets";

const wallets =[
    inAppWallet(),
]

export const InAppLogin = () => {
    return (
        <ConnectButton
            client={client}
            chain={CHAIN}
            wallets={wallets}
            connectButton={{
                label: "Login"
            }}
        />
    )

};