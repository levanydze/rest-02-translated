import emailjs from "@emailjs/browser";

interface FormValues {
  user_name: string;
  user_email: string;
  user_phone: string;
  user_date: string;
  user_time: string;
  user_quantity: string;
  message: string;
}

export const sendEmail = (
  form: React.RefObject<HTMLFormElement>,
  handleEmailSent: () => void
) => {
  if (!form.current) return;

  const formData = new FormData(form.current);
  const data: FormValues = {
    user_name: formData.get("user_name"!) as string,
    user_email: formData.get("user_email") as string,
    user_phone: formData.get("user_phone") as string,
    user_date: formData.get("user_date") as string,
    user_time: formData.get("user_time") as string,
    user_quantity: formData.get("user_quantity") as string,
    message: formData.get("message") as string,
  };

  emailjs
    .sendForm(
      process.env.NEXT_PUBLIC_EMAIL_SERVICE!,
      process.env.NEXT_PUBLIC_EMAIL_TEMPLATE!,
      form.current,
      process.env.NEXT_PUBLIC_EMAIL_FORM
    )
    .then(() => {
      handleEmailSent();
    });
};
