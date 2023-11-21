var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var saldoSon = document.getElementById("sonAccountBalance");
var saldoMum = document.getElementById("MumAccountBalance");
var depositSon = document.getElementById("DepositoSon");
var depositMum = document.getElementById("DepositoMum");
var withdrawSon = document.getElementById("PrelievoSon");
var withdrawMum = document.getElementById("PrelievoMum");
var SonAccount = /** @class */ (function () {
    function SonAccount(balance) {
        this.balance = balance;
    }
    SonAccount.prototype.deposit = function (amount) {
        this.balance += amount;
    };
    SonAccount.prototype.withdraw = function (amount) {
        this.balance -= amount;
    };
    return SonAccount;
}());
var MotherAccount = /** @class */ (function (_super) {
    __extends(MotherAccount, _super);
    function MotherAccount(balance, interestRate) {
        var _this = _super.call(this, balance) || this;
        _this.interestRate = interestRate;
        return _this;
    }
    MotherAccount.prototype.calculateInterest = function () {
        this.balance -= this.balance * this.interestRate;
    };
    return MotherAccount;
}(SonAccount));
var sonAccount = new SonAccount(1000);
var motherAccount = new MotherAccount(1000, 0.1);
console.log("Saldo account figlio: ", sonAccount.balance);
console.log("Saldo account madre: ", motherAccount.balance);
function saldoFiglio() {
    if (saldoSon !== null) {
        saldoSon.innerHTML = "Saldo: " + sonAccount.balance + "€";
    }
    else {
        console.error("Errore");
    }
}
function saldoMadre() {
    if (saldoMum !== null) {
        saldoMum.innerHTML = "Saldo: " + motherAccount.balance + "€";
    }
    else {
        console.error("Errore");
    }
}
function prelievoFiglio() {
    var amountToWithdraw = parseInt(withdrawSon.value);
    if (!isNaN(amountToWithdraw)) {
        sonAccount.withdraw(amountToWithdraw);
        saldoFiglio();
    }
    else {
        alert("Inserisci un valore valido");
    }
}
function prelievoMadre() {
    var amountToWithdraw = parseInt(withdrawMum.value);
    if (!isNaN(amountToWithdraw)) {
        motherAccount.withdraw(amountToWithdraw);
        motherAccount.calculateInterest();
        saldoMadre();
    }
    else {
        alert("Inserisci un valore valido");
    }
}
function depositoFiglio() {
    var amountToDeposit = parseInt(depositSon.value);
    if (!isNaN(amountToDeposit)) {
        sonAccount.deposit(amountToDeposit);
        saldoFiglio();
    }
    else {
        alert("Inserisci un valore valido");
    }
}
function depositoMadre() {
    var amountToDeposit = parseInt(depositMum.value);
    if (!isNaN(amountToDeposit)) {
        motherAccount.deposit(amountToDeposit);
        motherAccount.calculateInterest();
        saldoMadre();
    }
    else {
        alert("Inserisci un valore valido");
    }
}
saldoFiglio();
saldoMadre();
