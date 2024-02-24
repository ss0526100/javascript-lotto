import LottoBoard from "./LottoBoard.js";
import LottoSeller from "./LottoSeller";

class LottoResult {
  static PRIZE_OF_LOTTO = [
    0, 2_000_000_000, 30_000_000, 1_500_000, 50_000, 5_000,
  ];

  #rankCounts = new Array(LottoBoard.LAST_RANK + 1).fill(0);

  #numberOfLotto = 0;

  countRank(rank) {
    this.#rankCounts[rank] += 1;
    this.#numberOfLotto += 1;
  }

  getRankCounts() {
    return [...this.#rankCounts];
  }

  getProfitRate() {
    const profit = this.#getProfit();
    const totalPrice = this.#numberOfLotto * LottoSeller.LOTTO_PRICE;
    const profitRate = (profit / totalPrice) * 100;

    return profitRate;
  }

  #getProfit() {
    return this.#rankCounts.reduce(
      (profit, count, rank) =>
        profit + count * LottoResult.PRIZE_OF_LOTTO[rank],
      0
    );
  }
}

export default LottoResult;
