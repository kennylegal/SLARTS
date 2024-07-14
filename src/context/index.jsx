'use client';

import { createWeb3Modal, defaultConfig } from '@web3modal/ethers/react';
import { useState, useEffect } from 'react';

const projectId = 'ec74df8cc62ceb96c4908b2715c18eae';

const bscMainnet = {
  chainId: 56,
  name: 'Binance Smart Chain',
  currency: 'BNB',
  explorerUrl: 'https://bscscan.com',
  rpcUrl: 'https://bsc-dataseed.binance.org/'
};

const metadata = {
  name: 'Slart',
  description: 'Slart The Greatest Airdrop of All Time',
  url: 'https://slart.netlify.app/',
  icons: ['https://avatars.mywebsite.com/']
};

const ethersConfig = defaultConfig({
  metadata,
  enableEIP6963: true,
  enableInjected: true,
  enableCoinbase: true,
  defaultChainId: 56
});


export function Web3Modal({ children }) {

  createWeb3Modal({
    ethersConfig,
    chains: [bscMainnet],
    projectId,
    enableAnalytics: true,
    enableOnramp: true
  });

  return (
    <>
      {children }
    </>
  );
}
