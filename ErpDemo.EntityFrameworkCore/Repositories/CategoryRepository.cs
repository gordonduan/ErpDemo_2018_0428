using System;
using System.Collections.Generic;
using System.Text;
using ErpDemo.Domain.Entities;
using ErpDemo.Domain.IRepositories;

namespace ErpDemo.EntityFrameworkCore.Repositories
{
    public class CategoryRepository : ErpDemoRepository<Categories>, ICategoryRepository
    {
        public CategoryRepository(ErpDemoDBContext dbcontext) : base(dbcontext)
        {

        }
    }
}
