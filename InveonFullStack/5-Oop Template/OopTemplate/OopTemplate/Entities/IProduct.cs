using System;
using System.Collections.Generic;
using System.Text;

namespace OopTemplate.Entities
{
    interface IProduct
    {
         int Id { get; set; }
         string Name { get; set; }
         string Description { get; set; }
         double Price { get; set; }
         string Picture { get; set; }
         Category Category { get; set; }

    }
}
