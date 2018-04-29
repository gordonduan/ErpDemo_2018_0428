using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ErpDemo.Domain.Entities
{
    public partial class Suppliers : Entity
    {
        public Suppliers()
        {
            Products = new HashSet<Products>();
            Stocks = new HashSet<Stocks>();
            Transactions = new HashSet<Transactions>();
        }

        public string Code { get; set; }
        public string SupplierId { get; set; }
        public string SupplierName { get; set; }
        public string ContactName { get; set; }
        public string ContactTitle { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string Region { get; set; }
        public string PostalCode { get; set; }
        public string Country { get; set; }
        public string Phone { get; set; }
        public string Fax { get; set; }
        public string HomePage { get; set; }
        public bool? IsValid { get; set; }
        public DateTime? CreatedTime { get; set; }
        public DateTime? ModifiedTime { get; set; }

        public ICollection<Products> Products { get; set; }
        public ICollection<Stocks> Stocks { get; set; }
        public ICollection<Transactions> Transactions { get; set; }
    }
}

