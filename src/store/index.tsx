// store.ts
import create from 'zustand';

interface Link {
  name: string;
  url: string;
}

interface Header {
  title: string;
  backgroundColor: string;
  textColor: string;
  logo: string;
  links: Link[];
}

interface Footer {
  text: string;
}

interface StoreState {
  header: Header;
  setHeader: (header: Header) => void;
  features: string[];
  setFeatures: (features: string[]) => void;
  footer: Footer;
  setFooter: (footer: Footer) => void;
}

export const useStore = create<StoreState>((set) => ({
  header: {
    title: '',
    backgroundColor: '#ffffff',
    textColor: '#000000',
    logo: '',
    links: [],
  },
  setHeader: (header) => set({ header }),
  features: [],
  setFeatures: (features) => set({ features }),
  footer: {
    text: '',
  },
  setFooter: (footer) => set({ footer }),
}));
