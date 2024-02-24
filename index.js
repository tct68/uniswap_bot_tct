import { ethers } from 'ethers'
import IUniswapV3PoolABI from '@uniswap/v3-core/artifacts/contracts/interfaces/IUniswapV3Pool.sol/IUniswapV3Pool.json'

const provider = new ethers.providers.JsonRpcProvider('https://explorer.zksync.io')
const poolContract = new ethers.Contract(
    '0x1F98431c8aD98523631AE4a59f267346ea31F984',
    IUniswapV3PoolABI.abi,
    provider
)

export {
    provider,
    poolContract
}