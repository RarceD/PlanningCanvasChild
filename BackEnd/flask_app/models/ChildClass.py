import json


class ChildClass:
    def __init__(self, id):
        self.id = id
        self.name = ""
        self.password = ""
        self.image = ""
        self.icon = ""

    def get_json_format(self, class_member):
        # convert to JSON string
        jsonStr = json.dumps(class_member.__dict__)
        return (jsonStr)

    def __repr__(self):
        string_class = str(self.id) + " - " + str(self.name) + " - "+str(
            self.password) + " - "+str(self.image) + " - "+str(self.icon) 
        return string_class


"""
#create object and test the conversion:
child_class = ChildClass(1)
child_class.name="Test Class" 
print(child_class.get_json_format(child_class))
"""
