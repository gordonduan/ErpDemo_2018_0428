using System;
using System.Collections.Generic;

namespace ErpDemo.Domain.Entities
{
    public partial class OrderDetails : Entity
    {
        public string Code { get; set; }
        public string OrderId { get; set; }
        public Guid ProductId { get; set; }
        public decimal UnitPrice { get; set; }
        public short Quantity { get; set; }
        public float Discount { get; set; }

        public OrderHead IdNavigation { get; set; }
        public Products Product { get; set; }
    }
}
