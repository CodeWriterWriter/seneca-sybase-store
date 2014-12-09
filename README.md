seneca-sybase-store
==================

Sybase database layer for Seneca framework

[------ WORK IN PROGRESS -------]

Current Version: 0.0.1

Tested on: Node 0.10.32, Seneca 0.5.21

Tests
-----
Prerequisite:
* Must have Adaptive Server Enterprise installed and an ODBC DataSource must be configured.
* Go to the /scripts directory and setup the test DB by running the schema.sql script in there:
 isql -S SERVERNAME -U sa -i schema.sql
 (replace SERVERNAME with the ASE server).
* Configure your username/password/database for the DB in the tests.
* Configure ODBC [TODO]
* Do this by copying the dbconfig.example.js file in the /test/ directory to dbconfig.mine.js
* Change the values to match those of your ODBC connection to Sybase ASE

Notes
-----
See here for the ODBC error codes: http://msdn.microsoft.com/en-us/library/ms714687.aspx

Acknowledgements
----------------

This project was sponsored by [nearForm](http://nearform.com).
