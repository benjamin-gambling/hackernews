import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  const newLink = await prisma.link.create({
    data: {
      description: "Fullstack Tutorial for HraphQL",
      url: "www.howtograohql.cpm",
    },
  });
  const allLinks = await prisma.link.findMany();
  console.log(allLinks);
};

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
