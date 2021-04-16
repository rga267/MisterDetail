from flask import Flask
from flask_cors import CORS
from flask import jsonify

app = Flask(__name__)
CORS(app)

@app.route('/Mister_Detail')
def Mister_Detail_Home():
    return jsonify({'result' : "The best detail services in Dayton!"})
    

