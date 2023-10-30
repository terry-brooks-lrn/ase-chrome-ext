function showAddiitionDetails(){
    var moreDetails = document.getElementById("details")
    var primaryButton = document.getElementById("primary-add-button")

    primaryButton.style.display = "none";
    moreDetails.style.display = "block";
}
function hideAddiitionDetails(){
    var moreDetails = document.getElementById("details")
    var primaryButton = document.getElementById("primary-add-button")
    primaryButton.style.display = "block";
    moreDetails.style.display = "none";
}
function addItemToAgenda(section, creator){
  
  $.post("demo_test_post.asp",
{
creator: 2,
title: "Duckburg",
link_to_ticket: "WWW.EXAMPLE.COM",

},
function(data, status){
alert("Data: " + data + "\nStatus: " + status);
});
};