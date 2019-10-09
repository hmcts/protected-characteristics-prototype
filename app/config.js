// Use this file to change prototype configuration.

// Note: prototype config can be overridden using environment variables (eg on heroku)

module.exports = {

// Set the order of the questions 
// questionOrder = ['age.html','language.html','sex.html','gender.html','sexual-orientation.html','marriage.html','ethnicity.html','religion.html','disability.html','pregnant.html'],

// Set values for the originating service

// Set the type of user e.g. appellant, applicant, respondent, defendant. This will determine the text on the pages, this matches the data passed into the PCQs
serviceUserType: 'respondent',

// Set the type of user action e.g. application, response, appeal. This will determine the text on the pages
serviceUserAction:'response',

// Set the return page, this will determine the destination when returning to the originating service
serviceReturnPage: 'https://div-pcq-prototype.herokuapp.com/check-your-answers',


 
  // Service name used in header. Eg: 'Renew your passport'
  serviceName: 'Equality and diversity questions',

  // Default port that prototype runs on
  port: '3000',

  // Enable or disable password protection on production
  useAuth: 'true',

  // Automatically stores form data, and send to all views
  useAutoStoreData: 'true',

  // Enable cookie-based session store (persists on restart)
  // Please note 4KB cookie limit per domain, cookies too large will silently be ignored
  useCookieSessionStore: 'false',

  // Enable or disable built-in docs and examples.
  useDocumentation: 'true',

  // Force HTTP to redirect to HTTPS on production
  useHttps: 'true',

  // Cookie warning - update link to service's cookie page.
  cookieText: 'GOV.UK uses cookies to make the site simpler. <a href="#">Find out more about cookies</a>',

  // Enable or disable Browser Sync
  useBrowserSync: 'true'

}
