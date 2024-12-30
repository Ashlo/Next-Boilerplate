import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { lemonSqueezyApiInstance } from "@/utils/axios";
export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
    try {
        const { userId } = await auth();
         if (!userId) {
             return new NextResponse("Unauthorized", { status: 401 });
         }

        const reqData = await req.json();
        console.log(reqData);
        if (!reqData.productId) {
            return new NextResponse("Product ID is required", { status: 400 });
        }

        const response = await lemonSqueezyApiInstance.post('/checkouts', {
            data: {
                type: "checkouts",
                attributes: {
                    checkout_data: {
                        custom: {
                            email: userId,
                        }
                    }
                },
                relationships: {
                    store: {
                        data: {
                            type: "stores",
                            id: process.env.LEMON_SQUEEZY_STORE_ID
                        }
                    },
                    variant: {
                        data: {
                            type: "variants",
                            id: reqData.productId.toString(),
                        }
                    }
                }
            }
        });
        const checkoutUrl = response.data.data.attributes.url;
        console.log(response.data);
        console.log(checkoutUrl);
        return NextResponse.json({ checkoutUrl });
    } catch (error) {
        console.log(error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}