import { supabase } from "../lib/supabase";

export async function checkAdmin() {
  // گرفتن کاربر فعلی
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();
  if (userError || !user) {
    return false; // اگر لاگین نیست یا خطا بود
  }

  // گرفتن پروفایل و نقش کاربر
  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .single();

  if (profileError || !profile) {
    return false;
  }

  // اگر نقش ادمین بود، true برمی‌گردونه
  return profile.role === "admin";
}
