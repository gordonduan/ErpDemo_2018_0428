using System;
using System.Collections.Generic;
using System.Text;
using ErpDemo.Domain.Entities;

namespace ErpDemo.Domain.IRepositories
{
    /// <summary>
    /// User repository interface
    /// </summary>
    public interface IUserRepository : IRepository<User>
    {
        /// <summary>
        /// check user exist or not
        /// </summary>
        /// <param name="userName">username</param>
        /// <param name="password">password</param>
        /// <returns>return entity if exist, otherwise return null</returns>
        User CheckUser(string userName, string password);

        User GetWithRoles(Guid id);

        /// <summary>
        /// Update user role
        /// </summary>
        /// <param name="userId">user Id</param>
        /// <param name="userRoles">user roles collections</param>
        /// <returns></returns>
        bool UpdateUserRole(Guid userId, List<UserRole> userroles);
    }
}
