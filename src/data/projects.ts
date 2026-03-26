export interface Project {
  id: string;
  name: string;
  type: 'Mixed Use' | 'Residential';
  location: string;
  units?: number;
  sqft?: string;
  description: string;
  image: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 'boylston',
    name: 'Boylston',
    type: 'Mixed Use',
    location: 'Chicago, IL',
    description: 'A premier mixed-use development combining residential living with vibrant retail spaces.',
    image: '/assets/projects/boylston.jpg',
    featured: true,
  },
  {
    id: 'cannery-flats',
    name: 'Cannery Flats',
    type: 'Mixed Use',
    location: 'Bozeman, MT',
    units: 52,
    sqft: '68,000',
    description: '4-story mixed-use development with 52 apartment units and 15,000 sq ft of ground-level retail in the heart of Bozeman.',
    image: '/assets/projects/cannery-flats.jpg',
    featured: true,
  },
  {
    id: '1313-west-randolph',
    name: '1313 West Randolph',
    type: 'Mixed Use',
    location: 'Chicago, IL',
    units: 173,
    sqft: '185,000',
    description: '173 loft homes with polished concrete floors, 11-foot ceilings, and a rooftop lounge with skyline views.',
    image: '/assets/projects/1313-west-randolph.jpg',
    featured: true,
  },
  {
    id: 'teton-flats',
    name: 'Teton Flats',
    type: 'Residential',
    location: 'Victor, ID',
    units: 72,
    description: '72 one and two-bedroom apartments just 25 miles from Jackson Hole Resort and Grand Targhee Resort.',
    image: '/assets/projects/teton-flats.jpg',
  },
  {
    id: 'box-board-lofts',
    name: 'Box Board Lofts',
    type: 'Residential',
    location: 'Grand Rapids, MI',
    units: 173,
    sqft: '185,000',
    description: 'Award-winning adaptive reuse of a 1917 historic warehouse into 173 loft homes with 12-foot ceilings and exposed brick.',
    image: '/assets/projects/box-board-lofts.jpg',
  },
  {
    id: 'volaris-lansing',
    name: 'Volaris Lansing',
    type: 'Residential',
    location: 'Lansing, MI',
    units: 289,
    sqft: '364,875',
    description: '289 apartments with resort-style heated saltwater pool, fitness center, and entertainment lounge.',
    image: '/assets/projects/volaris-lansing.jpg',
  },
  {
    id: '101-west',
    name: '101 West',
    type: 'Residential',
    location: 'Barrington, IL',
    units: 64,
    sqft: '68,000',
    description: '64-unit boutique community on a 1.2-acre transit-oriented development site with rooftop terrace.',
    image: '/assets/projects/101-west.jpg',
  },
  {
    id: '851-west-grand',
    name: '851 West Grand',
    type: 'Residential',
    location: 'Chicago, IL',
    units: 36,
    sqft: '35,600',
    description: '36 apartments across from Blue Line Grand Avenue Station with chef\'s kitchens and open floor plans.',
    image: '/assets/projects/851-west-grand.jpg',
  },
];
