using System;
using System.Collections.Generic;
using System.Text;
using ErpDemo.Domain.IRepositories;
using ErpDemo.Application.OrderApp.Dtos;
using AutoMapper;
using ErpDemo.Domain.Entities;

namespace ErpDemo.Application.OrderApp
{
    public class OrderHeadAppService : IOrderHeadAppService
    {
        private readonly IOrderHeadRepository _repository;
        public OrderHeadAppService(IOrderHeadRepository repository)
        {
            _repository = repository;
        }
        /// <summary>
        /// Get orders head list
        /// </summary>
        /// <returns></returns>
        public List<OrderHeadDto> GetAllList()
        {
            return Mapper.Map<List<OrderHeadDto>>(_repository.GetAllList(it => it.Id != Guid.Empty));
        }

        /// <summary>
        /// Get orders head list view
        /// </summary>
        /// <returns></returns>
        public List<OrderHead> GetAllListView()
        {
            return _repository.GetAllList(it => it.Id != Guid.Empty);
        }

        /// <summary>
        /// Insert or update
        /// </summary>
        /// <param name="dto">entity</param>
        /// <returns></returns>
        public bool InsertOrUpdate(OrderHeadDto dto)
        {
            var menu = _repository.InsertOrUpdate(Mapper.Map<OrderHead>(dto));
            return menu == null ? false : true;
        }

        /// <summary>
        /// Insert
        /// </summary>
        /// <param name="dto">entity</param>
        /// <returns></returns>
        public bool Insert(OrderHeadDto dto)
        {
            var menu = _repository.Insert(Mapper.Map<OrderHead>(dto));
            return menu == null ? false : true;
        }

        /// <summary>
        /// Insert
        /// </summary>
        /// <param name="dto">entity</param>
        /// <returns></returns>
        public void Delete(OrderHeadDto dto)
        {
            _repository.Delete(Mapper.Map<OrderHead>(dto));
        }

        /// <summary>
        /// update
        /// </summary>
        /// <param name="dto">entity</param>
        /// <returns></returns>
        public bool Update(OrderHeadDto dto)
        {
            var menu = _repository.Update(Mapper.Map<OrderHead>(dto));
            return menu == null ? false : true;
        }

        ///// <summary>
        ///// If has children
        ///// </summary>
        ///// <param name="id">Id</param>
        ///// <returns></returns>
        //public bool HasChildren(Guid parentId)
        //{
        //    return _repository.HasChildren(it => it.ParentId == parentId);
        //}

        /// <summary>
        /// If has products
        /// </summary>
        /// <param name="id">Id</param>
        /// <returns></returns>
        //public bool HasProduct(Guid Id)
        //{
        //    return _repository.HasChildren(it => it.ParentId == parentId);
        //}


        /// <summary>
        /// Delete batch by Id collection
        /// </summary>
        /// <param name="ids">Id collection</param>
        public void DeleteBatch(List<Guid> ids)
        {
            _repository.Delete(it => ids.Contains(it.Id));
        }

        /// <summary>
        /// Delete
        /// </summary>
        /// <param name="id">Id</param>
        public void Delete(Guid id)
        {
            _repository.Delete(id);
        }

        /// <summary>
        /// Get entity by Id
        /// </summary>
        /// <param name="id">Id</param>
        /// <returns></returns>
        public OrderHeadDto Get(Guid id)
        {
            return Mapper.Map<OrderHeadDto>(_repository.Get(id));
        }

        // execute stored procedure -- order approve
        public void OrderApprove(Guid id)
        {
            _repository.OrderApprove(id);
        }
        
    }
}
