using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ErpDemo.Application.RoleApp.Dtos
{
    public partial class RoleDto
    {
        public Guid Id { get; set; }
        [Required(ErrorMessage = "Code can not be empty.")]
        public string Code { get; set; }
        [Required(ErrorMessage = "Name can not be empty.")]
        public string Name { get; set; }
        public Guid? CreateUserId { get; set; }
        public DateTime? CreateTime { get; set; }
        public string Remarks { get; set; }
        public string IsSystem { get; set; }
        public string IsVisible { get; set; }
    }
}
