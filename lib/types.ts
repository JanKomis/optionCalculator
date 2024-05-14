export type TradeType = "Open" | "Closed";

export type Position = "Long" | "Short";

export type OptionType = "Call" | "Put";

export type InputOptionParams = {
  position: Position;
  spotPrice: Number;
  strikePrice: Number;
  expirationDate: String;
  volatility: Number;
  interestRate: Number;
  dividend: Number;
  strikeInterval: Number;
};

export type queryOptionData = InputOptionParams & {
  id: string;
  optionSlug: string;
  updatedAt: string;
  trade: TradeType;
  optionType: OptionType;
  openPrice: Number;
};

export type calcOptionParams = {
  grDelta: Number;
  grGama: Number;
  grTheta: Number;
  grVega: Number;
  optionPrice: Number;
};

export type Option = queryOptionData & calcOptionParams;


export type StrategyRow = {
    id: string;
    title: string;
    updatedAt: string;
  };