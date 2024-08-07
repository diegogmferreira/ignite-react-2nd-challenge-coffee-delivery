import americanoImg from '../assets/americano.png'
import arabianImg from '../assets/arabian.png'
import capuccinoImg from '../assets/capuccino.png'
import coffeeLatteImg from '../assets/coffee-latte.png'
import cubanImg from '../assets/cuban.png'
import expressoCreamyImg from '../assets/expresso-creamy.png'
import expressoImg from '../assets/expresso.png'
import hawaiianImg from '../assets/hawaiian.png'
import hotChocolateImg from '../assets/hot-chocolate.png'
import icedCoffeeImg from '../assets/iced-coffee.png'
import irishImg from '../assets/irish.png'
import latteImg from '../assets/latte.png'
import macchiatoImg from '../assets/macchiato.png'
import mochaccinoImg from '../assets/mochaccino.png'

export function getCoffeeList() {
  return [
    {
      id: 1,
      title: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: '9,99',
      tags: ['tradicional'],
      imgUrl: expressoImg
    },
    {
      id: 2,
      title: 'Expresso Americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
      price: '9,99',
      tags: ['tradicional'],
      imgUrl: americanoImg
    },
    {
      id: 3,
      title: 'Expresso Cremoso',
      description: 'Café expresso tradicional com espuma cremosa',
      price: '9,99',
      tags: ['tradicional'],
      imgUrl: expressoCreamyImg
    },
    {
      id: 4,
      title: 'Expresso Gelado',
      description: 'Bebida preparada com café expresso e cubos de gelo',
      price: '9,99',
      tags: ['tradicional', 'gelado'],
      imgUrl: icedCoffeeImg
    },
    {
      id: 5,
      title: 'Café com Leite',
      description: 'Meio a meio de expresso tradicional com leite vaporizado',
      price: '9,99',
      tags: ['tradicional', 'com leite'],
      imgUrl: coffeeLatteImg
    },
    {
      id: 6,
      title: 'Latte',
      description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
      price: '9,99',
      tags: ['tradicional', 'com leite'],
      imgUrl: latteImg
    },
    {
      id: 7,
      title: 'Capuccino',
      description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
      price: '9,99',
      tags: ['tradicional', 'com leite'],
      imgUrl: capuccinoImg
    },
    {
      id: 8,
      title: 'Macchiato',
      description: 'Café expresso misturado com um pouco de leite quente e espuma',
      price: '9,99',
      tags: ['tradicional', 'com leite'],
      imgUrl: macchiatoImg
    },
    {
      id: 9,
      title: 'Mocaccino',
      description: 'Café expresso com calda de chocolate, pouco leite e espuma',
      price: '9,99',
      tags: ['tradicional', 'com leite'],
      imgUrl: mochaccinoImg
    },
    {
      id: 10,
      title: 'Chocolate Quente',
      description: 'Bebida feita com chocolate dissolvido no leite quente e café',
      price: '9,99',
      tags: ['especial', 'com leite'],
      imgUrl: hotChocolateImg
    },
    {
      id: 11,
      title: 'Cubano',
      description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
      price: '9,99',
      tags: ['especial', 'alcoólico', 'com leite'],
      imgUrl: cubanImg
    },
    {
      id: 12,
      title: 'Havaiano',
      description: 'Bebida adocicada preparada com café e leite de coco',
      price: '9,99',
      tags: ['especial'],
      imgUrl: hawaiianImg
    },
    {
      id: 13,
      title: 'Árabe',
      description: 'Bebida preparada com grãos de café árabe e especiarias',
      price: '9,99',
      tags: ['especial'],
      imgUrl: arabianImg
    },
    {
      id: 14,
      title: 'Irlandês',
      description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
      price: '9,99',
      tags: ['especial', 'alcoólico'],
      imgUrl: irishImg
    },
  ]
} 