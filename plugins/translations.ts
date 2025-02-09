type Translations = {
  [lang: string]: {
    [key: string]: any;
  };
};

const translations: Translations = {
  en: {
    title: {
      main: 'Gustavo & Catalina',
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
    }
  },
  es: {
    title: {
      main: 'Gustavo & Catalina',
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
    }
  }
}

export default defineNuxtPlugin(() => {
  // let currentLang: keyof Translations = navigator?.language.split('-')[0] as keyof Translations || 'es';
  let currentLang: string = 'es';
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
