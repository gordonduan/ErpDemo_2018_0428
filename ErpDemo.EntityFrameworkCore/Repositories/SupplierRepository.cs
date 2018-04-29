﻿using System;
using System.Collections.Generic;
using System.Text;
using ErpDemo.Domain.Entities;
using ErpDemo.Domain.IRepositories;

namespace ErpDemo.EntityFrameworkCore.Repositories
{
    public class SupplierRepository : ErpDemoRepository<Suppliers>, ISupplierRepository
    {
        public SupplierRepository(ErpDemoDBContext dbcontext) : base(dbcontext)
        {

        }
    }
}
