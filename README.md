Prerequisites:
Environment Setup:

Ensure Node.js and npm are installed on your system.
Install MySQL server and ensure it is running.
Database Setup:

Create a database named super_store in your MySQL instance if it does not already exist.
Verify that the user akhila with the password Easy@2020 has access to the database.
Dependencies:

Install the required npm packages:
bash
Copy code
npm install mysql2 xml-stream util fs
File Structure:

Place the myntra.js, db_connection.js, and conn2.js in the same directory.
Ensure that the myntra-limited.xml file is also in the same directory, or update the filePath in myntra.js to the correct location.
Steps to Execute:
Verify Database Connection:

Confirm the database credentials in both conn2.js and db_connection.js files match your MySQL instance configuration​
​
.
Prepare the XML Data:

The script in myntra.js processes XML data from a file named myntra.xml. If you have a different XML file, update the filePath in the script accordingly​
.
Run the Script:

Execute myntra.js using Node.js:
bash
Copy code
node myntra.js
Monitor the Execution:

The script reads the XML file, processes product data, and inserts it into the products table in the database in batches of 4000 records​
.
Post-Execution:

Verify the data insertion by querying the products table in the super_store database:
sql
Copy code
SELECT * FROM products;
Additional Notes:
Large File Handling: If myntra.xml is very large, ensure adequate system resources (RAM, storage) are available, as the script processes large chunks of data in memory.

Error Handling: If errors occur (e.g., database connection issues), check logs outputted by console.log statements in the script.
