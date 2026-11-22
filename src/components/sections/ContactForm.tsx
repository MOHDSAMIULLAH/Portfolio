'use client'

import { useState, type FormEvent } from 'react'
import emailjs from '@emailjs/browser'
import { emailConfig } from '@/lib/email'
import { site } from '@/data/site'
import { btn } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type FieldName = 'name' | 'email' | 'message'
type Errors = Partial<Record<FieldName, string>>
type Status = 'idle' | 'sending' | 'sent' | 'failed'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(data: FormData): Errors {
  const errors: Errors = {}
  const name = String(data.get('name') ?? '').trim()
  const email = String(data.get('email') ?? '').trim()
  const message = String(data.get('message') ?? '').trim()

  if (name.length === 0) errors.name = 'Enter your name so I know who I am replying to.'
  if (email.length === 0) errors.email = 'Enter an email address I can reply to.'
  else if (!EMAIL_PATTERN.test(email)) errors.email = 'That address is missing an @ or a domain.'
  if (message.length < 10) errors.message = 'Add a line or two about what you need.'

  return errors
}

const fieldBase = cn(
  'w-full rounded-md border bg-canvas px-4 py-3.5 text-base text-ink',
  'placeholder:text-slate/70',
  'transition-colors duration-200 ease-[var(--ease-out)]',
)

const FIELD_ORDER = ['name', 'email', 'message'] as const

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const found = validate(new FormData(form))
    setErrors(found)

    // Send focus to the first field that failed, rather than leaving the user to hunt.
    const firstInvalid = FIELD_ORDER.find((field) => found[field])
    if (firstInvalid) {
      const control = form.elements.namedItem(firstInvalid)
      if (control instanceof HTMLElement) control.focus()
      return
    }

    setStatus('sending')
    try {
      await emailjs.sendForm(
        emailConfig.serviceId,
        emailConfig.templateId,
        form,
        emailConfig.publicKey,
      )
      form.reset()
      setStatus('sent')
    } catch {
      setStatus('failed')
    }
  }

  function clearError(field: FieldName) {
    setErrors((prev) => (prev[field] ? { ...prev, [field]: undefined } : prev))
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-lg border border-line bg-paper p-8 sm:p-10"
    >
      <div className="grid gap-5">
        <div>
          <label htmlFor="contact-name" className="tnum mb-2.5 block text-[length:var(--text-label)] text-green">
            name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Jane Doe…"
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? 'contact-name-error' : undefined}
            onChange={() => clearError('name')}
            className={cn(fieldBase, errors.name ? 'border-danger' : 'border-line-strong focus:border-green-bright')}
          />
          {errors.name ? (
            <p id="contact-name-error" className="mt-2.5 text-[0.875rem] text-danger">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="contact-email" className="tnum mb-2.5 block text-[length:var(--text-label)] text-green">
            email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            spellCheck={false}
            placeholder="jane@company.com…"
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? 'contact-email-error' : undefined}
            onChange={() => clearError('email')}
            className={cn(fieldBase, errors.email ? 'border-danger' : 'border-line-strong focus:border-green-bright')}
          />
          {errors.email ? (
            <p id="contact-email-error" className="mt-2.5 text-[0.875rem] text-danger">
              {errors.email}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="contact-message" className="tnum mb-2.5 block text-[length:var(--text-label)] text-green">
            message
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            autoComplete="off"
            placeholder="What you are building, and where I would fit…"
            aria-invalid={errors.message ? true : undefined}
            aria-describedby={errors.message ? 'contact-message-error' : undefined}
            onChange={() => clearError('message')}
            className={cn(
              fieldBase,
              'resize-y',
              errors.message ? 'border-danger' : 'border-line-strong focus:border-green-bright',
            )}
          />
          {errors.message ? (
            <p id="contact-message-error" className="mt-2.5 text-[0.875rem] text-danger">
              {errors.message}
            </p>
          ) : null}
        </div>
      </div>

      <button type="submit" disabled={status === 'sending'} className={btn('forest', 'mt-8 w-full')}>
        {status === 'sending' ? 'Sending…' : 'Send message'}
      </button>

      <p aria-live="polite" className="mt-5 min-h-6">
        {status === 'sent' ? (
          <span className="font-medium text-green">Message sent. I reply within 24 hours.</span>
        ) : null}
        {status === 'failed' ? (
          <span className="text-danger">
            That did not send. Email me directly at{' '}
            <a href={`mailto:${site.email}`} className="underline underline-offset-4">
              {site.email}
            </a>
            .
          </span>
        ) : null}
      </p>
    </form>
  )
}
