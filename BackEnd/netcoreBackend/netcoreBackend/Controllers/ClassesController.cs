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
                var a = new Class();
                a.icon = "hola";
                a.id = i;
                a.name = "name";
                a.password = "passwords";
                a.image = "../../assets/images/group_4.svg";
                array_classes.Add(a);
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
                        a.image = reader.GetString(1);
                        array_classes.Add(a);
                    }
                }
            }

            return Ok(array_classes); 
        }

        // GET: ClassController
        public ActionResult Index()
        {
             
            return Ok("todo bien");
        }

        // GET: ClassController/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: ClassController/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: ClassController/Create
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

        // GET: ClassController/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: ClassController/Edit/5
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

        // GET: ClassController/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: ClassController/Delete/5
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
