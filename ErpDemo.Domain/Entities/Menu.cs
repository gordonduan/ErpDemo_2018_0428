using System;
using System.Collections.Generic;

namespace ErpDemo.Domain.Entities
{
    public partial class Menu : Entity
    {
        public Menu()
        {
            RoleMenu = new HashSet<RoleMenu>();
        }

        public Guid? ParentId { get; set; }
        public int? SerialNumber { get; set; }
        public string Name { get; set; }
        public string Code { get; set; }
        public string Url { get; set; }
        public short? Type { get; set; }
        public string Icon { get; set; }
        public string Remarks { get; set; }
        public string IsSystem { get; set; }
        public string IsVisible { get; set; }

        public ICollection<RoleMenu> RoleMenu { get; set; }
    }

    public partial class MenuViewModel : Entity
    {
        public Guid? ParentId { get; set; }
        public int? SerialNumber { get; set; }
        public string Name { get; set; }
        public string Code { get; set; }
        public string Url { get; set; }
        public short? Type { get; set; }
        public string Icon { get; set; }
        public string Remarks { get; set; }
        public List<Menu> Children { get; set; }
    }
}
