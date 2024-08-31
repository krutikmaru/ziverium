import Link from "next/link";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";

// add async
export default async function Page() {
  const supabase = createClient();

  const { data: authData, error: authError } = await supabase.auth.getUser();
  if (authError || !authData?.user) {
    redirect("/login");
  }

  const { data: dbData, error: dbError } = await supabase
    .from("orders")
    .select()
    .eq("email", authData.user.email);

  console.log(dbData);
  return (
    <div className="w-screen h-screen pt-28 px-12">
      <h1 className="text-4xl font-semibold">Order History</h1>
      {dbData?.length === 0 ? (
        <div className="mt-2 text-neutral-500">No purchases</div>
      ) : (
        <div className="mt-6 space-y-2">
          {dbData?.map((data) => (
            <TransactionCard
              key={data?.id}
              transactionId={data?.id}
              date={data?.created_at}
              receiptUrl={data?.receipt_url}
            />
          ))}
        </div>
      )}
    </div>
  );
}

type TransactionCardProps = {
  transactionId: string;
  date: string;
  receiptUrl: string;
};

function TransactionCard({
  transactionId,
  date,
  receiptUrl,
}: TransactionCardProps) {
  function formatDateTime(timestamp: string) {
    const date = new Date(timestamp);

    // Extract individual date components
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Months are 0-indexed
    const year = date.getFullYear();

    // Extract individual time components
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");

    // Format the date and time as "DD-MM-YYYY HH:MM:SS"
    const formattedDate = `${day}-${month}-${year}`;
    const formattedTime = `${hours}:${minutes}:${seconds}`;

    return `${formattedDate} ${formattedTime}`;
  }
  return (
    <div className="w-full bg-[#1c1c1c] rounded-md p-5">
      <p>
        Transaction Id:{" "}
        <span className="text-neutral-400">{transactionId}</span>
      </p>
      <p className="mb-3">
        Date: <span className="text-neutral-400">{formatDateTime(date)}</span>
      </p>
      <Link
        target="_blank"
        href={receiptUrl}
        className="text-ziverium-blue underline"
      >
        View Receipt
      </Link>
    </div>
  );
}
