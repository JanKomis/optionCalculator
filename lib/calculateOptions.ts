//import { calcOptionParams, inputOptionParams } from "./types";
import { VanillaOption } from "black-scholes-bonanza";
import { calcOptionParams, inputOptionParams, queryOptionData } from "./types";


export async function OptionValues(params: inputOptionParams):calcOptionParams {
  const opt = new VanillaOption(
    params.volatility,
    params.interestRate,
    params.expiration / 365,
    params.strikePrice,
    params.type === "Call"
  );


  /*
  console.log(opt.getPrice(params.spotPrice));
  console.log(`Delta: ${opt.getDelta(params.spotPrice)}`);
  console.log(`Gama: ${opt.getGamma(params.spotPrice)}`);
  console.log(`Vega: ${opt.getVega(params.spotPrice)}`);
  console.log(`Theta: ${opt.getTheta(params.spotPrice)}`);
  console.log(`Rho: ${opt.getRho(params.spotPrice)}`);
  */

  const optionPrice: number = opt.getPrice(params.spotPrice);
  const grDelta: number = opt.getDelta(params.spotPrice);
  const grGama: number = opt.getGamma(params.spotPrice);
  const grTheta: number = opt.getTheta(params.spotPrice) / 365;
  const grVega: number = opt.getVega(params.spotPrice) /100;
  const grRho: number = opt.getRho(params.spotPrice) /100;

  return { optionPrice, grDelta, grGama, grTheta, grVega, grRho };
}
