using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ErpDemo.Application.DepartmentApp.Dtos
{
    public partial class DepartmentDto
    {
        public Guid Id { get; set; }
        [Required(ErrorMessage = "Name can not be empty.")]
        public string Name { get; set; }
        [Required(ErrorMessage = "Code can not be empty.")]
        public string Code { get; set; }
        public string Manager { get; set; }
        public string ContactNumber { get; set; }
        public string Remarks { get; set; }
        public Guid? ParentId { get; set; }
        public Guid? CreateUserId { get; set; }
        public DateTime? CreateTime { get; set; }
        public short? IsDeleted { get; set; }
        public string IsSystem { get; set; }
        public string IsVisible { get; set; }
        public int? SerialNumber { get; set; }
    }
}
