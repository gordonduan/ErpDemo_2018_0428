using System;
using System.Collections.Generic;
using System.Text;
using ErpDemo.Application.CategoryApp.Dtos;

namespace ErpDemo.Application.CategoryApp
{
    public interface ICategoryAppService
    {
        /// <summary>
        /// Get Categories list
        /// </summary>
        /// <returns></returns>
        List<CategoriesDto> GetAllList();

        /// <summary>
        /// Get child list by parent Id
        /// </summary>
        /// <param name="parentId">parent Id</param>
        /// <param name="startPage">start page</param>
        /// <param name="pageSize">page size</param>
        /// <param name="rowCount">row count</param>
        /// <returns></returns>
        List<CategoriesDto> GetChildrenByParent(Guid parentId, int startPage, int pageSize, out int rowCount);

        /// <summary>
        /// Insert or update
        /// </summary>
        /// <param name="dto">entity</param>
        /// <returns></returns>
        bool InsertOrUpdate(CategoriesDto dto);

        /// <summary>
        /// If has children
        /// </summary>
        /// <param name="id">Id</param>
        /// <returns></returns>
        bool HasChildren(Guid parentId);

        /// <summary>
        /// Get children by parent
        /// </summary>
        /// <param name="predicate">lambda expression</param>
        /// <returns></returns>
        List<CategoriesDto> GetChildrenByParent(Guid parentId);

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
        CategoriesDto Get(Guid id);
    }
}
