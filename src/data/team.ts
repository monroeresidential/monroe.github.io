export interface TeamMember {
  id: string;
  name: string;
  title: string;
  image: string;
  role: 'leadership' | 'advisor';
}

export const team: TeamMember[] = [
  {
    id: 'michael-obloy',
    name: 'Michael L. Obloy',
    title: 'Principal',
    image: '/assets/team/michael-obloy.jpg',
    role: 'leadership',
  },
  {
    id: 'andrew-friestedt',
    name: 'Andrew A. Friestedt',
    title: 'Principal',
    image: '/assets/team/andrew-friestedt.jpg',
    role: 'leadership',
  },
  {
    id: 'dawn-evans',
    name: 'Dawn Evans',
    title: 'VP Finance and Controller',
    image: '/assets/team/dawn-evans.jpg',
    role: 'leadership',
  },
  {
    id: 'nicholas-kowieski',
    name: 'Nicholas Kowieski',
    title: 'VP of Development',
    image: '/assets/team/nicholas-kowieski.jpg',
    role: 'leadership',
  },
  {
    id: 'jeremy-reis',
    name: 'Jeremy E. Reis',
    title: 'General Counsel',
    image: '/assets/team/jeremy-reis.jpg',
    role: 'leadership',
  },
  {
    id: 'gary-kachadurian',
    name: 'Gary T. Kachadurian',
    title: 'Advisor',
    image: '/assets/team/gary-kachadurian.jpg',
    role: 'advisor',
  },
];
