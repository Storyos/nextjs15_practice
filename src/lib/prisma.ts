import prismaRandom from 'prisma-extension-random';
import { PrismaClient as MongoPrismaClient } from '../../generated/mongo-client';
import { PrismaClient as MySQLPrismaClient } from '../../generated/mysql-client';

// 확장된 MySQL Prisma Client 타입 정의
type ExtendedMySQLPrismaClient = MySQLPrismaClient & {
  user: {
    findManyRandom: (
      num: number,
      args?: Parameters<MySQLPrismaClient['user']['findMany']>[0]
    ) => Promise<string>; // 필요에 따라 적절한 반환 타입으로 수정
  };
};

// 글로벌 타입 정의
const globalForPrisma = global as unknown as {
  mysqlPrisma?: ExtendedMySQLPrismaClient;
  mongoPrisma?: MongoPrismaClient;
};

// MySQL Prisma Client 싱글톤
const mysqlPrisma =
  globalForPrisma.mysqlPrisma ||
  (new MySQLPrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query', 'info', 'warn'] : [],
  }).$extends(prismaRandom()) as unknown as ExtendedMySQLPrismaClient);

// MongoDB Prisma Client 싱글톤
const mongoPrisma =
  globalForPrisma.mongoPrisma ||
  new MongoPrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query', 'info', 'warn'] : [],
  });

// 개발 환경에서는 글로벌 객체에 Prisma Client 저장
if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.mysqlPrisma = mysqlPrisma;
  globalForPrisma.mongoPrisma = mongoPrisma;
}

// 각 Prisma Client 내보내기
export { mongoPrisma, mysqlPrisma };

