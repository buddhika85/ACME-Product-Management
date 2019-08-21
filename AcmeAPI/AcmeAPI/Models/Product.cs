using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AcmeAPI.Models
{
    public class Product
    {
        public int productId { get; set; }
        public string productName { get; set; }
        public string productCode { get; set; }
        public string releaseDate { get; set; }
        public string description { get; set; }
        public double price { get; set; }
        public double starRating { get; set; }
        public string imageUrl { get; set; }
    }


    public class ProductService
    {
        public ProductRepository ProductRepository { get; set; }

        public ProductService()
        {
            ProductRepository = new ProductRepository();
        }

        public List<Product> SearchProducts(string searchString)
        {
            var list = ProductRepository.GetAllProducts();

            if (!string.IsNullOrWhiteSpace(searchString))
            {
                searchString = searchString.Trim().ToLower();
                list = list.Where(x =>
                    (x.productName != null && x.productName.ToLower().Contains(searchString)) || 
                    (x.productCode != null && x.productCode.ToLower().Contains(searchString)) ||
                    (x.description != null && x.description.ToLower().Contains(searchString))).ToList();
            }

            return list;
        }

        public Product GetProductById(int productId)
        {
            var product = ProductRepository.GetAllProducts().SingleOrDefault(x => x.productId == productId);
            return product;
        }
    }


    public class ProductRepository
    {
        public List<Product> GetAllProducts()
        {
            try
            {
                return new List<Product>
                {
                    new Product {
                        productId = 1,
                        productName = "Leaf Rake",
                        productCode = "GDN-0011",
                        releaseDate = "March 19, 2016",
                        description = "Leaf rake with 48-inch wooden handle.",
                        price = 19.95,
                        starRating = 3.2,
                        imageUrl = "https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
                    },
                    new Product {
                        productId = 2,
                        productName = "Garden Cart",
                        productCode = "GDN-0023",
                        releaseDate = "March 18, 2016",
                        description = "15 gallon capacity rolling garden cart",
                        price = 32.99,
                        starRating = 4.2,
                        imageUrl = "https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
                    },
                    new Product {
                        productId = 5,
                        productName = "Hammer",
                        productCode = "TBX-0048",
                        releaseDate = "May 21, 2016",
                        description = "Curved claw steel hammer",
                        price = 8.9,
                        starRating = 4.8,
                        imageUrl = "https://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
                    },
                    new Product {
                        productId = 8,
                        productName = "Saw",
                        productCode = "TBX-0022",
                        releaseDate = "May 15, 2016",
                        description = "15-inch steel blade hand saw",
                        price = 11.55,
                        starRating = 3.7,
                        imageUrl = "https://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png"
                    },
                    new Product {
                        productId = 10,
                        productName = "Video Game Controller",
                        productCode = "GMG-0042",
                        releaseDate = "October 15, 2015",
                        description = "Standard two-button video game controller",
                        price = 35.95,
                        starRating = 4.6,
                        imageUrl = "https://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png"
                    },
                    new Product {
                        productId = 12,
                        productName = "Product from service",
                        productCode = "GDN-0011",
                        releaseDate = "March 19, 2016",
                        description = "Leaf rake with 48-inch wooden handle.",
                        price = 19.95,
                        starRating = 3.2,
                        imageUrl = "https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
                    },

                };
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
        }
    }
}