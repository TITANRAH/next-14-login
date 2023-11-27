"use client";

import { EnvelopeClosedIcon, LockClosedIcon } from "@radix-ui/react-icons";
import { Button, Flex, Text, TextField } from "@radix-ui/themes";
import { Controller, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

// esto me permite enviar los datos de login de una
import { signIn } from "next-auth/react";

function SigninForm() {
  // llamo a react hook form
  // usamos controller cuando el componente es creado por terceros no por nosotros
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    values: {
      email: "",
      password: "",
    },
  });

  // llamo a router
  const router = useRouter();

  // este submit tendra la funcion subimit de useForm
  const onSubmit = handleSubmit(async (data) => {
    console.log(data);

    // esto apunta al auth nextauth creado
    const res = await signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
    });

    if (!res?.ok) {
      console.log(res);

      return;
    }

    // si el of es falso llega hasta ahi si no ve a dashboard
    router.push("/dashboard");

    console.log("res desde components/signinForm al loguearse", res);
  });

  return (
    // le paso al onsubmit del form el evernto submit que contiene el handle subimirt de arriba
    <form onSubmit={onSubmit}>
      <Flex direction="column" gap="2">
        <label htmlFor="email">Email</label>
        <TextField.Root>
          <TextField.Slot>
            <EnvelopeClosedIcon height="16" width="16" />
          </TextField.Slot>
          {/* a controller debo pasarle un nombre 
        y debo pasarle un control  */}
          <Controller
            name="email"
            control={control}
            // saco el field delo que le esten pasando
            rules={{
              required: {
                message: "Email is required",
                value: true,
              },
            }}
            render={({ field }) => {
              return (
                <TextField.Input
                  type="email"
                  placeholder="email@domain.com"
                  autoFocus
                  {...field}
                />
              );
            }}
          />
        </TextField.Root>

        {errors.email && (
          <Text color="red" className="text-xs">
            {errors.email.message}
          </Text>
        )}
        <label htmlFor="email">Password</label>

        <TextField.Root>
          <TextField.Slot>
            <LockClosedIcon height="16" width="16" />
          </TextField.Slot>
          <Controller
            name="password"
            control={control}
            // aqui defino las reglas
            rules={{
              required: {
                message: "Password is required",
                value: true,
              },
              minLength: {
                message: "Password must be at least 6 characters",
                value: 6,
              },
            }}
            render={({ field }) => {
              return (
                <TextField.Input
                  type="password"
                  placeholder="********"
                  autoFocus
                  {...field}
                />
              );
            }}
          />
        </TextField.Root>

        {errors.password && (
          <Text color="red" className="text-xs">
            {errors.password.message}
          </Text>
        )}

        <Button type="submit" mt="4">
          Sign In
        </Button>
      </Flex>
    </form>
  );
}

export default SigninForm;
