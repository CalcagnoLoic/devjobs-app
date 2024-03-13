FROM python:3.12-alpine 
WORKDIR /backend

RUN python -m venv venv
ENV PATH="/venv/bin:$PATH"

COPY requirements.txt .
RUN pip install -r requirements.txt

COPY . .

CMD [ "python", "run.py", "run" ]