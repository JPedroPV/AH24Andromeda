export interface Part {
  id: number;
  type: string;
  name: string;
  price: number;
  weight: number;
  aero: string;
  turn: string;
  capcity: number;
  thrust: number;
  efficiency: number;
  fuel: number;
  description: string;
}

export const parts = [
  {
    id: 0,
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens'
  },
  {
    id: 11,
    type: 'Nose',
    name: 'Blunt Nose',
    price: 0,
    weight: 0,
    aero: null,
    turn: null,
    capcity: null,
    thrust: null,
    efficiency: null,
    fuel: null,
    description: 'Blunt'
  },
  {
    id: 12,
    type: 'Nose',
    name: 'Parabolic Nose',
    price: 0,
    weight: 0,
    aero: null,
    turn: null,
    capcity: null,
    thrust: null,
    efficiency: null,
    fuel: null,
    description: 'Parabolic'
  }
  ,
  {
    id: 13,
    type: 'Nose',
    name: 'Ogive Nose',
    price: 0,
    weight: 0,
    aero: null,
    turn: null,
    capcity: null,
    thrust: null,
    efficiency: null,
    fuel: null,
    description: 'Ogive'
  }
  ,
  {
    id: 14,
    type: 'Nose',
    name: 'Cone Nose',
    price: 0,
    weight: 0,
    aero: null,
    turn: null,
    capcity: null,
    thrust: null,
    efficiency: null,
    fuel: null,
    description: 'Cone'
  }
  ,
  {
    id: 21,
    type: 'Crew',
    name: 'No Crew',
    price: 0,
    weight: 0,
    aero: null,
    turn: null,
    capcity: null,
    thrust: null,
    efficiency: null,
    fuel: null,
    description: 'No Crew'
  }
  ,
  {
    id: 22,
    type: 'Crew',
    name: '2 Crew',
    price: 0,
    weight: 0,
    aero: null,
    turn: null,
    capcity: null,
    thrust: null,
    efficiency: null,
    fuel: null,
    description: '2 Crew'
  }
  ,
  {
    id: 23,
    type: 'Crew',
    name: '3 Crew',
    price: 0,
    weight: 0,
    aero: null,
    turn: null,
    capcity: null,
    thrust: null,
    efficiency: null,
    fuel: null,
    description: '3 Crew'
  }
  ,
  {
    id: 24,
    type: 'Crew',
    name: '5 Crew',
    price: 0,
    weight: 0,
    aero: null,
    turn: null,
    capcity: null,
    thrust: null,
    efficiency: null,
    fuel: null,
    description: '5 Crew'
  }
  ,
  {
    id: 31,
    type: 'Cargo',
    name: 'Specialized Cargo',
    price: 0,
    weight: 0,
    aero: null,
    turn: null,
    capcity: null,
    thrust: null,
    efficiency: null,
    fuel: null,
    description: 'Specialized Cargo'
  }
  ,
  {
    id: 32,
    type: 'Cargo',
    name: 'No Cargo',
    price: 0,
    weight: 0,
    aero: null,
    turn: null,
    capcity: null,
    thrust: null,
    efficiency: null,
    fuel: null,
    description: 'No Cargo'
  }
  ,
  {
    id: 33,
    type: 'Cargo',
    name: 'Small Cargo',
    price: 0,
    weight: 0,
    aero: null,
    turn: null,
    capcity: null,
    thrust: null,
    efficiency: null,
    fuel: null,
    description: 'Small Cargo'
  }
  ,
  {
    id: 34,
    type: 'Cargo',
    name: 'Medium Cargo',
    price: 0,
    weight: 0,
    aero: null,
    turn: null,
    capcity: null,
    thrust: null,
    efficiency: null,
    fuel: null,
    description: 'Medium Cargo'
  }
  ,
  {
    id: 41,
    type: 'Engine',
    name: 'Small Solid Fuel Engine',
    price: 0,
    weight: 0,
    aero: null,
    turn: null,
    capcity: null,
    thrust: null,
    efficiency: null,
    fuel: null,
    description: 'Small Solid Fuel Engine'
  } 
  ,
  {
    id: 42,
    type: 'Engine',
    name: 'Large Solid Fuel Engine',
    price: 0,
    weight: 0,
    aero: null,
    turn: null,
    capcity: null,
    thrust: null,
    efficiency: null,
    fuel: null,
    description: 'Large Solid Fuel Engine'
  }
  ,
  {
    id: 43,
    type: 'Engine',
    name: 'Small Liquid Fuel Engine',
    price: 0,
    weight: 0,
    aero: null,
    turn: null,
    capcity: null,
    thrust: null,
    efficiency: null,
    fuel: null,
    description: 'Small Liquid Fuel Engine'
  }
  ,
  {
    id: 44,
    type: 'Engine',
    name: 'Large Liquid Fuel Engine',
    price: 0,
    weight: 0,
    aero: null,
    turn: null,
    capcity: null,
    thrust: null,
    efficiency: null,
    fuel: null,
    description: 'Large Liquid Fuel Engine'
  }
  ,
  {
    id: 51,
    type: 'Fin',
    name: 'Clipped Delta Fin',
    price: 0,
    weight: 0,
    aero: null,
    turn: null,
    capcity: null,
    thrust: null,
    efficiency: null,
    fuel: null,
    description: 'Clipped Delta Fin'
  }
  ,
  {
    id: 52,
    type: 'Fin',
    name: 'Trapezoidal Fin',
    price: 0,
    weight: 0,
    aero: null,
    turn: null,
    capcity: null,
    thrust: null,
    efficiency: null,
    fuel: null,
    description: 'Trapezodial Fin'
  }
  ,
  {
    id: 53,
    type: 'Fin',
    name: 'Tapered Swept Fin',
    price: 0,
    weight: 0,
    aero: null,
    turn: null,
    capcity: null,
    thrust: null,
    efficiency: null,
    fuel: null,
    description: 'Tapered Swept Fin'
  }
  ,
  {
    id: 54,
    type: 'Fin',
    name: 'Elliptical Fin',
    price: 0,
    weight: 0,
    aero: null,
    turn: null,
    capcity: null,
    thrust: null,
    efficiency: null,
    fuel: null,
    description: 'Elliptical Fin'
  }

];
