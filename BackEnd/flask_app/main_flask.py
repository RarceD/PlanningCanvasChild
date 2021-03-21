from flask import Flask
from models.ChildClass import ChildClass
from models.ChildGroup import ChildGroup
from models.ChildTask import MainTask
from flask_cors import CORS
from dB.db_interactions import Db_childen
from flask import jsonify
from flask import json
# Create the api:
app = Flask(__name__)
CORS(app)

@app.route('/')
def hello_world():
    return 'it fucking works!!'

@app.route('/api/classes')
def classes_endpoint():
    # child_class = ChildClass(1)
    # child_class.name="Test Class" 
    # return child_class.get_json_format(child_class)
    returned_classes = ""
    db = Db_childen("dB/dbchild")
    classes_db = db.get_class()
    # for c in classes_db:
    #     returned_classes+=c.get_json_format(c)
    from json import dumps as jsonstring
    # print(jsonstring(classes_db.__dict__))
    # return returned_classes
    # print(jsonstring(classes_db))
    return "classes_db"

@app.route('/api/groups')
def groups_endpoint():
    child_group = ChildGroup(1)
    child_group.name="Test Group" 
    return(child_group.get_json_format(child_group))

@app.route('/api/tasks')
def tasks_endpoint():
    primary_tasks = MainTask()
    # primary_tasks.associated_tasks.text = "Secondary task"
    return("primary_tasks.get_json_format(primary_tasks)")

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=80)
