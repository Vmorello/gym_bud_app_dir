'use client'

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Record from "./record";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type excercise = {
    id: string,
    name: string,
}

type full_record = {
    id: string,
    user_id: string,
    date: string,
    excercise_id: string,
}

export default function ExcerciseList({ excercises }: { excercises: excercise[] }) {

    const router = useRouter()

    const addFullRecord = (excercise: excercise) => async () => {
        const supabase = createClientComponentClient<Database>();
        const {
            data: { session },
        } = await supabase.auth.getSession();

        // console.log({ task: task, user_id: session?.user?.id })
        const { data, error } = await supabase.from("full_record").insert({ excercise_id: excercise.id, user_id: session?.user?.id }).select();
        const new_record = data![0] as full_record
        router.push(`${location.origin}/main/record?id=${new_record!.id}`)
    };



    return (
        <div>
            <table>
                <tbody>
                    {excercises?.map((excercise: excercise) => (
                        <Excercise excercise={excercise} addRecord={addFullRecord(excercise)} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

// 
// export default function ExcerciseList({ excercises }: { excercises: excercise[] }) {

//     const router = useRouter()

//     const supabaseClient = useSupabaseClient()
//     const user = useUser()

//     console.log(user)

//     const addRecord = (excercise: excercise) => async () => {
//         const { data, error } = await supabaseClient.from("full_record").insert({ excercise_id: excercise.id, user_id: user?.id }).select();
//         const new_record = data![0] as full_record
//         router.push(`${location.origin}/main/record?id=${new_record!.excercise_id}`)
//         // revalidatePath("/");
//     };



function Excercise(props: { excercise: excercise, addFullRecord: (() => void) }) {


    return (<tr>
        <td className="px-5 text-lg">{props.excercise.name}</td>
        <td><button className="px-5 border-slate-300 border-solid border-2" onClick={props.addFullRecord}>New</button></td>
        <td><button className="px-5 border-slate-300 border-solid border-2">Record</button></td>
    </tr>)

}
