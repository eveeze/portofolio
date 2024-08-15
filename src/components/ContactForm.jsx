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

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // status for success/failure messages
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const validateForm = () => {
    let formErrors = {};
    let valid = true;

    // Name validation
    if (!formData.name.trim()) {
      formErrors.name = "Name is required.";
      valid = false;
    } else if (!/^[a-zA-Z\s]+$/.test(formData.name)) {
      formErrors.name = "Name can only contain letters and spaces.";
      valid = false;
    }

    // Email validation
    if (!formData.email.trim()) {
      formErrors.email = "Email is required.";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Email must be valid and contain '@'.";
      valid = false;
    }

    // Subject and message validation
    if (!formData.subject.trim()) {
      formErrors.subject = "Subject is required.";
      valid = false;
    }
    if (!formData.message.trim()) {
      formErrors.message = "Message is required.";
      valid = false;
    }

    setErrors(formErrors);
    return valid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Reset specific error when user starts typing
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsFormSubmitted(true);

    const isValid = validateForm();

    if (!isValid) {
      setStatus(null);
      return;
    }

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
        setErrors({});
        setIsFormSubmitted(false);
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
        label="Name"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Your Name"
        error={isFormSubmitted && errors.name}
      />
      <Input
        label="Email Address"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Your Email Address"
        error={isFormSubmitted && errors.email}
      />
      <Input
        label="Subject"
        type="text"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        placeholder="Subject"
        error={isFormSubmitted && errors.subject}
      />
      <Input
        label="Message"
        type="textarea"
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Message"
        rows="6"
        error={isFormSubmitted && errors.message}
      />
      <Button>Submit</Button>

      {status === "success" && (
        <p className="text-green-500">Email berhasil dikirim!</p>
      )}
      {status === "error" && (
        <p className="text-red-500">Gagal mengirim email. Coba lagi nanti.</p>
      )}
    </form>
  );
}
