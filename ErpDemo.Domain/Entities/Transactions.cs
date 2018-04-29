using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ErpDemo.Domain.Entities
{
    public partial class Transactions : Entity
    {
        public string Code { get; set; }
        public string TransactionId { get; set; }
        public Guid ProductId { get; set; }
        public string ProductName { get; set; }
        public Guid? SupplierId { get; set; }
        public Guid? CategoryId { get; set; }
        public short Quantity { get; set; }
        [DataType(DataType.Currency)]
        [Column(TypeName = "money")]
        public decimal? UnitPrice { get; set; }
        [DataType(DataType.Currency)]
        [Column(TypeName = "money")]
        public decimal? Amount { get; set; }
        public short? RecordType { get; set; }
        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:dd/MM/yyyy HH:mm}", ApplyFormatInEditMode = true)]
        public DateTime? TransactionTime { get; set; }
        public Guid? CustomerId { get; set; }

        public Categories Category { get; set; }
        public Products Product { get; set; }
        public Suppliers Supplier { get; set; }
        public Customers Customer { get; set; }
    }
}
