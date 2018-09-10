Pre-requisites:

    * MySql Database
        - During installation, ensure server-side authentication protocol is set to 'mynativesql', and not the default 'Secure SHA authentication'. Doing this will avoid connection errors while running the API.

    *  Ensure a Database is present in the MySql connection.
        - Database and subsequent tables are created by default everytime the api is run. (method call occurs inside app.js)
        - Set the required database connection variables present inside 'config.js' available in the root folder.

Documentation:

    * The documentation is created under the path /usermanagement/api/routes.

Running the api:

    * TERMINAL: npm start

Unit test cases: Needs update
    
    * Test cases are written under usermanagement/test/

    * To run the test cases, use TERMINAL: npm test