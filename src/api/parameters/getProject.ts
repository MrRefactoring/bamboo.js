export interface GetProject {
  key: string;
  showEmpty?: boolean;
  expand?: GetProject.Expand;
}

export namespace GetProject {
  export type Expand =
    | 'plans'
    | 'plans.plan'
    | 'plans.plan.actions'
    | ('plans' | 'plans.plan' | 'plans.plan.actions')[]
    | string
    | string[];
}
