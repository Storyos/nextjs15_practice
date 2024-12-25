import { PrismaClient } from "@prisma/client";

// Prisma Client 싱글톤 관리
// Singleton으로 관리하지 않을 경우, 각각의 요청마다 PrismaClient 인스턴스가 생성되어
// DB 연결이 매번 생성되어 성능이 저하될 수 있음
// 참고: https://www.prisma.io/docs/guides/performance-and-optimization/connection-management
const globalForPrisma = global as unknown as { prisma: PrismaClient };

const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ['query'], // 로깅 활성화 (선택 사항)
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export default prisma;
