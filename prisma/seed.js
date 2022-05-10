const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async function main() {
  try {
    const commander = await prisma.commander.upsert({
      where: { name: 'Commander' },
      update: {},
      create: {
        name: 'Commander',
        username: 'Com. Ajolonauta 1',
        mainStack: 'Node',
        currentEnrollment: true,
        hasAzureCertification: false
      },
    });

    const commander2= await prisma.commander.upsert({
        where: { name: 'Commander 1' },
        update: {},
        create: {
          name: 'Commander 1',
          username: 'Com. Ajolonauta 2',
          mainStack: 'Java',
          currentEnrollment: false,
          hasAzureCertification: true
        },
      });

      const commander3 = await prisma.commander.upsert({
        where: { name: 'Commander 3' },
        update: {},
        create: {
          name: 'Commander 3',
          username: 'Com. Ajolonauta 3',
          mainStack: 'Node',
          currentEnrollment: true,
          hasAzureCertification: true
        },
      });

    console.log('Create 3 explorers');
  } catch(e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();