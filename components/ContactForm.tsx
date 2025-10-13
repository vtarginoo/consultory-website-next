"use client";

import { useState } from "react";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus("idle");

        try {
            // 🔹 Log dos dados no console (simulação de envio)
            console.log("Formulário enviado:", formData);

            // Simulação de envio (aguarda 1 segundo)
            await new Promise((resolve) => setTimeout(resolve, 1000));

            setSubmitStatus("success");
            setFormData({ name: "", email: "", phone: "", message: "" });
        } catch (error) {
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };
    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {/* Campo Nome */}
            <label className="block">
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Nome
                </p>
                <input
                    type="text"
                    name="name"
                    placeholder="Jane Smith"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white transition-all"
                />
            </label>

            {/* Campo Email */}
            <label className="block">
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                </p>
                <input
                    type="email"
                    name="email"
                    placeholder="jane@framer.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white transition-all"
                />
            </label>

            {/* Campo Telefone */}
            <label className="block">
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Telefone
                </p>
                <input
                    type="tel"
                    name="phone"
                    placeholder="(00)0000-0000"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white transition-all"
                />
            </label>

            {/* Campo Mensagem */}
            <label className="block">
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Mensagem
                </p>
                <textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white transition-all resize-none"
                />
            </label>

            {/* Botão de Envio */}
            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 rounded-lg bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {isSubmitting ? "ENVIANDO..." : "ENVIAR"}
            </button>

            {/* Mensagens de Status */}
            {submitStatus === "success" && (
                <p className="text-green-600 dark:text-green-400 text-center">
                    Mensagem enviada com sucesso!
                </p>
            )}
            {submitStatus === "error" && (
                <p className="text-red-600 dark:text-red-400 text-center">
                    Erro ao enviar mensagem. Tente novamente.
                </p>
            )}
        </form>
    );
}