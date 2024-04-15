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

const items = [
  {
    name: "spotPrice",
    label: "Spot Price",
    schema: z.coerce.number(),
    default: 0,
  },
  {
    name: "strikePrice",
    label: "Strike Price",
    schema: z.coerce.number(),
    default: 0,
  },
  {
    name: "strikeInterval",
    label: "Strike Interval",
    schema: z.coerce.number(),
    default: 1,
  },
  { name: "days", label: "Days", schema: z.coerce.number(), default: 1,},
  {
    name: "volatility",
    label: "Volatility",
    schema: z.coerce.number(),
    default: 10,
  },
  {
    name: "interestRate",
    label: "Interest rate",
    schema: z.coerce.number(),
    default: 1,
  },
  {
    name: "divident",
    label: "Divident",
    schema: z.coerce.number(),
    default: 0,
  },
];

const formSchema = z.object(
  items.reduce((final, item) => {
    final[item.name] = item.schema;
    return final;
  }, {})
);

const defaultValues2 = items.reduce((final, item) => {
  final[item.name] = item.default;
  return final;
}, {});

export default function CalculateForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { ...defaultValues2 },
  });

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    console.log({ values });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="max-w-md w-full flex flex-col gap-4"
        >
          {items.map((item) => (
            <FormField
              key={item.name}
              control={form.control}
              name={item.name}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{item.label}</FormLabel>
                  <FormControl>
                    <Input placeholder={item.label} type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}

          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </Form>
    </main>
  );
}
