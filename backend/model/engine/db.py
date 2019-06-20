from sqlalchemy.orm import sessionmaker, Session, scoped_session
from sqlalchemy import create_engine
from sqlalchemy_utils import database_exists, create_database
from model.user import User, Base
import json
import os

class Dbstorage:
    __engine = None
    __session = None

    def __init__(self):
        """
            create engine
        """
        self.__engine = create_engine(
            'mysql+pymysql://{}:{}@{}:{}/{}'.format(
                os.environ.get('DB_USER'),
                os.environ.get('DB_PASSWORD'),
                os.environ.get('DB_HOST'),
                os.environ.get('DB_PORT'),
                os.environ.get('DB_DATABASE')
            )
        )
        if not database_exists(self.__engine.url):
            create_database(self.__engine.url)
        Base.metadata.create_all(self.__engine)

    def all(self):
        """
            returns a dictionary of all objects
        """
        list_of_objs = []
        for obj in self.__session.query(User):
            obj = obj.__dict__
            del obj["_sa_instance_state"]
            list_of_objs.append(obj)
        return list_of_objs

    def new(self, obj):
        user = User(**obj)
        self.__session.add(user)
        self.__session.flush()
        return user.id

    def close(self):
        self.__session.close()

    def save(self):
        self.__session.commit()

    def delete(self, id=None):
        obj = self.get(id)
        self.__session.delete(obj)
        self.save()
    
    def reload(self):
        """
            creates tables in database & session from engine
        """
        Base.metadata.create_all(self.__engine)
        self.__session = scoped_session(
            sessionmaker(
                bind=self.__engine,
                expire_on_commit=False))

    def get(self, id):
        """Get by ID"""
        try:
            return self.__session.query(User).get(id)
            self.close()
        except:
            return

    def update(self, id, data):
        self.__session.query(User).filter_by(id=id).update(data)
        self.save()
