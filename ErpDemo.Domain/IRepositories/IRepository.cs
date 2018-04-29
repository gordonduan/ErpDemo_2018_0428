using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using ErpDemo.Domain.Entities;

namespace ErpDemo.Domain.IRepositories
{
    /// <summary>
    /// Define repository interface
    /// </summary>
    public interface IRepository
    {

    }
    /// <summary>
    /// Define generic repository interface
    /// </summary>
    /// <typeparam name="TEntity">Entities</typeparam>
    /// <typeparam name="TPrimaryKey">primary key</typeparam>
    public interface IRepository<TEntity, TPrimaryKey> : IRepository where TEntity : Entity<TPrimaryKey>
    {
        /// <summary>
        /// Get entity collection
        /// </summary>
        /// <returns></returns>
        List<TEntity> GetAllList();

        /// <summary>
        /// Get entity collection by lambda expression
        /// </summary>
        /// <param name="predicate">lambda expression</param>
        /// <returns></returns>
        List<TEntity> GetAllList(Expression<Func<TEntity, bool>> predicate);

        /// <summary>
        /// Get entity by primary key
        /// </summary>
        /// <param name="id">Entity primary key</param>
        /// <returns></returns>
        TEntity Get(TPrimaryKey id);

        /// <summary>
        /// Has children
        /// </summary>
        /// <param name="weher">lambda expression</param>
        /// <returns></returns>
        Boolean HasChildren(Expression<Func<TEntity, bool>> where);

        /// <summary>
        /// Get child by parent
        /// </summary>
        /// <param name="where">lambda expression</param>
        /// <returns></returns>
        IQueryable<TEntity> GetChildByParent(Expression<Func<TEntity, bool>> predicate);

        /// <summary>
        /// Get child by parent
        /// </summary>
        /// <param name="predicate">lambda expression</param>
        /// <returns></returns>
        IQueryable<TEntity> GetListById(Expression<Func<TEntity, bool>> predicate);

        /// <summary>
        /// Get individual entity by lambda expression
        /// </summary>
        /// <param name="predicate">lambda expression</param>
        /// <returns></returns>
        TEntity FirstOrDefault(Expression<Func<TEntity, bool>> predicate);

        /// <summary>
        /// Create entity
        /// </summary>
        /// <param name="entity">entity</param>
        /// <param name="autoSave">save immediately or not</param>
        /// <returns></returns>
        TEntity Insert(TEntity entity, bool autoSave = true);

        /// <summary>
        /// Update entity
        /// </summary>
        /// <param name="entity">entity</param>
        /// <param name="autoSave">save immediately or not</param>
        TEntity Update(TEntity entity, bool autoSave = true);

        /// <summary>
        /// Create or update entity
        /// </summary>
        /// <param name="entity">entity</param>
        /// <param name="autoSave">save immediately or not</param>
        TEntity InsertOrUpdate(TEntity entity, bool autoSave = true);

        /// <summary>
        /// Delete entity
        /// </summary>
        /// <param name="entity">entity</param>
        /// <param name="autoSave">save immediately or not</param>
        void Delete(TEntity entity, bool autoSave = true);

        /// <summary>
        /// Delete entity
        /// </summary>
        /// <param name="id">entity primary key</param>
        /// <param name="autoSave">save immediately or not</param>
        void Delete(TPrimaryKey id, bool autoSave = true);

        /// <summary>
        /// Delete entity by lambda expression
        /// </summary>
        /// <param name="where">lambda expression</param>
        /// <param name="autoSave">save immediately or not</param>
        void Delete(Expression<Func<TEntity, bool>> where, bool autoSave = true);

        /// <summary>
        /// Pagination
        /// </summary>
        /// <param name="startPage">startPage</param>
        /// <param name="pageSize">pageSize</param>
        /// <param name="rowCount">rowCount</param>
        /// <param name="where">where</param>
        /// <param name="order">order</param>
        /// <returns></returns>
        IQueryable<TEntity> LoadPageList(int startPage, int pageSize, out int rowCount, Expression<Func<TEntity, bool>> where, Expression<Func<TEntity, object>> order);

        void Save();

        // execute stored procedure -- order approve
        void OrderApprove(Guid Id);

        // execute stored procedure -- restore database
        bool RestoreDatabase();
    }

    /// <summary>
    /// Default Guid type primary key repository
    /// </summary>
    /// <typeparam name="TEntity"></typeparam>
    public interface IRepository<TEntity> : IRepository<TEntity, Guid> where TEntity : Entity
    {

    }
}
