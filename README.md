Pre-requisites:

    * MySql Database
        - During installation, ensure server-side authentication protocol is set to 'mynativesql', and not the default 'Secure SHA authentication'. Doing this will avoid connection errors while running.

    *  Ensure a Database is present in the MySql connection.
        - Inside the api structure, change current directory(cd) to api/models/
        - Change the database name if required, in the .query function
        - TERMINAL: node database_check.js
        (If database name is changed, make sure to make subsequent changes in the role_model and user_model files while initializing 'sequelize')

Documentation:

    * The documentation is created under the path /usermanagement/api/routes.

Running the api:

    * TERMINAL: npm start

    * 

Unit test cases:
    
    * Test cases are written under usermanagement/test/

    * To run the test cases, use TERMINAL: npm test