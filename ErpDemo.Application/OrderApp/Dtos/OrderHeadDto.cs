using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace ErpDemo.Application.OrderApp.Dtos
{
    public partial class OrderHeadDto
    {
        public Guid Id { get; set; }
        public string Code { get; set; }
        public string OrderId { get; set; }
        [Required(ErrorMessage = "Customer can not be empty.")]
        public Guid? CustomerId { get; set; }
        public Guid? EmployeeId { get; set; }
        public DateTime? OrderDate { get; set; }
        public DateTime? RequiredDate { get; set; }
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
    }
}
