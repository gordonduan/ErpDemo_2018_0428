using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ErpDemo.Application.UserApp;
using ErpDemo.Models;
using ErpDemo.Utility.Convert;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ErpDemo.Controllers
{
    public class LoginController : Controller
    {
        private IUserAppService _userAppService;
        public LoginController(IUserAppService userAppService)
        {
            _userAppService = userAppService;
        }

        // GET: /<controller>/
        public IActionResult Index()
        {
            return View();
        }

        //execute stored procedure -- restore database
        public IActionResult RestoreDatabase()
        {
            try
            {
                if (_userAppService.RestoreDatabase())
                {
                    return Json(new
                    {
                        Result = "Success"
                    });
                }
                else
                {
                    return Json(new
                    {
                        Result = "Failed"
                    });
                }
            }
            catch (Exception ex)
            {
                return Json(new
                {
                    Result = "Faild",
                    Message = ex.Message
                });
            }
        }
        
        public IActionResult Logout()
        {
            HttpContext.Session.Clear();
            return RedirectToAction("Index");
        }

        [HttpPost]
        public IActionResult Index(LoginModel model)
        {
            if (ModelState.IsValid)
            {
                //Check user info
                var user = _userAppService.CheckUser(model.UserName, model.Password);
                if (user != null)
                {
                    //if (HttpContext.Session.GetString("CurrentUserId") !=null)
                    //{
                    //    ViewBag.ErrorInfo = "User already signed in.";
                    //    return View();
                    //}
                    //Set Session
                    HttpContext.Session.SetString("CurrentUserId", user.Id.ToString());
                    HttpContext.Session.Set("CurrentUser", ByteConvertHelper.Object2Bytes(user));
                    //Redirect to homgepage
                    return RedirectToAction("About", "Home");
                }
                ViewBag.ErrorInfo = "Invalid Username or Password";
                return View();
            }
            foreach (var item in ModelState.Values)
            {
                if (item.Errors.Count > 0)
                {
                    ViewBag.ErrorInfo = item.Errors[0].ErrorMessage;
                    break;
                }
            }
            return View(model);
        }
    }
}