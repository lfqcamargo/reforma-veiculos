import { useState } from "react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Card, CardDescription, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import * as z from 'zod'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { EditService } from "./edit-services";

interface EditTransactionProps {
  id: string
  image: string
  nickname: string
  color: string
  vehicleType: string
  brand: string
  model: string
  year: number
  purchasePrice: number
  purchaseDate: Date
  purchasedFrom: string | null
  salePrice: number | null
  saleDate: Date | null
  soldTo: string | null
}

const EditTransactionFormSchema = z.object({
  id: z.string(),
  image: z.string(),
  nickname: z.string().min(4).max(50),
  color: z.string(),
  vehicleType: z.string(),
  brand: z.string(),
  model: z.string(),
  year: z.number(),
  purchasePrice: z.number(),
  purchaseDate: z.date(),
  purchasedFrom: z.string().optional().nullable(),
  salePrice: z.number().optional().nullable(),
  saleDate: z.date().optional().nullable(),
  soldTo: z.string().optional().nullable()
})

export type EditTransactionForm = z.infer<typeof EditTransactionFormSchema>

export function EditTransaction({
  id,
  image,
  nickname,
  color,
  vehicleType,
  brand,
  model,
  year,
  purchasePrice,
  purchaseDate,
  purchasedFrom,
  salePrice,
  saleDate,
  soldTo,
}: EditTransactionProps) {
  const [isDialogOpen, setDialogOpen] = useState(false)

  const {
    register,
  } = useForm<EditTransactionForm>({
    resolver: zodResolver(EditTransactionFormSchema),
    mode: 'onChange',
    defaultValues: {
      image,
      nickname,
      color,
      vehicleType,
      brand,
      model,
      year,
      purchasePrice,
      purchaseDate,
      purchasedFrom: purchasedFrom ?? null,
      salePrice: salePrice ?? null,
      saleDate: saleDate ?? null,
      soldTo: soldTo ?? null,
    },
  })

  return (
    <Dialog open={isDialogOpen} onOpenChange={setDialogOpen}>
      <DialogTrigger asChild>
        <Card className="border p-2 rounded-lg shadow-md w-60 cursor-pointer" key={id}>
          <img src={image} alt={nickname} className="w-full h-32 object-cover rounded-md mt-2" />
          <CardTitle className="my-2 justify-center">{nickname}</CardTitle>
          <CardDescription>Marca: {brand}</CardDescription>
          <CardDescription>Modelo: {model}</CardDescription>
          <CardDescription>Ano: {year}</CardDescription>
          <CardDescription>Cor: {color}</CardDescription>
        </Card>
      </DialogTrigger>


      <DialogContent className="sm:max-w-[550px]">
        <DialogHeader>
          <DialogTitle>Editar</DialogTitle>
          <DialogDescription>Edição da Transação {nickname}</DialogDescription>
        </DialogHeader>
        <form
          className="flex flex-col items-center p-4 w-full"
        >
          <div className="flex flex-col items-center gap-4 w-full">
            <div className="flex gap-2 w-full">
              <Input placeholder="image ..." {...register('image')} />

            </div>

            <div className="flex gap-2 w-full">
              <Input placeholder="Apelido" {...register('nickname')} />
              <Input placeholder="Cor" {...register('color')} />
              <Input placeholder="Tipo do Veículo" {...register('vehicleType')} />
            </div>
            <div className="flex gap-2 w-full">
              <Input placeholder="Marca" {...register('brand')} />
              <Input placeholder="Modelo" {...register('model')} />
              <Input placeholder="Ano" {...register('year')} />
            </div>
            <div className="flex gap-2 w-full">
              <Input placeholder="Preço de Compra" {...register('purchasePrice')} />
              <Input placeholder="Data da Compra" {...register('purchaseDate')} />
              <Input placeholder="Comprado de" {...register('purchasedFrom')} />
            </div>
            <div className="flex gap-2 w-full">
              <Input placeholder="Preço da Venda" {...register('salePrice')} />
              <Input placeholder="Data da Venda" {...register('saleDate')} />
              <Input placeholder="Vendido Para" {...register('soldTo')} />
            </div>

            <DialogFooter className="w-full flex flex-row flex-1 gap-2">
              <EditService nickname={nickname} />
              <Button className="w-full bg-green-600">Editar</Button>
              <Button
                type="button"
                className="w-full"
                variant={'destructive'}
              >
                Excluir
              </Button>
            </DialogFooter>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}