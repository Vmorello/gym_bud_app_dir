"use client";

import { useRouter } from "next/navigation";

export default function Record({ record }: { record: { id: string, task: string, date: string } }) {
  const router = useRouter();

  // const markAsComplete = async () => {
  //   await fetch(`http://localhost:3000/records`, {
  //     method: "post",
  //     body: JSON.stringify({ id: record.id }),
  //   });
  //   router.refresh();
  // };

  console.log(record)
  return (<>
    <label>{record.task}   {record.date}</label>

    {/* <button onClick={markAsComplete}>{record.title}</button> */}
  </>
  )
}
