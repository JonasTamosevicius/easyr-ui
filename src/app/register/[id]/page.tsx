'use client'

import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import i18n from "../../../../i18n";
import Image from "next/image";
import theme from "@/app/theme";
import { ThemeProvider } from "@mui/material/styles";


export default function Register(){
  const { t } = i18n;

  const schema = yup.object({
    organizationName: yup.string().required(t("REGISTRATION.COMPANY.ERROR.ORGANISATION_NAME_REQUIRED")),
    email: yup.string().email(t("REGISTRATION.COMPANY.EMAIL")).required(),
    password: yup.string().required(t("REGISTRATION.COMPANY.ERROR.PASSWORD_REQUIRED")),
    repeatPassword: yup.string().oneOf([yup.ref('password')], t("REGISTRATION.COMPANY.ERROR.REPEAT_PASSWORD_NOT_THE_SAME")).required()

  }).required();
  type FormData = yup.InferType<typeof schema>;

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema)
  });
  const onSubmit = (data : any) => console.log(data);
  
   
  return  <ThemeProvider theme={theme}>
  <div className="w-screen h-screen flex justify-center items-center ">
    <form className="flex gap-6 flex-col w-96 justify-center" onSubmit={handleSubmit(onSubmit)}>
      <Image className="self-center mb-10" src="/Logo_EASYR.svg" width={210} height={51} alt='Logo'/>
      <TextField variant="standard" placeholder={t("REGISTRATION.COMPANY.COMPANY_NAME")}
        error={!!errors.organizationName?.message}
        {...register("organizationName", { required: true, maxLength: 20 })}
        helperText={errors.organizationName?.message}
      />
      <TextField variant="standard" placeholder={t("REGISTRATION.COMPANY.EMAIL")}
        error={!!errors.email?.message}
        {...register("email", { required: true, maxLength: 20 })}
        helperText={errors.email?.message}
      />
      <TextField type="password" variant="standard"  placeholder={t("REGISTRATION.COMPANY.PASSWORD")}
      {...register("password", { required: true, maxLength: 20 })}
      error={!!errors.password?.message}
      helperText={errors.password?.message}
      />
      <TextField type="password" variant="standard" placeholder={t("REGISTRATION.COMPANY.REPEAT_PASSWORD")}
      {...register("repeatPassword", { required: true, maxLength: 20 })}
      error={!!errors.repeatPassword?.message}
      helperText={errors.repeatPassword?.message}
      />
      <Button className="w-48 self-center" type="submit" variant="contained">{t("REGISTRATION.COMPANY.REGISTER_BTN")}</Button>
    </form>
  </div>    
  </ThemeProvider>
}