using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using AutoMapper;
using ErpDemo.Application.RoleApp.Dtos;
using ErpDemo.Domain.Entities;
using ErpDemo.Domain.IRepositories;

namespace ErpDemo.Application.RoleApp
{
    public class RoleAppService : IRoleAppService
    {
        private readonly IRoleRepository _repository;
        public RoleAppService(IRoleRepository repository)
        {
            _repository = repository;
        }

        /// <summary>
        /// Get role list
        /// </summary>
        /// <returns></returns>
        public List<RoleDto> GetAllList()
        {
            return Mapper.Map<List<RoleDto>>(_repository.GetAllList().OrderBy(it => it.Code));
        }

        /// <summary>
        /// Get page list
        /// </summary>
        /// <param name="startPage">start page</param>
        /// <param name="pageSize">page size</param>
        /// <param name="rowCount">row count</param>
        /// <returns></returns>
        public List<RoleDto> GetAllPageList(int startPage, int pageSize, out int rowCount)
        {
            return Mapper.Map<List<RoleDto>>(_repository.LoadPageList(startPage, pageSize, out rowCount, null, it => it.Code));
        }

        /// <summary>
        /// Insert or update
        /// </summary>
        /// <param name="dto">entity</param>
        /// <returns></returns>
        public bool InsertOrUpdate(RoleDto dto)
        {
            var menu = _repository.InsertOrUpdate(Mapper.Map<Role>(dto));
            return menu == null ? false : true;
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
        public RoleDto Get(Guid id)
        {
            return Mapper.Map<RoleDto>(_repository.Get(id));
        }

        /// <summary>
        /// Get all menulist by role
        /// </summary>
        /// <returns></returns>
        public List<Guid> GetAllMenuListByRole(Guid roleId)
        {
            return _repository.GetAllMenuListByRole(roleId);
        }

        /// <summary>
        /// Update role menu
        /// </summary>
        /// <param name="roleId">role Id</param>
        /// <param name="roleMenus">role menu collection</param>
        /// <returns></returns>
        public bool UpdateRoleMenu(Guid roleId, List<RoleMenuDto> roleMenus)
        {
            return _repository.UpdateRoleMenu(roleId, Mapper.Map<List<RoleMenu>>(roleMenus));
        }
    }
}
