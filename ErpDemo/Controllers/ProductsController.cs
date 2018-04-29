using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ErpDemo.Application.CategoryApp;
using ErpDemo.Application.ProductApp;
using ErpDemo.Application.ProductApp.Dtos;
using ErpDemo.Application.SupplierApp;
using ErpDemo.EntityFrameworkCore;
using ErpDemo.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ErpDemo.Controllers
{
    public class ProductsController : ErpDemoBaseController
    {
        private readonly IProductAppService _proAppservice;
        private readonly ISupplierAppService _supAppService;
        private readonly ICategoryAppService _catAppService;
        private readonly ErpDemoDBContext _context;
        public ProductsController(IProductAppService proAppservice, ISupplierAppService supAppService, ICategoryAppService catAppService, ErpDemoDBContext context)
        {
            _proAppservice = proAppservice;
            _supAppService = supAppService;
            _catAppService = catAppService;
            _context = context;
        }

        public async Task<IActionResult> Index()
        {
            var products = _context.Products
                .Include(p => p.Category)
                .Include(p => p.Supplier)
                .AsNoTracking()
                .OrderByDescending(p => p.ModifiedTime);
            return View(await products.ToListAsync());
        }

        /// <summary>
        /// Edit department
        /// </summary>
        /// <param name="dto"></param>
        /// <returns></returns>
        public IActionResult Edit(ProductsDto dto)
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
                if (_proAppservice.InsertOrUpdate(dto))
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

        /// <summary>
        /// Get all categories
        /// </summary>
        /// <param name=""></param>
        /// <returns></returns>
        public IActionResult GetAllCategoriesList()
        {
            List<TreeModel> treeModels = new List<TreeModel>();
            var categories = _catAppService.GetAllList();
            foreach (var category in categories)
            {
                treeModels.Add(new TreeModel() { Id = category.Id.ToString(), Text = category.CategoryName, Parent = category.ParentId == Guid.Empty ? "#" : category.ParentId.ToString() });
            }
            return Json(treeModels);
        }

        /// <summary>
        /// Get all suppliers
        /// </summary>
        /// <param name=""></param>
        /// <returns></returns>
        public IActionResult GetAllSuppliersList()
        {
            List<TreeModel> treeModels = new List<TreeModel>();
            var suppliers = _supAppService.GetAllList();
            foreach (var supplier in suppliers)
            {
                treeModels.Add(new TreeModel() { Id = supplier.Id.ToString(), Text = supplier.SupplierName, Parent = supplier.Id == Guid.Empty ? "#" : supplier.Id.ToString() });
            }
            return Json(treeModels);
        }

        //public List<TreeModel> GetAllChildren(Guid Id)
        //{
        //    List<TreeModel> treeModels = new List<TreeModel>();
        //    var categories = _catAppService.GetChildrenByParent(Id); 
        //    foreach (var category in categories)
        //    {
        //        if (!_catAppService.HasChildren(category.Id))
        //        {
        //            treeModels.Add(new TreeModel() { Id = category.Id.ToString(), Text = category.CategoryName, Parent = category.ParentId == Guid.Empty ? "#" : category.ParentId.ToString() });
        //        }
        //        GetAllChildren(category.Id);
        //    }
        //    return treeModels;
        //}

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
                _proAppservice.DeleteBatch(delIds);
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
                _proAppservice.Delete(id);
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
            var dto = _proAppservice.Get(id);
            return Json(dto);
        }

    }
}
