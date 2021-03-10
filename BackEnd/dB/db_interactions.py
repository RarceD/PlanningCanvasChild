import sqlite3

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
        cur = self.conn.cursor()
        cur.execute(sql)
        self.conn.commit()


db_path = "dbchild"
db = Db_childen(db_path)
project = (3, "5ºD", "contraseña3", "image", "icon");
db.add_class(project)
