import { site } from '@/config/site'

export function emailLink(subject = 'Orçamento de site', body = '') {
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}
