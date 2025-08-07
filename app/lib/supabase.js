import { createClient } from "@supabase/supabase-js";

// ________________________________________

const supabaseUrl = "https://icqvgpldfkxzybfhygaf.supabase.co";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;

// _____________________________________________
export const supabase = createClient(supabaseUrl, supabaseKey);