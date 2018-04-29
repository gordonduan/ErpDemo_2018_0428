using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ErpDemo.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ErpDemo.Controllers
{
    public class SalesController : ErpDemoBaseController
    {
        private readonly ErpDemoDBContext _context;

        public SalesController(ErpDemoDBContext context)
        {
            _context = context;
        }

        // GET: Transactions
        public async Task<IActionResult> Index()
        {
            var transactions = _context.Transactions
                .Where(t => t.RecordType == 1)
                .Include(s => s.Category)
                .Include(s => s.Supplier)
                .AsNoTracking()
                .OrderByDescending(t => t.TransactionTime);
            return View(await transactions.ToListAsync());
        }
    }
}