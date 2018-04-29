using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ErpDemo.Application.MenuApp.Dtos
{
    public partial class MenuDto
    {
        public Guid Id { get; set; }
        public Guid? ParentId { get; set; }
        public int? SerialNumber { get; set; }
        [Required(ErrorMessage = "Name can not be empty.")]
        public string Name { get; set; }
        [Required(ErrorMessage = "Code can not be empty.")]
        public string Code { get; set; }
        public string Url { get; set; }
        ///0 menu; 1 operation button
        public short? Type { get; set; }
        public string Icon { get; set; }
        public string Remarks { get; set; }
        public string IsSystem { get; set; }
        public string IsVisible { get; set; }
    }
}
