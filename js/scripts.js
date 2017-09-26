function Account(name, initDeposit) {
  this.accountName = name;
  this.accountBal = initDeposit;
}
// debugger;
// Account.prototype.createAccount = function() {
//   alert('HI');
// }

$(document).ready(function() {
  $("#register").submit(function(event) {
    var accName = $("input#name").val();
    var accDeposit = parseFloat($("input#initialDeposit").val());

    var AccountHolder = new Account(accName, accDeposit);

    $("ul#account").append("<li><span class='accountName'>" + AccountHolder.accountName + "</span></li>");

    $(".accountName").last().click(function() {
      console.log(parseFloat(AccountHolder.accountBal));
      $("#balanceBox").text(AccountHolder.accountBal);
    });

    event.preventDefault();
  });
});
