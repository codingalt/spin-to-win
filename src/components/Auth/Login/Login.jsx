import React, { useEffect } from 'react'
import logo from "@/assets/logo.png"
import css from "./Login.module.scss";
import { Button, Image, Input } from '@nextui-org/react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useContinueWithGoogleMutation, useLoginUserMutation } from '@/services/api/authApi';
import { toastError } from '@/components/Toast/Toast';
import { loginSchema } from '@/utils/validation/AuthValidation';
import { FcGoogle } from "react-icons/fc";
import { useGoogleLogin } from "@react-oauth/google";
import { useApiErrorHandling } from '@/hooks/useApiErrors';
import { setAuth } from '@/services/slices/auth/authSlice';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loginUser, result] = useLoginUserMutation();
  const { isLoading, error, isSuccess } = result;

  // Continue with Google
  const [loginWithGoogle, res] = useContinueWithGoogleMutation();
  const { isLoading: isLoadingGoogle, error: errorGoogle } = res;

  let apiErrors2 = useApiErrorHandling(errorGoogle);

   const handleSigninWithGoogle = useGoogleLogin({
     onSuccess: async (res) => {
       const { data: result } = await loginWithGoogle({
         token: res.access_token,
       });
       if (result.success) {
         localStorage.setItem(import.meta.env.VITE_TOKEN_KEY, result?.token);
        navigate("/dashboard");
        
       }
     },
     onError: (error) =>
       toastError("Something went wrong! Try again later", error),
   });

  const initialValues = {
    email: "",
    password: "",
  };

  useEffect(() => {
    if (error) {
      toastError(
        error?.data?.message
          ? error.data.message
          : "Uh ho! Something went wrong"
      );
    }
  }, [error]);

  const handleSubmit = async (values) => {
    const { data } = await loginUser({
      email: values.email,
      password: values.password,
    });

    if (data?.token) {
      dispatch(setAuth(data?.user));
      localStorage.setItem(import.meta.env.VITE_TOKEN_KEY, data?.token);
      navigate("/dashboard");
    }
  };

  const handleChange = (e, setFieldValue) => {
    const { name, value } = e.target;

    setFieldValue(name, value);
  };

  return (
    <div className="w-screen h-screen overflow-x-hidden bg-white md:bg-primary flex gap-6">
      {/* Left Side  */}
      <div className="py-8 px-7 w-[30%] hidden md:block">
        <div className="w-24">
          <img src={logo} className="w-full" alt='Logo' />
        </div>

        <p className="text-white font-medium max-w-xs capitalize mt-8">
          Get access to our premium hosting & blockchain plans
        </p>
      </div>

      {/* Right Side  */}
      <div className="bg-white rounded-l-[40px] px-2 md:px-0 w-full md:w-[70%] h-full flex flex-col md:flex-row items-center justify-center">
        {/* <div className="w-24 md:hidden">
          <Image src={logo} className="w-full" />
        </div> */}
        <Card className="w-full mx-auto max-w-md pb-6 shadow-none border-none">
          <CardHeader>
            <CardTitle className="text-2xl mb-5">Welcome Back</CardTitle>
          </CardHeader>
          <CardContent>
            <Formik
              initialValues={initialValues}
              validationSchema={loginSchema}
              onSubmit={handleSubmit}
            >
              {({ errors, setFieldValue, touched }) => (
                <Form>
                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="m@example.com"
                        required
                        variant="underlined"
                        onChange={(e) => handleChange(e, setFieldValue)}
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className={css.inputError}
                      />
                    </div>
                    <div className="grid gap-2">
                      <div className="flex items-center">
                        <Label htmlFor="password">Password</Label>
                        <Link
                          to="#"
                          className="ml-auto text-gray-400 inline-block text-xs underline"
                        >
                          Forgot your password?
                        </Link>
                      </div>
                      <Input
                        id="password"
                        type="password"
                        name="password"
                        required
                        variant="underlined"
                        placeholder="Password"
                        onChange={(e) => handleChange(e, setFieldValue)}
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        className={css.inputError}
                      />
                    </div>
                    <Button
                      isLoading={isLoading}
                      type="submit"
                      className="w-full mt-4 font-semibold text-medium"
                      color="primary"
                      radius="sm"
                    >
                      Login
                    </Button>
                    <p className="text-default-500 font-medium text-sm mt-2">
                      Don't have an account?{" "}
                      <Link
                        to={"/register"}
                        className="text-blue-400 italic font-medium"
                      >
                        Sign Up
                      </Link>
                    </p>

                    {/* Divider  */}
                    <div className="text-medium text-center text-default-500 font-medium my-4">
                      -OR-
                    </div>

                    {/* Continue with google  */}
                    <div className=" mx-auto w-full">
                      <Button
                        isLoading={isLoadingGoogle}
                        onClick={handleSigninWithGoogle}
                        className="bg-white py-5 w-full rounded-[9px]"
                        variant="bordered"
                      >
                        <FcGoogle fontSize={23} />
                        <span>Continue with Google</span>
                      </Button>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Login