export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  {
    id: 'pre-construction',
    title: 'Pre-Construction Development',
    description: 'Comprehensive planning, feasibility analysis, and entitlement management from concept through groundbreaking.',
    icon: 'blueprint',
  },
  {
    id: 'general-contracting',
    title: 'General Contracting',
    description: 'Full-service general contracting with rigorous quality control and schedule management.',
    icon: 'building',
  },
  {
    id: 'construction-management',
    title: 'Construction Management',
    description: 'Expert oversight ensuring projects are delivered on time, on budget, and to the highest standards.',
    icon: 'clipboard',
  },
  {
    id: 'design-build',
    title: 'Design-Build Fulfillment',
    description: 'Integrated design and construction services that streamline delivery and reduce project risk.',
    icon: 'pencil',
  },
  {
    id: 'private-equity',
    title: 'Private Equity Investment',
    description: 'Strategic investment opportunities in high-quality multifamily and mixed-use developments.',
    icon: 'chart',
  },
];
