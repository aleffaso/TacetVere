$("div[id^='calculator']").each(function(){
  
  var currentModal = $(this);
  
  //click next
  currentModal.find('.btn-next').click(function(){
    currentModal.modal('hide');
    currentModal.closest("div[id^='calculator']").nextAll("div[id^='calculator']").first().modal('show'); 
  });
  
  //click prev
  currentModal.find('.btn-prev').click(function(){
    currentModal.modal('hide');
    currentModal.closest("div[id^='calculator']").prevAll("div[id^='calculator']").first().modal('show'); 
  });  
});

$(window).on('load',function(){
  $("div[id^='calculator']").modal({
      backdrop: 'static',
      keyboard: false,
      show: true // added property here
  });
});