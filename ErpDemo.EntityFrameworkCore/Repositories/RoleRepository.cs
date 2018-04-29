using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using ErpDemo.Domain.Entities;
using ErpDemo.Domain.IRepositories;

namespace ErpDemo.EntityFrameworkCore.Repositories
{
    public class RoleRepository : ErpDemoRepository<Role>, IRoleRepository
    {
        public RoleRepository(ErpDemoDBContext dbcontext) : base(dbcontext)
        {

        }
        /// <summary>
        /// Get menu list by role
        /// </summary>
        /// <returns></returns>
        public List<Guid> GetAllMenuListByRole(Guid roleId)
        {
            var roleMenus = _dbContext.Set<RoleMenu>().Where(it => it.RoleId == roleId);
            var menuIds = from t in roleMenus select t.MenuId;
            return menuIds.ToList();
        }

        /// <summary>
        /// Update role menu
        /// </summary>
        /// <param name="roleId">role Id</param>
        /// <param name="roleMenus">role menus</param>
        /// <returns></returns>
        public bool UpdateRoleMenu(Guid roleId, List<RoleMenu> roleMenus)
        {
            var oldDatas = _dbContext.Set<RoleMenu>().Where(it => it.RoleId == roleId).ToList();
            oldDatas.ForEach(it => _dbContext.Set<RoleMenu>().Remove(it));
            _dbContext.SaveChanges();
            _dbContext.Set<RoleMenu>().AddRange(roleMenus);
            _dbContext.SaveChanges();
            return true;
        }
    }
}
