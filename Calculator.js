class Calculator {
  //forked 123
  #interestRate;
  #maxDurationMonths;
  #MinInitialPaymentPersent;

  constructor(
    persent = 0.2,
    maxDurationMonths = 0,
    MinInitialPaymentPersent = 0
  ) {
    this.#interestRate = persent / 12;
    this.#maxDurationMonths = maxDurationMonths;
    this.#MinInitialPaymentPersent = MinInitialPaymentPersent;
  }

  calculate(ammount, durationMonths = 5 * 12, initialPayment = 0) {
    if (this.#MinInitialPaymentPersent > 0) {
      initialPayment =
        ammount * this.#MinInitialPaymentPersent > initialPayment
          ? ammount * this.#MinInitialPaymentPersent
          : initialPayment;
    }

    if (this.#maxDurationMonths > 0) {
      durationMonths =
        durationMonths > this.#maxDurationMonths
          ? this.#maxDurationMonths
          : durationMonths;
    }

    let annuityСoefficients =
      (this.#interestRate * (1 + this.#interestRate) ** durationMonths) /
      ((1 + this.#interestRate) ** durationMonths - 1);
    let res = (ammount - initialPayment) * annuityСoefficients;
    return Math.round(res);
  }
}

export { Calculator };
