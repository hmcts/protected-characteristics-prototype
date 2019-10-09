const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// console.log ('config.serviceName ' + serviceName)
console.log('serviceUserAction ' + process.env.SERVICE_USER_ACTION)
// console.log ('config.serviceUserAction ' + serviceUserAction)


//
// Version 1
//

// disability answer

router.post('/applicant-disability-answer', function (req, res) {

  let disabilityInformation = req.session.data['disability-information']

  if (disabilityInformation == 'Yes') {
    res.redirect('/disability/disability-yes?appointee=false&')
  } else {
    res.redirect('/pregnancy?appointee=false&')
  }

})
router.post('/appointee-disability-answer', function (req, res) {

  let disabilityInformation = req.session.data['disability-information']

  if (disabilityInformation == 'Yes') {
    res.redirect('/disability/disability-yes?appointee=true&')
  } else {
    res.redirect('/pregnancy?appointee=true&')
  }

})

// disability details


router.post('/applicant-disability-details', function (req, res) {

  let disabilityYes = req.session.data['disability-yes']

  if (disabilityYes == 'Yes, limited a little' || disabilityYes == 'Yes, limited a lot') {
    res.redirect('/disability/disability-yes-detail?appointee=false&')
  }
  else {
    res.redirect('/pregnancy?appointee=false&')
  }

})

router.post('/appointee-disability-details', function (req, res) {

  let disabilityYes = req.session.data['disability-yes']

  if (disabilityYes == 'Yes, limited a little' || disabilityYes == 'Yes, limited a lot') {
    res.redirect('/disability/disability-yes-detail?appointee=true&')
  }
  else {
    res.redirect('/pregnancy?appointee=true&')
  }

})

// ethnicity answer

router.post('/appointee-ethnicity-answer', function (req, res) {
  let ethnicGroup = req.session.data['ethnic-group']

  if (ethnicGroup == "Prefer not to say") {
    res.redirect('religion?appointee=true&')
  } else if (ethnicGroup == "White") {
    res.redirect('/ethnic-group/ethnicity-white?appointee=true&')
  } else if (ethnicGroup == "Mixed or multiple ethnic groups") {
    res.redirect('/ethnic-group/ethnicity-mixed?appointee=true&')
  } else if (ethnicGroup == "Asian or Asian British") {
    res.redirect('/ethnic-group/ethnicity-asian?appointee=true&')
  } else if (ethnicGroup == "Black, African, Black British or Caribbean") {
    res.redirect('/ethnic-group/ethnicity-black?appointee=true&')
  } else if (ethnicGroup == "Another ethnic group") {
    res.redirect('/ethnic-group/ethnicity-another?appointee=true&')
  } else {
    res.redirect('religion?appointee=true&')
  }

})
router.post('/applicant-ethnicity-answer', function (req, res) {
  let ethnicGroup = req.session.data['ethnic-group']
if (ethnicGroup == "Prefer not to say") {
    res.redirect('religion?appointee=false&')
  } else if (ethnicGroup == "White") {
    res.redirect('/ethnic-group/ethnicity-white?appointee=false&')
  } else if (ethnicGroup == "Mixed or multiple ethnic groups") {
    res.redirect('/ethnic-group/ethnicity-mixed?appointee=false&')
  } else if (ethnicGroup == "Asian or Asian British") {
    res.redirect('/ethnic-group/ethnicity-asian?appointee=false&')
  } else if (ethnicGroup == "Black, African, Black British or Caribbean") {
    res.redirect('/ethnic-group/ethnicity-black?appointee=false&')
  } else if (ethnicGroup == "Another ethnic group") {
    res.redirect('/ethnic-group/ethnicity-another?appointee=false&')
  } else {
    res.redirect('religion?appointee=false&')
  }

})

// first language answer

router.post('/appointee-language', function (req, res) {

  let language = req.session.data['english-language']

  if (language == 'Other') {
    res.redirect('/english-level?appointee=true&')
  }
  else {
    res.redirect('/sex?appointee=true&')
  }
})

router.post('/applicant-language', function (req, res) {

  let language = req.session.data['english-language']

  if (language == 'Other') {
    res.redirect('/english-level?appointee=false&')
  }
  else {
    res.redirect('/sex?appointee=false&')
  }
})


module.exports = router
