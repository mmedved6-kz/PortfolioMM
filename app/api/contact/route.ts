import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type ContactPayload = {
    name?: string;
    email?: string;
    message?: string;
};

function clean(value: unknown) {
    return String(value ?? "").trim();
}

function isValidEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
    try {
        const body = (await request.json()) as ContactPayload;

        const name = clean(body.name);
        const email = clean(body.email);
        const message = clean(body.message);

        if (!name || !email || !message) {
            return NextResponse.json(
                { success: false, error: "Please fill in name, email and message." },
                { status: 400 },
            );
        }
        
        if (!isValidEmail(email)) {
            return NextResponse.json(
                {success: false, error: "Please provide a valid email address." },
                { status: 400 },
            );
        }
        
        if (name.length > 100 || email.length > 200 || message.length > 5000) {
            return NextResponse.json(
                {success: false, error: "Input exceeds allowed length." },
                { status: 400 },
            );
        }

        const host = process.env.SMTP_HOST ?? process.env.CONTACT_FORM_HOST;
        const port = Number(process.env.SMTP_PORT ?? "587");
        const secure = String(process.env.SMTP_SECURE ?? "false").toLowerCase() === "true";
        const user = process.env.SMTP_USER;
        const pass = process.env.SMTP_PASS;
        const to = process.env.CONTACT_EMAIL_TO ?? user;

        if (!host || !user || !pass || !to) {
            return NextResponse.json(
                { success: false, error: "Email service is not configured properly." },
                { status: 500 },
            );
        }
            
        const transporter = nodemailer.createTransport({
            host,
            port,
            secure,
            auth: {user, pass}
        });

        await transporter.sendMail({
            from: process.env.CONTACT_EMAIL_FROM ?? user,
            to, 
            replyTo: email,
            subject: `Portfolio contact from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        });

        return NextResponse.json({ success: true });
    } catch {
        return NextResponse.json(
            { success: false, error: "Failed to send message. Please try again later." },
            { status: 500 },
        );
    }
}
