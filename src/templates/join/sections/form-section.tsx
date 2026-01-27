"use client";
import { useCreateRegister } from "@/modules/registers/hooks/use-register";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckedState } from "@radix-ui/react-checkbox";
import { motion } from "motion/react";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { useQueryState, parseAsStringLiteral } from "nuqs";
import { Button } from "@/components/ui/button";
import { ORIGIN_OPTIONS } from "@/collections/Register/constants";

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

export function FormSection() {
  const [origin] = useQueryState(
    "origin",
    parseAsStringLiteral(["association", "support", "legal"]).withDefault(
      "association",
    ),
  );
  const createRegister = useCreateRegister();
  const [confirmTerms, setConfirmTerms] = useState<CheckedState>(false);
  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormSchema) => {
    createRegister.mutate(
      { ...data, origin },
      {
        onSuccess: () => {
          form.reset();
        },
      },
    );
  };

  function phoneMask(value: string) {
    value = value.replace(/\D/g, "");

    if (value.length > 11) value = value.slice(0, 11);

    if (value.length >= 11) {
      return value
        .replace(/^(\d{2})(\d)/g, "($1) $2")
        .replace(/(\d{5})(\d{4})$/, "$1-$2");
    }

    return value
      .replace(/^(\d{2})(\d)/g, "($1) $2")
      .replace(/(\d{4})(\d{4})$/, "$1-$2");
  }

  const isFormDisabled = createRegister.isPending || !confirmTerms;

  return (
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
                disabled={createRegister.isPending}
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
                  disabled={createRegister.isPending}
                  {...form.register("email")}
                />
                <FieldError>{form.formState.errors.email?.message}</FieldError>
              </div>
              <div>
                <Label htmlFor="phone">Telefone *</Label>
                <Input
                  id="phone"
                  className="mt-1.5"
                  placeholder="(11) 99999-9999"
                  disabled={createRegister.isPending}
                  {...form.register("phone")}
                  onChange={(e) =>
                    form.setValue("phone", phoneMask(e.target.value))
                  }
                />
                <FieldError>{form.formState.errors.phone?.message}</FieldError>
              </div>
            </div>

            <div>
              <Label htmlFor="address">Endereço *</Label>
              <Input
                id="address"
                className="mt-1.5"
                placeholder="Rua, número, complemento"
                {...form.register("address")}
                disabled={createRegister.isPending}
              />
              <FieldError>{form.formState.errors.address?.message}</FieldError>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <Label htmlFor="city">Cidade *</Label>
                <Input
                  id="city"
                  className="mt-1.5"
                  placeholder="Cidade"
                  {...form.register("city")}
                  disabled={createRegister.isPending}
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
                  disabled={createRegister.isPending}
                />
                <FieldError>{form.formState.errors.state?.message}</FieldError>
              </div>
              <div>
                <Label htmlFor="zip_code">CEP *</Label>
                <Input
                  id="zip_code"
                  className="mt-1.5"
                  placeholder="00000-000"
                  {...form.register("zipCode")}
                  disabled={createRegister.isPending}
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
                disabled={createRegister.isPending}
              />
              <FieldLabel htmlFor="terms">
                Li e concordo com os
                <Link
                  href="/policies#terms"
                  target="_blank"
                  className="font-bold hover:underline"
                >
                  termos de uso
                </Link>
                e
                <Link
                  href="/policies"
                  target="_blank"
                  className="font-bold hover:underline"
                >
                  política de privacidade
                </Link>
              </FieldLabel>
            </Field>

            <Button type="submit" className="w-full" disabled={isFormDisabled}>
              Enviar
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
