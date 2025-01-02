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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMail = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const createTransporter = () => {
    return nodemailer_1.default.createTransport({
        service: process.env.EMAIL_SERVICE,
        host: process.env.EMAIL_HOST,
        port: parseInt(process.env.EMAIL_PORT || "587", 10),
        secure: process.env.EMAIL_PORT === "465",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });
};
const sendMail = (from, to, subject, text, html) => __awaiter(void 0, void 0, void 0, function* () {
    const transporter = createTransporter();
    const mailOptions = {
        from,
        to,
        subject,
        text,
        html,
    };
    try {
        const info = yield transporter.sendMail(mailOptions);
        console.log(`Email sent: ${info.response}`);
        return info;
    }
    catch (error) {
        console.error(`Error sending email: ${error instanceof Error ? error.message : error}`);
        throw error;
    }
});
exports.sendMail = sendMail;
