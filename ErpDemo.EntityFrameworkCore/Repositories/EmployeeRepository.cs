using System;
using System.Collections.Generic;
using System.Text;
using ErpDemo.Domain.Entities;
using ErpDemo.Domain.IRepositories;

namespace ErpDemo.EntityFrameworkCore.Repositories
{
    public class EmployeeRepository : ErpDemoRepository<Employees>, IEmployeeRepository
    {
        public EmployeeRepository(ErpDemoDBContext dbcontext) : base(dbcontext)
        {

        }
    }
}
