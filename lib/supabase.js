import { createClient } from "@supabase/supabase-js";

// ________________________________________

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
// توضیح: چون ما از فرانت (بدون بک‌اند جدا) استفاده می‌کنیم، از کلید NEXT_PUBLIC_... استفاده می‌کنیم تا کلاینت بتواند مستقیماً با Supabase صحبت کند.

// _____________________________________________



export const supabase = createClient(supabaseUrl, supabaseKey);
