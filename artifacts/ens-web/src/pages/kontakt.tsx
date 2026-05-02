import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { motion } from "framer-motion";
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

export default function Kontakt() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ime: "",
      email: "",
      telefon: "",
      poruka: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Simulate API call
    setTimeout(() => {
      toast.success("Poruka uspješno poslana!", {
        description: "Kontaktirat ćemo vas u najkraćem mogućem roku.",
      });
      form.reset();
    }, 1000);
  }

  return (
    <div className="pt-32 pb-20 bg-white min-h-screen">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Kontaktirajte nas</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Zatražite ponudu, dogovorite sastanak ili nam postavite pitanje. Tu smo za vas.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 lg:gap-8">
          {/* Contact Info Sidebar */}
          <motion.div 
            className="lg:col-span-1 space-y-8 bg-gray-50 p-8 rounded-3xl border border-gray-100"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Informacije</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-red-50 text-primary flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Adresa</p>
                    <p className="text-gray-600">Lužansko polje 7,<br/>Sarajevo, BiH</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-red-50 text-primary flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Telefon</p>
                    <p className="text-gray-600">+387 33 123 456</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-red-50 text-primary flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">info@ens.ba</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-red-50 text-primary flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Radno vrijeme</p>
                    <p className="text-gray-600">Pon–Pet: 08:00 – 16:00<br/>Vikend: Zatvoreno</p>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="lg:col-span-2 bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Pošaljite nam poruku</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="ime"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700">Ime i prezime / Firma</FormLabel>
                        <FormControl>
                          <Input placeholder="Vaše ime" className="bg-gray-50 h-12 rounded-xl" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="telefon"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700">Telefon</FormLabel>
                        <FormControl>
                          <Input placeholder="+387 61 000 000" className="bg-gray-50 h-12 rounded-xl" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700">Email adresa</FormLabel>
                      <FormControl>
                        <Input placeholder="vas@email.com" className="bg-gray-50 h-12 rounded-xl" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="poruka"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700">Poruka / Upit</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Napišite nam kako vam možemo pomoći..." 
                          className="min-h-[150px] bg-gray-50 rounded-xl resize-none" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full rounded-full h-14 text-base font-semibold bg-primary hover:bg-primary/90 text-white"
                  disabled={form.formState.isSubmitting}
                >
                  {form.formState.isSubmitting ? "Slanje..." : "Pošalji poruku"}
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
