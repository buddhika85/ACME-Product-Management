using AcmeAPI.Models;
using System;
using System.Web.Http;

namespace AcmeAPI.Controllers
{
    [AllowAnonymous]
    [RoutePrefix("api/Product")]
    public class ProductController : ApiController
    {
        public ProductService ProductService { get; set; }

        public ProductController()
        {
            ProductService = new ProductService();
        }

        [HttpGet]
        public IHttpActionResult GetAllProducts()
        {
            try
            {
                var products = ProductService.GetAllProducts();
                return Ok(products);
            }
            catch (Exception e)
            {
                return InternalServerError(e);
            }
        }
    }
}
