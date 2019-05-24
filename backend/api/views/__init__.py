#!/usr/bin/env python3
from flask import Blueprint
app_views = Blueprint('app_views', __name__, url_prefix='/api')
from backend.api.views.index import *
from backend.api.views.yourinfo import *
from backend.api.views.myinfo import *
