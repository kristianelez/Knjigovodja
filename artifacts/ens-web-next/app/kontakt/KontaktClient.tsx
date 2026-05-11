"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  ime: z.string().min(2, { message: "Ime mora imati barem 2 karaktera." }),
  email: z.string().email({ message: "Unesite validnu email adresu." }),
  telefon: z.string().min(6, { message: "Unesite validan broj telefona." }),
  poruka: z.string().min(10, { message: "Poruka mora imati barem 10 karaktera." }),
});

const contactInfo = [
  { icon: MapPin, label: "Adresa", value: "Lužansko polje 7,\nSarajevo, BiH" },
  { icon: Phone, label: "Telefon", value: "+387 61 158 271" },
  { icon: Mail, label: "Email", value: "info@ens.ba" },
  { icon: Clock, label: "Radno vrijeme", value: "Pon–Pet: 08:00 – 16:30\nVikend: Zatvoreno" },
];

export default function KontaktClient() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { ime: "", email: "", telefon: "", poruka: "" },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    toast.success("Poruka uspješno poslana!", {
      description: "Kontaktirat ćemo vas u najkraćem mogućem roku.",
    });
    form.reset();
  }

  return (
    <div className="pt-32 pb-20 bg-white min-h-screen">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Kontaktirajte nas</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Zatražite ponudu, dogovorite sastanak ili nam postavite pitanje. Tu smo za vas.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 lg:gap-8">
          <div className="lg:col-span-1 space-y-8 bg-gray-50 p-8 rounded-3xl border border-gray-100">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-6">Informacije</h2>
              <ul className="space-y-6">
                {contactInfo.map(({ icon: Icon, label, value }) => (
                  <li key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-red-50 text-primary flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{label}</p>
                      <p className="text-gray-600 whitespace-pre-line">{value}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-2 bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Pošaljite nam poruku</h2>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField control={form.control} name="ime" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700">Ime i prezime / Firma</FormLabel>
                      <FormControl><Input placeholder="Vaše ime" className="bg-gray-50 h-12 rounded-xl" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="telefon" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700">Telefon</FormLabel>
                      <FormControl><Input placeholder="+387 61 000 000" className="bg-gray-50 h-12 rounded-xl" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                </div>
                <FormField control={form.control} name="email" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700">Email adresa</FormLabel>
                    <FormControl><Input placeholder="vas@email.com" className="bg-gray-50 h-12 rounded-xl" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="poruka" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700">Poruka / Upit</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Napišite nam kako vam možemo pomoći..." className="min-h-[150px] bg-gray-50 rounded-xl resize-none" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <Button type="submit" size="lg" className="w-full rounded-full h-14 text-base font-semibold bg-primary hover:bg-primary/90 text-white" disabled={form.formState.isSubmitting}>
                  {form.formState.isSubmitting ? "Slanje..." : "Pošalji poruku"}
                </Button>
              </form>
            </Form>
          </div>
        </div>

        {/* Google Maps */}
        <div className="mt-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Kako do nas</h2>
          <div className="rounded-3xl overflow-hidden shadow-md border border-gray-100 w-full h-72">
            <iframe
              title="ENS d.o.o. lokacija - Lužansko polje 7, Sarajevo"
              src="https://www.google.com/maps?q=Lužansko+polje+7,+71000+Sarajevo,+Bosna+i+Hercegovina&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="text-sm text-gray-500 mt-3 flex items-center gap-1">
            <MapPin className="w-4 h-4 text-primary" />
            Lužansko polje 7, 71000 Sarajevo, Bosna i Hercegovina
          </p>
        </div>
      </div>
    </div>
  );
}
