import { OptionValues } from "./calculateOptions";
import prisma from "./db";
import {
  OptionModel,
  OptionType,
  inputOptionParams,
  queryOptionData,
} from "./types";

export async function getAllStrategies() {
  try {
    const strategies = await prisma.strategy.findMany({});
    return strategies;
  } catch (error) {
    console.error("Error fetching strategies:", error);
  }
}

export async function getStrategyBySlug(strategySlug) {
  try {
    const strategy = await prisma.strategy.findUnique({
      where: {
        strategySlug: strategySlug,
      },
      include: {
        options: true, // Include all associated options
        underAssets: true, // Include all associated underAssets
      },
    });

    return strategy;
  } catch (error) {
    console.error("Error retrieving strategy: ", error);
  }
}

export async function getOption(optionId) {
  try {
    console.log("zacatek");
    const queryData = await prisma.option.findUnique({
      where: {
        id: optionId,
      },
    });
    if (!queryData) {
      throw new Error(`Option with id ${optionId} not found`);
    }

    const calcOptionParams = await OptionValues(queryData);
    const option = { ...queryData, ...calcOptionParams };
    console.log(option);
  } catch (error) {
    console.error("Error retrieving strategy: ", error);
  }
}

export async function getStrategyById(strategyId) {
  try {
    const strategy = await prisma.strategy.findUnique({
      where: {
        id: strategyId,
      },
      include: {
        options: true, // Include all associated options
        underAssets: true, // Include all associated underAssets
      },
    });

    console.log(strategy);
    return strategy;
  } catch (error) {
    console.error("Error retrieving strategy: ", error);
  }
}

