import { Artifact } from './artifact';
import { Issue } from './issue';
import { Label } from './label';
import { Result } from './result';
import { Variable } from './variable';

export interface Artifacts {
  'start-index': string;
  'max-result': string;
  size: string;
  result?: Result[];
  artifact?: Artifact;
  comment?: Comment[];
  issue?: Issue[];
  label?: Label[];
  variable?: Variable[];
}
