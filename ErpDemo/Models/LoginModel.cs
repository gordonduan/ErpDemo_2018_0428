using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ErpDemo.Models
{
    public class LoginModel
    {
        [Required(ErrorMessage = "Username can not be empty.")]
        public string UserName { get; set; }

        [Required(ErrorMessage = "Password can not be empty.")]
        [DataType(DataType.Password)]
        public string Password { get; set; }

        public bool RememberMe { get; set; }
    }
}
