using System;
using System.Collections.Generic;
using System.Text;
using AutoMapper;
using ErpDemo.Application.CategoryApp.Dtos;
using ErpDemo.Domain.Entities;
using ErpDemo.Domain.IRepositories;

namespace ErpDemo.Application.CategoryApp
{
    public class CategoryAppService : ICategoryAppService
    {
        private readonly ICategoryRepository _repository;
        public CategoryAppService(ICategoryRepository repository)
        {
            _repository = repository;
        }
        /// <summary>
        /// Get department list
        /// </summary>
        /// <returns></returns>
        public List<CategoriesDto> GetAllList()
        {
            return Mapper.Map<List<CategoriesDto>>(_repository.GetAllList(it => it.Id != Guid.Empty));
        }

        /// <summary>
        /// Get child list by parent Id
        /// </summary>
        /// <param name="parentId">parent Id</param>
        /// <param name="startPage">start page</param>
        /// <param name="pageSize">page size</param>
        /// <param name="rowCount">row count</param>
        /// <returns></returns>
        public List<CategoriesDto> GetChildrenByParent(Guid parentId, int startPage, int pageSize, out int rowCount)
        {
            return Mapper.Map<List<CategoriesDto>>(_repository.LoadPageList(startPage, pageSize, out rowCount, it => it.ParentId == parentId, it => it.Code));
        }

        /// <summary>
        /// Insert or update
        /// </summary>
        /// <param name="dto">entity</param>
        /// <returns></returns>
        public bool InsertOrUpdate(CategoriesDto dto)
        {
            var menu = _repository.InsertOrUpdate(Mapper.Map<Categories>(dto));
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
        /// Get children by parent
        /// </summary>
        /// <param name="predicate">lambda expression</param>
        /// <returns></returns>
        public List<CategoriesDto> GetChildrenByParent(Guid parentId)
        {
            return Mapper.Map<List<CategoriesDto>>(_repository.GetChildByParent(it => it.ParentId == parentId));
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
        public CategoriesDto Get(Guid id)
        {
            return Mapper.Map<CategoriesDto>(_repository.Get(id));
        }
    }
}
