import { NextRequest, NextResponse } from "next/server";

const stripe = require('stripe')(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { item, email } = body;
        console.log(item, email);

        // Arrange items for Stripe Checkout
        const arrangeItems = item.map((item: any) => {
            return {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: item.title,
                        images: [item.image],
                    },
                    unit_amount: item.price * 100, // Stripe expects the amount in cents
                },
                quantity: 1,
            };
        });

        // Create Stripe Checkout session
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            shipping_address_collection: {
                allowed_countries: ['GB', 'US', 'CA'],
            },
            line_items: arrangeItems,
            mode: 'payment',
            success_url: `${process.env.HOST}/success`,
            cancel_url: `${process.env.HOST}/Checkout`,
            metadata: {
                email,
                images: JSON.stringify(item.map((item: any) => item.image)),
            },
        });

        return NextResponse.json({
            id: session.id,
        });
    } catch (error) {
        console.error('Error creating Stripe Checkout session:', error);
        return NextResponse.json({
            error: 'Internal Server Error',
        }, {
            status: 500,
        });
    }
}
