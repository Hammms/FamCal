from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/register/init', methods=['GET'])
def index():
    return "Hello, World!"

if __name__ == '__main__':
    app.run(debug=True)