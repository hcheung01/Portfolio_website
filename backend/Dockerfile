FROM python:3.7-stretch

WORKDIR /usr/src/app
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt
COPY . ./

EXPOSE 3001
CMD gunicorn -b 0.0.0.0:3001 wsgi:app
