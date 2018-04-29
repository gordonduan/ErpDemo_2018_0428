using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ErpDemo.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ErpDemo.Controllers
{
    public class TransactionsController : ErpDemoBaseController
    {
        private readonly ErpDemoDBContext _context;

        public TransactionsController(ErpDemoDBContext context)
        {
            _context = context;
        }

        // GET: Transactions
        public async Task<IActionResult> Index()
        {
            var transactions = _context.Transactions
                .Include(t => t.Category)
                .Include(t => t.Supplier)
                .AsNoTracking()
                .OrderByDescending(t => t.TransactionId);
            return View(await transactions.ToListAsync());
        }

    }
}