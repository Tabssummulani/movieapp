using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using PopularMovieAPI.Model;

namespace PopularMovieAPI.Controllers
{
    [Route("api/[controller]")]
    public class MoviesController : Controller
    {
        // GET api/values
        [HttpGet]
        public JsonData GetMovieList()
        {
            JsonData jsonData = JsonConvert.DeserializeObject<JsonData>(System.IO.File.ReadAllText(@"sample.json"));

            return jsonData;
        }
    }


}