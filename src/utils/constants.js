export const APP_NAME = "Yercaud Jeep Safari";
export const APP_TAGLINE = "Explore the Hidden Trails of Shevaroy Hills";

export const WHATSAPP_NUMBER = "917538843075";
export const WHATSAPP_DISPLAY = "+91 75388 43075";

export const getWhatsAppUrl = (customMessage) => {
  const message = customMessage || "Hello Cheetah Travels, I would like to book a Yercaud Jeep Safari.";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

export const CONTACT_INFO = {
  phone: "+91 75388 43075",
  whatsapp: "+91 75388 43075",
  phoneRaw: "917538843075",
  email: "bookings@cheetahtravels.com",
  address: "Near Lake Road, Yercaud, Tamil Nadu 636601",
  operatingHours: "06:00 AM - 07:00 PM (All 7 Days)",
  pickupPoint: "Yercaud Lake Roundabout / Hotel Pickup Available"
};

export const BOOKING_STATUS = {
  PENDING: "pending",
  CONFIRMED: "confirmed",
  COMPLETED: "completed",
  CANCELLED: "cancelled"
};

export const SAFARI_TYPES = [
  { id: "sunrise", name: "Sunrise Safari", duration: "3 Hours" },
  { id: "forest-trail", name: "Deep Forest Trail", duration: "4 Hours" },
  { id: "peak-view", name: "Shevaroy Peak Safari", duration: "3.5 Hours" },
  { id: "offroad-adventure", name: "Extreme Off-Road Trail", duration: "5 Hours" }
];

export const TIME_SLOTS = [
  "06:00 AM - 09:00 AM (Sunrise)",
  "09:30 AM - 01:30 PM (Morning Forest)",
  "02:00 PM - 06:00 PM (Afternoon Viewpoints)",
  "04:00 PM - 07:00 PM (Sunset Safari)"
];
