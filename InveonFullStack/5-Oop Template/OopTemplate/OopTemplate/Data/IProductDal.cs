using OopTemplate.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace OopTemplate.Data
{
    interface IProductDal
    {
        void Add(IProduct product);
        void Update(IProduct product);
        void Delete(IProduct product);
        void GetID(IProduct product);
        void GetAll(IProduct product);
    }
}
