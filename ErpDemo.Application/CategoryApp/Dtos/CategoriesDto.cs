using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace ErpDemo.Application.CategoryApp.Dtos
{
    public partial class CategoriesDto
    {
        public Guid Id { get; set; }
        public string Code { get; set; }
        public string CategoryId { get; set; }
        [Required(ErrorMessage = "CategoryName can not be empty.")]
        public string CategoryName { get; set; }
        public string Description { get; set; }
        public Guid? ParentId { get; set; }
        public byte[] Picture { get; set; }
        public bool? IsValid { get; set; }
        public DateTime? CreatedTime { get; set; }
        public DateTime? ModifiedTime { get; set; }
    }
}
