import { BaseClient } from './baseClient';
import { Project } from '../api/project';

export class BambooClient extends BaseClient {
  project = new Project(this);
}
