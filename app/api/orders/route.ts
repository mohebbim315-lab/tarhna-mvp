import { NextResponse } from "next/server";

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
          message: "نوع خدمت انتخاب نشده است.",
        },
        { status: 400 }
      );
    }

    const quantity = Number(body.quantity);

    if (!Number.isInteger(quantity) || quantity < 1 || quantity > 999) {
      return NextResponse.json(
        {
          success: false,
          message: "تعداد سفارش باید بین ۱ تا ۹۹۹ باشد.",
        },
        { status: 400 }
      );
    }

    const order = {
      id: crypto.randomUUID(),
      orderCode: createOrderCode(),
      serviceId: body.serviceId,
      qualityId: body.qualityId ?? "normal",
      quantity,
      description: body.description?.trim() ?? "",
      priority: body.priority ?? "normal",
      usage: body.usage ?? "",
      size: body.size ?? "",
      format: body.format ?? "",
      style: body.style ?? "",
      deadline: body.deadline ?? "",
      calculatedPrice:
        typeof body.calculatedPrice === "number"
          ? body.calculatedPrice
          : null,
      status: "new",
      createdAt: new Date().toISOString(),
    };

    return NextResponse.json(
      {
        success: true,
        message: "سفارش با موفقیت دریافت شد.",
        order,
      },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "خطایی در دریافت سفارش رخ داد.",
      },
      { status: 500 }
    );
  }
}
