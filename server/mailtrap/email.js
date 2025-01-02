"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendResetSuccessEmail = exports.sendPasswordResetEmail = exports.sendWelcomeEmail = exports.sendVerificationEmail = void 0;
const mailer_1 = require("../utils/mailer");
const htmlEmail_1 = require("./htmlEmail");
const sendVerificationEmail = (email, verificationToken) => __awaiter(void 0, void 0, void 0, function* () {
    const html = htmlEmail_1.htmlContent.replace("{verificationToken}", verificationToken);
    try {
        const res = yield (0, mailer_1.sendMail)(process.env.EMAIL_USER, email, "Verify your email", "Please verify your email using the provided token.", html);
        console.log("Verification email sent:", res);
        return;
    }
    catch (error) {
        console.error("Error sending verification email:", error);
        throw new Error("Failed to send email verification");
    }
});
exports.sendVerificationEmail = sendVerificationEmail;
const sendWelcomeEmail = (email, name) => __awaiter(void 0, void 0, void 0, function* () {
    const html = (0, htmlEmail_1.generateWelcomeEmailHtml)(name);
    try {
        const res = yield (0, mailer_1.sendMail)(process.env.EMAIL_USER, email, "Welcome to PatelEats", "", html);
        console.log("Welcome email sent:", res);
        return;
    }
    catch (error) {
        console.error("Error sending welcome email:", error);
        throw new Error("Failed to send welcome email");
    }
});
exports.sendWelcomeEmail = sendWelcomeEmail;
const sendPasswordResetEmail = (email, resetURL) => __awaiter(void 0, void 0, void 0, function* () {
    const html = (0, htmlEmail_1.generatePasswordResetEmailHtml)(resetURL);
    try {
        const res = yield (0, mailer_1.sendMail)(process.env.EMAIL_USER, email, "Reset your password", "", html);
        console.log("Password reset email sent:", res);
        return;
    }
    catch (error) {
        console.error("Error sending password reset email:", error);
        throw new Error("Failed to reset password");
    }
});
exports.sendPasswordResetEmail = sendPasswordResetEmail;
const sendResetSuccessEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const html = (0, htmlEmail_1.generateResetSuccessEmailHtml)();
    try {
        const res = yield (0, mailer_1.sendMail)(process.env.EMAIL_USER, email, "Password Reset Successfully", "", html);
        console.log("Password reset success email sent:", res);
        return;
    }
    catch (error) {
        console.error("Error sending password reset success email:", error);
        throw new Error("Failed to send password reset success email");
    }
});
exports.sendResetSuccessEmail = sendResetSuccessEmail;
