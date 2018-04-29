using System;
using System.Collections.Generic;
using System.Text;
using ErpDemo.Domain.IRepositories;
using System.Linq;
using System.Linq.Expressions;
using ErpDemo.Domain;
using System.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using System.Data;

namespace ErpDemo.EntityFrameworkCore.Repositories
{
    /// <summary>
    /// Repository base class
    /// </summary>
    /// <typeparam name="TEntity">entity</typeparam>
    /// <typeparam name="TPrimaryKey">primary key</typeparam>
    public abstract class ErpDemoRepository<TEntity, TPrimaryKey> : IRepository<TEntity, TPrimaryKey> where TEntity : Entity<TPrimaryKey>
    {
        //Define data access context object 
        protected readonly ErpDemoDBContext _dbContext;

        /// <summary>
        /// Get instance by constructor injection
        /// </summary>
        /// <param name="dbContext"></param>
        public ErpDemoRepository(ErpDemoDBContext dbContext)
        {
            _dbContext = dbContext;
        }

        /// <summary>
        /// Get entity collection
        /// </summary>
        /// <returns></returns>
        public List<TEntity> GetAllList()
        {
            return _dbContext.Set<TEntity>().ToList();
        }

        /// <summary>
        /// Get entity collection by lambda expression
        /// </summary>
        /// <param name="predicate">lambda expression</param>
        /// <returns></returns>
        public List<TEntity> GetAllList(Expression<Func<TEntity, bool>> predicate)
        {
            return _dbContext.Set<TEntity>().Where(predicate).ToList();
        }

        /// <summary>
        /// Get entity by primary key
        /// </summary>
        /// <param name="id">primary key</param>
        /// <returns></returns>
        public TEntity Get(TPrimaryKey id)
        {
            return _dbContext.Set<TEntity>().FirstOrDefault(CreateEqualityExpressionForId(id));
        }

        /// <summary>
        /// Has children
        /// </summary>
        /// <param name="id">Entity primary key</param>
        /// <returns></returns>
        public Boolean HasChildren(Expression<Func<TEntity, bool>> where = null)
        {
            var result = from p in _dbContext.Set<TEntity>()
                         select p;
            if (where != null)
                result = result.Where(where);
            if (result.Count() > 0)
                return true;
            else
                return false;
        }

        /// <summary>
        /// Get child by parent
        /// </summary>
        /// <param name="predicate">lambda expression</param>
        /// <returns></returns>
        public IQueryable<TEntity> GetChildByParent(Expression<Func<TEntity, bool>> predicate)
        {
            return _dbContext.Set<TEntity>().Where(predicate); 
        }

        /// <summary>
        /// Get list by id
        /// </summary>
        /// <param name="predicate">lambda expression</param>
        /// <returns></returns>
        public IQueryable<TEntity> GetListById(Expression<Func<TEntity, bool>> predicate)
        {
            return _dbContext.Set<TEntity>().Where(predicate);
        }

        /// <summary>
        /// Get individual entity by lambda expression
        /// </summary>
        /// <param name="predicate">lambda expression</param>
        /// <returns></returns>
        public TEntity FirstOrDefault(Expression<Func<TEntity, bool>> predicate)
        {
            return _dbContext.Set<TEntity>().FirstOrDefault(predicate);
        }

        /// <summary>
        /// Create entity
        /// </summary>
        /// <param name="entity">entity</param>
        /// <param name="autoSave">save immediately or not</param>
        /// <returns></returns>
        public TEntity Insert(TEntity entity, bool autoSave = true)
        {
            _dbContext.Set<TEntity>().Add(entity);
            if (autoSave)
                Save();
            return entity;
        }

        /// <summary>
        /// Update entity
        /// </summary>
        /// <param name="entity">entity</param>
        /// <param name="autoSave">save immediately or not</param>
        public TEntity Update(TEntity entity, bool autoSave = true)
        {
            var obj = Get(entity.Id);
            EntityToEntity(entity, obj);
            if (autoSave)
                Save();
            return entity;
        }
        private void EntityToEntity<T>(T pTargetObjSrc, T pTargetObjDest)
        {
            foreach (var mItem in typeof(T).GetProperties())
            {
                mItem.SetValue(pTargetObjDest, mItem.GetValue(pTargetObjSrc, new object[] { }), null);
            }
        }
        /// <summary>
        /// Create or update entity
        /// </summary>
        /// <param name="entity">entity</param>
        /// <param name="autoSave">save immediately or not</param>
        public TEntity InsertOrUpdate(TEntity entity, bool autoSave = true)
        {
            //if (Get(entity.Id) != null&& !entity.Id.Equals(Guid.Empty))
            if (Get(entity.Id) != null)
            {
                return Update(entity, autoSave);
            }
            return Insert(entity, autoSave);
        }

