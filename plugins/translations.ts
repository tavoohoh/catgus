type Translations = {
  [lang: string]: {
    [key: string]: any;
  };
};

const translations: Translations = {
  en: {
    title: {
      main: 'Catalina & Gustavo',
      save: 'Save the Date',
      home: 'Home',
      about: 'About',
      gift: 'Wedding Gift',
      dress: 'Dress Code',
      crew: 'The Crew',
      todo: 'What to do',
      schedule: 'Schedule',
      faq: 'FAQs',
    },
    home: {
      date: 'February 20, 2026',
      location: 'Subachoque, Colombia',
    },
    global: {
      timer: {
        finished: 'Thank you all!',
        seconds: 'Only {seconds} seconds left!',
        minutes: 'Only {minutes} minutes and {seconds} seconds left!',
        hours: 'Only {hours} hours, {minutes} minutes and {seconds} seconds left!',
        days: 'Only {days} days, {hours} hours, {minutes} minutes and {seconds} seconds left!'
      },
      empty: 'We are working on this section. It will be available soon.',
    }
  },
  es: {
    title: {
      main: 'Catalina & Gustavo',
      save: 'Reserva la Fecha',
      home: 'Home',
      about: 'Información',
      gift: 'Regalos',
      dress: 'Vestimenta',
      crew: 'The Crew',
      todo: 'Qué hacer',
      schedule: 'Itinerario',
      faq: 'FAQs',
    },
    home: {
      date: 'Febrero 20, 2026',
      location: 'Subachoque, Cundinamarca',
    },
    global: {
      timer: {
        finished: '¡Gracias a todos!',
        seconds: '¡Faltan {seconds} segundos!',
        minutes: '¡Faltan {minutes} minutos y {seconds} segundos!',
        hours: '¡Faltan {hours} horas, {minutes} minutos y {seconds} segundos!',
        days: 'Faltan {days} días, {hours} horas, {minutes} minutos y {seconds} segundos'
      },
      empty: 'Estamos trabajando en esta sección. Pronto estará disponible.',
    }
  }
}

export default defineNuxtPlugin(() => {
  let currentLang: keyof Translations = navigator?.language.split('-')[0] as keyof Translations || 'es';
  let currentTranslations = translations[currentLang];

  const t = (key: string): string => {
    const keys = key.split('.');
    return keys.reduce((acc: any, current) => {
      if (acc && typeof acc === 'object' && current in acc) {
        return acc[current];
      }
      throw new Error(`Translation key "${key}" not found`);
    }, currentTranslations) as string;
  };

  return {
    provide: {
      t,
      currentLang,
    }
  }
});
