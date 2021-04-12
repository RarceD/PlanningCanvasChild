using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace netcoreBackend.Models
{
    public class MainTask
    {
        public int id { get; set; }
        public string text { get; set; }
        public int start { get; set; }
        public int end { get; set; }
        public int status { get; set; }
        public List<SecondTask> associatedTasks { get; set; }
    }

    public class SecondTask
    {
        public int id { get; set; }
        public string text { get; set; }
        public int start { get; set; }
        public int end { get; set; }
        public string child_name { get; set; }
        public int id_main_task { get; set; }
    }
    public class Child
    {
        public string name;
        public string color;

    }
}
