export const WHATSAPP_NUMBER = '2348053580963';
export const WHATSAPP_DISPLAY_NUMBER = '+234 805 358 0963';
export const WHATSAPP_TEL_NUMBER = '+2348053580963';
export const CONTACT_EMAIL = 'wiesmanyaro@gmail.com';

export function getWhatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
