using OopTemplate.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace OopTemplate.Data
{
    class MySqlProductDal : IProductDal
    {
        public void Add(IProduct product)
        {
            Console.WriteLine($"{product.Name} saved to MySql");
        }

        public void Delete(IProduct product)
        {
            Console.WriteLine($"{product.Name} deleted from MySql");
        }

        public void GetAll(IProduct product)
        {
            Console.WriteLine("All Datas from MySql");
        }

        public void GetID(IProduct product)
        {
            Console.WriteLine("Data from MySql");
        }

        public void Update(IProduct product)
        {
            Console.WriteLine($"{product.Name} updated from MySql");
        }
    }
}
