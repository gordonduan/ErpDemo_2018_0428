using System;
using System.Collections.Generic;
using System.Text;
using ErpDemo.Application.RoleApp.Dtos;

namespace ErpDemo.Application.RoleApp
{
    public interface IRoleAppService
    {
        /// <summary>
        /// Get role list
        /// </summary>
        /// <returns></returns>
        List<RoleDto> GetAllList();

        /// <summary>
        /// Get page list
        /// </summary>
        /// <param name="startPage">start page</param>
        /// <param name="pageSize">page size</param>
        /// <param name="rowCount">row count</param>
        /// <returns></returns>
        List<RoleDto> GetAllPageList(int startPage, int pageSize, out int rowCount);

        /// <summary>
        /// Insert or update
        /// </summary>
        /// <param name="dto">entity</param>
        /// <returns></returns>
        bool InsertOrUpdate(RoleDto dto);

        /// <summary>
        /// Delete batch by Id collection
        /// </summary>
        /// <param name="ids">Id collection</param>
        void DeleteBatch(List<Guid> ids);

        /// <summary>
        /// Delete
        /// </summary>
        /// <param name="id">Id</param>
        void Delete(Guid id);

        /// <summary>
        /// Get entity by Id
        /// </summary>
        /// <param name="id">Id</param>
        /// <returns></returns>
        RoleDto Get(Guid id);

        /// <summary>
        /// Get all menu list by role
        /// </summary>
        /// <param name="roleId">role Id</param>
        /// <returns></returns>
        List<Guid> GetAllMenuListByRole(Guid roleId);

        /// <summary>
        /// Update role menu
        /// </summary>
        /// <param name="roleId">role Id</param>
        /// <param name="roleMenus">role menu collection</param>
        /// <returns></returns>
        bool UpdateRoleMenu(Guid roleId, List<RoleMenuDto> roleMenus);
    }
}
