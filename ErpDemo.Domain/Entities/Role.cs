using System;
using System.Collections.Generic;

namespace ErpDemo.Domain.Entities
{
    public partial class Role : Entity
    {
        public Role()
        {
            RoleMenu = new HashSet<RoleMenu>();
            UserRole = new HashSet<UserRole>();
        }

        public string Code { get; set; }
        public string Name { get; set; }
        public Guid? CreateUserId { get; set; }
        public DateTime? CreateTime { get; set; }
        public string Remarks { get; set; }
        public string IsSystem { get; set; }
        public string IsVisible { get; set; }

        public ICollection<RoleMenu> RoleMenu { get; set; }
        public ICollection<UserRole> UserRole { get; set; }
    }
}
