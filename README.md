# mysqlhealthcheck

A small REST API to check if mysql/mariadb/aurora installations are running and connecting.

### HOW TO USE
1. Your instance should have **nodejs**, **npm** and **forever**.
1. Simply checkout the code 
    `git clone https://github.com/meehnia/mysqlhealthcheck.git`
1. Then move to the checked out folder and do `npm install`.
1. Replace the **.env** file with your values (format below).
1. On your commandline do a `npm start`

#### .env file parameters
```
PORT=3000
D_HOST="localhost"
D_PORT=3306
D_USER="<Your User>"
D_PASS="<Your Password>"
D_DATABASE="<Your Database>"
# This query can be replaced with any other query, however it is recommended not to be changed.
QUERY="SELECT 1" 
ERRORMSG="There was an error while connecting to the server. Please check with your admin."
SUCCESSMSG="Connection to the server was successfull."
```
#### NGINX Reverse Proxy
You might want to simply put this healthchecker behind an running nginx server. Simply add the following lines in your server block:
```
location / {
	proxy_pass http://127.0.0.1:3000/;
}
```
The default port for this application is 3000 unless overriden by the .env parameter.


#### LICENSE
Copyright (c) 2019 Vipul Meehnia

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
