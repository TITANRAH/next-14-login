
import SigninForm from "@/components/auth/SigninForm";
import { Card, Container, Flex, Heading, Link, Text } from "@radix-ui/themes";
import NavLink from "next/link";



function LoginPage() {
  return (
    <>
      <Container size="1" height="100%" className="p-3 md:p-0">
        <Flex className="h-screen w-full items-center">
          <Card className="w-full p-7">
            <Heading>Sign In</Heading>
            <SigninForm />
            <Flex justify="between" my="4">
              <Text>Dont have an Account?</Text>
              {/* todo lo que tnga en navlink lo tendra el componente de arriba osea link
              ocupo los estilos de Link de radix y traigo a Link de next pero renombrado como NavLink
              */}
              <Link asChild>
                <NavLink href="/auth/register" passHref>Sign Up</NavLink>
              </Link>
            </Flex>
          </Card>
        </Flex>
      </Container>
    </>
  );
}

export default LoginPage;
