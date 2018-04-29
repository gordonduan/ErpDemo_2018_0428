using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using ErpDemo.Application.MenuApp;
using ErpDemo.Application.UserApp;
using ErpDemo.Domain.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;


namespace ErpDemo.Components
{
    [ViewComponent(Name = "Navigation")]
    public class NavigationViewComponent : ViewComponent
    {
        private readonly IMenuAppService _menuAppService;
        private readonly IUserAppService _userAppService;
        public NavigationViewComponent(IMenuAppService menuAppService, IUserAppService userAppService)
        {
            _menuAppService = menuAppService;
            _userAppService = userAppService;
        }

        public IViewComponentResult Invoke()
        {
            var userId = HttpContext.Session.GetString("CurrentUserId");
            var menus = Mapper.Map<List<Menu>>(_menuAppService.GetMenusByUser(Guid.Parse(userId)));
            return View(GetMenu(menus, new Guid("00000000-0000-0000-0000-000000000000")));
            //return View(menus);
        }

        public static List<Menu> GetChildrenMenu(List<Menu> menuList, Guid ParentId)
        {
           return menuList.Where(x => x.ParentId == ParentId).OrderBy(x => x.SerialNumber).ToList();
        }
        public static Menu GetMenuItem(List<Menu> menuList, Guid id)
        {
            return menuList.FirstOrDefault(x => x.Id == id);
        }

        private List<MenuViewModel> GetMenu(List<Menu> menuList, Guid parentId)
        {
            var children = GetChildrenMenu(menuList, parentId);

            if (!children.Any())
            {
                return new List<MenuViewModel>();
            }

            var vmList = new List<MenuViewModel>();
            foreach (var item in children)
            {
                var menu = GetMenuItem(menuList, item.Id);
                var vm = new MenuViewModel();
                vm.Id           = menu.Id;
                vm.ParentId     = menu.ParentId;
                vm.SerialNumber = menu.SerialNumber;
                vm.Name         = menu.Name;
                vm.Code         = menu.Code;
                vm.Url          = menu.Url;
                vm.Type         = menu.Type;
                vm.Icon         = menu.Icon;
                vm.Remarks      = menu.Remarks;
                vm.Children     = GetChildrenMenu(menuList, menu.Id);
                vmList.Add(vm);
            }
            return vmList;
        }
    }
}
