using System;
using System.Collections.Generic;
using System.Text;
using ErpDemo.Application.MenuApp.Dtos;

namespace ErpDemo.Application.MenuApp
{
    public interface IMenuAppService
    {
        /// <summary>
        /// Get Menu list
        /// </summary>
        /// <returns></returns>
        List<MenuDto> GetAllList();

        /// <summary>
        /// Get Menu list by parent ID
        /// </summary>
        /// <param name="parentId">parent Id</param>
        /// <param name="startPage">start page</param>
        /// <param name="pageSize">page size</param>
        /// <param name="rowCount">row count</param>
        /// <returns></returns>
        List<MenuDto> GetMenusByParent(Guid parentId, int startPage, int pageSize, out int rowCount);

        /// <summary>
        /// Insert or update
        /// </summary>
        /// <param name="dto">entity</param>
        /// <returns></returns>
        bool InsertOrUpdate(MenuDto dto);

        /// <summary>
        /// Delete batch by Id
        /// </summary>
        /// <param name="ids">Menu Id collections</param>
        void DeleteBatch(List<Guid> ids);

        /// <summary>
        /// If has children
        /// </summary>
        /// <param name="id">Id</param>
        /// <returns></returns>
        bool HasChildren(Guid parentId);

        /// <summary>
        /// Delete
        /// </summary>
        /// <param name="id">Menu Id</param>
        void Delete(Guid id);

        /// <summary>
        /// Get entity by Id
        /// </summary>
        /// <param name="id">Menu Id</param>
        /// <returns></returns>
        MenuDto Get(Guid id);

        /// <summary>
        /// Get Menu by user
        /// </summary>
        /// <param name="userId">user ID</param>
        /// <returns></returns>
        List<MenuDto> GetMenusByUser(Guid userId);
    }
}
