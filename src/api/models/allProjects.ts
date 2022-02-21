import { Link } from './link';
import { Project } from './project';

export interface AllProjects {
  expand: string;
  link: Link;
  projects: {
    size: number;
    expand: string;
    'start-index': number;
    'max-result': number;
    project: Project[];
  }
}
