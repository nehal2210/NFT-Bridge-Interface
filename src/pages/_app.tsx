import '@/styles/globals.css'

import '@rainbow-me/rainbowkit/styles.css';

import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createClient, goerli, WagmiConfig } from 'wagmi';
import { optimismGoerli,arbitrumGoerli } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { ChainContext } from '@/components/Context';
import type { AppProps } from 'next/app'
import Context from '@/components/Context';



const { chains, provider } = configureChains(
  [optimismGoerli,arbitrumGoerli],
  [
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'NFT bridge',
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})

export default function App({ Component, pageProps }: AppProps) {


  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
      <Context>
  <Component {...pageProps} />
  </Context>
  </RainbowKitProvider>
  </WagmiConfig>
  )
}
