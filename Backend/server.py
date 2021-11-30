from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
import json
from google.oauth2 import service_account
from pprint import pprint
import googleapiclient.discovery

app = Flask(__name__)
clientURL = "http://localhost:3000/"
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})

SCOPES = ['https://www.googleapis.com/auth/calendar']
SERVICE_ACCOUNT_FILE = './service_account.json'
credentials = service_account.Credentials.from_service_account_file(
        SERVICE_ACCOUNT_FILE, scopes=SCOPES)

calendar = googleapiclient.discovery.build('calendar', 'v3', credentials=credentials)

@app.route('/api/add', methods=['GET', 'POST'])
@cross_origin()
def add():
  req_data = request.get_json()
  print(req_data['desc'])
  print('testing')
  turbo = { "summary": "reeeeeeeeee" }

  event = {
    'summary': req_data['title'],
    'location': '',
    'description': req_data['desc'],
    'start': {
      'dateTime': req_data['start'] + 'T00:00:00-07:00',
      'timeZone': 'America/New_York',
    },
    'end': {
      'dateTime': req_data['end'] + 'T00:00:00-08:00',
      'timeZone': 'America/New_York',
    },
    'recurrence': [
      
    ],
    'attendees': [
      
    ],
    'reminders': {
      
    },
}
  event = calendar.events().insert(calendarId='dvikj4l5pb4ur77ch7js2fb0ug@group.calendar.google.com', body=event).execute()
  print ('Event created: %s' % (event.get('htmlLink')))
  print(turbo)
  #response.headers.add('Access-Control-Allow-Origin', '*')
  return jsonify([turbo])


@app.route ('/api/delete', methods=['GET', 'POST'])
@cross_origin()
def delete():
  req_data = request.get_json('EventId')
  print(req_data['eventId'])
  turbo = req_data['eventId']
  print(turbo)
  print(type(turbo))
  calendar.events().delete(calendarId='dvikj4l5pb4ur77ch7js2fb0ug@group.calendar.google.com', eventId=turbo).execute()
  return req_data

@app.route ('/api/edit', methods=['GET', 'POST'])
@cross_origin()
def edit():
  req_data = request.get_json('eventId')
  print(req_data['eventId'])
  turbo = req_data['eventId']
  print(type(turbo))
  eventCall = calendar.events().get(calendarId='dvikj4l5pb4ur77ch7js2fb0ug@group.calendar.google.com', eventId=turbo).execute()
  req_data.pop('eventId')
  event = {
    'summary': req_data['title'],
    'location': '',
    'description': req_data['desc'],
    'start': {
      'dateTime': req_data['start'] + 'T00:00:00-07:00',
      'timeZone': 'America/New_York',
    },
    'end': {
      'dateTime': req_data['end'] + 'T00:00:00-08:00',
      'timeZone': 'America/New_York',
    },
    'recurrence': [
      
    ],
    'attendees': [
      
    ],
    'reminders': {
      
    },
  }
  print(req_data)
  req_data['start'] = req_data['start'] + 'T17:00:00-07:00'
  req_data['end'] = req_data['end'] + 'T17:00:00-08:00'
  calendar.events().update(calendarId='dvikj4l5pb4ur77ch7js2fb0ug@group.calendar.google.com', eventId=eventCall['id'], body=event).execute()
  
  return req_data
  

if __name__ == '__main__':
    app.run(host='localhost', port=3000)
app.run()


