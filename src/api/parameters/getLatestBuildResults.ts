export interface GetLatestBuildResults {
  expand?: string;
  favourite?: boolean;
  label?: string;
  issueKey?: string;
  includeAllStates?: boolean;
  lifeCycleState?: string;
  continuable?: boolean;
  buildstate?: string;
  'start-index'?: number;
  'max-results'?: number;
}
