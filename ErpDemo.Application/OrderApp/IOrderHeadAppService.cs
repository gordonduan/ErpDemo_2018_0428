using System;
using System.Collections.Generic;
using System.Text;
using ErpDemo.Application.OrderApp.Dtos;
using ErpDemo.Domain.Entities;

namespace ErpDemo.Application.OrderApp
{
    public interface IOrderHeadAppService
    {
        /// <summary>
        /// Get orders head list
        /// </summary>
        /// <returns></returns>
        List<OrderHeadDto> GetAllList();

        /// <summary>
        /// Get orders head list view
        /// </summary>
        /// <returns></returns>
        List<OrderHead> GetAllListView();

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
        bool InsertOrUpdate(OrderHeadDto dto);

        /// <summary>
        /// Insert
        /// </summary>
        /// <param name="dto">entity</param>
        /// <returns></returns>
        bool Insert(OrderHeadDto dto);

        /// <summary>
        /// Delete
        /// </summary>
        /// <param name="dto">entity</param>
        /// <returns></returns>
        void Delete(OrderHeadDto dto);

        /// <summary>
        /// update
        /// </summary>
        /// <param name="dto">entity</param>
        /// <returns></returns>
        bool Update(OrderHeadDto dto);

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
        OrderHeadDto Get(Guid id);

        /// <summary>
        /// execute stored procedure -- order approve
        /// </summary>
        /// <param name="id">Id</param>
        /// <returns></returns>
        void OrderApprove(Guid id);
    }
}
