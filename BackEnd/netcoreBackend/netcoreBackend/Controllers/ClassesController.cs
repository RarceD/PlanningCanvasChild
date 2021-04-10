using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.Sqlite;
using netcoreBackend.Models;

namespace netcoreBackend.Controllers
{
    [ApiController]
    [Route("[controller]")] // Class controller ; -> classes/##
    public class ClassesController : Controller
    {

        [HttpGet("")]
        public ActionResult<string> GetAllGroups()
        {
            List<Class> array_classes = new List<Class>();
            for (int i = 0; i<10; i++)
            {
                //var a = new Class();
                //a.icon = "hola";
                //a.id = i;
                //a.name = "name";
                //a.password = "passwords";
                //a.image = "../../assets/images/group_4.svg";
                //array_classes.Add(a);
            }
            using (var connection = new SqliteConnection("Data Source=DB/Database.db"))
            {
                connection.Open();

                var command = connection.CreateCommand();
                command.CommandText = @"SELECT * FROM Classes;";
                //command.Parameters.AddWithValue("$id", id);

                using (var reader = command.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        var a = new Class();
                        a.id = Int32.Parse(reader.GetString(0));
                        a.name = reader.GetString(1);
                        a.password = reader.GetString(2);
                        a.image = reader.GetString(3);
                        a.icon = reader.GetString(4);
                        array_classes.Add(a);
                    }
                }
            }

            return Ok(array_classes); 
        }
        [HttpPost("add")]
        public ActionResult<string> add_class(Class classReceived)
        {
            try
            {
            //INSERT INTO Classes(name, password, image, icon) VALUES("nametest", "passtest", "imagetest", "icontest");
                using (var connection = new SqliteConnection("Data Source=DB/Database.db"))
                {
                    connection.Open();
                    var command = connection.CreateCommand();
                    command.CommandText = @"INSERT INTO Classes(name, password, image, icon) VALUES ($name, $password, $image, $icon);";
                    command.Parameters.AddWithValue("$name", classReceived.name);
                    command.Parameters.AddWithValue("$password", classReceived.password);
                    command.Parameters.AddWithValue("$image", classReceived.image);
                    command.Parameters.AddWithValue("$icon", classReceived.icon);
                    command.ExecuteReader();
                    return Ok("DELETE");
                }
            }
            catch
            {
                return NotFound();
            }
        }
        [HttpPost("delete")]
        public ActionResult<string> delete_class(Class classReceived)
        {
            try
            {
                using (var connection = new SqliteConnection("Data Source=DB/Database.db"))
                {
                    connection.Open();
                    Console.WriteLine("delete action trigger");
                    var command = connection.CreateCommand();
                    command.CommandText = @"DELETE FROM Classes WHERE id=$id;";
                    command.Parameters.AddWithValue("$id", classReceived.id);
                    command.ExecuteReader();
                    return Ok();
                }
            }
            catch
            {
                return NotFound();
            }
        }
        [HttpPost("update")]
        public ActionResult<string> update_class(Class classReceived)
        {
            try
            {
                //INSERT INTO Classes(name, password, image, icon) VALUES("nametest", "passtest", "imagetest", "icontest");
                using (var connection = new SqliteConnection("Data Source=DB/Database.db"))
                {
                    connection.Open();
                    var command = connection.CreateCommand();
                    command.CommandText = @"UPDATE Classes SET name=$name, password=$password, image=$image, icon=$icon WHERE id=$id;";
                    command.Parameters.AddWithValue("$name", classReceived.name);
                    command.Parameters.AddWithValue("$password", classReceived.password);
                    command.Parameters.AddWithValue("$image", classReceived.image);
                    command.Parameters.AddWithValue("$icon", classReceived.icon);
                    command.Parameters.AddWithValue("$id", classReceived.id);
                    command.ExecuteReader();
                    return Ok();
                }
            }
            catch
            {
                return NotFound();
            }
        }

    }
}
