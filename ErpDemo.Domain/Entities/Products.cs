using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ErpDemo.Domain.Entities
{
    public partial class Products : Entity
    {
        public Products()
        {
            OrderDetails = new HashSet<OrderDetails>();
            Stocks = new HashSet<Stocks>();
            Transactions = new HashSet<Transactions>();
        }

        public string Code { get; set; }
        public string ProductId { get; set; }
        public string ProductName { get; set; }
        public Guid? SupplierId { get; set; }
        public Guid? CategoryId { get; set; }
        public string QuantityPerUnit { get; set; }
        [DataType(DataType.Currency)]
        [Column(TypeName = "money")]
        public decimal? UnitPrice { get; set; }
        public bool? IsValid { get; set; }
        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:dd/MM/yyyy HH:mm}", ApplyFormatInEditMode = true)]
        public DateTime? CreatedTime { get; set; }
        public DateTime? ModifiedTime { get; set; }
        public string Description { get; set; }

        public virtual Categories Category { get; set; }
        public virtual Suppliers Supplier { get; set; }
        public ICollection<OrderDetails> OrderDetails { get; set; }
        public ICollection<Stocks> Stocks { get; set; }
        public ICollection<Transactions> Transactions { get; set; }
    }
}
