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
    default: {
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
    default: {
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
