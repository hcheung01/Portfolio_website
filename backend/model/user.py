#!/usr/bin/env python3
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String, DateTime
from datetime import datetime
from uuid import uuid4, UUID
import json
import os

Base = declarative_base()

# Model
class User(Base):
  __tablename__ = 'users'

  id = Column(Integer, nullable=False, primary_key=True)
  created_at = Column(DateTime, nullable=False, default=datetime.utcnow)
  name = Column(String(60), nullable=False)
  title = Column(String(100), nullable=True)
  company = Column(String(60), nullable=True)
  email = Column(String(120), nullable=True)
  phone = Column(String(25), nullable=True)
  note = Column(String(300), nullable=True)
  
  def __repr__(self):
     return "<User(name='{}', title='{}', company='{}', email='{}', phone='{}', note='{}', created_at='{}')>".\
       format(self.name, self.title, self.company, self.email, self.phone, self.note, self.created_at)
