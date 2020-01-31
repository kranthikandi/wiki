(function ($) {
  'use strict';

  $('#Cust').click(function () {
    clear()
    Cust()
  })
  $('#Job').click(function () {
    clear()
    Job()
  })
  $('#Driver').click(function () {
    clear()
    Driver()
  })
  $('#IcDriver').click(function () {
    clear()
    IcDriver()
  })
  $('#Dispatch').click(function () {
    clear()
    Dispatch()
  })
  $('#Assign').click(function () {
    clear()
    Assign()
  })
  $('#AddTag').click(function () {
    clear()
    AddTag()
  })
  $('#NewTag').click(function () {
    clear()
    NewTag()
  })
  $('#Invoice').click(function () {
    clear()
    Invoice()
  })
  $('#PostCheck').click(function () {
    clear()
    PostCheck()
  })
  $('#DriStmt').click(function () {
    clear()
    DriStmt()
  })
  function clear() {
    $('#video').empty()
    $('#text').empty()
  }
  function Cust() {

  }
  function Job() {

    var img = '<video src="img/video/Job.mp4" type="video/mp4" style = "width: 640px;height: 360px;float: right;" autoplay controls > </video > '
    $('#video').append(img)
  }
  function Driver() {

  }
  function IcDriver() {

  }
  function Dispatch() {

  }
  function Assign() {

  }
  function AddTag() {

  }
  function NewTag() {

  }
  function Invoice() {

  }
  function PostCheck() {

  }
  function DriStmt() {

  }
})(jQuery);
