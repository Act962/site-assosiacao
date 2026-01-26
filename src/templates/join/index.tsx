"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCreateRegister } from "@/modules/registers/hooks/use-register";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckedState } from "@radix-ui/react-checkbox";
import {
  BookOpenIcon,
  GlobeIcon,
  HeartIcon,
  UserPlusIcon,
  UsersIcon,
} from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

const formSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  email: z.email("E-mail inválido"),
  phone: z.string().min(1, "Telefone é obrigatório"),
  address: z.string().min(1, "Endereço é obrigatório"),
  city: z.string().min(1, "Cidade é obrigatória"),
  state: z.string().min(1, "Estado é obrigatório"),
  zipCode: z.string().min(1, "CEP é obrigatório"),
});

type FormSchema = z.infer<typeof formSchema>;

export function JoinPage() {
  const createRegister = useCreateRegister();
  const [confirmTerms, setConfirmTerms] = useState<CheckedState>(false);
  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  const benefits = [
    {
      icon: UsersIcon,
      title: "Comunidade",
      description:
        "Faça parte de uma rede de descendentes e admiradores da cultura italiana",
    },
    {
      icon: BookOpenIcon,
      title: "Educação",
      description: "Acesso a cursos de italiano e palestras exclusivas",
    },
    {
      icon: HeartIcon,
      title: "Apoio",
      description: "Suporte para questões consulares e integração",
    },
    {
      icon: GlobeIcon,
      title: "Networking",
      description: "Conexões com empreendedores e profissionais",
    },
  ];

  const onSubmit = (data: FormSchema) => {
    createRegister.mutate(data, {
      onSuccess: () => {
        form.reset();
      },
    });
  };

  const isFormDisabled = createRegister.isPending || !confirmTerms;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative py-24 bg-linear-to-br from-red-700 via-red-800 to-emerald-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=1920&q=80')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <UserPlusIcon className="w-16 h-16 text-white/80 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Associe-se
            </h1>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">
              Faça parte da Associação de Intercâmbio Cultural Ítalo-Brasileira
              Anita e Giuseppe Garibaldi e fortaleça seus laços com a cultura
              italiana
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <benefit.icon className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section id="form" className="py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Preencha seus dados
              </h2>
              <p className="text-gray-600">
                Complete o formulário abaixo para se associar
              </p>
            </div>

            <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
              <Field>
                <Label htmlFor="full_name">Nome *</Label>
                <Input
                  id="full_name"
                  className="mt-1.5"
                  placeholder="Digite seu nome completo"
                  {...form.register("name")}
                />
                <FieldError>{form.formState.errors.name?.message}</FieldError>
              </Field>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="email">E-mail *</Label>
                  <Input
                    id="email"
                    type="email"
                    className="mt-1.5"
                    placeholder="seu@email.com"
                    {...form.register("email")}
                  />
                  <FieldError>
                    {form.formState.errors.email?.message}
                  </FieldError>
                </div>
                <div>
                  <Label htmlFor="phone">Telefone *</Label>
                  <Input
                    id="phone"
                    className="mt-1.5"
                    placeholder="(11) 99999-9999"
                    {...form.register("phone")}
                  />
                  <FieldError>
                    {form.formState.errors.phone?.message}
                  </FieldError>
                </div>
              </div>

              <div>
                <Label htmlFor="address">Endereço *</Label>
                <Input
                  id="address"
                  className="mt-1.5"
                  placeholder="Rua, número, complemento"
                  {...form.register("address")}
                />
                <FieldError>
                  {form.formState.errors.address?.message}
                </FieldError>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <Label htmlFor="city">Cidade *</Label>
                  <Input
                    id="city"
                    className="mt-1.5"
                    placeholder="Cidade"
                    {...form.register("city")}
                  />
                  <FieldError>{form.formState.errors.city?.message}</FieldError>
                </div>
                <div>
                  <Label htmlFor="state">Estado *</Label>
                  <Input
                    id="state"
                    className="mt-1.5"
                    placeholder="UF"
                    {...form.register("state")}
                  />
                  <FieldError>
                    {form.formState.errors.state?.message}
                  </FieldError>
                </div>
                <div>
                  <Label htmlFor="zip_code">CEP *</Label>
                  <Input
                    id="zip_code"
                    className="mt-1.5"
                    placeholder="00000-000"
                    {...form.register("zipCode")}
                  />
                  <FieldError>
                    {form.formState.errors.zipCode?.message}
                  </FieldError>
                </div>
              </div>

              <Field orientation="horizontal">
                <Checkbox
                  id="terms"
                  checked={confirmTerms}
                  onCheckedChange={(e) => setConfirmTerms(e)}
                />
                <FieldLabel htmlFor="terms">
                  Li e concordo com os
                  <Link
                    href="/termos"
                    target="_blank"
                    className="font-bold hover:underline"
                  >
                    termos de uso
                  </Link>
                  e
                  <Link
                    href="/politica-de-privacidade"
                    target="_blank"
                    className="font-bold hover:underline"
                  >
                    política de privacidade
                  </Link>
                </FieldLabel>
              </Field>

              <Button
                type="submit"
                className="w-full"
                disabled={isFormDisabled}
              >
                Enviar
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
