export class Elf {
  private totalCalories: number = 0;

  addFood(food: number) {
    this.totalCalories += food;
  }

  getTotalCalories() {
    return this.totalCalories;
  }
}
