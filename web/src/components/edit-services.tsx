import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Card, CardDescription } from "./ui/card";
import { Button } from "./ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface EditServiceProps {
  nickname: string
}

const listSerices = [
  {
    'id': '1',
    'service': 'Limpeza',
    'price': 250.00
  },
  {
    'id': '2',
    'service': 'Pintura',
    'price': 350.00
  },
  {
    'id': '3',
    'service': 'Troca de Pneus',
    'price': 400.00
  }
]

export function EditService({ nickname }: EditServiceProps) {
  const [isDialogOpen, setDialogOpen] = useState(false)
  const [listServices, setListServices] = useState(listSerices)

  function handleAddService() {
    const newService = {
      id: crypto.randomUUID(),
      service: 'Novo Serviço',
      price: 0.00,
    };
    setListServices([...listServices, newService]);
  }

  function handleRemoveService(serviceId: string) {
    setListServices(listServices.filter(service => service.id !== serviceId));
  }

  return (
    <Dialog open={isDialogOpen} onOpenChange={setDialogOpen}>
      <DialogTrigger asChild>
        <Card>
          <CardDescription>
            <Button type="button">Serviços</Button>
          </CardDescription>
        </Card>
      </DialogTrigger>


      <DialogContent className="sm:max-w-[750px]">
        <DialogHeader>
          <DialogTitle>Serviços</DialogTitle>
          <DialogDescription>{nickname}</DialogDescription>
        </DialogHeader>

        <div className="flex gap-2 w-full h-[300px] max-h-[300px] overflow-y-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Serviço</TableHead>
                <TableHead>Preço</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {listServices.map((service) => (
                <TableRow key={service.id}>
                  <TableCell>{service.service}</TableCell>
                  <TableCell>{service.price}</TableCell>
                  <TableCell>
                    <Button
                      type="button"
                      variant={'destructive'}
                      onClick={() => handleRemoveService(service.id)}>Excluir
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>


        <DialogFooter className="w-[480px] flex flex-row flex-1 gap-2">
          <Button className="w-full" type="button" onClick={handleAddService}>Adicionar</Button>
          <Button className="w-full bg-green-600" type="button">Salvar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}