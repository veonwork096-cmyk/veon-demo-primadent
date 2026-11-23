// Facts of PrimaDent from veon/client.json (company.contacts, products_services, C-001, C-003…C-010).
// Nothing here is invented: prices are the clinic's own «від» prices with appointment length.

export const clinic = {
  name: "PrimaDent",
  phone: "+380 66 775 77 66",
  phoneHref: "tel:+380667757766",
  telegramBot: "https://t.me/primadent_bot?start=online_consultation",
  address: "вул. Мукачівська, 4",
  city: "Ужгород",
  addressFull: "м. Ужгород, вул. Мукачівська, 4",
  mapHref: "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("Ужгород, вул. Мукачівська, 4"),
  hours: [
    { days: "Пн–Пт", time: "09:00–19:00" },
    { days: "Сб", time: "09:00–15:00" },
    { days: "Нд", time: "вихідний" },
  ],
  hoursShort: "Пн–Пт 09–19, Сб 09–15",
  socials: [
    { name: "Instagram", href: "https://www.instagram.com/primadent.uzh/" },
    { name: "Facebook", href: "https://www.facebook.com/primadent.uzh/" },
  ],
} as const;

export interface PriceItem { name: string; price: string; time: string; }

/** products_services, exactly as published by the clinic. */
export const price = {
  consultation: { name: "Консультація", price: "1 200", time: "30–45 хв" },
  therapy: { name: "Терапія", price: "2 000", time: "45–90 хв" },
  endo: { name: "Ендодонтія", price: "800", time: "60–120 хв" },
  whitening: { name: "Профілактика та відбілювання", price: "1 800", time: "45–60 хв" },
  surgery: { name: "Хірургія", price: "1 500", time: "30–60 хв" },
  implantation: { name: "Імплантація", price: "1 500", time: "30–60 хв" },
  total: { name: "Тотальна імплантація", price: "43 600", time: "2–3 години" },
  prosthetics: { name: "Протезування", price: "800", time: "45–90 хв" },
  ortho: { name: "Ортодонтія", price: "700", time: "30–60 хв" },
  aligners: { name: "Елайнери", price: "62 400", time: "30–45 хв" },
  hygiene: { name: "Професійна гігієна", price: "1 800", time: "45–60 хв" },
  veneers: { name: "Вініри", price: "9 000", time: "2–3 візити" },
  implants: { name: "Імпланти (дентальна імплантація)", price: "13 900", time: "30–60 хв" },
} satisfies Record<string, PriceItem>;

export type DoctorId = "pryima" | "skyrchuk" | "bora" | "kostenko";
export interface Doctor { id: DoctorId; name: string; role: string; years: string; }

export const doctors: Record<DoctorId, Doctor> = {
  pryima: { id: "pryima", name: "Прийма Максим Борисович", role: "Ортопед і хірург-імплантолог, засновник клініки", years: "14 років досвіду" },
  bora: { id: "bora", name: "Бора Степан", role: "Ендодонтія: лікування каналів під мікроскопом", years: "10 років досвіду" },
  kostenko: { id: "kostenko", name: "Костенко Олександр Євгенійович", role: "Ортодонт, PhD", years: "15 років досвіду" },
  skyrchuk: { id: "skyrchuk", name: "Скирчук Діана Олексіївна", role: "Терапевт", years: "6 років досвіду" },
};

export interface Situation {
  id: string;
  title: string;
  hint: string;
  lead: string;
  items: PriceItem[];
  doctor?: DoctorId;
  next: { href: string; label: string };
}

export const situations: Situation[] = [
  {
    id: "lost",
    title: "Втратили зуби",
    hint: "імпланти від 13 900 грн",
    lead: "Спершу консультація з оцінкою КТ і план імплантації. Потім лікування за планом, з ціною, яку ви знаєте наперед.",
    items: [price.consultation, price.implants],
    next: { href: "#implants", label: "Усі ціни на імплантацію та лікар" },
  },
  {
    id: "pain",
    title: "Біль, проблемний зуб",
    hint: "ендодонтія від 800 грн",
    lead: "Лікування й переліковування каналів під мікроскопом, щоб зберегти зуб, а не видаляти його.",
    items: [price.endo, price.therapy, price.surgery],
    doctor: "bora",
    next: { href: "#cases", label: "Кейси до і після" },
  },
  {
    id: "smile",
    title: "Естетика посмішки",
    hint: "вініри від 9 000 грн",
    lead: "Елайнери, вініри й відбілювання системою Beyond. Що підходить саме вам, лікар скаже на консультації.",
    items: [price.aligners, price.veneers, price.whitening],
    doctor: "kostenko",
    next: { href: "#cases", label: "Відбілювання: до і після" },
  },
  {
    id: "family",
    title: "Для всієї родини",
    hint: "гігієна від 1 800 грн",
    lead: "Професійна гігієна, лікування карієсу та ортодонтія. Приймаємо в будні до 19:00 і в суботу.",
    items: [price.hygiene, price.therapy, price.ortho],
    doctor: "skyrchuk",
    next: { href: "#faq", label: "Графік і оплата" },
  },
  {
    id: "abroad",
    title: "Живу за кордоном",
    hint: "план до приїзду",
    lead: "Почніть онлайн: надішліть знімок OPG або КЛКТ, поговоріть з лікарем по відео 20–30 хв і отримайте план з термінами та вартістю. Оптимальний візит 2–5 днів.",
    items: [],
    next: { href: "#abroad", label: "Як це працює" },
  },
];

export const priceGroups: { title: string; items: PriceItem[] }[] = [
  { title: "Імплантація та протезування", items: [price.consultation, price.implantation, price.implants, price.total, price.prosthetics, price.surgery] },
  { title: "Лікування зубів і каналів", items: [price.therapy, price.endo] },
  { title: "Естетика", items: [price.aligners, price.veneers, price.whitening] },
  { title: "Профілактика й ортодонтія", items: [price.hygiene, price.ortho] },
];

export const faq = [
  {
    q: "Які способи оплати ви приймаєте?",
    a: "Готівка, банківські картки Visa і Mastercard, безконтактна оплата. Для юридичних осіб надаємо рахунок на безготівкову оплату.",
  },
  {
    q: "Коли працює клініка?",
    a: "Понеділок – пʼятниця з 09:00 до 19:00, субота з 09:00 до 15:00, неділя вихідний. Клініка на вул. Мукачівській, 4 в Ужгороді.",
  },
  {
    q: "Скільки триває прийом?",
    a: "Консультація триває 30–45 хв, терапія 45–90 хв, лікування каналів 60–120 хв, тотальна імплантація 2–3 години. Точний час лікар скаже, коли складе план.",
  },
  {
    q: "Чи можна почати лікування, якщо я живу за кордоном?",
    a: "Так. Напишіть у Telegram, надішліть панорамний знімок (OPG) або КЛКТ, і лікар проведе відеоконсультацію 20–30 хв. Ви отримаєте план з термінами та вартістю, а більшість процедур можна виконати за 2–5 днів перебування.",
  },
];
