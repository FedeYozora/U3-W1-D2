let saldoSon = document.getElementById("sonAccountBalance") as HTMLInputElement;
let saldoMum = document.getElementById("MumAccountBalance") as HTMLInputElement;

let withdrawSonHistory = document.getElementById(
  "withdrawSonHistory"
) as HTMLElement;
let withdrawMumHistory = document.getElementById(
  "withdrawMumHistory"
) as HTMLElement;
let depositSonHistory = document.getElementById(
  "depositSonHistory"
) as HTMLElement;
let depositMumHistory = document.getElementById(
  "depositMumHistory"
) as HTMLElement;

let depositSon = document.getElementById("DepositoSon") as HTMLInputElement;
let depositMum = document.getElementById("DepositoMum") as HTMLInputElement;
let withdrawSon = document.getElementById("PrelievoSon") as HTMLInputElement;
let withdrawMum = document.getElementById("PrelievoMum") as HTMLInputElement;

class SonAccount {
  balance: number;
  static balance: string;
  constructor(balance: number) {
    this.balance = balance;
  }
  deposit(amount: number) {
    this.balance += amount;
  }
  withdraw(amount: number) {
    this.balance -= amount;
  }
}

class MotherAccount extends SonAccount {
  interestRate: number;
  constructor(balance: number, interestRate: number) {
    super(balance);
    this.interestRate = interestRate;
  }
  calculateInterest() {
    this.balance -= this.balance * this.interestRate;
  }
}

const sonAccount = new SonAccount(1000);
const motherAccount = new MotherAccount(1000, 0.1);

console.log("Saldo account figlio: ", sonAccount.balance);
console.log("Saldo account madre: ", motherAccount.balance);

function saldoFiglio(): void {
  if (saldoSon !== null) {
    saldoSon.innerHTML = "Saldo: " + sonAccount.balance + "€";
  } else {
    console.error("Errore");
  }
}

function saldoMadre(): void {
  if (saldoMum !== null) {
    saldoMum.innerHTML = "Saldo: " + motherAccount.balance + "€";
  } else {
    console.error("Errore");
  }
}

function prelievoFiglio(): void {
  const amountToWithdraw = parseInt(withdrawSon.value);
  if (!isNaN(amountToWithdraw)) {
    sonAccount.withdraw(amountToWithdraw);
    saldoFiglio();
    let withdrawHistory: any = `<li>${amountToWithdraw}</li>`;
    withdrawSonHistory.innerHTML += withdrawHistory;
  } else {
    alert("Inserisci un valore valido");
  }
}

function prelievoMadre(): void {
  const amountToWithdraw = parseInt(withdrawMum.value);
  if (!isNaN(amountToWithdraw)) {
    motherAccount.withdraw(amountToWithdraw);
    motherAccount.calculateInterest();
    saldoMadre();
    let withdrawHistory: any = `<li>${amountToWithdraw}</li>`;
    withdrawMumHistory.innerHTML += withdrawHistory;
  } else {
    alert("Inserisci un valore valido");
  }
}

function depositoFiglio(): void {
  const amountToDeposit = parseInt(depositSon.value);
  if (!isNaN(amountToDeposit)) {
    sonAccount.deposit(amountToDeposit);
    saldoFiglio();
    let depositHistory: any = `<li>${amountToDeposit}</li>`;
    depositSonHistory.innerHTML += depositHistory;
  } else {
    alert("Inserisci un valore valido");
  }
}

function depositoMadre(): void {
  const amountToDeposit = parseInt(depositMum.value);
  if (!isNaN(amountToDeposit)) {
    motherAccount.deposit(amountToDeposit);
    motherAccount.calculateInterest();
    saldoMadre();
    let depositHistory: any = `<li>${amountToDeposit}</li>`;
    depositMumHistory.innerHTML += depositHistory;
  } else {
    alert("Inserisci un valore valido");
  }
}

saldoFiglio();
saldoMadre();
