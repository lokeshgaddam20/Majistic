import Replicate from "replicate";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
// import { Configuration, OpenAIApi } from "openai";

import { incrementApiLimit, checkApiLimit } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// const openai = new OpenAIApi(configuration);
const replicate = new Replicate({
  auth: process.env.REPLICATE_API_KEY!,
});

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { prompt, amount = 1, resolution = "1024x1024" } = body;
    
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    
    if (!prompt) {
      return new NextResponse("Prompt is required", { status: 400 });
    }
    
    if (!amount) {
      return new NextResponse("Amount is required", { status: 400 });
    }
    
    if (!resolution) {
      return new NextResponse("Resolution is required", { status: 400 });
    }
    
      const freeTrial = await checkApiLimit();
      const isPro = await checkSubscription();
    
    if (!freeTrial) {
          return new NextResponse("Free trial has expired. Please upgrade to pro.", { status: 403 });
        }
    
        const response = await replicate.run(
          "bytedance/sdxl-lightning-4step:5f24084160c9089501c1b3545d9be3c27883ae2239b6f412990e82d4a6210f8f",
          {
            input: {
              width: 1024,
              height: 1024,
              prompt: prompt,
              scheduler: "K_EULER",
              num_outputs: 1,
              guidance_scale: 0,
              negative_prompt: "worst quality, low quality",
              num_inference_steps: 4
            }
          }
        );
        console.log(response);
      
      if (!isPro) {
        await incrementApiLimit();
      }

    return NextResponse.json(response);
  } catch (error) {
    console.log("[IMAGE_ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
