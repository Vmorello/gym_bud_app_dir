import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export default function NewRecord() {
  const addRecord = async (formData: FormData) => {
    "use server";
    const task = String(formData.get("task"));
    const supabase = createServerActionClient<Database>({ cookies });
    const {
      data: { session },
    } = await supabase.auth.getSession();

    // console.log({ task: task, user_id: session?.user?.id })
    const { data, error } = await supabase.from("records").insert({ task: task, user_id: session?.user?.id });
    // console.log(data, error);
    revalidatePath("/");
  };

  return (
    <form action={addRecord}>
      <input name="task" />
      <input type="submit" value="Submit" />
      {/* <input name="info" /> */}
    </form>
  )
}
