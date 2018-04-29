﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ErpDemo.Application.UserApp.Dtos
{
    public partial class UserDto
    {
        public Guid Id { get; set; }

        [Required(ErrorMessage = "UserName can not be empty.")]
        public string UserName { get; set; }
        public string Password { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string MobileNumber { get; set; }
        public string Remarks { get; set; }
        public Guid? CreateUserId { get; set; }
        public DateTime? CreateTime { get; set; }
        public DateTime? LastLoginTime { get; set; }
        public int? LoginTimes { get; set; }
        public Guid? DepartmentId { get; set; }
        public short? IsDeleted { get; set; }
        public string IsSystem { get; set; }
        public string IsVisible { get; set; }

        public List<UserRoleDto> UserRoles { get; set; }
    }
}