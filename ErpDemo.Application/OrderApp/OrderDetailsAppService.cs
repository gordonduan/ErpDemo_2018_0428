using System;
using System.Collections.Generic;
using System.Text;
using AutoMapper;
using ErpDemo.Application.OrderApp.Dtos;
using ErpDemo.Domain.Entities;
using ErpDemo.Domain.IRepositories;

namespace ErpDemo.Application.OrderApp
{
    public class OrderDetailsAppService : IOrderDetailsAppService
    {
        private readonly IOrderDetailsRepository _repository;
        public OrderDetailsAppService(IOrderDetailsRepository repository)
        {
            _repository = repository;
        }
        /// <summary>
        /// Get orders details list
        /// </summary>
        /// <returns></returns>
        public List<OrderDetailsDto> GetAllList()
        {
            return Mapper.Map<List<OrderDetailsDto>>(_repository.GetAllList(it => it.Id != Guid.Empty));
        }

        /// <summary>
        /// Get orders details list view
        /// </summary>
        /// <returns></returns>
        public List<OrderDetails> GetAllListView()
        {
            return _repository.GetAllList(it => it.Id != Guid.Empty);
        }

        /// <summary>
        /// Insert or update
        /// </summary>
        /// <param name="dto">entity</param>
        /// <returns></returns>
        public bool InsertOrUpdate(OrderDetailsDto dto)
        {
            var menu = _repository.InsertOrUpdate(Mapper.Map<OrderDetails>(dto));
            return menu == null ? false : true;
        }

        /// <summary>
        /// Insert
        /// </summary>
        /// <param name="dto">entity</param>
        /// <returns></returns>
        public bool Insert(OrderDetailsDto dto)
        {
            var menu = _repository.Insert(Mapper.Map<OrderDetails>(dto));
            return menu == null ? false : true;
        }

        /// <summary>
        /// update
        /// </summary>
        /// <param name="dto">entity</param>
        /// <returns></returns>
        public bool Update(OrderDetailsDto dto)
        {
            var menu = _repository.Update(Mapper.Map<OrderDetails>(dto));
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
        public OrderDetailsDto Get(Guid id)
        {
            return Mapper.Map<OrderDetailsDto>(_repository.Get(id));
        }

        /// <summary>
        /// Get Order details list by Id
        /// </summary>
        /// <returns></returns>
        public List<OrderDetailsDto> GetList(Guid id)
        {
            return Mapper.Map<List<OrderDetailsDto>>(_repository.GetListById(it => it.Id == id));
        }
    }
}
