export type TradeType = "Open" | "Closed";

export type Position = "Long" | "Short";

export type OptionType = "Call" | "Put";

export type OptionModel = "Black_Scholes";

export type inputOptionParams = {
  type: OptionType;
  model: OptionModel;
  spotPrice: number;
  strikePrice: number;
  expiration: number;
  volatility: number;
  interestRate: number;
  dividend: number;
  strikeInterval: number;
};


export type queryOptionData = inputOptionParams & {
  id: string;
  optionSlug: string;
  updatedAt: string;
  trade: TradeType;
  position: Position;
  openPrice: number;
};


export type calcOptionParams = {
  optionPrice: number;
  grDelta: number;
  grGama: number;
  grTheta: number;
  grVega: number;
  grRho: number;
};

export type option = queryOptionData & calcOptionParams;

export type StrategyRow = {
  strategySlug: string;
  title: string;
  updatedAt: string;
};
