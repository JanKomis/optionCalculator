import { erf } from "mathjs";

/*
spot: number etc. 142.57 USD
strike: number etc. 142 USD
intRate: number etc. 1,75% => 0,0175
divident: number etc. 1,6% => 0,016
volatility: number etc. 1,6% => 0,016
days: number etc. 25 days => 
*/

// Function for calculate normal distribution
function calculateNormalD(x: number): number {
  return 0.5 * (1 + erf(x / Math.sqrt(2)));
}

// Function for calculate d1
function calculateD1(
  spot: number,
  strike: number,
  intRate: number,
  divident: number,
  volatility: number,
  days: number
): number {
  return (
    (Math.log(spot / strike) +
      (intRate - divident + 0.5 * volatility ** 2) * (days / 365)) /
    (volatility * Math.sqrt(days / 365))
  );
}

// Function for calculate d2
function calculateD2(d1: number, volatility: number, days: number): number {
  return d1 - volatility * Math.sqrt(days / 365);
}

// Function for calculate call option
export function calculateCallOption(
  spot: number,
  strike: number,
  intRate: number,
  divident: number,
  volatility: number,
  days: number
): number {
  const d1 = calculateD1(spot, strike, intRate, divident, volatility, days);
  const d2 = calculateD2(d1, volatility, days);
  const callOption =
    spot * Math.exp(-divident * (days / 365)) * calculateNormalD(d1) -
    strike * Math.exp(-intRate * (days / 365)) * calculateNormalD(d2);
  return parseFloat(callOption.toFixed(4));
}
