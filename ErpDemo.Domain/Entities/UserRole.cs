﻿using System;
using System.Collections.Generic;

namespace ErpDemo.Domain.Entities
{
    public partial class UserRole
    {
        public Guid UserId { get; set; }
        public Guid RoleId { get; set; }

        public Role Role { get; set; }
        public User User { get; set; }
    }
}
