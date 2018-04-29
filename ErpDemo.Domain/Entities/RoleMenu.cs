using System;
using System.Collections.Generic;

namespace ErpDemo.Domain.Entities
{
    public partial class RoleMenu
    {
        public Guid RoleId { get; set; }
        public Guid MenuId { get; set; }

        public Menu Menu { get; set; }
        public Role Role { get; set; }
    }
}
