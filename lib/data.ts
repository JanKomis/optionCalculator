import prisma from "./db";

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
