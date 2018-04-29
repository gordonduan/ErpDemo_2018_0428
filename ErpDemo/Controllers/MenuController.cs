using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ErpDemo.Application.MenuApp;
using ErpDemo.Application.MenuApp.Dtos;
using ErpDemo.Application.RoleApp;
using ErpDemo.Application.UserApp;
using ErpDemo.Models;
using Microsoft.AspNetCore.Mvc;

namespace ErpDemo.Controllers
{
    /// <summary>
    /// Menu management controller
    /// </summary>
    public class MenuController : ErpDemoBaseController
    {
        private readonly IMenuAppService _menuAppService;
        private readonly IRoleAppService _roleAppService;
        public MenuController(IMenuAppService menuAppService, IUserAppService userAppService, IRoleAppService roleAppService)
        {
            _menuAppService = menuAppService;
            _roleAppService = roleAppService;
        }

        // GET: /<controller>/
        public IActionResult Index()
        {
            return View();
        }

        /// <summary>
        /// Get menu tree JSON data
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public IActionResult GetMenuTreeData()
        {
            var menus = _menuAppService.GetAllList();
            List<TreeModel> treeModels = new List<TreeModel>();
            foreach (var menu in menus)
            {
                treeModels.Add(new TreeModel() { Id = menu.Id.ToString(), Text = menu.Name, Parent = menu.ParentId == Guid.Empty ? "#" : menu.ParentId.ToString() });
            }
            return Json(treeModels);
        }

        /// <summary>
        /// Get menu tree JSON data
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public IActionResult GetMenuTreeDataByRole(Guid roleId)
        {
            if (roleId.Equals(Guid.Empty))
            {
                var menus = _menuAppService.GetAllList();
                List<TreeModel> treeModels = new List<TreeModel>();
                foreach (var menu in menus)
                {
                    treeModels.Add(new TreeModel() { Id = menu.Id.ToString(), Text = menu.Name, Parent = menu.ParentId == Guid.Empty ? "#" : menu.ParentId.ToString() });
                }
                return Json(treeModels);
            } else
            {
                var role = _roleAppService.Get(roleId);
                if (_roleAppService.Get(roleId).Code == "0000")
                {
                    var menus = _menuAppService.GetAllList();
                    List<TreeModel> treeModels = new List<TreeModel>();
                    foreach (var menu in menus)
                    {
                        treeModels.Add(new TreeModel() { Id = menu.Id.ToString(), Text = menu.Name, Parent = menu.ParentId == Guid.Empty ? "#" : menu.ParentId.ToString() });
                    }
                    return Json(treeModels);
                }
                else
                {
                    var menus = _menuAppService.GetAllList();
                    List<TreeModel> treeModels = new List<TreeModel>();
                    foreach (var menu in menus)
                    {
                        if (menu.Name != "Menu")
                        {
                            treeModels.Add(new TreeModel() { Id = menu.Id.ToString(), Text = menu.Name, Parent = menu.ParentId == Guid.Empty ? "#" : menu.ParentId.ToString() });
                        }
                    }
                    return Json(treeModels);
                }
            }
        }

        /// <summary>
        /// Get menus by parentid
        /// </summary>
        /// <returns></returns>
        public IActionResult GetMneusByParent(Guid parentId, int startPage, int pageSize)
        {
            int rowCount = 0;
            var result = _menuAppService.GetMenusByParent(parentId, startPage, pageSize, out rowCount);
            return Json(new
            {
                rowCount = rowCount,
                pageCount = Math.Ceiling(Convert.ToDecimal(rowCount) / pageSize),
                rows = result,
            });
        }
        /// <summary>
        /// Insert or edit menu
        /// </summary>
        /// <param name="dto"></param>
        /// <returns></returns>
        public IActionResult Edit(MenuDto dto)
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
                }
                if (_menuAppService.InsertOrUpdate(dto))
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
                    if (_menuAppService.HasChildren(Guid.Parse(id)))
                    {
                        return Json(new
                        {
                            Result = "Faild",
                            Message = "Please delete the subordinate menus first!"
                        });
                    }
                    delIds.Add(Guid.Parse(id));
                }
                _menuAppService.DeleteBatch(delIds);
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
                if (_menuAppService.HasChildren(id))
                {
                    return Json(new
                    {
                        Result = "Faild",
                        Message = "Please delete the subordinate menus first!"
                    });
                } else
                {
                    _menuAppService.Delete(id);
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

        public ActionResult Get(Guid id)
        {
            var dto = _menuAppService.Get(id);
            var a = Json(dto);
            return Json(dto);
        }

    }
}