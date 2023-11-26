import { PrismaClient } from '@prisma/client'

// next tambien es codigo de backend

const prismaClientSingleton = () => {
  return new PrismaClient()
}

type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClientSingleton | undefined
}

// si existe una conexion de prisma no vuelvas a crearla
const prisma = globalForPrisma.prisma ?? prismaClientSingleton()

export default prisma

// si no estamos en produccion se crea el global de prisma
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma