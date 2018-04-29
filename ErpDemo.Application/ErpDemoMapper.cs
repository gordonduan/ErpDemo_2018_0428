using System;
using System.Collections.Generic;
using System.Text;
using AutoMapper;
using ErpDemo.Application.CategoryApp.Dtos;
using ErpDemo.Application.CustomerApp.Dtos;
using ErpDemo.Application.DepartmentApp.Dtos;
using ErpDemo.Application.EmployeeApp.Dtos;
using ErpDemo.Application.MenuApp.Dtos;
using ErpDemo.Application.OrderApp.Dtos;
using ErpDemo.Application.ProductApp.Dtos;
using ErpDemo.Application.RoleApp.Dtos;
using ErpDemo.Application.SupplierApp.Dtos;
using ErpDemo.Application.UserApp.Dtos;
using ErpDemo.Domain.Entities;

namespace ErpDemo.Application
{
    /// <summary>
    /// Entity and Dto mapping
    /// </summary>
    public class ErpDemoMapper
    {
        public static void Initialize()
        {
            Mapper.Initialize(cfg =>
            {
                cfg.CreateMap<Menu, MenuDto>();
                cfg.CreateMap<MenuDto, Menu>();
                cfg.CreateMap<Department, DepartmentDto>();
                cfg.CreateMap<DepartmentDto, Department>();
                cfg.CreateMap<RoleDto, Role>();
                cfg.CreateMap<Role, RoleDto>();
                cfg.CreateMap<RoleMenuDto, RoleMenu>();
                cfg.CreateMap<RoleMenu, RoleMenuDto>();
                cfg.CreateMap<UserDto, User>();
                cfg.CreateMap<User, UserDto>();
                cfg.CreateMap<UserRoleDto, UserRole>();
                cfg.CreateMap<UserRole, UserRoleDto>();
                cfg.CreateMap<SuppliersDto, Suppliers>();
                cfg.CreateMap<Suppliers, SuppliersDto>();
                cfg.CreateMap<CategoriesDto, Categories>();
                cfg.CreateMap<Categories, CategoriesDto>();
                cfg.CreateMap<ProductsDto, Products>();
                cfg.CreateMap<Products, ProductsDto>();
                cfg.CreateMap<CustomersDto, Customers>();
                cfg.CreateMap<Customers, CustomersDto>();
                cfg.CreateMap<OrderHeadDto, OrderHead>();
                cfg.CreateMap<OrderHead, OrderHeadDto>();
                cfg.CreateMap<OrderDetailsDto, OrderDetails>();
                cfg.CreateMap<OrderDetails, OrderDetailsDto>();
                cfg.CreateMap<EmployeesDto, Employees>();
                cfg.CreateMap<Employees, EmployeesDto>();
            });
        }
    }
}
