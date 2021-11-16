using OopTemplate.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace OopTemplate.Data
{
    class FileSaveProductDal : IProductDal
    {
        public void Add(IProduct product)
        {
            Console.WriteLine($"{product.Name}  saved to File");
        }

        public void Delete(IProduct product)
        {
            Console.WriteLine("Product deleted from File");
        }

        public void GetAll(IProduct product)
        {
            Console.WriteLine("All Datas from File");
        }

        public void GetID(IProduct product)
        {
            Console.WriteLine("Data from File");
        }

        public void Update(IProduct product)
        {
            Console.WriteLine($"{product.Name} updated from File");
        }
    }
}
