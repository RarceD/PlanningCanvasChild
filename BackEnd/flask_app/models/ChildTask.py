import json

class MainTask:
    def __init__(self):
        self.text = "ASdf"
        self.start = ""
        self.status = ""
        self.associated_tasks = SecondaryTask()
        self.end = ""
    def get_json_format(self, group_member):    		
        #convert to JSON string
        # jsonStr = json.dumps(group_member.__dict__)
        return ("jsonStr")

class SecondaryTask:
    def __init__(self):
        self.text = ""
        self.child_asociated = ""
        self.color = ""
        self.deadline = ""
        self.start = ""
        self.end = ""


class Children:
    def __init__ (self):
        self.name=""
        self.color=""

"""
#create object and test the conversion:
primary_tasks = MainTask()
primary_tasks.associated_tasks.text = "Secondary task"
print(primary_tasks.get_json_format(primary_tasks))
"""