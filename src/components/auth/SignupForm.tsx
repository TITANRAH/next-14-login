"use client";

import {
  EnvelopeClosedIcon,
  LockClosedIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import { Button, Flex, TextField } from "@radix-ui/themes";
import { Controller, useForm } from "react-hook-form";

function SigninForm() {
  const { control, handleSubmit } = useForm({
    // inicio los valores vacios
    values: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form onSubmit={onSubmit}>
      <Flex direction="column" gap="2">
        <label htmlFor="name">Name:</label>
        <TextField.Root>
          <TextField.Slot>
            <PersonIcon height="16" width="16" />
          </TextField.Slot>
          <Controller
            control={control}
            rules={{
              required: {
                message: "Name is required",
                value: true,
              },
            }}
            name="name"
            render={({ field }) => {
              return (
                <TextField.Input
                  type="text"
                  placeholder="Write your name"
                  {...field}
                />
              );
            }}
          />
        </TextField.Root>

        <label htmlFor="email">Email</label>
        <TextField.Root>
          <TextField.Slot>
            <EnvelopeClosedIcon height="16" width="16" />
          </TextField.Slot>
          <Controller
            name="email"
            rules={{
              required: {
                message: "Email is required",
                value: true,
              },
            }}
            control={control}
            render={({ field }) => {
              return (
                <TextField.Input
                  type="email"
                  placeholder="email@domain.com"
                  {...field}
                />
              );
            }}
          />
        </TextField.Root>

        <label htmlFor="password">Password</label>

        <TextField.Root>
          <TextField.Slot>
            <LockClosedIcon height="16" width="16" />
          </TextField.Slot>
          <Controller
            name="password"
            rules={{
              required: {
                message: "Email is required",
                value: true,
              },
            }}
            control={control}
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
        <Button type="submit">Sign Up</Button>
      </Flex>
    </form>
  );
}

export default SigninForm;
