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
    public class TasksController : Controller
    {
        [HttpGet("")]
        // GET: TasksController
        public ActionResult Index()
        {
            var array_tasks = new List<MainTask>();
            using (var connection = new SqliteConnection("Data Source=DB/Database.db"))
            {
                connection.Open();
                var command = connection.CreateCommand();
                command.CommandText = @"SELECT * FROM Main_task;";
                using (var reader = command.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        var t = new MainTask();
                        t.id = Int32.Parse(reader.GetString(0));
                        t.text = reader.GetString(1);
                        t.start = Int32.Parse(reader.GetString(2));
                        t.end = Int32.Parse(reader.GetString(3));
                        t.status = Int32.Parse(reader.GetString(4));
                        using (var connectionn = new SqliteConnection("Data Source=DB/Database.db"))
                        {
                            connectionn.Open();
                            try
                            {
                                var commandd = connectionn.CreateCommand();
                                commandd.CommandText = @"SELECT * FROM Second_task WHERE id_main_task = $id_main_task;";
                                commandd.Parameters.AddWithValue("$id_main_task", t.id);
                                using (var readerr = commandd.ExecuteReader())
                                {
                                    while (readerr.Read())
                                    {
                                        var s = new SecondTask();
                                        s.id = Int32.Parse(reader.GetString(0));
                                        s.text = reader.GetString(1);
                                        s.start = Int32.Parse(reader.GetString(2));
                                        s.end = Int32.Parse(reader.GetString(3));
                                        s.child_name = reader.GetString(4);
                                        //s.id_main_task = Int32.Parse(reader.GetString(5));
                                        t.associatedTasks.Add(s);
                                    }
                                }
                            }
                            catch (Exception e)
                            {
                                Console.WriteLine("No element in DB with this id_main_task");
                            }
                            connectionn.Close();
                        }
                        array_tasks.Add(t);
                    }   
                    
                 
                }
            connection.Close();
            }
                    
            return Ok(array_tasks);

        }

        [HttpPost("delete")]
        public ActionResult<string> Delete_class(MainTask main_task_received)
        {
            try
            {
                using (var connection = new SqliteConnection("Data Source=DB/Database.db"))
                {
                    connection.Open();
                    var command = connection.CreateCommand();
                    command.CommandText = @"DELETE FROM Main_task WHERE id=$id;";
                    command.Parameters.AddWithValue("$id", main_task_received.id);
                    List<MainTask> tasks = new List<MainTask>();
                    var reader = command.ExecuteReader();
                    return Ok("delete successfully");
                }
            }
            catch
            {
                return NotFound();
            }
        }
        [HttpPost("add")]
        public ActionResult<string> Add_class(MainTask main_task_received)
        {
            try
            {
                using (var connection = new SqliteConnection("Data Source=DB/Database.db"))
                {
                    connection.Open();
                    var command = connection.CreateCommand();
                    command.CommandText = @"INSERT INTO Main_task (text, start, end, status) VALUES ($text, $start, $end, $status);";
                    command.Parameters.AddWithValue("$text", main_task_received.text);
                    command.Parameters.AddWithValue("$start", main_task_received.start);
                    command.Parameters.AddWithValue("$end", main_task_received.end);
                    command.Parameters.AddWithValue("$status", main_task_received.status);
                    command.ExecuteReader();
                    int number_second_task = main_task_received.associatedTasks.Count;
                    Console.WriteLine(number_second_task);
                    for (int i = 0; i < number_second_task; i++)
                    {
                        var command_2 = connection.CreateCommand();
                        command.CommandText = @"INSERT INTO Second_task ( text, start, end, child_name, id_main_task) VALUES ($text, $start, $end, $child_name, $id_main_task);";
                        command.Parameters.AddWithValue("$text", main_task_received.associatedTasks[i].text);
                        command.Parameters.AddWithValue("$start", main_task_received.associatedTasks[i].start);
                        command.Parameters.AddWithValue("$end", main_task_received.associatedTasks[i].end);
                        command.Parameters.AddWithValue("$child_name", main_task_received.associatedTasks[i].child_name);
                        command.Parameters.AddWithValue("$id_main_task", main_task_received.associatedTasks[i].id_main_task);
                        command.ExecuteReader();
                    }
                    return Ok("Add successfully");
                }
            }
            catch
            {
                return NotFound();
            }
        }
    }

}
