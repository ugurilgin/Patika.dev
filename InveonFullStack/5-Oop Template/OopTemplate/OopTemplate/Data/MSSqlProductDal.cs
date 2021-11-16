using OopTemplate.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace OopTemplate.Data
{
    class MSSqlProductDal : IProductDal
    {
        public void Add(IProduct product)
        {
            Console.WriteLine($"{product.Name} saved to MSSql");
        }

        public void Delete(IProduct product)
        {
            Console.WriteLine("Product deleted from MSSql");
        }

        public void GetAll(IProduct product)
        {
            Console.WriteLine("All Datas from MSSql");
        }

        public void GetID(IProduct product)
        {
            Console.WriteLine("Data from MSSql");
        }

        public void Update(IProduct product)
        {
            Console.WriteLine($"{product.Name} updated from MSSql");
        }
    }
}
