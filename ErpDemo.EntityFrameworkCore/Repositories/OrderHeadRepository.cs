using System;
using System.Collections.Generic;
using System.Text;
using ErpDemo.Domain.Entities;
using ErpDemo.Domain.IRepositories;

namespace ErpDemo.EntityFrameworkCore.Repositories
{
    public class OrderHeadRepository : ErpDemoRepository<OrderHead>, IOrderHeadRepository
    {
        public OrderHeadRepository(ErpDemoDBContext dbcontext) : base(dbcontext)
        {

        }
    }
}
