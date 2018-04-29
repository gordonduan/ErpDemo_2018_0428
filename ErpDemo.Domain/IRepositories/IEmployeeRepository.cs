using System;
using System.Collections.Generic;
using System.Text;
using ErpDemo.Domain.Entities;

namespace ErpDemo.Domain.IRepositories
{
    public interface IEmployeeRepository : IRepository<Employees, Guid>
    {
    }
}
