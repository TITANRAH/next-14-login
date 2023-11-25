
import SignupForm from "@/components/auth/SignupForm";
import { Card, Container, Flex, Heading, Link, Text } from "@radix-ui/themes";
import NavLink from "next/link";

function RegisterPage() {
  return (
    <>
      <Container size="1" height="100%" className="p-3 md:p-0">
        <Flex className="h-screen w-full items-center">
          <Card className="w-full p-7">
            <Heading>Sign Up</Heading>
            <SignupForm />
            <Flex justify="between" my="4">
              <Text>Already have an Account?</Text>
              {/* todo lo que tnga en navlink lo tendra el componente de arriba osea link
              ocupo los estilos de Link de radix y traigo a Link de next pero renombrado como NavLink
              */}
              <Link asChild>
                <NavLink href="/auth/login" passHref>Sign In</NavLink>
              </Link>
            </Flex>
          </Card>
        </Flex>
      </Container>
    </>
  );
}

export default RegisterPage;
