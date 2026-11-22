/**
 * EmailJS credentials. These are publishable by design (EmailJS keys are
 * public-key auth, rate limited on their side), which is why they use the
 * NEXT_PUBLIC prefix.
 *
 * When any of the three is missing the contact section renders direct channels
 * instead of a form, rather than a form that silently fails on submit.
 */
export const emailConfig = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? '',
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? '',
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? '',
} as const

export const isEmailConfigured: boolean = Boolean(
  emailConfig.serviceId && emailConfig.templateId && emailConfig.publicKey,
)
