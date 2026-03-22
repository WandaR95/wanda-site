import { NextResponse } from "next/server"

export async function POST(request) {
  try {
    const body = await request.json()
    const firstName = (body.firstName || "").trim()
    const email = (body.email || "").trim()

    const errors = {}

    if (!firstName) {
      errors.firstName = "First name is required."
    }

    if (!email) {
      errors.email = "Email is required."
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "Please enter a valid email address."
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ success: false, errors }, { status: 422 })
    }

    const apiToken = process.env.MAILERLITE_API_TOKEN
    const groupId = process.env.MAILERLITE_GROUP_ID

    if (!apiToken) {
      return NextResponse.json(
        {
          success: false,
          message: "MailerLite API token is missing.",
        },
        { status: 500 }
      )
    }

    const payload = {
      email,
      fields: {
        name: firstName,
      },
      ...(groupId ? { groups: [groupId] } : {}),
    }

    const response = await fetch("https://connect.mailerlite.com/api/subscribers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${apiToken}`,
      },
      body: JSON.stringify(payload),
      cache: "no-store",
    })

    const data = await response.json().catch(() => null)

    if (!response.ok) {
      return NextResponse.json(
        {
          success: false,
          message:
            data?.message ||
            "Something went wrong while subscribing. Please try again.",
          errors: data?.errors || null,
        },
        { status: response.status }
      )
    }

    return NextResponse.json({
      success: true,
      message: "Subscribed successfully.",
    })
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong while subscribing.",
      },
      { status: 500 }
    )
  }
}