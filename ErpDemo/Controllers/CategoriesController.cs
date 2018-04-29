using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ErpDemo.Application.CategoryApp;
using ErpDemo.Application.CategoryApp.Dtos;
using ErpDemo.Domain.Entities;
using ErpDemo.EntityFrameworkCore;
using ErpDemo.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ErpDemo.Controllers
{
    public class CategoriesController : ErpDemoBaseController
    {
        private readonly ICategoryAppService _service;
        public CategoriesController(ICategoryAppService service)
        {
            _service = service;
        }

        // GET: /<controller>/
        public IActionResult Index()
        {
            return View();
        }
        /// <summary>
        /// Get Department jstree JSON data
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public IActionResult GetTreeData()
        {
            var dtos = _service.GetAllList();
            List<TreeModel> treeModels = new List<TreeModel>();
            foreach (var dto in dtos)
            {
                //if (dto.IsSystem != "Y")
                //{
                treeModels.Add(new TreeModel() { Id = dto.Id.ToString(), Text = dto.CategoryName, Parent = dto.ParentId == Guid.Empty ? "#" : dto.ParentId.ToString() });
                //}
            }
            return Json(treeModels);
        }
        /// <summary>
        /// Get child list by parent Id
        /// </summary>
        /// <returns></returns>
        public IActionResult GetChildrenByParent(Guid parentId, int startPage, int pageSize)
        {
            int rowCount = 0;
            var result = _service.GetChildrenByParent(parentId, startPage, pageSize, out rowCount);
            return Json(new
            {
                rowCount = rowCount,
                pageCount = Math.Ceiling(Convert.ToDecimal(rowCount) / pageSize),
                rows = result,
            });
        }

        /// <summary>
        /// Get Department jstree JSON data
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public IActionResult GetTreeDataByRole(Guid roleId)
        {
            var dtos = _service.GetAllList();
            List<TreeModel> treeModels = new List<TreeModel>();
            foreach (var dto in dtos)
            {
                treeModels.Add(new TreeModel() { Id = dto.Id.ToString(), Text = dto.CategoryName, Parent = dto.ParentId == Guid.Empty ? "#" : dto.ParentId.ToString() });
            }
            return Json(treeModels);
        }

        /// <summary>
        /// Edit department
        /// </summary>
        /// <param name="dto"></param>
        /// <returns></returns>
        public IActionResult Edit(CategoriesDto dto)
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
                }
                else if (dto.Id != Guid.Empty)
                {
                    dto.ModifiedTime = DateTime.Now;
                }
                if (_service.InsertOrUpdate(dto))
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
                    if (_service.HasChildren(Guid.Parse(id)))
                    {
                        return Json(new
                        {
                            Result = "Faild",
                            Message = "Please delete the subordinate categories first!"
                        });
                    }
                    delIds.Add(Guid.Parse(id));
                }
                _service.DeleteBatch(delIds);
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
                if (_service.HasChildren(id))
                {
                    return Json(new
                    {
                        Result = "Faild",
                        Message = "Please delete the subordinate categories first!"
                    });
                }
                else
                {
                    _service.Delete(id);
                    return Json(new
                    {
                        Result = "Success"
                    });
                }

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
            var dto = _service.Get(id);
            return Json(dto);
        }

    }
}