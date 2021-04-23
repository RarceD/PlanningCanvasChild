import json

class ChildGroup:
    def __init__(self, id):
        self.id = id
        self.name = ""
        self.image = ""
    def get_json_format(self, group_member):    		
        #convert to JSON string
        jsonStr = json.dumps(group_member.__dict__)
        return (jsonStr)

"""
#create object and test the conversion:
child_group = ChildGroup(1)
child_group.name="Test Group" 
print(child_group.get_json_format(child_group))
"""