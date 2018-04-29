using System;
using System.Collections.Generic;
using System.Text;
using ErpDemo.Domain.Entities;
using ErpDemo.Domain.IRepositories;

namespace ErpDemo.EntityFrameworkCore.Repositories
{
    public class OrderDetailsRepository : ErpDemoRepository<OrderDetails>, IOrderDetailsRepository
    {
        public OrderDetailsRepository(ErpDemoDBContext dbcontext) : base(dbcontext)
        {

        }
    }
}
