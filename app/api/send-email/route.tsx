import WelcomeTemplate from "@/emails/WelcomeTemplate";
import { Resend } from "resend";

new Resend(process.env.RESEND_API_KEY);

// export async function POST() {
//   await Resend.emails.send({
//     from: "...",
//     to: "...",
//     subject: "...",
//     react: <WelcomeTemplate name="John Doe" />,
//   });
//   return NextResponse.json({});
// }
