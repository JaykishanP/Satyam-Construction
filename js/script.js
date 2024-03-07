// 

(function() {
    "use strict";
  
    /**
     * Easy selector helper function
     */
    const select = (el, all = false) => {
      el = el.trim()
      if (all) {
        return [...document.querySelectorAll(el)]
      } else {
        return document.querySelector(el)
      }
    }
  
    /**
     * Easy event listener function
     */
    const on = (type, el, listener, all = false) => {
      let selectEl = select(el, all)
      if (selectEl) {
        if (all) {
          selectEl.forEach(e => e.addEventListener(type, listener))
        } else {
          selectEl.addEventListener(type, listener)
        }
      }
    }
  
    /**
     * Easy on scroll event listener 
     */
    const onscroll = (el, listener) => {
      el.addEventListener('scroll', listener)
    }
  
    /**
     * Toggle .header-scrolled class to #header when page is scrolled
     */
    let selectHeader = select('.header')
    if (selectHeader) {
      const headerScrolled = () => {
        if (window.scrollY > 100) {
          selectHeader.classList.add('header-scrolled')
        } else {
          selectHeader.classList.remove('header-scrolled')
        }
      }
      window.addEventListener('load', headerScrolled)
      onscroll(document, headerScrolled)
    }
  
  
  })()


  // Form Data

  $(function () {
    $('.SendEmail').click(function (event) {
      var email = 'sahanasahana331@gmail.com';
      var subject = 'Quote';
      var emailBody = 'Name:';
      var mailId = "Email ID";
      var phone = "Phone Number";
      var location = "Location of Site";
      var message = "Message";
      document.location = "mailto:"+email+"?subject="+subject+"&body="+emailBody+
          "&body="+mailId+"&body="+phone+"&body="+location+"&body="+message;
    });
  });