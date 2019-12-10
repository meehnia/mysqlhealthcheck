// Read .env file
let dotenv = require('dotenv');
dotenv.config();

let express = require("express");
let app = express();
let port = process.env.PORT || 3000;
let query = process.env.QUERY || 'SELECT 1';
let err_message = process.env.ERRORMSG || 'There was an error while connecting to the server. Please check with your admin.';
let suc_message = process.env.SUCCESSMSG || 'Connection to the server was successfull.'
let mycon = require('./db.js');

// Send MySQL/MariaDB connectivity message for default URL
app.get('/', (req, res) => {
	mycon.query(query, (qerr, qres) => {
		if(qerr) {
			console.log("error: ", qerr);
			res.status(500).json({ error: true, message: err_message });
                }
                else{
                	console.log('success : ', qres);  
                	res.status(200).json({ message: suc_message });
                }
        });
});

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
