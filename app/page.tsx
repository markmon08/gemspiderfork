'use client'

import { useEffect, useState } from "react";
import Layout from "./layout";
import { TonConnectButton, TonConnectUI } from "@tonconnect/ui-react";

export default function Home() {
    const [tonBalance] = useState("0"); // Removed `setTonBalance`
    const [amount, setAmount] = useState("");

    useEffect(() => {
        new TonConnectUI({ 
            manifestUrl: "https://markmon08.github.io/gemspider/tonconnect-manifest.json"
        });
    }, []);

    return (
        <Layout>
            <div className="bg-white/10 p-6 rounded-lg shadow-md w-80 animate-slideUp">
                <h2 className="text-xl font-bold">Wallet Connection</h2>
                <TonConnectButton />
                <div className="mt-4">
                    <p className="font-semibold">TON Balance:</p>
                    <p>{tonBalance} TON</p>
                    <p className="font-semibold mt-2">$SPIDEY Balance:</p>
                    <p>0 SPIDEY</p>
                </div>
                <div className="mt-6">
                    <h2 className="text-lg font-bold">Buy $SPIDER Tokens</h2>
                    <input 
                        type="number" 
                        className="w-full p-2 rounded bg-gray-700 text-white" 
                        placeholder="Enter TON amount" 
                        value={amount} 
                        onChange={(e) => setAmount(e.target.value)}
                    />
                    <button className="w-full mt-2 bg-green-500 p-2 rounded text-white hover:opacity-80">
                        Buy $SPIDER
                    </button>
                </div>
            </div>
        </Layout>
    );
}
