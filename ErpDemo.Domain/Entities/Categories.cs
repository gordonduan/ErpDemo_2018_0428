using System;
using System.Collections.Generic;

namespace ErpDemo.Domain.Entities
{
    public partial class Categories : Entity
    {
        public Categories()
        {
            Products = new HashSet<Products>();
            Stocks = new HashSet<Stocks>();
            Transactions = new HashSet<Transactions>();
        }
        
        public string Code { get; set; }
        public string CategoryId { get; set; }
        public string CategoryName { get; set; }
        public string Description { get; set; }
        public Guid? ParentId { get; set; }
        public byte[] Picture { get; set; }
        public bool? IsValid { get; set; }
        public DateTime? CreatedTime { get; set; }
        public DateTime? ModifiedTime { get; set; }

        public ICollection<Products> Products { get; set; }
        public ICollection<Stocks> Stocks { get; set; }
        public ICollection<Transactions> Transactions { get; set; }
    }
}
