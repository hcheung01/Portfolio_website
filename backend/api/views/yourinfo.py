#!/usr/bin/env python3
from api.views import app_views
from flask import jsonify, request, url_for, redirect, abort
import json
from model import storage
from flask_cors import CORS, cross_origin

@app_views.route('/allinfo', methods=['GET', 'POST'])
@cross_origin(supports_credentials=True)
def your_info():
  if request.method == 'POST':
    req_data = json.loads(request.data)
    return_id = storage.new(req_data)
    storage.save()
    return redirect(url_for('app_views.info_with_id', info_id = str(return_id))), 302
  elif request.method == 'GET':
    all_objs = storage.all()
    return jsonify(all_objs), 200
  else:
    return jsonify({"Error": "Your Missing something"}), 404


@app_views.route('/info/<info_id>', methods=['GET', 'DELETE', 'PUT'])
def info_with_id(info_id=None):
  info_obj = storage.get(info_id)
  if info_obj is None:
    abort(404, 'Not found')
  
  if request.method == 'GET':
    clean_obj = info_obj.__dict__
    del clean_obj['_sa_instance_state']
    return jsonify(clean_obj), 200

  if request.method == 'DELETE':
    storage.delete(info_id)
    return jsonify({}), 200

  if request.method == 'PUT':
    new_data = request.get_json()
    if new_data["id"]:
      del new_data["id"]
    if not new_data:
      abort(400, 'Not a JSON')

    storage.update(info_id, new_data)
    return jsonify({"status": "OK"})
