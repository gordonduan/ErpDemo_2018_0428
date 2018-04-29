using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using ErpDemo.Domain.Entities;
using ErpDemo.EntityFrameworkCore;
using AutoMapper;
using ErpDemo.Application.SupplierApp;
using ErpDemo.Application.SupplierApp.Dtos;

namespace ErpDemo.Controllers
{
    public class SuppliersController : ErpDemoBaseController
    {
        private readonly ISupplierAppService _service;
        public SuppliersController(ISupplierAppService service)
        {
            _service = service;
        }

        //// GET: /<controller>/
        //public IActionResult Index()
        //{
        //    return View();
        //}

        // GET: Suppliers
        public IActionResult Index()
        {
            return View(_service.GetAllList().OrderByDescending(s => s.ModifiedTime));
        }

        /// <summary>
        /// Edit department
        /// </summary>
        /// <param name="dto"></param>
        /// <returns></returns>
        public IActionResult Edit(SuppliersDto dto)
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
                } else if (dto.Id != Guid.Empty)
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
                _service.Delete(id);
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
            var dto = _service.Get(id);
            return Json(dto);
        }

    }
}