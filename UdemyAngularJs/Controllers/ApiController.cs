using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace UdemyAngularJs.Controllers
{
    public class ApiController : Controller
    {
        private static List<string> list = new List<string>();
        [HttpGet]
        public JsonResult Index()
        {
            list = new List<string>() { "All good", "Daamn pretty", "Amazing" };

            return Json(list, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult Index(string newRule, bool operation = false)
        {
            if (!operation)
            {
                if (newRule != "")
                {
                    list.Add(newRule);
                }
            }
            else
            {
                list.Remove(newRule);
            }
            

            return Json(list, JsonRequestBehavior.AllowGet);
        }


    }
}
