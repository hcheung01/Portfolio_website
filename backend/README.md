# FLASK REACT PORTFOLIO SITE
---
## Frontend
---
## Stack
* React
* HTML
* CSS
* Javascript
* jQuery

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

### How to run backend
```PROFILE_USER=root PROFILE_PASSWORD=root PROFILE_HOST=localhost PROFILE_PORT=3306 PROFILE_DATABASE=user python3 -m backend.api.app```

### API

#### Retrieve my profile information in JSON instead of resume download
`GET  /api/myinfo`

#### Retrieve all posts
`GET /api/yourinfo` 

#### Send contact information and message in JSON to online database
Example Format: 
`{"name": "First Last", "title": "Senior Recruiter", "company": "Random Company", "email": "random@email.com", "phone": "123-456-7890", "note": "Hello, I like to speak with you for possible...."}`

`POST /api/yourinfo` 

#### Retrieve post by id
`GET /api/yourinfo/post/ <--id#` 

#### Update post by id
`PUT /api/yourinfo/post/ <--id#` 

#### Delete post by id
`DELETE /api/yourinfo/post/ <--id#` 

## EXTRA Commands
`pip3 freeze > requirements.txt`

or
`Activate virtualenv`
`pip3 install -r /path/to/requirements.txt`

