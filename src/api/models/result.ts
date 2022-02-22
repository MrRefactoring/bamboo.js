import { Artifacts } from './artifacts';

export interface Result {
  expand: string;
  key?: string;
  state: string;
  lifeCycleState: string;
  number: string;
  id: string;
  continuable: string;
  onceOff: string;
  restartable: string;
  planName: string;
  projectName: string;
  buildStartedTime: Date;
  prettyBuildStartedTime: Date;
  buildCompletedTime: Date; // TODO
  buildCompletedDate: Date;
  prettyBuildCompletedTime: Date;
  buildDurationInSeconds: string;
  buildDuration: string;
  buildDurationDescription: string;
  buildRelativeTime: string;
  queueStartedTime: Date;
  prettyQueueStartedTime: Date;
  restartCount: string;
  artifacts?: Artifacts;
  comments: Artifacts;
  labels: Artifacts;
  jiraIssues: Artifacts;
  variables?: Artifacts;
}
