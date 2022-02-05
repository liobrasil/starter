import { config } from "@onflow/fcl";

config({
  "accessNode.api": process.env.REACT_APP_ACCESS_NODE,
  "discovery.wallet": process.env.REACT_APP_DISCOVERY_WALLET,
  env: process.env.REACT_APP_ENV,
  "0xFungibleToken": process.env.REACT_APP_FUNGIBLE_TOKEN,
  "0xNonFungibleToken": process.env.REACT_APP_NON_FUNGIBLE_TOKEN,
  "0xNFTMetadata": process.env.REACT_APP_NFT_METADATA,
  "0xFlowToken": process.env.REACT_APP_FLOW_TOKEN,
  //Generally not needed
  "0xFlowFees": process.env.REACT_APP_FLOW_FEES,
  "0xServiceAccount": process.env.REACT_APP_SERVICE_ACCOUNT, //two contracts deployed at that address
  "0XStakingTable": process.env.REACT_APP_STAKING_TABLE,
  //Epoch contracts: they're all deployed to the same account as FlowIDTableStaking
  // "0xFlowEpoch"
  // "0xFlowClusterQC"
  // "0xFlowDKG"
  //Other important contracts
  //Locked Tokens
  "0xLockedTokens": process.env.REACT_APP_LOCKED_TOKENS,
  "0XStakingProxy": process.env.REACT_APP_STAKING_PROXY,
  //Staking Collection
  "0xFlowStakingCollection": process.env.REACT_APP_FLOW_STAKING_COLLECTION,
});
