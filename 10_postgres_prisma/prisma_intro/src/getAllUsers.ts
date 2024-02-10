import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getallUser() {
  const user = await prisma.user.findMany({
    orderBy: {
      lastName: 'asc'
    }
  })
  console.log(user);
}

getallUser();