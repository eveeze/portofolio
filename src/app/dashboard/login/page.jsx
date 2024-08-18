// app/dashboard/login/page.jsx

"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Input from "@/components/Input";
import Button from "@/components/Button";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [step, setStep] = useState(1);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      setStep(2); // Proceed to 2FA step
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
    const res = await fetch("/api/verify-2fa", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, token }),
    });

    if (res.ok) {
      router.push("/dashboard"); // Redirect to dashboard after successful verification
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

  return (
    <div className="mt-32 mx-auto max-w-screen-md min-h-dvh">
      {step === 1 && (
        <form onSubmit={handleLogin}>
          <h2 className="text-white">Admin Login</h2>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          {error && <p className="error">{error}</p>}
          <Button type="submit">Login</Button>
        </form>
      )}
      {step === 2 && (
        <form onSubmit={handleVerify2FA}>
          <h2>Enter 2FA Code</h2>
          <Input
            type="text"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            placeholder="2FA Token"
            required
          />
          {error && <p className="error">{error}</p>}
          <Button type="submit">Verify 2FA</Button>
        </form>
      )}
    </div>
  );
}
