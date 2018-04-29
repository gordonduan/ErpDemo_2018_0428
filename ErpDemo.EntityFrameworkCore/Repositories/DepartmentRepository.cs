using System;
using System.Collections.Generic;
using System.Text;
using ErpDemo.Domain.Entities;
using ErpDemo.Domain.IRepositories;

namespace ErpDemo.EntityFrameworkCore.Repositories
{
    public class DepartmentRepository : ErpDemoRepository<Department>, IDepartmentRepository
    {
        public DepartmentRepository(ErpDemoDBContext dbcontext) : base(dbcontext)
        {

        }
    }
}
