import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from '@/libs/prisma'
import bcrypt from 'bcrypt';

interface Credentials {
  email: string,
  password: string
}

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "user@something.com",
        },
        password: { label: "Password", type: "password" },
      },

   
      async authorize(credentials:any, req) {
        // este console aparecera en la terminal del back
        console.log(credentials);

        const {email, password} = credentials;

        // aqui utilizo la base de datos para poder buscar al usuario
       const userFound =  await prisma.user.findUnique({where: {
          email: email,
        }})

        if(!userFound) throw new Error('Invalid credentials');

        const validatePassword = await bcrypt.compare(password, userFound.password!);

        if(!validatePassword) throw new Error('Invalid credentials');
        
        console.log('dsde route nextauth',userFound);
        return {
          id: userFound.id.toString(),
          name: userFound.name,
          email: userFound.email,
        };
      },
    }),
  ],
  pages: {
    signIn: '/auth/login'
  }
});

export { handler as GET, handler as POST };
