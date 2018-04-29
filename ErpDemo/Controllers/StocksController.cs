using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ErpDemo.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ErpDemo.Controllers
{
    public class StocksController : ErpDemoBaseController
    {
        private readonly ErpDemoDBContext _context;

        public StocksController(ErpDemoDBContext context)
        {
            _context = context;
        }

        // GET: Stocks
        public async Task<IActionResult> Index()
        {
            var stocks = _context.Stocks
                .Include(s => s.Category)
                .Include(s => s.Supplier)
                .AsNoTracking()
                .OrderByDescending(s => s.ModifiedTime);
            return View(await stocks.ToListAsync());
        }

    }
}