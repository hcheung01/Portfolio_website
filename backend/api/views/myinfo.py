#!/usr/bin/env python3
from flask import jsonify, request
from api.views import app_views

@app_views.route('/myinfo', methods=['GET'])
def myinfo():
  if request.method == 'GET':
    my_info = {"Full-name": "Heindrick Cheung",
               "Title": "Software Engineer",
               "School Attended": "Holberton School of Engineering",
               "Links": ["www.linkedin.com/heindrick-cheung", "www.github.com/hcheung01", "www.medium.com/heindrickcheung", "www.twitter.com/heindrickcheung"],
               "contact": {
                   "phone": "415-688-0153",
                   "city": "San Francisco",
                   "email": "Hcheung01@gmail.com"
               },
               "Interests": ["API design and development with error free business logic", "Data collection, analysis and storage", "Front-end responsive web designs and development", "Machine Learning"],
               "Software": [{"Proficient": ["Javascript", "Python", "C", "HTML", "CSS"]}, {"Familiar": ["Bash/Shell", "Flask/Jinja2", "MySQL/ORM", "Node/Express", "jQuery/AJAX"]}],
               "Programming Coursework": ['Algorithms & Data Structures', 'Object Oriented Programming', 'Low-level and Higher Level programming', 'Operating Systems', 'Networks', 'Web Development', 'System Engineering and Devops', 'Web infrastructure'],
               "Projects": [{"Project Name": "Career Path", "Links": ["www.careerpath.website", "www.github.com/hcheung01/Career_path"], "Description": "Full-stack web app to provide new engineers with a curated list of jobs. Users can register an account, create multiple profiles with multiple skills, match profile skills to job requirements/skills and apply directly."},
                            {"Project Name": "Airbnb Clone", "Links": ["https://www.github.com/hcheung01/airbnb_clone_v4"],
                             "Description": "Full-stack web app to successfully mimic Airbnb using Flask framework and SQLalchemy ORM"},
                            {"Project Name": "Simple Shell Interpreter", "Links": ["https://www.github.com/hcheung01/simple_shell"], "Description": "Developed a simple shell interpreter with functionalities similar to Thompson Shell"}]}
    return jsonify(my_info), 200
