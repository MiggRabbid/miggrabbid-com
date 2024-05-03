const apiPath = '/api/v1';

export default {
  mainPagePath: () => '/',
  aboutPagePath: () => '/about',
  stackPagePath: () => '/stack',
  skillsPagePath: () => '/skills',
  notFoundPagePath: () => '/*',
  loginRequestPath: () => [apiPath, 'login'].join('/'),
  signupRequestPath: () => [apiPath, 'signup'].join('/'),
};
