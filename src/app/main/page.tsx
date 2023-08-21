import Image from 'next/image'

import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

import NewRecord from "@/components/new-record";

import ExcerciseList from "@/components/excercise-list";

export default async function Home() {
    const supabase = createServerComponentClient<Database>({ cookies });
    const {
        data: { session },
    } = await supabase.auth.getSession();

    const { data: excercise_list } = await supabase
        .from("excercise")
        .select("id, name")


    return (
        <div >
            <ExcerciseList excercises={excercise_list!} />
            <NewRecord />
            {/*<RealtimeRecords records={records ?? []} /> */}
        </div>
    )
}
