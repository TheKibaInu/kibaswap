import { BigNumber, utils } from 'ethers'

import { SupportedChainId } from 'constants/chains'
import Swal from 'sweetalert2'
import { Web3Provider } from '@ethersproject/providers'

interface SwitchNetworkArguments {
  library: Web3Provider
  chainId: SupportedChainId
  account?: string
}

// provider.request returns Promise<any>, but wallet_switchEthereumChain must return null or throw
// see https://github.com/rekmarks/EIPs/blob/3326-create/EIPS/eip-3326.md for more info on wallet_switchEthereumChain
export async function switchToNetwork({ library, chainId, account }: SwitchNetworkArguments): Promise<null | void> {
  const switchFn = async () => {
    if (!library?.provider?.request) {
      return
    }
    const formattedChainId = utils.hexStripZeros(BigNumber.from(chainId).toHexString())
    return library?.provider.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: formattedChainId }],
    }).then(() => window.location.reload())
  }
  await switchFn()
}
