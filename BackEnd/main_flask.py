from flask import Flask
from models.ChildClass import ChildClass
from models.ChildGroup import ChildGroup
from models.ChildTask import MainTask

# Create the api:
app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/api/classes')
def classes_endpoint():
    child_class = ChildClass(1)
    child_class.name="Test Class" 
    return child_class.get_json_format(child_class)

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
