using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace ErpDemo.Application.EmployeeApp.Dtos
{
    public partial class EmployeesDto
    {
        public Guid Id { get; set; }
        public string Code { get; set; }
        public string EmployeeId { get; set; }
        [Required(ErrorMessage = "Last Name can not be empty.")]
        public string LastName { get; set; }
        [Required(ErrorMessage = "First Name can not be empty.")]
        public string FirstName { get; set; }
        public string Title { get; set; }
        public Guid? DepartmentId { get; set; }
        public Guid? RoleId { get; set; }
        public DateTime? BirthDate { get; set; }
        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:dd/MM/yyyy}", ApplyFormatInEditMode = true)]
        public DateTime? HireDate { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string Region { get; set; }
        public string PostalCode { get; set; }
        public string Country { get; set; }
        public string Phone { get; set; }
        public string Extension { get; set; }
        public byte[] Photo { get; set; }
        public string Notes { get; set; }
        public Guid? ReportsTo { get; set; }
        public string PhotoPath { get; set; }
        public bool? IsValid { get; set; }
        public DateTime? CreatedTime { get; set; }
        public DateTime? ModifiedTime { get; set; }
        public string Description { get; set; }
    }
}
