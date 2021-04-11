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
            List<MainTask> array_tasks = new List<MainTask>();
            using (var connection = new SqliteConnection("Data Source=DB/Database.db"))
            {
                connection.Open();
                var command = connection.CreateCommand();
                command.CommandText = @"SELECT * FROM Main_task;";
                //command.Parameters.AddWithValue("$id", id);
                
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
                        array_tasks.Add(t);


                    }
                }
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
