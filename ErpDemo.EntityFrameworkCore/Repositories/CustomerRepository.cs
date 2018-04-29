using System;
using System.Collections.Generic;
using System.Text;
using ErpDemo.Domain.Entities;
using ErpDemo.Domain.IRepositories;

namespace ErpDemo.EntityFrameworkCore.Repositories
{
    public class CustomerRepository : ErpDemoRepository<Customers>, ICustomerRepository
    {
        public CustomerRepository(ErpDemoDBContext dbcontext) : base(dbcontext)
        {

        }
    }
}
