import React from "react";
import Button from "../Button/Button";
import { Input } from "../Input/Input";
import styles from "./SignIn.module.scss";
import { MdEmail } from "react-icons/md";
import { AiOutlineLock } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signInSchema } from "./SignIn.type";

interface SignInFormData {
  email: string;
  password: string;
}

export function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>({
    resolver: yupResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: SignInFormData) => {
    console.log("Sign In Data:", data);
    // აქ შეგიძლიათ გააგზავნოთ მონაცემები API-ზე
    alert(`Welcome back! Email: ${data.email}`);
  };

  return (
    <section className={styles.MainContainer}>
      <div className={styles.header}>
        <h1 className={styles.heading}>Sign In</h1>
        <p className={styles.subheading}>Welcome back! Please enter your details.</p>
      </div>

      <form className={styles.formContainer} onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Email"
          name="email"
          type="email"
          placeholder="Enter your email address"
          icon={<MdEmail />}
          iconPosition="left"
          register={register}
          error={errors.email?.message}
        />
        <Input
          label="Password"
          name="password"
          type="password"
          placeholder="Enter your password"
          icon={<AiOutlineLock />}
          iconPosition="left"
          register={register}
          error={errors.password?.message}
        />

        <div className={styles.forgotPassword}>
          <a href="#">Forgot password?</a>
        </div>

        <Button variants="primary" title="Sign In" type="submit" className={styles.submitButton}>
          Sign In
        </Button>

        <div className={styles.signUpLink}>
          <p>Don't have an account? <a href="/">Sign Up</a></p>
        </div>
      </form>
    </section>
  );
}
