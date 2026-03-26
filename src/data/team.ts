export interface TeamMember {
  id: string;
  name: string;
  title: string;
  image: string;
  role: 'leadership' | 'advisor';
  bio: string[];
  education?: string[];
  affiliations?: string[];
  linkedin?: string;
}

export const team: TeamMember[] = [
  {
    id: 'michael-obloy',
    name: 'Michael L. Obloy',
    title: 'Principal',
    image: '/assets/team/michael-obloy.jpg',
    role: 'leadership',
    bio: [
      'Michael co-founded Monroe Residential Partners and has over 25 years of real estate development, finance and construction experience. He has led the acquisition, development, construction, management, and sales of thousands of residential units, with a value in excess of $500M.',
      'Michael is also the co-founder of 3F Construction (3FC), a value-add renovation contractor servicing clients throughout the Chicagoland area. Under his leadership, 3FC has completed several high profile, large-scale renovations including River City Apartments, a 458-unit, mixed-use project which is the largest condominium deconversion in Chicago\'s history.',
    ],
    education: [
      'Bachelor\'s degree in Business Management from DePaul University',
    ],
    affiliations: [
      'Board of Directors for the Home Builders Association of Greater Chicago (HBAGC), and its Executive Committee',
      'Member of the ELY Chapter of Lambda Alpha International, an honorary society for the advancement of land economics',
    ],
    linkedin: 'https://www.linkedin.com/in/michael-obloy-a0244215/',
  },
  {
    id: 'andrew-friestedt',
    name: 'Andrew A. Friestedt',
    title: 'Principal',
    image: '/assets/team/andrew-friestedt.jpg',
    role: 'leadership',
    bio: [
      'Drew brings 30 years of real estate development and hands-on business operating experience to his role at Monroe Residential Partners. He has developed over $1B of real estate across all asset classes, ranging from mixed-use to multifamily and regional malls.',
      'Before founding Monroe Residential Partners, Drew was Chief Operating Officer at Centrum Properties, one of Chicago\'s largest development companies.',
    ],
    education: [
      'BS in Construction Management from Arizona State University',
      'MS in Real Estate Development from the Massachusetts Institute of Technology',
    ],
    linkedin: 'https://www.linkedin.com/in/drewfriestedt/',
  },
  {
    id: 'dawn-evans',
    name: 'Dawn Evans',
    title: 'VP Finance and Controller',
    image: '/assets/team/dawn-evans.webp',
    role: 'leadership',
    bio: [
      'Bringing over 25 years of real estate finance and accounting expertise, Dawn serves as the Vice President of Finance and Controller for Monroe Residential Partners. In this role, she expertly manages all accounting, finance, treasury operations, and financial reporting processes. She also oversees budgets and internal human resources functions.',
      'Before joining Monroe Residential Partners, Dawn served as Vice President, Senior Fund Account Manager at BNY Mellon. Her diverse background includes positions at JP Morgan on Wall Street, Ernst & Young Kenneth Leventhal Real Estate Group, and RREEF (Rosenberg Real Estate Equity Fund), which was acquired by Deutsche Bank and became part of their Deutsche Asset & Wealth Management Real Estate Investment Group.',
    ],
    education: [
      'BS degree in Accounting from Hampton University',
      'MBA with a concentration in Real Estate Finance from Roosevelt University',
    ],
    affiliations: [
      'Member of the Board of Directors and Treasurer of Midsommer Flight',
      'Treasurer of the JMD Angels Foundation',
      'Active member of the Chicago Metropolitan Alumnae Chapter of Delta Sigma Theta Sorority, Inc.',
    ],
    linkedin: 'https://www.linkedin.com/in/dawn-evans-b2973112/',
  },
  {
    id: 'nicholas-kowieski',
    name: 'Nicholas Kowieski',
    title: 'VP of Development',
    image: '/assets/team/nicholas-kowieski.jpg',
    role: 'leadership',
    bio: [
      'Nick joined Monroe Residential Partners in 2017 as a Development Manager. Responsibilities include supporting the Principals throughout the development lifecycle with investment analysis, design, construction, budgeting, market analysis, pricing, marketing, legal and asset management.',
      'Prior to joining Monroe Residential Partners, Nick worked at CA Ventures, Village Green Holding and Stoneleigh Companies developing and acquiring multifamily, student housing, hospitality and mixed-use properties throughout the country.',
    ],
    education: [
      'Graduated cum laude from the University of Illinois at Chicago Honors College with a major in Finance and a double minor in Economics and Statistics',
    ],
  },
  {
    id: 'jeremy-reis',
    name: 'Jeremy E. Reis',
    title: 'General Counsel',
    image: '/assets/team/jeremy-reis.png',
    role: 'leadership',
    bio: [
      'Jeremy is a principal in the law firm Ruttenberg Gilmartin Reis LLC. Jeremy has a wide range of expertise, including residential and commercial acquisitions and dispositions, development and real estate based corporate matters. In his role as General Counsel to Monroe Residential Partners, Jeremy is an advisor and provides legal guidance in all matters to Monroe Residential Partners.',
    ],
  },
  {
    id: 'gary-kachadurian',
    name: 'Gary T. Kachadurian',
    title: 'Advisor',
    image: '/assets/team/gary-kachadurian.png',
    role: 'advisor',
    bio: [
      'Gary has over 30 years of real estate experience specializing in land and asset acquisition, construction, development, financing, and management.',
      'Mr. Kachadurian was formerly Chairman of ARA, the nation\'s largest privately owned multi-housing investment advisory company. Prior to that he was a Senior Managing Director for Global Business Development for Deutsche Bank Real Estate where his responsibilities included international fund development. He was also a senior member of the Policy Committee of RREEF, a leading pension fund advisor, in addition to being a member of RREEF\'s Investment Committee for 14 years. He was in charge of RREEF\'s National Acquisitions Group and Value-Added and Development groups and also had oversight in the acquisition and management of RREEF\'s 24,000 unit apartment investment portfolio. Prior to joining RREEF, he was the Midwest Regional Operating Partner for Lincoln Property Company, developing and managing apartment communities in Illinois, Indiana, Wisconsin, Kansas and Pennsylvania.',
      'Mr. Kachadurian was a founding Board member of the Chicago Apartment Association, was Chairman and now serves on the Executive Committee of the National Multi Housing Council, and has served as Board Member of the Multifamily Council of the National Association of Home Builders and the Multi Family Council of the Urban Land Institute.',
      'He is an Advisor to Waypoint Residential, a vertically integrated real estate investment manager specializing in apartment communities. Mr. Kachadurian was a Director of the KBS/Legacy REIT and was a member of the Board of Bluerock Residential (BRG), Connor Commercial Real Estate, as well as a Director of Pangea Properties.',
      'He is former Chairman of the Village Foundation, was on the Advisory Board of the Yellowstone Park Foundation and the Advisory Board of Cure Violence and is a member of the Urban Land Institute.',
    ],
    education: [
      'B.S. in Accounting from the University of Illinois',
    ],
  },
];
