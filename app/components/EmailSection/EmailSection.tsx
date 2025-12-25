import Button from "../Button/Button";
import { Input } from "../Input/Input";
import styles from "./EmailSection.module.scss";
import { MdEmail } from "react-icons/md";
import { AiOutlineLock } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "./Email.type";

interface EmailFormData {
    email: string;
    password: string;
    repeatEmail: string;
}

interface EmailSectionProps {
  onSubmit: (data: EmailFormData) => void;
  onBack: () => void;
}

export function EmailSection({ onSubmit: handleEmailSubmit, onBack }: EmailSectionProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EmailFormData>({
    resolver: yupResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      repeatEmail: "",
    },
  });

  
  const onSubmit = (data: EmailFormData) => {
    console.log("Email Section Data:", data);
    console.log("Email Section submitted successfully!");
    handleEmailSubmit(data); // გადავცემთ მონაცემებს parent-ს
  }

  return (
    <section className={styles.MainContainer}>
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
        <Input
          label="Repeat Email"
          name="repeatEmail"
          type="password"
          placeholder="Enter your password again"
          icon={<AiOutlineLock />}
          iconPosition="left"
          register={register}
          error={errors.repeatEmail?.message}
        />
        <div style={{ display: 'flex', gap: '10px', width: '100%' }}>
          <Button variants="secondary" title="Back" type="button" onClick={onBack}>
            Back
          </Button>
          <Button variants="primary" title="Continue" type="submit">
            Continue
          </Button>
        </div>
      </form>
    </section>
  );
}
