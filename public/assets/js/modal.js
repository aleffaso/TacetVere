$("div[id^='scope']").each(function(){
  
    var currentModal = $(this);
    
    //click next
    currentModal.find('.btn-next').click(function(){
      currentModal.modal('hide');
      currentModal.closest("div[id^='scope']").nextAll("div[id^='scope']").first().modal('show'); 
    });
    
    //click prev
    currentModal.find('.btn-prev').click(function(){
      currentModal.modal('hide');
      currentModal.closest("div[id^='scope']").prevAll("div[id^='scope']").first().modal('show'); 
    });
  
  });
  