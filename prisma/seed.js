const prisma = require("../prisma");
const seed = async () => {
  for (let i = 1; i <= 5; i++) {
    await prisma.customer.upsert({
      where: { id: i },
      update: {},
      create: {
        name: `Customer ${i}`,
      },
    });
    await prisma.restaurant.upsert({
      where: { id: i },
      update: {},
      create: {
        name: `Restaurant ${i}`,
      },
    });
  }
};
seed()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    ProcessingInstruction.exit(1);
  });
