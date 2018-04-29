using System;
using System.Collections.Generic;
using System.Text;
using ErpDemo.Domain.Entities;

namespace ErpDemo.Domain.IRepositories
{
    public interface IRoleRepository : IRepository<Role>
    {
        /// <summary>
        /// Get menu list by role
        /// </summary>
        /// <param name="roleId">role id</param>
        /// <returns></returns>
        List<Guid> GetAllMenuListByRole(Guid roleId);

        /// <summary>
        /// Update role menu
        /// </summary>
        /// <param name="roleId">role Id</param>
        /// <param name="roleMenus">role menus collections</param>
        /// <returns></returns>
        bool UpdateRoleMenu(Guid roleId, List<RoleMenu> roleMenus);
    }
}
