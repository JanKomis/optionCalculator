import prisma from "./db";

export async function getAllStrategies() {
  try {
    const strategies = await prisma.strategy.findMany({
      include: {
        openPositions: true,
        closedPositions: true,
      },
    });
    return strategies;
  } catch (error) {
    console.error("Error fetching strategies:", error);
  }
}

export async function getStrategyById(strategyId) {
  try {
    const strategy = await prisma.strategy.findUnique({
      where: {
        id: strategyId,
      },
    });

    return strategy;
  } catch (error) {
    console.error("Error retrieving strategy: ", error);
  }
}
