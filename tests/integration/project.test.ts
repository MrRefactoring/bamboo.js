import { BambooClient } from '../../src';
import test from 'ava';

const projectName = 'Integration API test project';
const projectKey = 'TAPI';

const client = new BambooClient({
  host: process.env.HOST!,
  authentication: {
    basic: {
      username: process.env.USERNAME!,
      password: process.env.PASSWORD!,
    },
  },
});

test.serial('should create project', async t => {
  const project = await client.project.createProject({
    name: projectName,
    key: projectKey,
  });

  t.is(project.name, projectName);
  t.is(project.key, projectKey);
  t.is(project.description, '');
  t.falsy(project.publicAccess);
});

test.serial('should get all projects', async t => {
  const projects = await client.project.getProjects({ showEmpty: true });

  t.truthy(!!projects);
  t.is(projects.expand, 'projects');
  t.truthy(projects.projects.size >= 1);
});

test.serial.skip(`should get ${projectKey} project`, async t => {
  const project = await client.project.getProject({ key: projectKey });

  t.is(project.expand, 'plans');
  t.is(project.key, projectKey);
  t.is(project.name, projectName);
  t.is(project.description, '');
  t.is(project.link.rel, 'self');
  t.is(project.plans?.size, 0);
  t.is(project.plans?.['max-result'], 0);
});

test.serial.skip(`should create ${projectKey} project repository`, async t => { // TODO
  await client.project.createProjectRepository({ key: projectKey });

  t.pass();
});

test.serial(`should get ${projectKey} project repositories`, async t => {
  const repositories = await client.project.getProjectRepositories({ key: projectKey });

  t.is(repositories.length, 0);
});

test.serial('should remove project', async t => {
  await client.project.deleteProject({ key: projectKey });

  t.pass();
});
