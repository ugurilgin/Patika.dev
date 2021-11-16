using System;
using System.Collections.Generic;
using System.Text;

namespace OopTemplate.Entities
{
    class Book : IProduct
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public double Price { get; set; }
        public string Picture { get; set; }
        public Category Category { get; set; }
        public string Author { get; set; }
}
}
