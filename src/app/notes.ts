export interface Note {
  id: number;
  title: string;
  description: string;
  priority: string;
  category: string[];
}

export const notes = [
  {
    id: 1,
    title: 'Note 1',
    description: 'description 1',
    priority: 'High',
    category: ['Data Structure','Programming']
  },
  {
    id: 2,
    title: 'Note 2',
    description: 'description 2',
    priority: 'Medium',
    category: ['Data Structure','Programming']
  },
  {
    id: 3,
    title: 'Note 3',
    description: 'description 3',
    priority: 'Low',
    category: ['Data Structure','Programming']
  }
];



