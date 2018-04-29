using System;
using System.Collections.Generic;
using System.Text;
using ErpDemo.Application.UserApp.Dtos;
using ErpDemo.Domain.Entities;

namespace ErpDemo.Application.UserApp
{
    public interface IUserAppService
    {
        User CheckUser(string userName, string password);

        /// <summary>
        /// Get page list
        /// </summary>
        /// <param name="startPage">start page</param>
        /// <param name="pageSize">page size</param>
        /// <param name="rowCount">row count</param>
        /// <returns></returns>
        List<UserDto> GetAllUserList(int startPage, int pageSize, out int rowCount);

        List<UserDto> GetUserByDepartment(Guid departmentId, int startPage, int pageSize, out int rowCount);

        UserDto InsertOrUpdate(UserDto dto);

        /// <summary>
        /// Delete batch by Id collection
        /// </summary>
        /// <param name="ids">Id collection/param>
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
        UserDto Get(Guid id);

        // execute stored procedure -- restore database
        bool RestoreDatabase();
        /// <summary>
        ///// Update user role
        ///// </summary>
        ///// <param name="userId">user Id</param>
        ///// <param name="userRoles">user role collection</param>
        ///// <returns></returns>
        //bool UpdateUserRole(Guid userId, List<UserRoleDto> userRoles);
    }
}
