var clicked=0;

function testScroll(ev){
  if(window.pageYOffset<270)
      {
        $('#navu').css('display','none');
      }
  if(window.pageYOffset>270)
      {
        $('#navu').css('display','block');
        $('#navu').addClass('na');
      }
}
window.onscroll=testScroll;
$('#butt').on('click',function(){
  if(clicked==0)
    {
      $('.page4').css('display','flex')
      clicked=1;
    }
  else if(clicked==1)
    {
      $('.page4').css('display','none');
      clicked=0;
    }
})
