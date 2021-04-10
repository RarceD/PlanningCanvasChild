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
            for (int i= 0; i<6; i++)
            {
                MainTask a = new MainTask();
                a.id = i;
                a.start = "asdf";
                a.status = "";
                a.text = "asd";
                array_tasks.Add(a);
 
            }
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
                        
                        var a = new MainTask();
                        a.id= Int32.Parse(reader.GetString(0));
                        a.text = reader.GetString(1);
                        array_tasks.Add(a);
                    }
                }
            }
            return Ok(array_tasks);
        }

        [HttpGet("status")]
        public ActionResult get_status()
        {
            return Ok(PeriodicTasks.status_counter);
        }

        // GET: TasksController/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: TasksController/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: TasksController/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: TasksController/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: TasksController/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: TasksController/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }
    }
}
