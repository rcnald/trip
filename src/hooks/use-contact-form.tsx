import { useState, type ChangeEvent, type FormEvent } from "react"

interface FormData {
  nome: string
  email: string
  mensagem: string
}

interface FormErrors {
  nome?: string
  email?: string
  mensagem?: string
}

export const useContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    email: "",
    mensagem: "",
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null,
  )

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.nome.trim() || formData.nome.trim().length < 2) {
      newErrors.nome = "Nome deve ter pelo menos 2 caracteres"
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email deve ter um formato válido"
    }

    if (!formData.mensagem.trim() || formData.mensagem.trim().length < 10) {
      newErrors.mensagem = "Mensagem deve ter pelo menos 10 caracteres"
    }

    setErrors(newErrors)

    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target

    setFormData((prev) => ({ ...prev, [name]: value }))

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }

    if (submitStatus) setSubmitStatus(null)
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
    
      setSubmitStatus("success")
      setFormData({ nome: "", email: "", mensagem: "" })
    } catch {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return {
    formData,
    errors,
    isSubmitting,
    submitStatus,
    handleInputChange,
    handleSubmit,
  }
}