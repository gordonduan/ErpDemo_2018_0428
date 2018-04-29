using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ErpDemo.Application.CustomerApp;
using ErpDemo.Application.OrderApp;
using ErpDemo.Application.OrderApp.Dtos;
using ErpDemo.Application.ProductApp;
using ErpDemo.Domain.Entities;
using ErpDemo.EntityFrameworkCore;
using ErpDemo.Models;
using ErpDemo.Utility.Convert;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;

namespace ErpDemo.Controllers
{
    public class OrdersController : ErpDemoBaseController
    {
        private readonly IOrderHeadAppService _ordheadAppservice;
        private readonly IOrderDetailsAppService _orddetailsAppservice;
        private readonly IProductAppService _proAppservice;
        private readonly ICustomerAppService _cusAppservice;
        private readonly ErpDemoDBContext _context;
        public OrdersController(IOrderHeadAppService ordheadAppservice, IOrderDetailsAppService orddetailsAppservice, IProductAppService proAppservice, ICustomerAppService cusAppservice, ErpDemoDBContext context)
        {
            _ordheadAppservice = ordheadAppservice;
            _orddetailsAppservice = orddetailsAppservice;
            _proAppservice = proAppservice;
            _cusAppservice = cusAppservice;
            _context = context;
        }

        public async Task<IActionResult> Index()
        {
            var orderhead = _context.OrderHead
                .Include(o => o.Customer)
                .AsNoTracking()
                .OrderByDescending(o => o.ModifiedTime);
            return View(await orderhead.ToListAsync());
        }
        

        /// <summary>
        /// Edit
        /// </summary>
        /// <param name="dto"></param>
        /// <returns></returns>
        public IActionResult Edit(OrderHeadDto orderHead, string orderDetails)
        {
            if (!ModelState.IsValid)
            {
                return Json(new
                {
                    Result = "Faild",
                    Message = GetModelStateError()
                });
            }
            IEnumerable<OrderDetailsDto> dtos = JsonConvert.DeserializeObject<IEnumerable<OrderDetailsDto>>(orderDetails);
            
            try
            {   
                if (orderHead.Id == Guid.Empty)
                {
                    orderHead.Id = Guid.NewGuid();
                    orderHead.OrderDate = DateTime.Now;
                    orderHead.CreatedTime = DateTime.Now;
                    orderHead.ModifiedTime = DateTime.Now;
                    if (_ordheadAppservice.Insert(orderHead))
                    {
                        foreach (OrderDetailsDto dto in dtos)
                        {
                            dto.Id = orderHead.Id;
                            _orddetailsAppservice.Insert(dto);
                        }
                        return Json(new { Result = "Success" });
                    }
                }
                else if (orderHead.Id != Guid.Empty)
                {
                    _ordheadAppservice.Delete(orderHead);
                    orderHead.ModifiedTime = DateTime.Now;
                    if (_ordheadAppservice.Insert(orderHead))
                    {
                        foreach (OrderDetailsDto dto in dtos)
                        {
                            dto.Id = orderHead.Id;
                            _orddetailsAppservice.Insert(dto);
                        }
                        return Json(new { Result = "Success" });
                    }
                }
                return Json(new { Result = "Faild" });
            }
            catch (Exception ex)
            {
                return Json(new { Result = "Faild", Message = ex.Message });

            }
        }
        

        /// <summary>
        /// Get all customers
        /// </summary>
        /// <param name=""></param>
        /// <returns></returns>
        public IActionResult GetCustomersList()
        {
            List<TreeModel> treeModels = new List<TreeModel>();
            var customers = _cusAppservice.GetAllList();
            foreach (var customer in customers)
            {
                treeModels.Add(new TreeModel() { Id = customer.Id.ToString(), Text = customer.CustomerName, Parent = customer.Id.ToString() });
            }
            return Json(treeModels);
        }

        /// <summary>
        /// Get all suppliers
        /// </summary>
        /// <param name=""></param>
        /// <returns></returns>
        public IActionResult GetProductsList()
        {
            List<TreeModel> treeModels = new List<TreeModel>();
            var products = _proAppservice.GetAllList();
            foreach (var product in products)
            {
                treeModels.Add(new TreeModel() { Id = product.Id.ToString(), Text = product.ProductName, Parent = product.Id == Guid.Empty ? "#" : product.Id.ToString() });
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

        //public IActionResult DeleteMuti(string ids)
        //{
        //    try
        //    {
        //        string[] idArray = ids.Split(',');
        //        List<Guid> delIds = new List<Guid>();
        //        foreach (string id in idArray)
        //        {
        //            delIds.Add(Guid.Parse(id));
        //        }
        //        _proAppservice.DeleteBatch(delIds);
        //        return Json(new
        //        {
        //            Result = "Success"
        //        });
        //    }
        //    catch (Exception ex)
        //    {
        //        return Json(new
        //        {
        //            Result = "Faild",
        //            Message = ex.Message
        //        });
        //    }
        //}

        public IActionResult Delete(Guid id)
        {
            try
            {
                _ordheadAppservice.Delete(id);
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

        //execute stored procedure -- order approve
        public IActionResult OrderApprove(Guid id)
        {
            try
            {
                _ordheadAppservice.OrderApprove(id);
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

        // get order head
        public IActionResult GetHead(Guid id)
        {
            var dto = _ordheadAppservice.Get(id);
            return Json(dto);
        }
        // get order details
        public IActionResult GetDetails(Guid id)
        {
            var dto = _orddetailsAppservice.GetList(id);
            return Json(dto);
        }
    }
}