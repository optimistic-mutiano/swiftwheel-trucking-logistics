
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface BusinessInfo {
  name: string;
  address: string;
  phone: string;
  hours: {
    weekdays: string;
    sunday: string;
  };
  rating: number;
  socials: {
    instagram: string;
  };
}

export interface Testimonial {
  id: number;
  author: string;
  content: string;
  rating: number;
}
