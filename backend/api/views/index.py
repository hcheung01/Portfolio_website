#!/usr/bin/env python3
from api.views import app_views
from flask import jsonify, request
from flask import Flask, render_template


@app_views.route('/')
def index():
        return render_template('index.html')

@app_views.route('/status', methods=['GET'])
def status():
    """
    function for status route that returns the status
    """
    if request.method == 'GET':
        resp = {"status": "OK"}
        return jsonify(resp)
