using System;
using System.Collections.Generic;

namespace ErpDemo.Domain.Entities
{
    public partial class Department : Entity
    {
        public string Name { get; set; }
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
