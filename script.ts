let saldoSon = document.getElementById(
  "sonAccountBalance"
) as HTMLElement | null;
let saldoMum = document.getElementById(
  "MumAccountBalance"
) as HTMLElement | null;
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
  sonAccount.withdraw(amountToWithdraw);
  saldoFiglio();
}
function prelievoMadre(): void {
  const amountToWithdraw = parseInt(withdrawMum.value);
  motherAccount.withdraw(amountToWithdraw);
  motherAccount.calculateInterest();
  saldoMadre();
}

function depositoFiglio(): void {
  const amountToDeposit = parseInt(depositSon.value);
  sonAccount.deposit(amountToDeposit);
  saldoFiglio();
}
function depositoMadre(): void {
  const amountToDeposit = parseInt(depositMum.value);
  motherAccount.deposit(amountToDeposit);
  motherAccount.calculateInterest();
  saldoMadre();
}

saldoFiglio();
saldoMadre();
