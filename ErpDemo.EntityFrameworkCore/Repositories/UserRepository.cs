using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using ErpDemo.Domain.Entities;
using ErpDemo.Domain.IRepositories;

namespace ErpDemo.EntityFrameworkCore.Repositories
{
    /// <summary>
    /// User repository implemention
    /// </summary>
    public class UserRepository : ErpDemoRepository<User>, IUserRepository
    {
        public UserRepository(ErpDemoDBContext dbcontext) : base(dbcontext)
        {

        }
        /// <summary>
        /// Check user exist or not
        /// </summary>
        /// <param name="userName">user name</param>
        /// <param name="password">password</param>
        /// <returns>return entity if exist, otherwise return null</returns>
        public User CheckUser(string userName, string password)
        {
            return _dbContext.Set<User>().FirstOrDefault(it => it.UserName == userName && it.Password == password);
        }

        /// <summary>
        /// Get entity by Id
        /// </summary>
        /// <param name="id">Id</param>
        /// <returns></returns>
        public User GetWithRoles(Guid id)
        {
            var user = _dbContext.Set<User>().FirstOrDefault(it => it.Id == id);
            if (user != null)
            {
                user.UserRoles = _dbContext.Set<UserRole>().Where(it => it.UserId == id).ToList();
            }
            return user;
        }

        /// <summary>
        /// Update user role
        /// </summary>
        /// <param name="userId">user Id</param>
        /// <param name="userRoles">user roles</param>
        /// <returns></returns>
        public bool UpdateUserRole(Guid userId, List<UserRole> userroles)
        {
            var oldDatas = _dbContext.Set<UserRole>().Where(it => it.UserId == userId).ToList();
            oldDatas.ForEach(it => _dbContext.Set<UserRole>().Remove(it));
            _dbContext.SaveChanges();
            _dbContext.Set<UserRole>().AddRange(userroles);
            _dbContext.SaveChanges();
            return true;
        }
    }
}
