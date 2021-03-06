---
## Backend
---
### Stack
* Python3
* Flask
* Sqlalchemy
* MySQL

### Focus
* REST/HTTP
* CRUD
* API
* ORM
* OOP

#### Start MYSQL server
```/usr/local/mysql/bin/mysql -uroot -p```

#### How to start API/Backend
```MYSQL_USER=root MYSQL_PASSWORD=root MYSQL_HOST=localhost MYSQL_PORT=3306 MYSQL_DATABASE=user python3 -m api.app```

### API

#### Retrieve my profile information in JSON format instead of resume download
`GET  /api/myinfo`

#### Retrieve all outside posted contact information
`GET /api/allinfo` 

#### Send your contact information and message in JSON to online database, I will contact you ASAP!
Example Format: 
`{"name": "First Last", "title": "Senior Recruiter", "company": "Random Company", "email": "random@email.com", "phone": "123-456-7890", "note": "Hello, I like to speak with you for possible...."}`

`POST /api/allinfo` 

#### Retrieve existing info by id
`GET /api/allinfo/info/ <--id#` 

#### Update existing info by id. Important: You can update any fields besides "ID"
`PUT /api/allinfo/info/ <--id#` 

#### Delete post by id
`DELETE /api/allinfo/info/ <--id#` 

#### EXTRA Commands
`pip3 freeze > requirements.txt`

or
`Activate virtualenv`
`pip3 install -r /path/to/requirements.txt`

