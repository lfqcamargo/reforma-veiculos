import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { FaFacebook, FaGoogle, FaInstagram } from 'react-icons/fa'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { signIn } from '@/api/sign-in'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import { ErrorField } from './components/error-field'

const signInForm = z.object({
  email: z.string().email({ message: 'Email inválido' }),
  password: z
    .string()
    .min(6, { message: 'A senha deve conter pelo menos 6 caracters' })
    .max(20, { message: 'A senha deve não pode ter mais de 20 caracteres' }),
})

type SignInForm = z.infer<typeof signInForm>

export function SignIn() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    watch,

    formState: { errors, isSubmitting },
  } = useForm<SignInForm>({
    resolver: zodResolver(signInForm),
    defaultValues: {
      email: searchParams.get('email') ?? '',
    },
  })

  const { mutateAsync: authenticate } = useMutation({
    mutationFn: signIn,
  })

  async function handleSignIn(data: SignInForm) {
    try {
      await authenticate({ email: data.email, password: data.password })
      navigate('/')
    } catch (error) {
      toast.error('Erro ao Realizar Login')
    } finally {
      console.log(data)
    }
  }
  let activeButton = false
  const emailWatch = watch('email')
  const passwordWatch = watch('password')

  if (!emailWatch || !passwordWatch) {
    activeButton = false
  } else {
    activeButton = true
  }

  return (
    <>
      <Helmet title="Login" />

      <div className="flex flex-col gap-2 p-8">
        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Acessar painel
            </h1>
            <p className="text-sm text-muted-foreground">
              Acompanhe suas vendas pelo painel do parceiro!
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit(handleSignIn)}>
            <div className="space-y-1">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input
                className="bg-transparent"
                type="text"
                id="email"
                placeholder="Email"
                {...register('email')}
              />
              <ErrorField error={errors.email} />
              <Label htmlFor="password">Senha</Label>
              <Input
                className="bg-transparent"
                type="password"
                id="password"
                placeholder="Password"
                {...register('password')}
              />
              <ErrorField error={errors.password} />
            </div>
            <Button className="w-full" disabled={isSubmitting || !activeButton}>
              LOGIN
            </Button>
          </form>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center gap-1">
            <Checkbox id="rememberMe" />
            <label htmlFor="rememberMe">Lembrar-me</label>
          </div>
          <Button variant="link" type="button">
            <Link
              to={
                emailWatch
                  ? `/recovery-password?email=${emailWatch}`
                  : `/recovery-password`
              }
            >
              Esqueceu a senha?
            </Link>
          </Button>
        </div>
        <div className="flex h-16 items-center justify-around">
          <FaGoogle className="h-5 w-5" />
          <FaInstagram className="h-5 w-5" />
          <FaFacebook className="h-5 w-5" />
        </div>
      </div>

      <div className="flex items-center justify-center">
        <span>Não tem uma conta?</span>
        <Button variant="ghost">
          <Link className="text-primary" to="/sign-up">
            Criar conta
          </Link>
        </Button>
      </div>
    </>
  )
}
