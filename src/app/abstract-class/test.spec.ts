import { Plant } from './abstract-class.page';
describe('Plant Testing', () => {
    let plant: Plant;
  
    beforeEach(() => {
        plant = new Plant('Будівля', 1000);
    });
  
    fit('Створення екземпляру класу', () => {
      expect(plant).toBeTruthy();
    });
  
    fit('Розрахунок висоти фундаменту для заводу з 1000 поверхами', () => {
        plant.height();
      let heightMethod = plant.heightt;
      expect(heightMethod.toFixed(7));
    });
  });
