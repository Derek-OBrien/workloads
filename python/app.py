from flask import Flask, json

companies = [{"id": 1, "name": "Derek"}]

api = Flask(__name__)

@api.route('/me', methods=['GET'])
def get_companies():
  return json.dumps(companies)

if __name__ == '__main__':
    api.run()