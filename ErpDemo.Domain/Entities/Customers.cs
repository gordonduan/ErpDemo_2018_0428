using System;
using System.Collections.Generic;

namespace ErpDemo.Domain.Entities
{
    public partial class Customers : Entity
    {
        public Customers()
        {
            OrderHead = new HashSet<OrderHead>();
            Transactions = new HashSet<Transactions>();
        }
        
        public string Code { get; set; }
        public string CustomerId { get; set; }
        public string CustomerName { get; set; }
        public string ContactName { get; set; }
        public string ContactTitle { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string Region { get; set; }
        public string PostalCode { get; set; }
        public string Country { get; set; }
        public string Phone { get; set; }
        public string Fax { get; set; }
        public bool? IsValid { get; set; }
        public DateTime? CreatedTime { get; set; }
        public DateTime? ModifiedTime { get; set; }
        public string Remarks { get; set; }

        public ICollection<OrderHead> OrderHead { get; set; }
        public ICollection<Transactions> Transactions { get; set; }
    }
}
