import { Link } from './link';

export interface Artifact {
  name: string;
  link: Link;
  producerJobKey: string;
  shared: string;
  size: string;
  prettySizeDescription: string;
}
