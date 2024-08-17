import React, { useEffect } from "react";
import { toastError } from "@/components/Toast/Toast";
import { useDispatch } from "react-redux";
import css from "../Login/Login.module.scss";
import { Formik, Form, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { Button, Image, Input } from "@nextui-org/react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useContinueWithGoogleMutation, useRegisterUserMutation } from "@/services/api/authApi";
import { signupSchema } from "@/utils/validation/AuthValidation";
import { useApiErrorHandling } from "@/hooks/useApiErrors";
import { useGoogleLogin } from "@react-oauth/google";
import logo from "@/assets/logo.png"
import { FcGoogle } from "react-icons/fc";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [registerUser, result] = useRegisterUserMutation();
  const { isLoading, error, isSuccess } = result;

  // Continue with Google
  const [signupWithGoogle, res] = useContinueWithGoogleMutation();
  const { isLoading: isLoadingGoogle, error: errorGoogle } = res;

  let apiErrors2 = useApiErrorHandling(errorGoogle);

  const handleSigninWithGoogle = useGoogleLogin({
    onSuccess: async (res) => {
      const { data: result } = await signupWithGoogle({
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
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const apiErrors = useApiErrorHandling(error);

  useEffect(() => {
    if (error && error.status != 500 && error.status != "FETCH_ERROR") {
      toastError(
        error?.data?.errors?.email
          ? error?.data?.errors?.email[0]
          : error?.data?.errors?.name
          ? error?.data?.errors?.name
          : "Uh ho! Something went wrong"
      );
    }
  }, [error]);

  const handleSubmit = async (values) => {
    const { data } = await registerUser({
      name: values.name,
      email: values.email,
      password: values.password,
    });

    if (data?.token) {
      localStorage.setItem(import.meta.env.VITE_TOKEN_KEY, data?.token);
      navigate("/dashboard");
    }
  };

  const handleChange = (e, setFieldValue) => {
    const { value, name } = e.target;
    setFieldValue(name, value);
  };

  return (
    <>
      <div className="w-screen h-screen overflow-x-hidden bg-white md:bg-primary flex gap-6">
        {/* Left Side  */}
        <div className="py-8 px-7 w-[30%] hidden md:block">
          <div className="w-24">
            <img src={logo} className="w-full" alt="Logo" />
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
              <CardTitle className="text-2xl mb-5">Create Account</CardTitle>
            </CardHeader>
            <CardContent>
              <Formik
                initialValues={initialValues}
                validationSchema={signupSchema}
                onSubmit={handleSubmit}
              >
                {({ errors, setFieldValue, touched }) => (
                  <Form>
                    <div className="grid gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          type="text"
                          name="name"
                          placeholder="Enter your name"
                          required
                          variant="underlined"
                          onChange={(e) => handleChange(e, setFieldValue)}
                        />
                        <ErrorMessage
                          name="name"
                          component="div"
                          className={css.inputError}
                        />
                      </div>

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

                      <div className="grid gap-2">
                        <div className="flex items-center">
                          <Label htmlFor="confirmPassword">
                            Confirm Password
                          </Label>
                        </div>
                        <Input
                          id="confirmPassword"
                          type="password"
                          name="confirmPassword"
                          required
                          variant="underlined"
                          placeholder="Confirm Password"
                          onChange={(e) => handleChange(e, setFieldValue)}
                        />
                        <ErrorMessage
                          name="confirmPassword"
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
                        Create Account
                      </Button>
                      <p className="text-default-500 font-medium text-sm mt-2">
                        Already have an account?{" "}
                        <Link
                          to={"/"}
                          className="text-blue-400 italic font-medium"
                        >
                          Login
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
                          <span>Sign up with Google</span>
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
    </>
  );
};

export default Signup;