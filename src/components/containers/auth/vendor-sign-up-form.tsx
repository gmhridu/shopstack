import { useForm } from "@tanstack/react-form";
import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";

interface VendorSignUpFromProps {
  onSuccess: () => void;
}

export function VendorSignUpForm({ onSuccess }: VendorSignUpFromProps) {
  // const navigate = useNavigate();
  // const [loading, setLoading] = useState(false);
  // const [step, setStep] = useState<1 | 2>(1);
  // const [showPassword, setShowPassword] = useState(false);
  // const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // const form = useForm({
  //   defaultValues: {
  //     name: "",
  //     email: "",
  //     password: "",
  //     confirmPassword: "",
  //     storeName: "",
  //     storeDescription: "",
  //     contactPhone: "",
  //     countryCode: "BD",
  //     address: "",
  //   },
  //   validators: {
  //     onSubmit: vendorRegisterSchema.parse,
  //   },
  //   onSubmit: async ({ value }) => {
  //     setLoading(true);
  //     try {
  //       const res = await registerVendor({
  //         data: value as VendorRegisterInput,
  //       });
  //       if (res.success) {
  //         toast.success("Vendor account created successfully!");
  //         toast.info(`Your shop "${res.shop.name}" is pending approval.`);
  //         onSuccess?.();
  //         // Redirect to vendor dashboard - shop access after approval
  //         navigate({ to: "/" });
  //       }
  //     } catch (error) {
  //       toast.error(
  //         error instanceof Error ? error.message : "Registration failed",
  //       );
  //     } finally {
  //       setLoading(false);
  //     }
  //   },
  // });
  return <div></div>;
}
