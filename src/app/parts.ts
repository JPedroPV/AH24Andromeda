export interface Part {
  id: number;
  type: string;
  name: string;
  price: number;
  weight: number;
  aero?: string;
  turn?: string;
  capacity?: number;
  thrust?: number;
  efficiency?: number;
  fuel?: number;
  description: string;
}

export const parts = [
  {
    id: 11,
    type: 'Nose',
    name: 'Blunt Nose',
    price: 5000,
    weight: 300,
    aero: 'Very Low',
    description: 'The Blunt Nose is the perfect, affordable nose for the working Andromedan. It has a rugged charm that is sure to please the budget-conscious spacefarer.'
  },
  {
    id: 12,
    type: 'Nose',
    name: 'Parabolic Nose',
    price: 75000,
    weight: 350,
    aero: 'High',
    description: 'The gentle curve of the Parabolic Nose is well suited to the exclusive customer. The sleek design is sure to impress.'
  }
  ,
  {
    id: 13,
    type: 'Nose',
    name: 'Ogive Nose',
    price: 90000,
    weight: 450,
    aero: 'Very High',
    description: 'The Ogive Nose is the most common rocket nose used on our vehicles. The Ogive is a perfect mix of price and quality'
  }
  ,
  {
    id: 14,
    type: 'Nose',
    name: 'Cone Nose',
    price: 100000,
    weight: 400,
    aero: 'Very High',
    description: 'The angular beauty of the Conic design makes a sharp statement. Speed demons will love the aerodynamics offered by this striking nose cone'
  }
  ,
  {
    id: 21,
    type: 'Crew',
    name: 'No Crew Module',
    price: 4000000,
    weight: 3000,
    capacity: 0,
    description: 'The No Crew Module offers an affordable and effective package for those who wish to make uncrewed flights.'
  }
  ,
  {
    id: 22,
    type: 'Crew',
    name: 'Small Crew Module',
    price: 15000000,
    weight: 4800,
    capacity: 2,
    description: 'The L2 "Loveseat" Module offers comfortable, spacious lodgings for two Andromedans as they enjoy a premium journey through the cosmos.'
  }
  ,
  {
    id: 23,
    type: 'Crew',
    name: 'Medium Crew Module',
    price: 25000000,
    weight: 7000,
    capacity: 3,
    description: 'The L3 "Musketeer" is a practical, reliable vehicle that can fit a trio of passengers. The L3 is our most popular model, and for good reason.'
  }
  ,
  {
    id: 24,
    type: 'Crew',
    name: 'Large Crew Module',
    price: 40000000,
    weight: 12000,
    capacity: 5,
    description: 'The L5 "Starfish" is an efficient way to transport a large family or work team, with room for up to five passengers.'
  }
  ,
  {
    id: 31,
    type: 'Cargo',
    name: 'Specialized Cargo Bay',
    price: 50000000,
    weight: 9000,
    fuel: 5000,
    description: 'The Specialized Cargo Bay is well adapated to carry loads with unique requirements. Satellites, rovers, and much more can be stored in this versatile, high-end facility.'
  }
  ,
  {
    id: 32,
    type: 'Cargo',
    name: 'No Cargo Bay',
    price: 5000000,
    weight: 3000,
    fuel: 4000,
    description: 'The No Cargo Bay is perfect for trips where nothing beyond the bare necessisities is required. The cargo bay is pared down to only the essentials to minimize weight and save you money.'
  }
  ,
  {
    id: 33,
    type: 'Cargo',
    name: 'Small Cargo Bay',
    price: 20000000,
    weight: 7500,
    fuel: 4000,
    description: 'The Small Cargo Bay can hold a respectable amount of goods, and comes at a very reasonable price. The discerning customer will surely realize the wisdom of having this cargo bay.'
  }
  ,
  {
    id: 34,
    type: 'Cargo',
    name: 'Medium Cargo Bay',
    price: 42000000,
    weight: 110000,
    fuel: 6000,
    description: 'The Andromedan with items to move will appreciate the Medium Cargo bay. This bay contains the most cargo space of our catalogue.'
  }
  ,
  {
    id: 41,
    type: 'Engine',
    name: 'Small Solid Fuel Engine',
    price: 50000000,
    weight: 1000,
    thrust: 1500,
    efficiency: 50,
    description: 'The Small Solid Fuel Engine provides cheap and easy transportation. The customer with a budget will enjoy this engine.'
  } 
  ,
  {
    id: 42,
    type: 'Engine',
    name: 'Large Solid Fuel Engine',
    price: 200000000,
    weight: 6000,
    thrust: 7000,
    efficiency: 40,
    description: 'The Large Solid Fuel Engine provides a great amount of power for an economical cost. Those who need to move heavy rockets will make good use of these rockets.'
  }
  ,
  {
    id: 43,
    type: 'Engine',
    name: 'Small Liquid Fuel Engine',
    price: 75000000,
    weight: 3000,
    thrust: 2000,
    efficiency: 70,
    description: 'Small Liquid Fuel Engines are an efficient and effective way to get around. These are the most popular engines we provide.'
  }
  ,
  {
    id: 44,
    type: 'Engine',
    name: 'Large Liquid Fuel Engine',
    price: 350000000,
    weight: 9500,
    thrust: 7500,
    efficiency: 65,
    description: 'The Large Liquid Fuel Engine provides an efficient and powerful way to trasnport large loads.'
  }
  ,
  {
    id: 51,
    type: 'Fin',
    name: 'Clipped Delta Fin',
    price: 100000,
    weight: 200,
    aero: 'High',
    turn: 'Low',
    description: 'The Clipped Delta Fin provides excellent aerodynamics'
  }
  ,
  {
    id: 52,
    type: 'Fin',
    name: 'Trapezoidal Fin',
    price: 125000,
    weight: 175,
    aero: 'High',
    turn: 'Low',
    description: 'The Trapezodial Fin is the most effective fin for rockets carrying loads.'
  }
  ,
  {
    id: 53,
    type: 'Fin',
    name: 'Tapered Swept Fin',
    price: 50000,
    weight: 200,
    aero: 'Medium',
    turn: 'Medium',
    description: 'The Tapered Swept Fin provides a good ride for a good price.'
  }
  ,
  {
    id: 54,
    type: 'Fin',
    name: 'Elliptical Fin',
    price: 1750000,
    weight: 150,
    aero: 'Very High',
    turn: 'Low',
    description: 'The Elliptical Fin is an premium, elegant fin with excellent aerodynamics.'
  }

];
