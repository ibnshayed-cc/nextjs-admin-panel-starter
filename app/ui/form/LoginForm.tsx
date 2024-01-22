"use client";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { login } from "@/lib/login/loginSlice";
import { RootState } from "@/lib/store";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";

export function LoginForm() {
  const loginData = useAppSelector((state: RootState) => state.loginData);
  const dispatch = useAppDispatch();
  const [loginFormData, setLoginFormData] = useState(loginData);

  const onChangeHandler = (e) => {
    setLoginFormData({ ...loginFormData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(loginFormData);
    dispatch(login(loginFormData));
  };

  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        Sign In
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Nice to meet you! Enter your details to singin.
      </Typography>
      <form
        onSubmit={submitHandler}
        className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
      >
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Email
          </Typography>
          <Input
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            name="email"
            value={loginFormData.email}
            onChange={(e) => onChangeHandler(e)}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Password
          </Typography>
          <Input
            type="password"
            size="lg"
            placeholder="********"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            name="password"
            value={loginFormData.password}
            onChange={(e) => onChangeHandler(e)}
          />
        </div>
        <Checkbox
          label={
            <Typography
              variant="small"
              color="gray"
              className="flex items-center font-normal"
            >
              I agree the
              <a
                href="#"
                className="font-medium transition-colors hover:text-gray-900"
              >
                &nbsp;Terms and Conditions
              </a>
            </Typography>
          }
          containerProps={{ className: "-ml-2.5" }}
        />
        <Button className="mt-6" fullWidth type="submit">
          sign in
        </Button>
      </form>
    </Card>
  );
}
