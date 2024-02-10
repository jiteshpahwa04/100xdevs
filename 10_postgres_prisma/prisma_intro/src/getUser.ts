import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getUser(username: string) {
  const user = await prisma.user.findFirst({
    where: {
        username: username
    },
    orderBy: {
      id: 'asc'
    }
  })
  console.log(user);
}

getUser("admin1");