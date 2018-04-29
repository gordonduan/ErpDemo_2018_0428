using System;
using System.Collections.Generic;
using System.Text;

namespace ErpDemo.Application.OrderApp.Dtos
{
    public partial class OrderDetailsDto
    {
        public Guid Id { get; set; }
        public string Code { get; set; }
        public string OrderId { get; set; }
        public Guid ProductId { get; set; }
        public decimal UnitPrice { get; set; }
        public short Quantity { get; set; }
        public float Discount { get; set; }
    }
}
