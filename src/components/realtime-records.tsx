// "use client";

// import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Record from "./record";
// import { useEffect } from "react";
// import { useRouter } from "next/navigation";



export default function RecordsCollection({ records }: { records: typeof Record[] }) {
  // const supabase = createClientComponentClient<Database>();
  // const router = useRouter();

  // useEffect(() => {
  //   const channel = supabase
  //     .channel("realtime records")
  //     .on(
  //       "postgres_changes",
  //       {
  //         event: "*",
  //         schema: "public",
  //         table: "records",
  //       },
  //       (payload) => {
  //         router.refresh();
  //       }
  //     )
  //     .subscribe();

  //   return () => {
  //     supabase.removeChannel(channel);
  //   };
  // }, [supabase, router]);

  return (
    <>
      {records?.map((record) => (
        <p key={record.id}>
          <Record record={record} />
        </p>
      ))}
    </>
  );
}
