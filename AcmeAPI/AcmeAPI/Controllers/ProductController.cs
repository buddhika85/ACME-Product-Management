using AcmeAPI.Models;
using System;
using System.Web.Http;
using System.Web.Http.Cors;

namespace AcmeAPI.Controllers
{
    // https://stackoverflow.com/questions/18619656/enable-cors-in-web-api-2
    [AllowAnonymous]
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    [RoutePrefix("api/Product")]
    public class ProductController : ApiController
    {
        public ProductService ProductService { get; set; }

        public ProductController()
        {
            ProductService = new ProductService();
        }

        [HttpGet]
        public IHttpActionResult SearchProducts(string searchString = "")
        {
            try
            {
                var products = ProductService.SearchProducts(searchString);
                return Ok(products);
            }
            catch (Exception e)
            {
                return InternalServerError(e);
            }
        }


        [HttpGet]
        public IHttpActionResult GetProductById(int productId)
        {
            try
            {
                var product = ProductService.GetProductById(productId);
                if (product != null)
                {
                    return Ok(product);
                }
                return NotFound();
            }
            catch (Exception e)
            {
                return InternalServerError(e);
            }
        }
    }
}
