using System;
using System.Collections.Generic;
using System.Text;
using ErpDemo.Domain.Entities;
using ErpDemo.Domain.IRepositories;

namespace ErpDemo.EntityFrameworkCore.Repositories
{
    public class MenuRepository : ErpDemoRepository<Menu>, IMenuRepository
    {
        public MenuRepository(ErpDemoDBContext dbcontext) : base(dbcontext)
        {

        }
    }
}
