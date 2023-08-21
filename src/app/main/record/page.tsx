'use client'

import { SupabaseClient, createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react';

import RecordsCollection from "@/components/realtime-records";



export default function Page() {

    const [excerciseName, setExcerciseName] = useState("Loading...")
    const [supabase, setSupabase] = useState(createClientComponentClient<Database>())
    const [fullRecordId] = useState(useSearchParams().get('id'))
    const [records, setRecords] = useState([] as )

    useEffect(() => {
        const fetchData = (async () => {
            const excersise_name = await supabase.from("excercise")
                .select(`name, full_record!inner(id)`)
                .filter("full_record.id", "eq", fullRecordId)
            setExcerciseName(excersise_name.data![0].name)
        })()
    }, [])

    return <>
        <div>Excercise: {excerciseName}</div>


    </>

}