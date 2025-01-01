import { sendMail } from "../utils/mailer";
import {
  generatePasswordResetEmailHtml,
  generateResetSuccessEmailHtml,
  generateWelcomeEmailHtml,
  htmlContent,
} from "./htmlEmail";


export const sendVerificationEmail = async (
  email: string,
  verificationToken: string
) => {
  const html = htmlContent.replace("{verificationToken}", verificationToken);

  try {
    const res = await sendMail(
      process.env.EMAIL_USER as string,
      email,
      "Verify your email",
      "Please verify your email using the provided token.",
      html
    );
    console.log("Verification email sent:", res);
    return;
  } catch (error) {
    console.error("Error sending verification email:", error);
    throw new Error("Failed to send email verification");
  }
};


export const sendWelcomeEmail = async (email: string, name: string) => {
  const html = generateWelcomeEmailHtml(name);

  try {
    const res = await sendMail(
      process.env.EMAIL_USER as string,
      email,
      "Welcome to PatelEats",
      "",
      html
    );
    console.log("Welcome email sent:", res);
    return;
  } catch (error) {
    console.error("Error sending welcome email:", error);
    throw new Error("Failed to send welcome email");
  }
};


export const sendPasswordResetEmail = async (
  email: string,
  resetURL: string
) => {
  const html = generatePasswordResetEmailHtml(resetURL);

  try {
    const res = await sendMail(
      process.env.EMAIL_USER as string,
      email,
      "Reset your password",
      "",
      html
    );
    console.log("Password reset email sent:", res);
    return;
  } catch (error) {
    console.error("Error sending password reset email:", error);
    throw new Error("Failed to reset password");
  }
};


export const sendResetSuccessEmail = async (email: string) => {
  const html = generateResetSuccessEmailHtml();

  try {
    const res = await sendMail(
      process.env.EMAIL_USER as string,
      email,
      "Password Reset Successfully",
      "",
      html
    );
    console.log("Password reset success email sent:", res);
    return;
  } catch (error) {
    console.error("Error sending password reset success email:", error);
    throw new Error("Failed to send password reset success email");
  }
};
