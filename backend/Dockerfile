FROM python:3.7.3

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
EXPOSE 3001
COPY requirements.txt /usr/src/app

RUN pip install --no-cache-dir -r requirements.txt

COPY . /usr/src/app

CMD ["python3", "-m", "backend.api.app"]