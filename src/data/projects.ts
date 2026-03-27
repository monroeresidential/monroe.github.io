export interface Project {
  id: string;
  name: string;
  type: 'Mixed Use' | 'Residential';
  location: string;
  address?: string;
  units?: number;
  sqft?: string;
  floors?: number;
  parking?: string;
  description: string;
  image: string;
  featured?: boolean;
  heroImage?: string;
  gallery?: string[];
  fullDescription?: string[];
  apartmentAmenities?: string[];
  communityAmenities?: string[];
  website?: string;
  award?: string;
}

export const projects: Project[] = [
  {
    id: 'boylston',
    name: 'Boylston',
    type: 'Mixed Use',
    location: 'Chicago, IL',
    address: '116-122 W. Illinois St., Chicago, IL',
    units: 36,
    sqft: '48,110',
    floors: 7,
    description: 'A premier mixed-use development combining residential living with vibrant retail spaces.',
    image: '/assets/projects/boylston.webp',
    featured: true,
    heroImage: '/assets/projects/boylston/hero.webp',
    gallery: [],
    fullDescription: [
      'Monroe Residential Partners is thrilled to partner with Mo2 Properties on an exciting adaptive reuse construction project in Chicago\'s River North neighborhood.',
      'Located at 116-122 W. Illinois St., the historic seven-story Boylston Building is set to be transformed into 36 stunning one- and two-bedroom loft-style apartments. The project will blend modern living with the charm of the building\'s original architecture.',
      'A standout feature is the proposed rooftop deck, offering breathtaking views of the iconic Chicago skyline. This redevelopment will provide residents with a unique living experience in the heart of the city.',
    ],
    apartmentAmenities: [
      'Kitchen Pantry', '12-foot Ceilings', 'Exposed Brick', 'Washer & Dryer',
      'Quartz Countertops', 'Spacious Floorplans', 'Luxury Vinyl Flooring', 'Custom Tiled Showers',
    ],
    communityAmenities: [
      'Pet Wash', 'Bike Storage', 'River Views', 'Fitness Center',
      'Parking Garage', 'Yoga/Spin Room', 'Flex/Work Space', 'Gourmet Coffee Bar', 'Dog Run',
    ],
  },
  {
    id: 'cannery-flats',
    name: 'Cannery Flats',
    type: 'Mixed Use',
    location: 'Bozeman, MT',
    address: '221 E Oak St, Bozeman, MT 59715',
    units: 52,
    sqft: '68,000',
    floors: 4,
    parking: '124 parking spaces',
    description: '4-story mixed-use development with 52 apartment units and 15,000 sq ft of ground-level retail in the heart of Bozeman.',
    image: '/assets/projects/cannery-flats.webp',
    featured: true,
    heroImage: '/assets/projects/cannery-flats/hero.webp',
    gallery: Array.from({ length: 6 }, (_, i) => `/assets/projects/cannery-flats/gallery-${i + 1}.webp`),
    fullDescription: [
      'Welcome to Bozeman\'s newest mountain modern apartment building: Cannery Flats. It is the newest addition to the Cannery District, Bozeman\'s hippest new mixed-use development just north of downtown.',
      'The 4 story, 52 unit apartment building offers Studio, One and Two bedroom apartments for rent. Cannery Flats also has 15,000 square feet of commercial spaces on the ground floor, a welcome addition to the already exciting mix of restaurants, coffee shops and businesses at the Cannery.',
      'Tenants will enjoy a 10-minute walk to Downtown Bozeman and have incredible panoramic views of the Bridger Range from several units and the 4th Floor \'Sky Lounge\' or outdoor terrace.',
      'Cannery Flats is located in the Cannery District, minutes from Downtown Main Street in Bozeman, Montana. The 4-story modern rustic building has 52 apartment units ranging from 425 square feet to 1,370 square feet with studio, one- and two-bedroom options along with parking in a private, secure residents only area.',
    ],
    apartmentAmenities: [
      'Stainless Steel Appliances', 'Quartz Countertops', 'Luxury Plank Flooring',
      'Modern Subway Tile', 'High-end Plumbing Fixtures', 'High Speed Fiber Internet',
      'Soft-close Cabinetry', 'Individual Heating/Cooling', 'Yale Keyless Access', 'Mountain Views',
    ],
    communityAmenities: [
      'Elevator Building', 'On-Site Management', 'Dedicated Reserved Parking',
      'Secure Ski/Snowboard Storage', 'Secure Bike Room', 'Pet Friendly',
      'Complimentary WiFi', 'Dog Washing Station', 'Parcel Receiving Room',
    ],
  },
  {
    id: '1313-west-randolph',
    name: '1313 West Randolph',
    type: 'Mixed Use',
    location: 'Chicago, IL',
    address: '1313 W Randolph St, Chicago, IL 60607',
    units: 173,
    sqft: '185,000',
    floors: 3,
    parking: 'Underground Garage',
    description: '173 loft homes with polished concrete floors, 11-foot ceilings, and a rooftop lounge with skyline views.',
    image: '/assets/projects/1313-west-randolph.webp',
    featured: true,
    heroImage: '/assets/projects/1313-west-randolph/hero.webp',
    gallery: Array.from({ length: 6 }, (_, i) => `/assets/projects/1313-west-randolph/gallery-${i + 1}.webp`),
    fullDescription: [
      'Nestled within Chicago\'s trendy West Loop, 13thirteen Randolph Street Lofts offers a modern urban living experience. With an array of contemporary features and amenities, this community provides residents with a comfortable and convenient lifestyle.',
      'With 35 unique floor plans across studio, one, and two bedroom layouts, every resident finds their perfect space. Units feature polished concrete floors, soaring 11-foot ceilings, quartz countertops, and expansive closets.',
    ],
    apartmentAmenities: [
      'Polished Concrete Floors', '11-foot Ceilings', 'Quartz Countertops',
      'Expansive Closets', '35 Unique Floor Plans', 'Studio/1BR/2BR Layouts',
    ],
    communityAmenities: [
      'Rooftop Lounge with Pool Table & Bar', 'Stunning Skyline Views',
      'Fitness Center', 'Heated Garage', 'Bike Storage',
      'No Pet Weight Restriction', 'Historic Loft Building', 'Green Design',
    ],
  },
  {
    id: 'teton-flats',
    name: 'Teton Flats',
    type: 'Residential',
    location: 'Victor, ID',
    address: '100 Homestead Rd, Victor, ID 83455',
    units: 72,
    sqft: '12,808',
    floors: 2,
    parking: '80 total parking spaces',
    description: '72 one and two-bedroom apartments just 25 miles from Jackson Hole Resort and Grand Targhee Resort.',
    image: '/assets/projects/teton-flats.webp',
    heroImage: '/assets/projects/teton-flats/hero.webp',
    gallery: Array.from({ length: 6 }, (_, i) => `/assets/projects/teton-flats/gallery-${i + 1}.webp`),
    fullDescription: [
      'Experience mountain living in seventy-two one- and two-bedroom apartments. Each unit comes with stainless steel appliances, quartz countertops, in-unit washer/dryer, 9-foot ceilings, dedicated storage, and wood plank flooring.',
      'Located in Victor, just 25 miles from Jackson and Grand Targhee, Teton Flats is the most convenient, well-appointed, and cost-effective housing option in the market. With rents up to $1,000 less per month than those in Jackson, you can experience exceptional value without compromising on quality.',
      'Teton Flats showcases a Scandinavian architectural aesthetic, featuring open spaces and expansive views of the stunning Grand Teton Mountain Range. Designed with elegance and functionality in mind, the apartments offer incredible finishes, including sleek quartz countertops, classic subway tile, rich wood flooring, and impressive high ceilings.',
      'One of the standout floor plans includes a spacious two-story duplex, providing an extra level of luxury and flexibility for those seeking a more dynamic living space. Teton Flats aims to create a harmonious living environment where the beauty of nature meets sophisticated design.',
    ],
    apartmentAmenities: [
      'Stainless Steel Appliances', 'Quartz Countertops', 'In-Unit Washer/Dryer',
      '9-foot Ceilings', 'Dedicated Storage', 'Wood Plank Flooring',
      'Classic Subway Tile', 'Two-Story Duplex Options',
    ],
    communityAmenities: [
      'Scandinavian Architecture', 'Grand Teton Mountain Views',
      '4 Buildings', '80 Parking Spaces', 'Pet Friendly',
    ],
    website: 'TetonFlats.com',
  },
  {
    id: 'box-board-lofts',
    name: 'Box Board Lofts',
    type: 'Residential',
    location: 'Grand Rapids, MI',
    address: '470 Market Ave SW, Grand Rapids, MI 49503',
    units: 173,
    sqft: '185,000',
    floors: 3,
    parking: 'Underground Garage',
    description: 'Award-winning adaptive reuse of a 1917 historic warehouse into 173 loft homes with 12-foot ceilings and exposed brick.',
    image: '/assets/projects/box-board-lofts.webp',
    heroImage: '/assets/projects/box-board-lofts/hero.webp',
    gallery: Array.from({ length: 6 }, (_, i) => `/assets/projects/box-board-lofts/gallery-${i + 1}.webp`),
    fullDescription: [
      'Box Board Lofts residents have the rare opportunity to make their home in the beautiful, historic architectural treasure at 470 Market Avenue in Grand Rapids, MI.',
      'What was once American Box Board Company is now upcycled into a new way of living. Box Board Lofts was designed and built to feature modern desires while preserving its irreplaceable 1917 historic charm.',
      'Box Board Lofts has 12-foot ceiling heights, an underground parking garage, and apartment finishes unlike anything else in Grand Rapids. Floorplans include a mix of Studio, One & Two Bedroom lofts with a modern functional design.',
    ],
    apartmentAmenities: [
      'Kitchen Pantry', '12-foot Ceilings', 'Exposed Brick', 'Washer & Dryer',
      'Quartz Countertops', 'Spacious Floorplans', 'Luxury Vinyl Flooring', 'Custom Tiled Showers',
    ],
    communityAmenities: [
      'Pet Wash', 'Bike Storage', 'River Views', 'Fitness Center',
      'Parking Garage', 'Yoga/Spin Room', 'Flex/Work Space', 'Gourmet Coffee Bar', 'Dog Run',
    ],
    website: 'BoxBoardLofts.com',
    award: '2023 Multifamily Executive: Adaptive Reuse + Apartment Renovation Merit Award',
  },
  {
    id: 'volaris-lansing',
    name: 'Volaris Lansing',
    type: 'Residential',
    location: 'Lansing, MI',
    address: '4540 Collins Rd, Lansing, MI 48910',
    units: 289,
    sqft: '364,875',
    floors: 4,
    parking: 'Assigned & Attached Garage Parking',
    description: '289 apartments with resort-style heated saltwater pool, fitness center, and entertainment lounge.',
    image: '/assets/projects/volaris-lansing.webp',
    heroImage: '/assets/projects/volaris-lansing/hero.webp',
    gallery: Array.from({ length: 6 }, (_, i) => `/assets/projects/volaris-lansing/gallery-${i + 1}.webp`),
    fullDescription: [
      'At Volaris Lansing, you will enjoy resort-inspired amenities and luxury living in the heart of everything Downtown Lansing has to offer.',
      'With easy access to Michigan State University, popular restaurants and bars, unique shopping, local parks, and proximity to freeways, our one-of-a-kind location is designed to suit any lifestyle.',
      'Each unique floor plan features generous layouts for comfortable living, including chef-style kitchens, luxury plank flooring, modern bathrooms, and an in-home washer/dryer.',
    ],
    apartmentAmenities: [
      'Brushed Nickel Hardware', 'Built-in Bedroom Lighting', 'Energy Efficient Windows',
      'Full-Sized Washer/Dryer', 'Granite Countertops', 'Mobile Kitchen Island',
      'Open-Concept Floorplan', 'Stainless-Steel Appliances', 'USB Outlets',
      'Vinyl Wood Plank Flooring', 'Walk-in Closet', 'White Slab Cabinetry',
    ],
    communityAmenities: [
      '24-Hour Emergency Service', 'Business Center', 'Clubhouse',
      'Courtyard with Fire Pits & Pergolas', 'Cycling & Yoga Studio',
      'Dog Park & Pet Spa', 'Entertainment Lounge', 'Fitness Center',
      'Package Room', 'Resort-Styled Heated Saltwater Pool',
    ],
  },
  {
    id: '101-west',
    name: '101 West',
    type: 'Residential',
    location: 'Barrington, IL',
    address: '101 W. Liberty St., Barrington, IL 60010',
    units: 64,
    sqft: '68,000',
    floors: 4,
    parking: '22 Outdoor + 65 Indoor Heated Parking',
    description: '64-unit boutique community on a 1.2-acre transit-oriented development site with rooftop terrace.',
    image: '/assets/projects/101-west.webp',
    heroImage: '/assets/projects/101-west/hero.webp',
    gallery: Array.from({ length: 6 }, (_, i) => `/assets/projects/101-west/gallery-${i + 1}.webp`),
    fullDescription: [
      '101 W. Liberty Street, Barrington is a 64-unit, boutique-style, luxury rental community. This transit-oriented development (TOD) is situated on a 1.2-acre site in downtown Barrington, Illinois and appeals to the industrious history of the immediate area.',
      'The building features a modern interpretation of an adaptive re-use loft-style building, rising three stories along Hough Street with the fourth story set back to minimize its street-level appearance.',
      'Units range from 789 to 1,294 square feet, offering residents wide plank flooring, tall ceilings, quartz countertops, stainless-steel appliances, and ample walk-in closets.',
    ],
    apartmentAmenities: [
      'Wide Plank Flooring', 'Tall Ceilings', 'Quartz Countertops',
      'Stainless-Steel Appliances', 'Walk-in Closets', 'Electric-Car Charging Stations',
      'Heated Underground Garage',
    ],
    communityAmenities: [
      'Fourth Floor Fitness Center', 'Community Lounge', 'Rooftop Terrace',
      '24-Hour Fitness Center', 'Bike Storage & Repair', 'Yoga Room',
      'Valet Dry Cleaning', 'Walking Distance to Metra',
    ],
  },
  {
    id: '851-west-grand',
    name: '851 West Grand',
    type: 'Residential',
    location: 'Chicago, IL',
    address: '851 W Grand Ave, Chicago, IL 60642',
    units: 36,
    sqft: '35,600',
    floors: 6,
    parking: 'Tenant Reserved Parking',
    description: '36 apartments across from Blue Line Grand Avenue Station with chef\'s kitchens and open floor plans.',
    image: '/assets/projects/851-west-grand.webp',
    heroImage: '/assets/projects/851-west-grand/hero.webp',
    gallery: Array.from({ length: 6 }, (_, i) => `/assets/projects/851-west-grand/gallery-${i + 1}.webp`),
    fullDescription: [
      'Experience a more intimate community without all the loud, oversized common areas\u2014where you will know your neighbors, and can walk a few short steps to your home.',
      '851 West is across the street from the Blue Line Grand Avenue Station and adjacent to the \'Hipster Highway\', Chicago\'s most traveled bicycle thoroughfare, making this property an excellent location for easy access to all things work and play.',
      'At the intersection of everything in Chicago, you will be within walking distance to all the hottest new bars, restaurants, and shops that the Fulton Market, West Loop, and Fulton River District have to offer.',
      'Best of all, at 851 West your rent is hundreds less than the crowded, full amenity buildings, saving you money to spend on your active Chicago lifestyle.',
    ],
    apartmentAmenities: [
      'Chef\'s Kitchens', 'Open Floor Plans', 'In-Unit Laundry',
      'Master Ensuite Bathrooms', 'Guest Bedrooms', 'Spacious Closets',
    ],
    communityAmenities: [
      'Blue Line Grand Avenue Station Access', 'Bicycle Thoroughfare Adjacent',
      'Fulton Market Walking Distance', 'West Loop Location',
      'Tenant Reserved Parking', 'Intimate Community',
    ],
  },
];
