using System;
using System.Collections.Generic;
using System.Text;
using AutoMapper;
using ErpDemo.Application.EmployeeApp.Dtos;
using ErpDemo.Domain.Entities;
using ErpDemo.Domain.IRepositories;

namespace ErpDemo.Application.EmployeeApp
{
    public class EmployeeAppService : IEmployeeAppService
    {
        private readonly IEmployeeRepository _repository;
        public EmployeeAppService(IEmployeeRepository repository)
        {
            _repository = repository;
        }
        /// <summary>
        /// Get empolyees list
        /// </summary>
        /// <returns></returns>
        public List<EmployeesDto> GetAllList()
        {
            return Mapper.Map<List<EmployeesDto>>(_repository.GetAllList(it => it.Id != Guid.Empty));
        }

        /// <summary>
        /// Insert or update
        /// </summary>
        /// <param name="dto">entity</param>
        /// <returns></returns>
        public bool InsertOrUpdate(EmployeesDto dto)
        {
            var menu = _repository.InsertOrUpdate(Mapper.Map<Employees>(dto));
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
        public EmployeesDto Get(Guid id)
        {
            return Mapper.Map<EmployeesDto>(_repository.Get(id));
        }
    }
}
