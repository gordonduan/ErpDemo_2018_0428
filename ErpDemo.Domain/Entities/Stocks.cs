using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ErpDemo.Domain.Entities
{
    public partial class Stocks
    {
        public Guid Id { get; set; }
        public string Code { get; set; }
        public string StockId { get; set; }
        public Guid ProductId { get; set; }
        public string ProductName { get; set; }
        public Guid? SupplierId { get; set; }
        public Guid? CategoryId { get; set; }
        public short? Quantity { get; set; }
        [DataType(DataType.Currency)]
        [Column(TypeName = "money")]
        public decimal? UnitPrice { get; set; }
        [DataType(DataType.Currency)]
        [Column(TypeName = "money")]
        public decimal? Amount { get; set; }
        public DateTime? CreatedTime { get; set; }
        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:dd/MM/yyyy HH:mm}", ApplyFormatInEditMode = true)]
        public DateTime? ModifiedTime { get; set; }

        public Categories Category { get; set; }
        public Products Product { get; set; }
        public Suppliers Supplier { get; set; }
    }
}
