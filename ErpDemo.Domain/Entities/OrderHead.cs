using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ErpDemo.Domain.Entities
{
    public partial class OrderHead : Entity
    {
        public OrderHead()
        {
            OrderDetails = new HashSet<OrderDetails>();
        }
        
        public string Code { get; set; }
        public string OrderId { get; set; }
        public Guid? CustomerId { get; set; }
        public Guid? EmployeeId { get; set; }
        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:dd/MM/yyyy}", ApplyFormatInEditMode = true)]
        public DateTime? OrderDate { get; set; }
        public DateTime? RequiredDate { get; set; }
        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:dd/MM/yyyy}", ApplyFormatInEditMode = true)]
        public DateTime? ShippedDate { get; set; }
        public int? ShipVia { get; set; }
        public decimal? Freight { get; set; }
        public string ShipName { get; set; }
        public string ShipAddress { get; set; }
        public string ShipCity { get; set; }
        public string ShipRegion { get; set; }
        public string ShipPostalCode { get; set; }
        public string ShipCountry { get; set; }
        public short? OrderType { get; set; }
        public short? OrderStatus { get; set; }
        public bool? IsValid { get; set; }
        public DateTime? CreatedTime { get; set; }
        public DateTime? ModifiedTime { get; set; }

        public Customers Customer { get; set; }
        public Employees Employee { get; set; }
        public ICollection<OrderDetails> OrderDetails { get; set; }
    }
}
