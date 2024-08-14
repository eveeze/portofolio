"use client";
import Button from "./Button";
import Input from "./Input";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <form className="space-y-6 mt-10" onSubmit={handleSubmit}>
      <Input
        label="Nama"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Nama Anda"
      />
      <Input
        label="Alamat Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Alamat Email Anda"
      />
      <Input
        label="Subjek"
        type="text"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        placeholder="Subjek"
      />
      <Input
        label="Pesan"
        type="textarea"
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Pesan Anda"
        rows="6"
      />
      <Button>Kirim</Button>
      {status === "success" && (
        <p className="text-green-500">Email berhasil dikirim!</p>
      )}
      {status === "error" && (
        <p className="text-red-500">Gagal mengirim email. Coba lagi nanti.</p>
      )}
    </form>
  );
}
