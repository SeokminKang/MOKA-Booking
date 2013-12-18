using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MokaBooking.Web.UI.Controllers
{
	public class BookingController : Controller
	{
		//
		// GET: /Booking/
		public ActionResult Index()
		{
			return View();
		}
	}
}