using System;
using System.Collections.Generic;
using System.Text;
using ErpDemo.Application.SupplierApp.Dtos;

namespace ErpDemo.Application.SupplierApp
{
    public interface ISupplierAppService
    {
        /// <summary>
        /// Get suppliers list
        /// </summary>
        /// <returns></returns>
        List<SuppliersDto> GetAllList();

        ///// <summary>
        ///// Get child list by parent Id
        ///// </summary>
        ///// <param name="parentId">parent Id</param>
        ///// <param name="startPage">start page</param>
        ///// <param name="pageSize">page size</param>
        ///// <param name="rowCount">row count</param>
        ///// <returns></returns>
        //List<SuppliersDto> GetChildrenByParent(Guid parentId, int startPage, int pageSize, out int rowCount);

        /// <summary>
        /// Insert or update
        /// </summary>
        /// <param name="dto">entity</param>
        /// <returns></returns>
        bool InsertOrUpdate(SuppliersDto dto);

        ///// <summary>
        ///// If has children
        ///// </summary>
        ///// <param name="id">Id</param>
        ///// <returns></returns>
        //bool HasChildren(Guid parentId);

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
        SuppliersDto Get(Guid id);
    }
}
