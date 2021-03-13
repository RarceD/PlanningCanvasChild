import sqlite3
from models.ChildClass import ChildClass
# for connected: .\sqlite3 dbchild


class Db_childen (object):

    def __init__(self, path_file):
        self.path_file = path_file
        self.con = None
        if (self.create_connection()):
            print("connected to db")

    def create_connection(self):
        try:
            self.conn = sqlite3.connect(self.path_file)
            return True
        except:
            return False

    def add_class(self, class_parameters):
        sql_text = ''' INSERT INTO classes(class_id, name, password, image, icon) 
                    VALUES (?,?,?,?,?); '''
        cur = self.conn.cursor()
        cur.execute(sql_text, class_parameters)
        self.conn.commit()

    def update_class(self, class_parameters):
        sql_text = ''' UPDATE classes(class_id, name, password, image, icon) 
                    VALUES (?,?,?,?,?); '''
        cur = self.conn.cursor()
        cur.execute(sql_text)
        self.conn.commit()
    def get_class(self): 
        sql_text = """SELECT * FROM classes"""
        cur = self.conn.cursor()
        # cur.execute(sql_text, [(params)])
        cur.execute(sql_text)
        classes_onteined = cur.fetchall()
        returned_classes = []
        print(classes_onteined)
        for c  in classes_onteined:
            class_bd = ChildClass(c[0])
            class_bd.name =  c[1]
            class_bd.password = c[2]
            class_bd.image = c[3]
            class_bd.icon =  c[4]
            returned_classes.append(class_bd)
        return returned_classes


# db_path = "dbchild"
# db = Db_childen(db_path)
# project = (3, "5ºD", "contraseña3", "image", "icon");
# db.add_class(project)
