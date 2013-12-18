﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MokaBooking.Web.UI.Controllers
{
    public class HomeController : Controller
    {
        //
        // GET: /Home/

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            return View();
        }
        public ActionResult Book()
        {
            return View();
        }
        public ActionResult Booking()
        {

            var booked = true;
            if (booked)
            {
                ViewBag.booked = true;
            }
            else
            {
                ViewBag.booked = false;
            }
            return View();
        }
    }
}
