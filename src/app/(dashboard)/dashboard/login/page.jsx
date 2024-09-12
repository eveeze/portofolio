// app/dashboard/login/page.jsx

"use client";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Input from "@/components/Input";
import Button from "@/components/Button";
import Badge from "@/components/Badge";
import BlockQuote from "@/components/BlockQuote";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]); // State untuk OTP 6 digit
  const [step, setStep] = useState(1);
  const [error, setError] = useState("");
  const router = useRouter();
  const inputRefs = useRef([]); // Ref untuk input OTP

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      setStep(2); // Lanjut ke langkah 2FA
    } else {
      let data;
      try {
        data = await res.json();
      } catch (error) {
        setError("Login failed: Invalid response");
        return;
      }
      setError(data.message || "Login failed");
    }
  };

  const handleVerify2FA = async (e) => {
    e.preventDefault();
    const otpToken = otp.join(""); // Gabungkan semua digit OTP menjadi satu string
    const res = await fetch("/api/verify-2fa", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, token: otpToken }),
    });

    if (res.ok) {
      router.push("/dashboard/admin"); // Redirect ke dashboard setelah verifikasi sukses
    } else {
      let data;
      try {
        data = await res.json();
      } catch (error) {
        setError("2FA failed: Invalid response");
        return;
      }
      setError(data.message || "2FA failed");
    }
  };

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^\d$/.test(value)) {
      // Pastikan hanya angka
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (index < otp.length - 1 && inputRefs.current[index + 1]) {
        inputRefs.current[index + 1].focus(); // Pindah ke input berikutnya jika ada
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      const newOtp = [...otp];

      if (otp[index]) {
        // Jika input saat ini memiliki nilai, maka hanya dihapus nilainya
        newOtp[index] = "";
        setOtp(newOtp);
      } else if (index > 0) {
        // Jika input saat ini kosong, fokus pindah ke input sebelumnya dan hapus nilainya
        if (inputRefs.current[index - 1]) {
          inputRefs.current[index - 1].focus();
          newOtp[index - 1] = ""; // Hapus nilai di input sebelumnya
          setOtp(newOtp);
        }
      }
    }
  };

  const handlePaste = (e) => {
    const pasteData = e.clipboardData.getData("text").slice(0, 6); // Ambil 6 digit pertama dari paste
    if (/^\d{6}$/.test(pasteData)) {
      // Hanya lanjutkan jika yang di-paste adalah 6 digit angka
      const newOtp = pasteData.split("");
      setOtp(newOtp);

      // Fokus ke input terakhir setelah paste
      if (inputRefs.current[5]) {
        inputRefs.current[5].focus();
      }
    }
  };

  return (
    <div className="mt-32 mx-auto max-w-screen-xl h-[800px] border-2 border-[#292929] rounded-3xl p-8 space-y-8 shadow-neumorphism grid grid-cols-1 md:grid-cols-2">
      <div className="overflow-hidden w-full h-full shadow-formNeumorphism">
        <Badge />
      </div>
      <div className="p-8 space-y-8">
        <h3 className="text-[#bababa] text-xl">Welcome To</h3>
        <h1 className="text-gray-200 font-bold text-3xl">Tito Zaki Saputro</h1>
        <p className="text-lg font-normal text-[#bababa]">Admin Login Page</p>

        {step === 1 && (
          <form onSubmit={handleLogin} className="space-y-8">
            <Input
              label={"Email"}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
            <Input
              label={"Password"}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
            {error && <p className="error text-gray-200">{error}</p>}
            <Button type="submit">Login</Button>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleVerify2FA}>
            <h2 className="text-2xl font-semibold text-gray-200 mb-4">
              Enter 2FA Code
            </h2>

            <div
              className="flex space-x-4 justify-center mb-8"
              onPaste={handlePaste}
            >
              {[...Array(6)].map((_, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  value={otp[index]}
                  onChange={(e) => handleChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  maxLength="1"
                  className="w-12 h-12 bg-transparent border-2 border-darkBackground shadow-neumorphism text-center text-xl text-[#bababa] rounded-lg outline-none focus:border-gray-300 transition-all duration-200"
                  required
                />
              ))}
            </div>

            {error && <p className="error text-gray-200">{error}</p>}
            <Button type="submit">Verify 2FA</Button>
          </form>
        )}
        <div className="hidden md:block">

          <BlockQuote />
        </div>
      </div>
    </div>
  );
}
