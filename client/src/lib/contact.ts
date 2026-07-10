// Dados de contato centralizados da Casa's Decor.
// Alterar aqui reflete em todo o site (Header, Hero, About, Portfólio, Contato, Footer, WhatsApp flutuante).

export const PHONE_DISPLAY = "(19) 99335-2424";
export const WHATSAPP_NUMBER = "5519993352424";
export const INSTAGRAM_HANDLE = "@casasdecor__";
export const INSTAGRAM_URL = "https://www.instagram.com/casasdecor__/";

export const ADDRESS = {
  street: "Av. Vice-Prefeito Anésio Capovilla, 863",
  neighborhood: "Jardim Nova Espírito Santo",
  city: "Valinhos - SP",
  cep: "13273-180",
  full: "Av. Vice-Prefeito Anésio Capovilla, 863, Jardim Nova Espírito Santo, Valinhos - SP, 13273-180",
};

export const HOURS = {
  weekdays: "Seg - Sex: 08h às 18h",
  saturday: "Sábado: 08h às 12h",
};

function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_LINKS = {
  default: buildWhatsAppUrl("Olá! Gostaria de um orçamento para móveis planejados."),
  portfolio: buildWhatsAppUrl("Olá! Vi o portfólio no site e gostaria de mais informações."),
  plain: `https://wa.me/${WHATSAPP_NUMBER}`,
};

// URL de embed do Google Maps sem necessidade de API key (usa busca por endereço).
export const GOOGLE_MAPS_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(
  ADDRESS.full
)}&output=embed`;

// URL para "abrir no Google Maps" / traçar rota
export const GOOGLE_MAPS_DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  ADDRESS.full
)}`;

// Avaliações reais do Google (Casa's Decor Móveis Planejados)
export const GOOGLE_PLACE_ID = "ChIJFUhGtbDTyJQRPu6hJYMP0zE";
export const GOOGLE_RATING = 5.0;
export const GOOGLE_REVIEW_COUNT = 12;
export const GOOGLE_REVIEWS_URL = `https://www.google.com/maps/place/?q=place_id:${GOOGLE_PLACE_ID}`;
export const GOOGLE_WRITE_REVIEW_URL = `https://search.google.com/local/writereview?placeid=${GOOGLE_PLACE_ID}`;
