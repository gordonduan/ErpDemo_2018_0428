using System;
using System.Collections.Generic;
using System.Text;
using ErpDemo.Domain;
using Newtonsoft.Json;

namespace ErpDemo.Utility.Convert
{
    public class ByteConvertHelper
    {
        /// <summary>
        /// Convert object to byte array
        /// </summary>
        /// <param name="obj">object to be converted</param>
        /// <returns>byte array after conversion</returns>
        public static byte[] Object2Bytes(object obj)
        {
            string json = JsonConvert.SerializeObject(obj);
            byte[] serializedResult = System.Text.Encoding.UTF8.GetBytes(json);
            return serializedResult;
        }

        /// <summary>
        /// Convert byte array to object
        /// </summary>
        /// <param name="buff">byte array to be converted</param>
        /// <returns>object after conversion</returns>
        public static object Bytes2Object(byte[] buff)
        {
            string json = System.Text.Encoding.UTF8.GetString(buff);
            return JsonConvert.DeserializeObject<object>(json);
        }

        /// <summary>
        /// Convert byte array to object
        /// </summary>
        /// <param name="buff">byte array to be converted</param>
        /// <returns>object after conversion</returns>
        public static T Bytes2Object<T>(byte[] buff)
        {
            string json = System.Text.Encoding.UTF8.GetString(buff);
            return JsonConvert.DeserializeObject<T>(json);
        }
    }

    public class JsonAttributeClass<T> where T : Entity
    {
        public static string EntityToJsonConvertor(T entity)
        {
            string json = JsonConvert.SerializeObject(entity);
            return json;

        }

        public static T JsonToEntityConvertor(string json)
        {
            var entity = JsonConvert.DeserializeObject<T>(json);
            return entity;
        }
    }
}
