using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;
using ErpDemo.Domain.Entities;

namespace ErpDemo.Application.ProductApp.Dtos
{
    public partial class ProductsDto
    {
        public Guid Id { get; set; }
        [StringLength(50, ErrorMessage = "Code cannot be longer than 50 characters.")]
        public string Code { get; set; }
        public string ProductId { get; set; }
        [Required(ErrorMessage = "ProductName can not be empty.")]
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
    }
}
