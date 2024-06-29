import { PrismaClient } from '@prisma/client';
import { hash } from 'bcrypt';

const prisma = new PrismaClient();

async function clearDatabase() {
  await prisma.user.deleteMany();
}

async function main() {
  console.log('Resetting Database');
  await clearDatabase();
  console.log('Database succesfully reset');
  console.log('Seeding...');

  console.log('Create User...');

  const hashPassword = await hash('123456', 10);

  await prisma.user.create({
    data: {
      username: 'usertest',
      password: hashPassword,
    },
  });

  console.log('Seeder completed!');
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
