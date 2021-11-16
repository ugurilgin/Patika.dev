using OopTemplate.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace OopTemplate.Data
{
    class OracleSqlProductDal : IProductDal
    {
        public void Add(IProduct product)
        {
            Console.WriteLine($"{product.Name} saved to OracleSql");
        }

        public void Delete(IProduct product)
        {
            Console.WriteLine($"{product.Name} deleted from OracleSql");
        }

        public void GetAll(IProduct product)
        {
            Console.WriteLine("All Datas from OracleSql");
        }

        public void GetID(IProduct product)
        {
            Console.WriteLine("Data from OracleSql");
        }

        public void Update(IProduct product)
        {
            Console.WriteLine($"{product.Name} updated from OracleSql");

        }
    }
}
