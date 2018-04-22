// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  local:{
    news:"https://newsapi.org/v2/everything?q=bitcoin&apiKey=899bb67449fa4ce8a115ccd0948fcde7",
    saveNews: "http://localhost:3000/news"
  }
};
