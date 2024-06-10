// types.ts
export interface Link {
  name: string;
  url: string;
}

export interface Header {
  title: string;
  backgroundColor: string;
  textColor: string;
  logo: string;
  links: Link[];
}

export interface Footer {
  text: string;
}

export interface Features {
  features: string[];
}
