import { EditTransaction } from "@/components/edit-transaction";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const listVehiclesBuy = [
  // Carros
  {
    id: '1',
    image: 'carro.webp',
    nickname: 'Toyota Corolla 2022 Branco',
    color: 'Branco',
    vehicleType: 'Carro',
    brand: 'Toyota',
    model: 'Corolla',
    year: 2022,
    purchasePrice: 120000,
    purchaseDate: new Date('2024-01-10'),
    purchasedFrom: 'João Silva',
    salePrice: null,
    saleDate: null,
    soldTo: null,
  },
  {
    id: '2',
    image: 'carro.webp',
    nickname: 'Honda Civic 2021 Preto',
    color: 'Preto',
    vehicleType: 'Carro',
    brand: 'Honda',
    model: 'Civic',
    year: 2021,
    purchasePrice: 110000,
    purchaseDate: new Date('2023-12-15'),
    purchasedFrom: 'Maria Oliveira',
    salePrice: null,
    saleDate: null,
    soldTo: null,
  },
  {
    id: '3',
    image: 'carro.webp',
    nickname: 'Ford Mustang 2020 Vermelho',
    color: 'Vermelho',
    vehicleType: 'Carro',
    brand: 'Ford',
    model: 'Mustang',
    year: 2020,
    purchasePrice: 250000,
    purchaseDate: new Date('2022-11-05'),
    purchasedFrom: 'Carlos Mendes',
    salePrice: null,
    saleDate: null,
    soldTo: null,
  },
  {
    id: '4',
    image: 'carro.webp',
    nickname: 'Chevrolet Onix 2023 Azul',
    color: 'Azul',
    vehicleType: 'Carro',
    brand: 'Chevrolet',
    model: 'Onix',
    year: 2023,
    purchasePrice: 90000,
    purchaseDate: new Date('2024-02-01'),
    purchasedFrom: 'Ana Souza',
    salePrice: null,
    saleDate: null,
    soldTo: null,
  },
  {
    id: '5',
    image: 'carro.webp',
    nickname: 'Volkswagen Golf 2019 Cinza',
    color: 'Cinza',
    vehicleType: 'Carro',
    brand: 'Volkswagen',
    model: 'Golf',
    year: 2019,
    purchasePrice: 95000,
    purchaseDate: new Date('2023-07-20'),
    purchasedFrom: 'Fernando Lima',
    salePrice: null,
    saleDate: null,
    soldTo: null,
  },

  // Motos
  {
    id: '6',
    image: 'carro.webp',
    nickname: 'Honda CB 500X 2022 Vermelha',
    color: 'Vermelha',
    vehicleType: 'Moto',
    brand: 'Honda',
    model: 'CB 500X',
    year: 2022,
    purchasePrice: 45000,
    purchaseDate: new Date('2023-10-30'),
    purchasedFrom: 'Rafael Souza',
    salePrice: null,
    saleDate: null,
    soldTo: null,
  },
  {
    id: '7',
    image: 'carro.webp',
    nickname: 'Yamaha MT-03 2021 Azul',
    color: 'Azul',
    vehicleType: 'Moto',
    brand: 'Yamaha',
    model: 'MT-03',
    year: 2021,
    purchasePrice: 38000,
    purchaseDate: new Date('2023-09-10'),
    purchasedFrom: 'Lucas Fernandes',
    salePrice: null,
    saleDate: null,
    soldTo: null,
  },
  {
    id: '8',
    image: 'carro.webp',
    nickname: 'Kawasaki Ninja 400 2023 Verde',
    color: 'Verde',
    vehicleType: 'Moto',
    brand: 'Kawasaki',
    model: 'Ninja 400',
    year: 2023,
    purchasePrice: 48000,
    purchaseDate: new Date('2024-01-05'),
    purchasedFrom: 'Gabriel Costa',
    salePrice: null,
    saleDate: null,
    soldTo: null,
  },

  // Vans
  {
    id: '9',
    image: 'carro.webp',
    nickname: 'Mercedes-Benz Sprinter 2020 Branca',
    color: 'Branca',
    vehicleType: 'Van',
    brand: 'Mercedes-Benz',
    model: 'Sprinter',
    year: 2020,
    purchasePrice: 220000,
    purchaseDate: new Date('2023-06-15'),
    purchasedFrom: 'Empresa Transporte X',
    salePrice: null,
    saleDate: null,
    soldTo: null,
  },
  {
    id: '10',
    image: 'carro.webp',
    nickname: 'Fiat Ducato 2021 Cinza',
    color: 'Cinza',
    vehicleType: 'Van',
    brand: 'Fiat',
    model: 'Ducato',
    year: 2021,
    purchasePrice: 180000,
    purchaseDate: new Date('2023-08-22'),
    purchasedFrom: 'Empresa Logística Y',
    salePrice: null,
    saleDate: null,
    soldTo: null,
  },
];

export function Transaction() {
  return (
    <main className="flex flex-col flex-1">
      <div className="flex flex-1 justify-between w-[98%] m-auto py-4 gap-4">
        <Input placeholder="Filtro" />
        <Button>+</Button>
      </div>
      <div className="flex-1 min-h-0 overflow-y-auto flex flex-wrap gap-4 p-4 border rounded-lg justify-center align-middle  w-[98%] m-auto bg-primary-foreground">
        {listVehiclesBuy.map((vehicle) => (
          <EditTransaction
            key={vehicle.id}
            id={vehicle.id}
            image={vehicle.image}
            nickname={vehicle.nickname}
            color={vehicle.color}
            vehicleType={vehicle.vehicleType}
            brand={vehicle.brand}
            model={vehicle.model}
            year={vehicle.year}
            purchasePrice={vehicle.purchasePrice}
            purchaseDate={vehicle.purchaseDate}
            purchasedFrom={vehicle.purchasedFrom}
            salePrice={vehicle.salePrice}
            saleDate={vehicle.saleDate}
            soldTo={vehicle.soldTo}
          />
        ))}
      </div>
    </main >
  )
}


