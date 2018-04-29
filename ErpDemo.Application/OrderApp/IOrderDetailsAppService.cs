using System;
using System.Collections.Generic;
using System.Text;
using ErpDemo.Application.OrderApp.Dtos;
using ErpDemo.Domain.Entities;

namespace ErpDemo.Application.OrderApp
{
    public interface IOrderDetailsAppService
    {
        /// <summary>
        /// Get Order details list
        /// </summary>
        /// <returns></returns>
        List<OrderDetailsDto> GetAllList();

        /// <summary>
        /// Get orders details list view
        /// </summary>
        /// <returns></returns>
        List<OrderDetails> GetAllListView();

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
        bool InsertOrUpdate(OrderDetailsDto dto);

        /// <summary>
        /// Insert
        /// </summary>
        /// <param name="dto">entity</param>
        /// <returns></returns>
        bool Insert(OrderDetailsDto dto);

        /// <summary>
        /// update
        /// </summary>
        /// <param name="dto">entity</param>
        /// <returns></returns>
        bool Update(OrderDetailsDto dto);

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
        OrderDetailsDto Get(Guid id);

        /// <summary>
        /// Get Order details list by Id
        /// </summary>
        /// <returns></returns>
        List<OrderDetailsDto> GetList(Guid id);
    }
}
