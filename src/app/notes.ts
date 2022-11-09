export interface Note {
  id: number;
  title: string;
  description: string;
  priority: string;
}

export const notes = [
  {
    id: 1,
    title: 'Note 1',
    description: 'description 1',
    priority: 'High'
  },
  {
    id: 2,
    title: 'Note 2',
    description: 'description 2',
    priority: 'Medium'
  },
  {
    id: 3,
    title: 'Note 3',
    description: 'description 3',
    priority: 'Low'
  }
];



