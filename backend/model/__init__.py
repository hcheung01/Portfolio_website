# from backend.model.user import User
from model.engine import db
from model.user import User
storage = db.Dbstorage()

storage.reload()