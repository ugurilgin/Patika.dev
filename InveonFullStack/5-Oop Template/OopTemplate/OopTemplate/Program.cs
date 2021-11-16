using System;
using OopTemplate.Entities;
using OopTemplate.Data;
using OopTemplate.Business;
namespace OopTemplate
{
    class Program
    {
        static void Main(string[] args)
        {
             Book book = new Book {
                 Id=1,
                 Category= new Category { Id = 1, Name = "Books" },
                 Description="Yeni Kitap hakkında ",
                 Author="Yazar",
                 Name="Yeni Kitap",
                 Picture="D:\\kitap.png",
                 Price=10.99,
            };
            ProductManager productMySQL = new ProductManager(new MySqlProductDal());
            productMySQL.Add(book);
            ProductManager productFile = new ProductManager(new FileSaveProductDal());
            productFile.Update(book);
            ProductManager productOracle = new ProductManager(new OracleSqlProductDal());
            productOracle.Delete(book);
            ProductManager productMSSql = new ProductManager(new MSSqlProductDal());
            productMSSql.GetAll(book);
            Console.ReadKey();
        }
    }
}
