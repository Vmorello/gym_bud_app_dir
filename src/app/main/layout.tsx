import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { Logout } from '@/components/auth'

export default async function SignedInLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {

    const supabase = createServerComponentClient<Database>({ cookies });
    const {
        data: { session },
    } = await supabase.auth.getSession();
    // console.log(session);
    if (!session) {
        redirect("/");
    }


    return (
        <section>
            <Logout />
            {children}
        </section>
    )
}

