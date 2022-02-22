import { BaseClient } from './baseClient';
import { Info, Project, Result } from '../api';

export class BambooClient extends BaseClient {
  info = new Info(this);
  project = new Project(this);
  result = new Result(this);
}
