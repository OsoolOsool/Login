'use client';
import { CHAIN } from "@/app/chain";
import { client } from "@/app/clients";
import { ConnectButton } from "thirdweb/react";

export const TraditionalLogin = () => {
    return (
        <ConnectButton
            client={client}
            chain={CHAIN}
        />
    )

};