using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using AutoMapper;
using ErpDemo.Application.DepartmentApp.Dtos;
using ErpDemo.Domain.Entities;
using ErpDemo.Domain.IRepositories;

namespace ErpDemo.Application.DepartmentApp
{
    public class DepartmentAppService : IDepartmentAppService
    {
        private readonly IDepartmentRepository _repository;
        public DepartmentAppService(IDepartmentRepository repository)
        {
            _repository = repository;
        }
        /// <summary>
        /// Get department list
        /// </summary>
        /// <returns></returns>
        public List<DepartmentDto> GetAllList()
        {
            return Mapper.Map<List<DepartmentDto>>(_repository.GetAllList(it => it.Id != Guid.Empty).OrderBy(it => it.SerialNumber));
        }

        /// <summary>
        /// Get child list by parent Id
        /// </summary>
        /// <param name="parentId">parent Id</param>
        /// <param name="startPage">start page</param>
        /// <param name="pageSize">page size</param>
        /// <param name="rowCount">row count</param>
        /// <returns></returns>
        public List<DepartmentDto> GetChildrenByParent(Guid parentId, int startPage, int pageSize, out int rowCount)
        {
            return Mapper.Map<List<DepartmentDto>>(_repository.LoadPageList(startPage, pageSize, out rowCount, it => it.ParentId == parentId, it => it.Code));
        }

        /// <summary>
        /// Insert or update
        /// </summary>
        /// <param name="dto">entity</param>
        /// <returns></returns>
        public bool InsertOrUpdate(DepartmentDto dto)
        {
            var menu = _repository.InsertOrUpdate(Mapper.Map<Department>(dto));
            return menu == null ? false : true;
        }

        /// <summary>
        /// If has children
        /// </summary>
        /// <param name="id">Id</param>
        /// <returns></returns>
        public bool HasChildren(Guid parentId)
        {
            return _repository.HasChildren(it => it.ParentId == parentId);
        }

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
        public DepartmentDto Get(Guid id)
        {
            return Mapper.Map<DepartmentDto>(_repository.Get(id));
        }
    }
}
