import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabaseAdminKey = process.env.NEXT_PUBLIC_SERVICE_ROLE_KEY!;
export const supabaseClient = createClient(supabaseUrl, supabaseKey);
// export const supabaseAdmin = createClient(supabaseUrl, supabaseAdminKey);
