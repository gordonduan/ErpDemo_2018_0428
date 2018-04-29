using System;
using System.Collections.Generic;
using System.Text;
using ErpDemo.Domain.Entities;
using ErpDemo.Domain.IRepositories;
using AutoMapper;
using ErpDemo.Application.UserApp.Dtos;

namespace ErpDemo.Application.UserApp
{
    /// <summary>
    /// 
    /// </summary>
    public class UserAppService : IUserAppService
    {
        //User management repository implemention
        private readonly IUserRepository _repository;

        /// <summary>
        /// Dependency injection by constructor
        /// </summary>
        /// <param name="userRepository">repository object</param>
        public UserAppService(IUserRepository userRepository)
        {
            _repository = userRepository;
        }

        public User CheckUser(string userName, string password)
        {
            return _repository.CheckUser(userName, password);
        }

        public List<UserDto> GetAllUserList(int startPage, int pageSize, out int rowCount)
        {
            return Mapper.Map<List<UserDto>>(_repository.LoadPageList(startPage, pageSize, out rowCount, null, it => it.Id));
        }

        public List<UserDto> GetUserByDepartment(Guid departmentId, int startPage, int pageSize, out int rowCount)
        {
            return Mapper.Map<List<UserDto>>(_repository.LoadPageList(startPage, pageSize, out rowCount, it => it.DepartmentId == departmentId, it => it.CreateTime));
        }

        /// <summary>
        /// Insert or update
        /// </summary>
        /// <param name="dto">entity</param>
        /// <returns></returns>
        public UserDto InsertOrUpdate(UserDto dto)
        {
            if (Get(dto.Id) != null)
                _repository.Delete(dto.Id);
            var user = _repository.InsertOrUpdate(Mapper.Map<User>(dto));
            return Mapper.Map<UserDto>(user);
        }
        /// <summary>
        /// Delete batch by Id
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
        public UserDto Get(Guid id)
        {
            return Mapper.Map<UserDto>(_repository.GetWithRoles(id));
        }

        // execute stored procedure -- restore database
        public bool RestoreDatabase()
        {
            if (_repository.RestoreDatabase())
            {
                return true;
            }else
            {
                return false;
            }

        }
        /// <summary>
        /// Update user role
        /// </summary>
        /// <param name="userId">user Id</param>
        /// <param name="userRoles">user role collection</param>
        /// <returns></returns>
        //public bool UpdateUserRole(Guid userId, List<UserRoleDto> userroles)
        //{
        //    return _repository.UpdateUserRole(userId, Mapper.Map<List<UserRoleDto>>(userroles));
        //}
    }
}
