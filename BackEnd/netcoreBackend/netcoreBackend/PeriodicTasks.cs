using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace netcoreBackend
{ 
    public class PeriodicTasks
    {
        static CancellationToken stoppingToken;
        private static Timer _timer;
        public static void Initialize()
        {
            StartAsync(stoppingToken);
        }
        public static Task StartAsync(CancellationToken stoppingToken)
        {
            _timer = new Timer(DoWork, null, TimeSpan.FromSeconds(30),
                TimeSpan.FromSeconds(30));
            return Task.CompletedTask;
        }
        private static void DoWork(object state)
        {
            //Console.WriteLine("test");
        }
        public static Task StopAsync(CancellationToken stoppingToken)
        {
            _timer?.Change(Timeout.Infinite, 0);
            return Task.CompletedTask;
        }
        public static void Dispose()
        {
            _timer?.Dispose();
        }
    }
}
