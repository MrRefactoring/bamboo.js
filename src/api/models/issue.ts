import { Link } from './link';

export interface Issue {
  key: string;
  summary: string;
  iconUrl: string;
  issueType: string;
  status: string;
  url: Link;
}
