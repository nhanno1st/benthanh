'use client';

import { useState } from 'react';
import FormField, { inputClass } from '@/components/ui/FormField';
import { CONTACT_TOPICS } from '@/mocks/contact';
import type { InquiryPayload } from '@/types/contact';
import { inquiryService } from '../inquiry.service';
import { validateInquiry, type InquiryErrors } from '../inquiry.validation';

const EMPTY: InquiryPayload = { topic: '', fullName: '', contact: '', company: '', message: '' };

export default function ContactForm() {
  const [values, setValues] = useState<InquiryPayload>(EMPTY);
  const [errors, setErrors] = useState<InquiryErrors>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');
  const [serverError, setServerError] = useState('');

  const set = (k: keyof InquiryPayload) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setValues((v) => ({ ...v, [k]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validateInquiry(values);
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setStatus('sending');
    try {
      await inquiryService.submit(values);
      setValues(EMPTY);
      setStatus('done');
    } catch (err) {
      setServerError(err instanceof Error ? err.message : 'Gửi không thành công');
      setStatus('error');
    }
  };

  if (status === 'done') {
    return (
      <div role="status" className="bg-white p-8 text-center ring-1 ring-line md:p-12">
        <h3 className="text-3xl font-bold">Đã gửi liên hệ</h3>
        <p className="mt-3 text-ink-muted">Cảm ơn bạn. Chúng tôi sẽ phản hồi trong giờ làm việc.</p>
        <button onClick={() => setStatus('idle')} className="btn-outline mt-5">Gửi liên hệ khác</button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-4 bg-white p-6 ring-1 ring-line md:p-10">
      <FormField label="Chủ đề liên hệ" htmlFor="topic" required error={errors.topic}>
        <select id="topic" value={values.topic} onChange={set('topic')} className={inputClass}>
          <option value="">Chọn chủ đề</option>
          {CONTACT_TOPICS.map((t) => <option key={t} value={t}>{t}</option>)}
        </select>
      </FormField>
      <FormField label="Họ và tên" htmlFor="fullName" required error={errors.fullName}>
        <input id="fullName" value={values.fullName} onChange={set('fullName')} autoComplete="name" className={inputClass} />
      </FormField>
      <FormField label="Email hoặc số điện thoại" htmlFor="contact" required error={errors.contact}>
        <input id="contact" value={values.contact} onChange={set('contact')} autoComplete="email" className={inputClass} />
      </FormField>
      <FormField label="Công ty" htmlFor="company">
        <input id="company" value={values.company} onChange={set('company')} autoComplete="organization" className={inputClass} />
      </FormField>
      <FormField label="Nội dung" htmlFor="message">
        <textarea id="message" rows={5} value={values.message} onChange={set('message')} className={inputClass} />
      </FormField>

      {status === 'error' && <p role="alert" className="text-sm text-red-600">{serverError}</p>}
      <div>
        <button type="submit" disabled={status === 'sending'} className="btn-primary disabled:opacity-60">
          {status === 'sending' ? 'Đang gửi…' : 'Gửi liên hệ'}
        </button>
      </div>
    </form>
  );
}
