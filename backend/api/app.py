#!/usr/bin/env python3
from api.views import app_views
from flask import Flask, jsonify, make_response, render_template, url_for
from flask_cors import CORS, cross_origin
from werkzeug.exceptions import HTTPException
import os

app = Flask(__name__)

app.url_map.strict_slashes = False

cors = CORS(app, resources={r'/api/*': {'origins': '*'}})

app.register_blueprint(app_views)


# host = os.getenv('PROFILE_HOST', '0.0.0.0')
# port = os.getenv('PROFILE_PORT', 5000)
host = os.getenv('PROFILE_HOST', '0.0.0.0')
port = os.getenv('PROFILE_PORT', 5000)

@app.errorhandler(404)
def handle_404(exception):
    """
    handles 404 errors, in the event that global error handler fails
    """
    code = exception.__str__().split()[0]
    description = exception.description
    message = {'error': description}
    return make_response(jsonify(message), code)


@app.errorhandler(400)
def handle_404(exception):
    """
    handles 400 errros, in the event that global error handler fails
    """
    code = exception.__str__().split()[0]
    description = exception.description
    message = {'error': description}
    return make_response(jsonify(message), code)


@app.errorhandler(Exception)
def global_error_handler(err):
    """
        Global Route to handle All Error Status Codes
    """
    if isinstance(err, HTTPException):
        if type(err).__name__ == 'NotFound':
            err.description = "Not found"
        message = {'error': err.description}
        code = err.code
    else:
        message = {'error': err}
        code = 500
    return make_response(jsonify(message), code)


def setup_global_errors():
    """
    This updates HTTPException Class with custom error function
    """
    for cls in HTTPException.__subclasses__():
        app.register_error_handler(cls, global_error_handler)


if __name__ == "__main__":
    """
    MAIN Flask App
    """
    app.run(host=host, port=port)
