using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using ErpDemo.Domain.Entities;
using ErpDemo.EntityFrameworkCore;
using ErpDemo.Application.EmployeeApp;
using ErpDemo.Application.EmployeeApp.Dtos;
using ErpDemo.Models;
using ErpDemo.Application.DepartmentApp;
using ErpDemo.Application.RoleApp;

namespace ErpDemo.Controllers
{
    public class EmployeesController : ErpDemoBaseController
    {
        private readonly IEmployeeAppService _empAppservice;
        private readonly IDepartmentAppService _depAppService;
        private readonly IRoleAppService _rolAppService;
        private readonly ErpDemoDBContext _context;
        public EmployeesController(IEmployeeAppService empAppservice, IDepartmentAppService depAppService, IRoleAppService rolAppService, ErpDemoDBContext context)
        {
            _empAppservice = empAppservice;
            _depAppService = depAppService;
            _rolAppService = rolAppService;
            _context = context;
        }

        //// GET: /<controller>/
        //public IActionResult Index()
        //{
        //    return View();
        //}

        public async Task<IActionResult> Index()
        {
            var employees = _context.Employees
                .Include(e => e.Department)
                .Include(e => e.Role)
                .AsNoTracking()
                .OrderByDescending(e => e.ModifiedTime);
            return View(await employees.ToListAsync());
        }

        /// <summary>
        /// Edit department
        /// </summary>
        /// <param name="dto"></param>
        /// <returns></returns>
        public IActionResult Edit(EmployeesDto dto)
        {
            if (!ModelState.IsValid)
            {
                return Json(new
                {
                    Result = "Faild",
                    Message = GetModelStateError()
                });
            }

            try
            {
                if (dto.Id == Guid.Empty)
                {
                    dto.Id = Guid.NewGuid();
                    dto.CreatedTime = DateTime.Now;
                    dto.ModifiedTime = DateTime.Now;
                }
                else if (dto.Id != Guid.Empty)
                {
                    dto.ModifiedTime = DateTime.Now;
                }
                if (_empAppservice.InsertOrUpdate(dto))
                {
                    return Json(new { Result = "Success" });
                }
                return Json(new { Result = "Faild" });
            }
            catch (Exception ex)
            {
                return Json(new { Result = "Faild", Message = ex.Message });

            }
        }

        public IActionResult DeleteMuti(string ids)
        {
            try
            {
                string[] idArray = ids.Split(',');
                List<Guid> delIds = new List<Guid>();
                foreach (string id in idArray)
                {
                    delIds.Add(Guid.Parse(id));
                }
                _empAppservice.DeleteBatch(delIds);
                return Json(new
                {
                    Result = "Success"
                });
            }
            catch (Exception ex)
            {
                return Json(new
                {
                    Result = "Faild",
                    Message = ex.Message
                });
            }
        }

        public IActionResult Delete(Guid id)
        {
            try
            {
                _empAppservice.Delete(id);
                return Json(new
                {
                    Result = "Success"
                });
            }
            catch (Exception ex)
            {
                return Json(new
                {
                    Result = "Faild",
                    Message = ex.Message
                });
            }
        }

        public IActionResult Get(Guid id)
        {
            var dto = _empAppservice.Get(id);
            return Json(dto);
        }

        /// <summary>
        /// Get all departments
        /// </summary>
        /// <param name=""></param>
        /// <returns></returns>
        public IActionResult GetAllDepartmentsList()
        {
            List<TreeModel> treeModels = new List<TreeModel>();
            var departments = _depAppService.GetAllList();
            foreach (var category in departments)
            {
                treeModels.Add(new TreeModel() { Id = category.Id.ToString(), Text = category.Name, Parent = category.ParentId == Guid.Empty ? "#" : category.ParentId.ToString() });
            }
            return Json(treeModels);
        }

        /// <summary>
        /// Get all suppliers
        /// </summary>
        /// <param name=""></param>
        /// <returns></returns>
        public IActionResult GetAllRolesList()
        {
            List<TreeModel> treeModels = new List<TreeModel>();
            var roles = _rolAppService.GetAllList();
            foreach (var role in roles)
            {
                treeModels.Add(new TreeModel() { Id = role.Id.ToString(), Text = role.Name, Parent = role.Id == Guid.Empty ? "#" : role.Id.ToString() });
            }
            return Json(treeModels);
        }

    }
}