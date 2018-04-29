using System;
using System.Collections.Generic;
using System.Text;
using ErpDemo.Domain.Entities;
using ErpDemo.Domain.IRepositories;

namespace ErpDemo.EntityFrameworkCore.Repositories
{
    public class ProductRepository : ErpDemoRepository<Products>, IProductRepository
    {
        public ProductRepository(ErpDemoDBContext dbcontext) : base(dbcontext)
        {

        }
    }
}
