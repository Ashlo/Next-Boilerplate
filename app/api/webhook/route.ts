import crypto from "crypto";
import axios from "axios";
import { db } from "@/configs";
import { users } from "@/configs/schema";
import { eq } from "drizzle-orm";
import dotenv from "dotenv";
import path from "path";
import { NextResponse } from "next/server";

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

export async function POST(req: Request) {
  try {
    // Catch the event type
    const clonedReq = req.clone();
    const eventType = req.headers.get("X-Event-Name");
    const body = await req.json();

    // Check signature
    const secret = process.env.LEMON_SQUEEZY_WEBHOOK_SIGNATURE!;
    const hmac = crypto.createHmac("sha256", secret);
    const digest = Buffer.from(
      hmac.update(await clonedReq.text()).digest("hex"),
      "utf8"
    );
    const signature = Buffer.from(req.headers.get("X-Signature") || "", "utf8");

    if (!crypto.timingSafeEqual(digest, signature)) {
      throw new Error("Invalid signature.");
    }

    console.log(body);

    // Logic according to event
    if (eventType === "subscription_created") {
      const userId = body.data.attributes.user_email;
      const isSubscribed = body.data.attributes.status === "active";
      try {
        if (isSubscribed && userId) {
          await db.insert(users).values({ id: userId, email: userId, is_subscribed: true }).onConflictDoNothing();
        }
      } catch (error) {
        console.error(error);
      }
    }

    return NextResponse.json({ message: "Webhook received" });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}