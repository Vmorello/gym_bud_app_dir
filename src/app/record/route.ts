import { Database } from "@/lib/database.types";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

// export async function PUT(request: Request) {
//   const { id } = await request.json();

//   const supabase = createRouteHandlerClient<Database>({ cookies });
//   const { data } = await supabase
//     .from("records")
//     .update({ is_complete: true })
//     .match({ id });
//   return NextResponse.json(data);
// }

// export async function POST(request: Request) {
//   const { id } = await request.json();

//   const supabase = createRouteHandlerClient<Database>({ cookies });
//   const { data } = await supabase
//     .from("records")
//     .insert({ task: 1, info: {} , user_id: id })
    
//   return NextResponse.json(data);
// }
