import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type OrderRequest = {
  serviceId?: string;
  qualityId?: string;
  quantity?: number;
  description?: string;
  priority?: string;
  usage?: string;
  size?: string;
  format?: string;
  style?: string;
  deadline?: string;
  calculatedPrice?: number | null;
};

function createOrderCode() {
  const time = Date.now().toString().slice(-8);
  const random = Math.floor(1000 + Math.random() * 9000);

  return `TR-${time}-${random}`;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as OrderRequest;

    if (!body.serviceId) {
      return NextResponse.json(
        {
          success: false,
          message: "لطفاً نوع سرویس را انتخاب کنید.",
        },
        { status: 400 }
      );
    }

    const quantity = Number(body.quantity);

    if (!Number.isInteger(quantity) || quantity < 1 || quantity > 999) {
      return NextResponse.json(
        {
          success: false,
          message: "تعداد باید بین ۱ تا ۹۹۹ باشد.",
        },
        { status: 400 }
      );
    }

    const order = await prisma.order.create({
      data: {
        orderCode: createOrderCode(),
        serviceId: body.serviceId,
        qualityId: body.qualityId ?? "normal",
        quantity,
        description: body.description?.trim() || null,
        priority: body.priority || null,
        usage: body.usage || null,
        size: body.size || null,
        format: body.format || null,
        style: body.style || null,
        deadline: body.deadline || null,
        calculatedPrice:
          typeof body.calculatedPrice === "number"
            ? Math.round(body.calculatedPrice)
            : null,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "سفارش با موفقیت ثبت شد.",
        order,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("ORDER_CREATE_ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "خطایی هنگام ثبت سفارش رخ داد.",
      },
      { status: 500 }
    );
  }
}
export async function GET() {
  try {
    const orders = await prisma.order.findMany({
      orderBy: {
        createdAt: "desc",
      },
      take: 20,
    });

    return NextResponse.json({
      success: true,
      count: orders.length,
      orders,
    });
  } catch (error) {
    console.error("ORDER_GET_ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "خطا در دریافت سفارش‌ها",
      },
      { status: 500 }
    );
  }
}
