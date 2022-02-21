import { Link } from './link';

export interface Project {
  key: string;
  name: string;
  description: string;
  link: Link;
  expand?: string;
  plans?: {
    size: number;
    'start-index': number;
    'max-result': number;
  }; // TODO
}
