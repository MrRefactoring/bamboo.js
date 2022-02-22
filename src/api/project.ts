import * as Models from './models';
import * as Parameters from './parameters';
import { Callback } from '../callback';
import { Client } from '../clients';
import { RequestConfig } from '../requestConfig';

export class Project {
  constructor(private client: Client) {}

  /**
   * Method used to list all projects defined in Bamboo. Projects without any plan are not listed by default, unless
   * <em>showEmpty</em> query param is set to true. <p> Possible expand parameters: <dl> <dt>projects</dt><dd>list of
   * projects projects.project - list of projects with project details</dd> <dt>projects.project.plans</dt><dd>list of
   * project details and plans for project</dd> <dt>projects.project.plans.plan</dt><dd>list of project details and
   * plans for project with plan details</dd> </dl>
   */
  async getProjects<T = Models.AllProjects>(
    parameters: Parameters.GetProjects | undefined,
    callback: Callback<T>
  ): Promise<void>;
  /**
   * Method used to list all projects defined in Bamboo. Projects without any plan are not listed by default, unless
   * <em>showEmpty</em> query param is set to true. <p> Possible expand parameters: <dl> <dt>projects</dt><dd>list of
   * projects projects.project - list of projects with project details</dd> <dt>projects.project.plans</dt><dd>list of
   * project details and plans for project</dd> <dt>projects.project.plans.plan</dt><dd>list of project details and
   * plans for project with plan details</dd> </dl>
   */
  async getProjects<T = Models.AllProjects>(parameters?: Parameters.GetProjects, callback?: never): Promise<T>;
  async getProjects<T = Models.AllProjects>(
    parameters?: Parameters.GetProjects,
    callback?: Callback<T>,
  ): Promise<void | T> {
    const config: RequestConfig = {
      url: '/project',
      method: 'GET',
      params: parameters,
    };

    return this.client.sendRequest(config, callback);
  }

  /**
   * Method used to retrieve information for project specified as project key. <p> Possible expand
   * parameters:<dl><dt>plans</dt><dd>list of plans for project</dd> <dt>plans.plan</dt><dd>list of plans with plan
   * details (only plans visible - READ permission for user)</dd> <dt>plans.plan.actions</dt><dd>list of plans with plan
   * details and actions available for user for plan</dd> </dl>
   */
  async getProject<T = Models.Project>(parameters: Parameters.GetProject, callback: Callback<T>): Promise<void>;
  /**
   * Method used to retrieve information for project specified as project key. <p> Possible expand
   * parameters:<dl><dt>plans</dt><dd>list of plans for project</dd> <dt>plans.plan</dt><dd>list of plans with plan
   * details (only plans visible - READ permission for user)</dd> <dt>plans.plan.actions</dt><dd>list of plans with plan
   * details and actions available for user for plan</dd> </dl>
   */
  async getProject<T = Models.Project>(parameters: Parameters.GetProject, callback?: never): Promise<T>;
  async getProject<T = Models.Project>(parameters: Parameters.GetProject, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/project/${parameters.key}`,
      method: 'GET',
      params: {
        showEmpty: parameters.showEmpty,
      },
    };

    return this.client.sendRequest(config, callback);
  }

  async createProject<T = Models.CreatedProject>(
    parameters: Parameters.CreateProject,
    callback: Callback<T>
  ): Promise<void>;
  async createProject<T = Models.CreatedProject>(parameters: Parameters.CreateProject, callback?: never): Promise<T>;
  async createProject<T = Models.CreatedProject>(
    parameters: Parameters.CreateProject,
    callback?: Callback<T>,
  ): Promise<void | T> {
    const config: RequestConfig = {
      url: '/project',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: parameters,
    };

    return this.client.sendRequest(config, callback);
  }

  /** Marks project for deletion. CreatedProject will be deleted by a batch job. */
  async deleteProject<T = void>(parameters: Parameters.DeleteProject, callback: Callback<T>): Promise<void>;
  /** Marks project for deletion. CreatedProject will be deleted by a batch job. */
  async deleteProject<T = void>(parameters: Parameters.DeleteProject, callback?: never): Promise<T>;
  async deleteProject<T = void>(parameters: Parameters.DeleteProject, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/project/${parameters.key}`,
      method: 'DELETE',
    };

    return this.client.sendRequest(config, callback);
  }

  /**
   * Fetch list of repositories which granted to create plan in given project by Repository stored Bamboo Specs. Returns
   * json array:
   *
   * ```json
   * [{
   *  "id":"123",
   *  "name":"repo1",
   *  "url":"http://localhost:8085/admin/configureLinkedRepositories.action?repositoryId=123"
   * }]
   * ```
   *
   * @returns The page object with list of repositories.
   */
  async getProjectRepositories<T = Models.ProjectRepository[]>(
    parameters: Parameters.GetProjectRepositories,
    callback: Callback<T>
  ): Promise<void>;
  /**
   * Fetch list of repositories which granted to create plan in given project by Repository stored Bamboo Specs. Returns
   * json array:
   *
   * ```json
   * [{
   *  "id":"123",
   *  "name":"repo1",
   *  "url":"http://localhost:8085/admin/configureLinkedRepositories.action?repositoryId=123"
   * }]
   * ```
   *
   * @returns The page object with list of repositories.
   */
  async getProjectRepositories<T = Models.ProjectRepository[]>(
    parameters: Parameters.GetProjectRepositories,
    callback?: never
  ): Promise<T>;
  async getProjectRepositories<T = Models.ProjectRepository[]>(
    parameters: Parameters.GetProjectRepositories,
    callback?: Callback<T>,
  ): Promise<void | T> {
    const config: RequestConfig = {
      url: `/project/${parameters.key}/repository`,
      method: 'GET',
    };

    return this.client.sendRequest(config, callback);
  }

  /**
   * Grant permission to create/edit plan in given project by Bamboo Specs from given repository.
   *
   * @returns Added repository entity.
   */
  async createProjectRepository<T = Models.ProjectRepository[]>(
    parameters: Parameters.GetProjectRepositories,
    callback: Callback<T>
  ): Promise<void>;
  /**
   * Grant permission to create/edit plan in given project by Bamboo Specs from given repository.
   *
   * @returns Added repository entity.
   */
  async createProjectRepository<T = Models.ProjectRepository[]>(
    parameters: Parameters.GetProjectRepositories,
    callback?: never
  ): Promise<T>;
  async createProjectRepository<T = Models.ProjectRepository[]>(
    parameters: Parameters.GetProjectRepositories,
    callback?: Callback<T>,
  ): Promise<void | T> {
    const config: RequestConfig = {
      url: `/project/${parameters.key}/repository`,
      method: 'POST',
    };

    return this.client.sendRequest(config, callback);
  }
}
