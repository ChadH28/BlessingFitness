const phoneNumber = "27787589451";

export function createWhatsAppLink(message) {
  const text = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${text}`;
}
