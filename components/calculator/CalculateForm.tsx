"use client";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  spotPrice: z.coerce.number(),
  strikePrice: z.coerce.number(),
});

export default function CalculateForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      spotPrice: 0,
      strikePrice: 0,
    },
  });

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    console.log({ values });
  };

  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between p-24"
      suppressHydrationWarning={true}
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="max-w-md w-full flex flex-col gap-4"
        >
          <FormField
            control={form.control}
            name="spotPrice"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Spot price</FormLabel>
                <FormControl>
                  <Input placeholder="Spot price" type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="strikePrice"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Strike price</FormLabel>
                <FormControl>
                  <Input placeholder="Strike price" type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </Form>
    </main>
  );
}
