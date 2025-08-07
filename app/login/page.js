"use client";
import { useState } from "react";
import { supabase } from '@supabase/supabase-js';
import { useAuth } from "../store/useAuth";

export default function LoginPage() {
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const { setUser } = useAuth();

  const handleLogin = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithOtp({ phone });
    if (error) {
      setMessage(error.message);
    } else {
      setMessage("کد برای شما ارسال شد.");
    }
    setLoading(false);
  };

  const checkSession = async () => {
    const { data } = await supabase.auth.getSession();
    if (data?.session) setUser(data.session.user);
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">ورود با شماره موبایل</h1>
      <input
        type="tel"
        placeholder="مثال: +989123456789"
        className="w-full p-2 border rounded mb-2"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button
        onClick={handleLogin}
        className="bg-black text-white px-4 py-2 rounded w-full"
        disabled={loading}
      >
        {loading ? "در حال ارسال..." : "ارسال کد"}
      </button>
      <p className="mt-4 text-sm text-green-700">{message}</p>
      <button onClick={checkSession} className="mt-4 underline text-sm">
        بررسی وضعیت ورود
      </button>
    </div>
  );
}
