// Use this file to change prototype configuration.

// Note: prototype config can be overridden using environment variables (eg on heroku)

module.exports = {

  // Set the order of the questions, 
  // comment out any not required, 
  // keep lower case as these are the file names
  // Leave submit as the last page

  questionOrder: [
  'age',
  'language',
  'sex',
  'gender',
  'sexual-orientation',
  'marriage',
  'ethnicity',
  'religion',
  'disability',
  'pregnancy',
  'submit'],

  // Set values for the originating service

  // Set the type of user e.g. appellant, applicant, respondent, defendant. 
  serviceUserType: 'respondent',

  // Set the type of user action e.g. application, response, appeal. This will determine the text on the wrapper pages
  serviceUserAction:'response',

  // Set the return page, this will determine the destination when returning to the originating service
  // if there are options based on the user type these are set in server.js
  serviceReturnUrl1: 'https://div-pcq-prototype.herokuapp.com/check-your-answers?respondent', // e.g. applicant
  serviceReturnUrl2: 'https://div-pcq-prototype.herokuapp.com/check-your-answers?applicant', // e.g. respondent


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
