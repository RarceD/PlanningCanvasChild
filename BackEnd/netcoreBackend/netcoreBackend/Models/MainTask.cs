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
        public string start { get; set; }
        public string end { get; set; }
        public string status { get; set; }
        public SecondTask associatedTasks { get; set; }
    }

    public class SecondTask
    {
        public UInt64 id; 
        public string name;
        public string text;
        public string start { get; set; }
        public string end { get; set; }
    }
    public class Child
    {
        public string name;
        public string color;

    }
}
