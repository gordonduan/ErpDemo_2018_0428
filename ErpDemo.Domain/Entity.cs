using System;
using System.Collections.Generic;
using System.Text;

namespace ErpDemo.Domain
{
    /// <summary>
    /// Generic entity base class
    /// </summary>
    /// <typeparam name="TPrimaryKey">Primary key type</typeparam>
    public abstract class Entity<TPrimaryKey>
    {
        /// <summary>
        /// Primary key
        /// </summary>
        public virtual TPrimaryKey Id { get; set; }
    }

    /// <summary>
    /// Define entity base class which default type of primary key is Guid
    /// </summary>
    public abstract class Entity : Entity<Guid>
    {

    }
}
