import { schemaMapping } from "./utils";

export namespace ProtocolType {
  export const EXCHANGE = "EXCHANGE";
  export const LENDING = "LENDING";
  export const YIELD = "YIELD";
  export const BRIDGE = "BRIDGE";
  export const GENERIC = "GENERIC";
}
export namespace Versions {
  export const Schema100 = "1.0.0";
  export const Schema120 = "1.2.0";
  export const Schema130 = "1.3.0";
  export const Schema200 = "2.0.0";
  export const Schema201 = "2.0.1";
  export const Schema300 = "3.0.0";
  export const Schema301 = "3.0.1";
  export const Schema302 = "3.0.2";

  // Array to list out the different schema versions available
  export const SchemaVersions = [Schema100, Schema120, Schema130, Schema201, Schema300];
}

export const latestSchemaVersions = (schemaType: string, versionStr: string) => {
  const schema = schemaMapping[schemaType];
  if (schema === "exchanges") {
    if ((["3.0.0", "3.0.1", "3.0.2"]).includes(versionStr)) {
      return true;
    }
  } else if (schema === "lending") {
    if ((["3.0.0"]).includes(versionStr)) {
      return true;
    }
  } else if (schema === "vaults" || schema === "generic") {
    if ((["1.3.0"]).includes(versionStr)) {
      return true;
    }
  } else if (schema === "bridge" || schema === "generic") {
    if ((["1.1.0"]).includes(versionStr)) {
      return true;
    }
  }
  return false;
}
export const SubgraphBaseUrl = "https://api.thegraph.com/subgraphs/name/";
export const PoolName: Record<string, string> = {
  EXCHANGE: "liquidityPool",
  LENDING: "market",
  YIELD: "vault",
  GENERIC: "pool",
  BRIDGE: "pool",
  "exchanges": "liquidityPool",
  "vaults": "vault",
  "dex-amm": "liquidityPool",
  "yield-aggregator": "vault",
  "lending": "pool",
  "generic": "pool",
  "bridge": "pool",
};
export const PoolNames: Record<string, string> = {
  EXCHANGE: "liquidityPools",
  LENDING: "markets",
  YIELD: "vaults",
  GENERIC: "pools",
  BRIDGE: "pools",
  "exchanges": "liquidityPools",
  "vaults": "vaults",
  "dex-amm": "liquidityPools",
  "yield-aggregator": "vaults",
  "lending": "pools",
  "generic": "pools",
  "bridge": "pools",
};
export const ProtocolTypeEntityName: Record<string, string> = {
  EXCHANGE: "dexAmmProtocol",
  LENDING: "lendingProtocol",
  YIELD: "yieldAggregator",
  GENERIC: "protocol",
  BRIDGE: "bridgeProtocol",
};
export const ProtocolTypeEntityNames: Record<string, string> = {
  EXCHANGE: "dexAmmProtocols",
  LENDING: "lendingProtocols",
  YIELD: "yieldAggregators",
  GENERIC: "protocols",
  BRIDGE: "bridgeProtocols"
};
export interface Schema {
  entities: string[];
  entitiesData: { [x: string]: { [x: string]: string } };
  poolData: { [x: string]: string };
  events: string[];
  protocolFields: { [x: string]: string };
  query: string;
  financialsQuery: string;
  hourlyUsageQuery: string;
  dailyUsageQuery: string;
  protocolTableQuery: string;
  poolsQuery: string;
  poolTimeseriesQuery: string;
  positionsQuery?: string;
}
export const percentageFieldList = [
  "rates",
  "rewardAPR",
  "maximumLTV",
  "liquidationThreshold",
  "liquidationPenalty",
  "inputTokenWeights",
  "baseYield",
  "fee",
  "percentage",
];

export const blockExplorers: Record<string, string> = {
  ARBITRUM: "https://arbiscan.io/",
  AURORA: "https://aurorascan.dev/",
  AVALANCHE: "https://snowtrace.io/",
  BSC: "https://bscscan.com/",
  FANTOM: "https://ftmscan.com/",
  ETHEREUM: "https://etherscan.io/",
  POLYGON: "https://polygonscan.com/",
  MOONRIVER: "https://moonriver.moonscan.io/",
  OPTIMISM: "https://optimistic.etherscan.io/",
  GNOSIS: "https://blockscout.com/xdai/mainnet/",
  CELO: "https://explorer.celo.org/",
  FUSE: "https://explorer.fuse.io/",
  HARMONY: "https://explorer.harmony.one/",
  CRONOS: "https://cronoscan.com/",
};

// negativeFieldList contains field names that can be negative
export const negativeFieldList = ["dailyNetVolumeUSD", "netVolumeUSD", "cumulativeNetVolumeUSD"];

