import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from 'next-auth/providers/credentials';
import User from "@/models/User";
import bcrypt from 'bcrypt'

export const options = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {},
            async authorize(credentials){
                try{
                  const foundUser = await User.findOne({ email: credentials.email})
                    .lean()
                    .exec();
                  if(foundUser){
                    const passwordMatch = await bcrypt.compare(
                                      credentials.password, 
                                      foundUser.password
                                );
                    if(passwordMatch) {
                      delete foundUser.password;
                      // foundUser['role'] = "Unverified Email";
                      console.log("found user:", foundUser)
                      return foundUser;
                    }
                  }
                }catch(error) {
                  console.log(error)
                }
                console.log("User does not exist")
                throw new Error( JSON.stringify({ errors: "Invalid credentials" }))
                // return null;
              },
          }),
      ],
    session: {
        strategy: "jwt"
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/signin",
        // error: "/signin"
    },
    callbacks: {
        // server side
        async jwt({ token, user }) {
            if (user) {
              token.id = user._id.toString()
              token.username = user.username
                token.roles = user.roles;
            }
            return token;
        },
        // client side
        async session({ session, token }) {
            if (session?.user) {
              session.user.id = token.id.toString()
              session.user.name = token.username
              session.user.roles = token.roles;
            }
            return session;
        },
      },
}