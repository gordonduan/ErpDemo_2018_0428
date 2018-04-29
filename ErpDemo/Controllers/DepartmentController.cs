using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ErpDemo.Application.DepartmentApp;
using ErpDemo.Application.DepartmentApp.Dtos;
using ErpDemo.Models;
using Microsoft.AspNetCore.Mvc;

namespace ErpDemo.Controllers
{
    public class DepartmentController : ErpDemoBaseController
    {
        private readonly IDepartmentAppService _service;
        public DepartmentController(IDepartmentAppService service)
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
                    treeModels.Add(new TreeModel() { Id = dto.Id.ToString(), Text = dto.Name, Parent = dto.ParentId == Guid.Empty ? "#" : dto.ParentId.ToString() });
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
                treeModels.Add(new TreeModel() { Id = dto.Id.ToString(), Text = dto.Name, Parent = dto.ParentId == Guid.Empty ? "#" : dto.ParentId.ToString() });
            }
            return Json(treeModels);
        }

        /// <summary>
        /// Edit department
        /// </summary>
        /// <param name="dto"></param>
        /// <returns></returns>
        public IActionResult Edit(DepartmentDto dto)
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
                    dto.CreateTime = DateTime.Now;
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
                            Message = "Please delete the subordinate departments first!"
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
                        Message = "Please delete the subordinate departments first!"
                    });
                } else
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