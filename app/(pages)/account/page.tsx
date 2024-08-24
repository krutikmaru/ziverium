import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";

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
  return <p>Hello {authData.user.email}</p>;
}
