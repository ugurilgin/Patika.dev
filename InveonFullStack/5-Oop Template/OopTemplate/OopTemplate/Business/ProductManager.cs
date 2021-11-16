using OopTemplate.Data;
using OopTemplate.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace OopTemplate.Business
{
    class ProductManager
    {
        private  IProductDal _productDal;
        public ProductManager(IProductDal productDal)
        {
            _productDal = productDal;
        }

        public void Add(IProduct product)
        {
            _productDal.Add(product);
        }
        public void Update(IProduct product)
        {
            _productDal.Update(product);
        }
        public void Delete(IProduct product)
        {
            _productDal.Delete(product);
        }
        public void GetID(IProduct product)
        {
            _productDal.GetID(product);
        }
        public void GetAll(IProduct product)
        {
            _productDal.GetAll(product);
        }
    }
}
