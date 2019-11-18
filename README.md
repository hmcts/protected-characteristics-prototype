# hmcts-pcq-prototype-master
Protected characteristics questions to be integrated into other services

This project is designed to be called from other hmcts services prototypes to determine where to collect the user's protected characteristics.

It is deployed with heroku and uses env.process variables to determine the return service url and the type of user.

The SERVICE_USER_ACTION is used to display the action of the user in the information panel on the introduction page e.g. application
"Your answers won't affect your {{serviceUserAction}}." 

The SERVICE_USER_TYPE_A is used to define the type of user and which return url (serviceReturnUrl) is used. If there is only one user type then there will be only one return url SERVICE_RETURN_URL_A.
If there are two user types then the user type is passed to the PCQs via a query string on the URL , it is checked against the SERVICE_USER_TYPE_B, if they match then SERVICE_RETURN_URL_B is used as the return. This means that if no query string is passed (i.e. only one user type for this service) the return url defaults to SERVICE_RETURN_URL_A.


