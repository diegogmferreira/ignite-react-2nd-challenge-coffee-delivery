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
      title: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: '9,99',
      tags: ['tradicional'],
      imgUrl: expressoImg
    },
    {
      title: 'Expresso Americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
      price: '9,99',
      tags: ['tradicional'],
      imgUrl: americanoImg
    },
    {
      title: 'Expresso Cremoso',
      description: 'Café expresso tradicional com espuma cremosa',
      price: '9,99',
      tags: ['tradicional'],
      imgUrl: expressoCreamyImg
    },
    {
      title: 'Expresso Gelado',
      description: 'Bebida preparada com café expresso e cubos de gelo',
      price: '9,99',
      tags: ['tradicional', 'gelado'],
      imgUrl: icedCoffeeImg
    },
    {
      title: 'Café com Leite',
      description: 'Meio a meio de expresso tradicional com leite vaporizado',
      price: '9,99',
      tags: ['tradicional', 'com leite'],
      imgUrl: coffeeLatteImg
    },
    {
      title: 'Latte',
      description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
      price: '9,99',
      tags: ['tradicional', 'com leite'],
      imgUrl: latteImg
    },
    {
      title: 'Capuccino',
      description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
      price: '9,99',
      tags: ['tradicional', 'com leite'],
      imgUrl: capuccinoImg
    },
    {
      title: 'Macchiato',
      description: 'Café expresso misturado com um pouco de leite quente e espuma',
      price: '9,99',
      tags: ['tradicional', 'com leite'],
      imgUrl: macchiatoImg
    },
    {
      title: 'Mocaccino',
      description: 'Café expresso com calda de chocolate, pouco leite e espuma',
      price: '9,99',
      tags: ['tradicional', 'com leite'],
      imgUrl: mochaccinoImg
    },
    {
      title: 'Chocolate Quente',
      description: 'Bebida feita com chocolate dissolvido no leite quente e café',
      price: '9,99',
      tags: ['especial', 'com leite'],
      imgUrl: hotChocolateImg
    },
    {
      title: 'Cubano',
      description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
      price: '9,99',
      tags: ['especial', 'alcoólico', 'com leite'],
      imgUrl: cubanImg
    },
    {
      title: 'Havaiano',
      description: 'Bebida adocicada preparada com café e leite de coco',
      price: '9,99',
      tags: ['especial'],
      imgUrl: hawaiianImg
    },
    {
      title: 'Árabe',
      description: 'Bebida preparada com grãos de café árabe e especiarias',
      price: '9,99',
      tags: ['especial'],
      imgUrl: arabianImg
    },
    {
      title: 'Irlandês',
      description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
      price: '9,99',
      tags: ['especial', 'alcoólico'],
      imgUrl: irishImg
    },
  ]
} 