import React, { useEffect } from "react";
import { toastError } from "@/components/Toast/Toast";
import { useDispatch } from "react-redux";
import css from "../Login/Login.module.scss";
import { Formik, Form, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { Button, Image, Input } from "@nextui-org/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  useContinueWithGoogleMutation,
  useRegisterUserMutation,
} from "@/services/api/authApi";
import { signupSchema } from "@/utils/validation/AuthValidation";
import { useApiErrorHandling } from "@/hooks/useApiErrors";
import { useGoogleLogin } from "@react-oauth/google";
import logo from "@/assets/logoDark.svg";
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
      <div className="w-screen md:h-screen scrollbar-hide overflow-x-hidden bg-white md:bg-primary flex gap-6">
        {/* Left Side  */}
        <div className="py-8 px-7 w-[30%] hidden md:block">
          <div className="w-24 min-h-24">
            <img src={logo} className="w-full" alt="Logo" />
          </div>

          <p className="text-primary-foreground font-cormorant text-xl uppercase font-semibold max-w-xs mt-8">
            Get access to our premium hosting & blockchain plans
          </p>
        </div>

        {/* Right Side  */}
        <div className="bg-white md:py-[300px] rounded-l-[50px] px-2 md:px-0 w-full md:w-[70%] overflow-y-auto scrollbar-hide my-9 md:my-0 h-full flex flex-col md:flex-row md:items-center md:justify-center">
          <div className="w-[70px] md:hidden ml-3">
            <Image src={logo} className="w-full" />
          </div>
          <Card className="w-full flex flex-col md:justify-center h-full mx-auto max-w-md shadow-none border-none">
            <CardHeader>
              <CardTitle className="text-3xl md:text-4xl md:mt-0 text-primary-foreground mb-2 font-cormorant font-bold">
                Create Account
              </CardTitle>
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
                      <div className="grid gap-2 mb-0.5">
                        {/* <Label htmlFor="name">Name</Label> */}
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

                      <div className="grid gap-2 mb-0.5">
                        {/* <Label htmlFor="email">Email</Label> */}
                        <Input
                          id="email"
                          type="email"
                          name="email"
                          placeholder="Email Address"
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
                      <div className="grid gap-2 mb-0.5">
                        <div className="flex items-center">
                          {/* <Label htmlFor="password">Password</Label> */}
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

                      <div className="grid gap-2 mb-0.5">
                        <div className="flex items-center">
                          {/* <Label htmlFor="confirmPassword">
                            Confirm Password
                          </Label> */}
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
                        className="w-full font-cormorant md:text-xl mt-4 font-semibold text-medium"
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
                      <div className="text-medium text-center text-default-500 font-medium mt-4 md:mb-0 mb-0">
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