export const titles: any = {
  "financialsDailySnapshots-totalValueLockedUSD": "Total Value Locked (in USD)",
  "financialsDailySnapshots-dailySupplySideRevenueUSD": "Supply Side Revenue (in USD)",
  "financialsDailySnapshots-cumulativeSupplySideRevenueUSD": "Cumulative Supply Side Revenue (in USD)",
  "financialsDailySnapshots-dailyProtocolSideRevenueUSD": "Protocol Side Revenue (in USD)",
  "financialsDailySnapshots-cumulativeProtocolSideRevenueUSD": "Cumulative Protocol Side Revenue (in USD)",
  "financialsDailySnapshots-dailyTotalRevenueUSD": "Daily Total Revenue (in USD)",
  "financialsDailySnapshots-cumulativeTotalRevenueUSD": "Cumulative Total Revenue (in USD)",
  "financialsDailySnapshots-totalBorrowBalanceUSD": "Total Borrow Balance (in USD)",
  "financialsDailySnapshots-dailyBorrowUSD": "Daily Borrow (in USD)",
  "financialsDailySnapshots-cumulativeBorrowUSD": "Cumulative Borrow (in USD)",
  "financialsDailySnapshots-totalDepositBalanceUSD": "Total Deposit Balance (in USD)",
  "financialsDailySnapshots-dailyDepositUSD": "Daily Deposit (in USD)",
  "financialsDailySnapshots-cumulativeDepositUSD": "Cumulative Deposit (in USD)",
  "financialsDailySnapshots-mintedTokenSupplies": "Synth Token Supplies",
  "financialsDailySnapshots-dailyLiquidateUSD": "Daily Liquidate (in USD)",
  "financialsDailySnapshots-cumulativeLiquidateUSD": "Cumulative Liquidate (in USD)",

  "usageMetricsDailySnapshots-cumulativeUniqueUsers": "Cumulative Unique Users",
  "usageMetricsDailySnapshots-dailyActiveUsers": "Daily Active Users",
  "usageMetricsDailySnapshots-dailyTransactionCount": "Daily Transaction Count",
  "usageMetricsDailySnapshots-dailyDepositCount": "Daily Deposit Count",
  "usageMetricsDailySnapshots-dailyWithdrawCount": "Daily Withdraw Count",
  "usageMetricsDailySnapshots-dailyBorrowCount": "Daily Borrow Count",
  "usageMetricsDailySnapshots-dailyRepayCount": "Daily Repay Count",
  "usageMetricsDailySnapshots-dailyLiquidateCount": "Daily Liquidate Count",
  "usageMetricsDailySnapshots-totalPoolCount": "Total Pool Count",
  "usageMetricsDailySnapshots-cumulativeUniqueDepositors": "Cumulative Unique Depositors",
  "usageMetricsDailySnapshots-cumulativeUniqueBorrowers": "Cumulative Unique Borrowers",
  "usageMetricsDailySnapshots-cumulativeUniqueLiquidators": "Cumulative Unique Liquidators",
  "usageMetricsDailySnapshots-cumulativeUniqueLiquidatees": "Cumulative Unique Liquidatees",
  "usageMetricsDailySnapshots-dailyActiveDepositors": "Daily Active Depositors",
  "usageMetricsDailySnapshots-dailyActiveBorrowers": "Daily Active Borrowers",
  "usageMetricsDailySnapshots-dailyActiveLiquidators": "Daily Active Liquidators",
  "usageMetricsDailySnapshots-dailyActiveLiquidatees": "Daily Active Liquidatees",

  "usageMetricsHourlySnapshots-cumulativeUniqueUsers": "Cumulative Unique Users",
  "usageMetricsHourlySnapshots-hourlyActiveUsers": "Hourly Active Users",
  "usageMetricsHourlySnapshots-hourlyTransactionCount": "Hourly Transaction Count",
  "usageMetricsHourlySnapshots-hourlyDepositCount": "Hourly Deposit Count",
  "usageMetricsHourlySnapshots-hourlyWithdrawCount": "Hourly Withdraw Count",
  "usageMetricsHourlySnapshots-hourlyBorrowCount": "Hourly Borrow Count",
  "usageMetricsHourlySnapshots-hourlyRepayCount": "Hourly Repay Count",
  "usageMetricsHourlySnapshots-hourlyLiquidateCount": "Hourly Liquidate Count",
}

export const headers: any = {
  "financialsDailySnapshots": "Financials",
  "usageMetricsDailySnapshots": "Usage Metrics: Daily",
  "usageMetricsHourlySnapshots": "Usage Metrics: Hourly",
}