        /// <summary>
        /// Delete entity
        /// </summary>
        /// <param name="entity">target entity</param>
        /// <param name="autoSave">save immediately or not</param>
        public void Delete(TEntity entity, bool autoSave = true)
        {
            _dbContext.Set<TEntity>().Remove(entity);
            if (autoSave)
                Save();
        }

        /// <summary>
        /// Delete entity
        /// </summary>
        /// <param name="id">primary key</param>
        /// <param name="autoSave">save immediately or not</param>
        public void Delete(TPrimaryKey id, bool autoSave = true)
        {
            _dbContext.Set<TEntity>().Remove(Get(id));
            if (autoSave)
                Save();
        }

        /// <summary>
        /// Delete entity by lambda expression
        /// </summary>
        /// <param name="where">lambda expression</param>
        /// <param name="autoSave">save immediately or not</param>
        public void Delete(Expression<Func<TEntity, bool>> where, bool autoSave = true)
        {
            _dbContext.Set<TEntity>().Where(where).ToList().ForEach(it => _dbContext.Set<TEntity>().Remove(it));
            if (autoSave)
                Save();
        }

        /// <summary>
        /// Pagination 
        /// </summary>
        /// <param name="startPage">start page</param>
        /// <param name="pageSize">page size</param>
        /// <param name="rowCount">row count</param>
        /// <param name="where">where</param>
        /// <param name="order">order</param>
        /// <returns></returns>
        public IQueryable<TEntity> LoadPageList(int startPage, int pageSize, out int rowCount, Expression<Func<TEntity, bool>> where = null, Expression<Func<TEntity, object>> order = null)
        {
            var result = from p in _dbContext.Set<TEntity>()
                         select p;
            if (where != null)
                result = result.Where(where);
            if (order != null)
                result = result.OrderBy(order);
            else
                result = result.OrderBy(m => m.Id);
            rowCount = result.Count();
            return result.Skip((startPage - 1) * pageSize).Take(pageSize);
        }

        /// <summary>
        /// Transaction save
        /// </summary>
        public void Save()
        {
            _dbContext.SaveChanges();
        }

        /// <summary>
        /// Contruct lambda expression by primary key
        /// </summary>
        /// <param name="id">primary key</param>
        /// <returns></returns>
        protected static Expression<Func<TEntity, bool>> CreateEqualityExpressionForId(TPrimaryKey id)
        {
            var lambdaParam = Expression.Parameter(typeof(TEntity));
            var lambdaBody = Expression.Equal(
                Expression.PropertyOrField(lambdaParam, "Id"),
                Expression.Constant(id, typeof(TPrimaryKey))
                );

            return Expression.Lambda<Func<TEntity, bool>>(lambdaBody, lambdaParam);
        }

        // execute stored procedure -- order approve
        public void OrderApprove(Guid Id)
        {
            var id = new SqlParameter("@id", Id);
            _dbContext.Database.ExecuteSqlCommand("exec proc_orders_Approve @id", id);
        }

        // execute stored procedure -- restore database
        public bool RestoreDatabase()
        {
            var resultParameter = new SqlParameter("@rtn", SqlDbType.Int)
            {
                Direction = ParameterDirection.Output
            };
            var output = _dbContext.Database.ExecuteSqlCommand("EXEC proc_ErpDemoDB_Restore @rtn out", resultParameter);  
            if ((int)resultParameter.Value == 1)
            {
                return true;
            }
            else
            {
                return false;
            }
        }
    }

    /// <summary>
    /// 主键为Guid类型的仓储基类
    /// </summary>
    /// <typeparam name="TEntity">实体类型</typeparam>
    public abstract class ErpDemoRepository<TEntity> : ErpDemoRepository<TEntity, Guid> where TEntity : Entity
    {
        public ErpDemoRepository(ErpDemoDBContext dbContext) : base(dbContext)
        {
        }
    }

}
