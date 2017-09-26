function Account(name, initDeposit) {
  this.accountName = name;
  this.accountBal = initDeposit;
}

Account.prototype.Deposit = function(amount) {
  return this.accountBal += amount;
}

Account.prototype.Withdraw = function(amount) {
  return this.accountBal -= amount;
}

$(document).ready(function() {
  $("#register").submit(function(event) {
    var accName = $("input#name").val();
    var accDeposit = parseFloat($("input#initialDeposit").val());

    var AccountHolder = new Account(accName, accDeposit);

    $("ul#account").append("<li><span class='accountName'><input type='radio' name='account' value='"+AccountHolder.accountName+"'> " + AccountHolder.accountName + "</span></li>");

    $("input#name").val("");
    $("input#initialDeposit").val("");

    $(".accountName").last().click(function() {
      $("#balanceBox h3").text("You have $" + AccountHolder.accountBal +".00");
      customer = AccountHolder.accountName;
    });
    $("#reset").click(function() {
      $("h3#balanceBox").empty();
    });
    // amount = parseFloat($("#depositAmt").val());
    // console.log(AccountHolder.accountName);
    // console.log(AccountHolder.Deposit(amount));
    // AccountHolder.Deposit(amount);

    $("#btnDeposit").click(function(event) {
      var amount = parseFloat($("#depositAmt").val());
      $("input:radio[name=account]:checked").each(function() {
        if (AccountHolder.accountName === customer) {
          // latestBal = AccountHolder.Deposit(amount);
          $("#balanceBox h3").text("You have $" + AccountHolder.Deposit(amount)+".00");
        }
        event.preventDefault();
      });
    });
    $("#btnWithdraw").click(function(event) {
      var amount = parseFloat($("#withdrawalAmt").val());
      $("input:radio[name=account]:checked").each(function() {
        if (AccountHolder.accountName === customer) {
          // AccountHolder.Withdraw(amount);
          $("#balanceBox h3").text("You have $" + AccountHolder.Withdraw(amount) +".00");
        }
        event.preventDefault();
      });
    });
    event.preventDefault();
  });

});
