using System;
using System.Collections.Generic;
using System.Text;
using ErpDemo.Application.DepartmentApp.Dtos;

namespace ErpDemo.Application.DepartmentApp
{
    public interface IDepartmentAppService
    {
        /// <summary>
        /// Get department list
        /// </summary>
        /// <returns></returns>
        List<DepartmentDto> GetAllList();

        /// <summary>
        /// Get child list by parent Id
        /// </summary>
        /// <param name="parentId">parent Id</param>
        /// <param name="startPage">start page</param>
        /// <param name="pageSize">page size</param>
        /// <param name="rowCount">row count</param>
        /// <returns></returns>
        List<DepartmentDto> GetChildrenByParent(Guid parentId, int startPage, int pageSize, out int rowCount);

        /// <summary>
        /// Insert or update
        /// </summary>
        /// <param name="dto">entity</param>
        /// <returns></returns>
        bool InsertOrUpdate(DepartmentDto dto);

        /// <summary>
        /// If has children
        /// </summary>
        /// <param name="id">Id</param>
        /// <returns></returns>
        bool HasChildren(Guid parentId);

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
        DepartmentDto Get(Guid id);
    }
}
