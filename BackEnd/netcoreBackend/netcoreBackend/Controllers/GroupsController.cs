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
    public class GroupsController : Controller
    {
        [HttpGet("")]
        // GET: GroupController
        public ActionResult Index()
        {
            List<Group> groups = new List<Group>();
            using (var connection = new SqliteConnection("Data Source=DB/Database.db"))
            {
                connection.Open();

                var command = connection.CreateCommand();
                command.CommandText = @"SELECT * FROM Groups;";
                //command.Parameters.AddWithValue("$id", id);

                using (var reader = command.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        var a = new Group();
                        a.id = Int32.Parse(reader.GetString(0));
                        a.name = reader.GetString(1);
                        a.image = reader.GetString(2);
                        groups.Add(a);
                    }
                }
            }
            return Ok(groups);
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
                    command.CommandText = @"INSERT INTO Groups (name, image) VALUES ($name, $image);";
                    command.Parameters.AddWithValue("$name", classReceived.name);
                    command.Parameters.AddWithValue("$image", classReceived.image);
                    command.ExecuteReader();
                }
                return Ok();
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
                    command.CommandText = @"DELETE FROM Groups WHERE id=$id;";
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
        

        // GET: GroupController/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: GroupController/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: GroupController/Create
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

        // GET: GroupController/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: GroupController/Edit/5
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

        // GET: GroupController/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: GroupController/Delete/5
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
