import prisma from './db'

export async function getAllStrategies() {
  try {
    const strategies = await prisma.strategy.findMany({
      include: {
        openPositions: true,
        closedPositions: true,
      },
    });
    console.log(strategies);
    return strategies;
  } catch (error) {
    console.error("Error fetching strategies:", error);
  }
}
