// Coordonnées centralisées — modifier ici pour changer le numéro partout sur le site.
// Format wa.me : indicatif pays + numéro SANS le 0 initial, sans "+" ni espaces.
export const WHATSAPP_NUMBER = "33745831398";
export const PHONE_DISPLAY = "+33 7 45 83 13 98";

export const waLink = (message = "") =>
  `https://wa.me/${WHATSAPP_NUMBER}${
    message ? `?text=${encodeURIComponent(message)}` : ""
  }`;
