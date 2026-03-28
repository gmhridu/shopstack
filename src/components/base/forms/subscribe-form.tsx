import { z } from "zod";
import { useForm } from "@tanstack/react-form";
import { Input } from "#/components/ui/input";
import { Field, FieldError } from "#/components/ui/field";
import { Button } from "#/components/ui/button";
import { ArrowRightIcon } from "lucide-react";

const schema = z.object({
  email: z.email("Please enter a valid email address"),
});

export function SubscribeForm() {
  const form = useForm({
    defaultValues: {
      email: "",
    },
    validators: {
      onSubmit: schema as any,
    },
    onSubmit: async ({ value }) => {
      console.log("newsletter-subscribed", value);
    },
  });
  return (
    <form
      onSubmit={(e) => {
        (e.preventDefault(), form.handleSubmit());
      }}
      noValidate
    >
      <form.Field
        name="email"
        children={(field) => {
          const isInvalid =
            field.state.meta.isTouched && !field.state.meta.isValid;
          const stringErrors = (
            field.state.meta.errors as Array<string | undefined>
          )
            ?.filter((e): e is string => typeof e === "string")
            .map((e) => ({ message: e }));

          return (
            <Field
              data-invalid={isInvalid}
              className="relative w-full max-w-119.5"
            >
              <div className="relative">
                <Input
                  id={field.name}
                  name={field.name}
                  type="email"
                  value={(field.state.value as string) ?? ""}
                  onBlur={field.handleBlur}
                  onChange={(e) =>
                    field.handleChange((e.target as HTMLInputElement).value)
                  }
                  aria-invalid={isInvalid}
                  placeholder="Your Email"
                  autoComplete="email"
                  className="@6xl:h-16 h-12 w-full rounded-xl border-none bg-zinc-900 px-4 pr-12 text-zinc-400 placeholder:text-zinc-500 focus-visible:ring-1 focus-visible:ring-zinc-700"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  type="submit"
                  className="-translate-y-1/2 absolute top-1/2 right-2 text-zinc-400 hover:bg-transparent hover:text-white"
                >
                  <ArrowRightIcon className="size-5" />
                  <span className="sr-only">Subscribe</span>
                </Button>
              </div>
              {isInvalid && (
                <FieldError
                  errors={stringErrors}
                  className="-bottom-6 absolute left-0"
                />
              )}
            </Field>
          );
        }}
      />
    </form>
  );
}
