
import { useState } from "react";
import { useLanguage } from "@/context/useLanguage";
import { Mail, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

export function Contact() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    // Simulate sending email
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent!",
      description: "Thank you for contacting me. I'll get back to you soon.",
    });
    
    form.reset();
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="bg-background py-16">
      <div className="section-container max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            {t("contact.title") || "Get in touch"}
          </h2>
          <p className="text-muted-foreground">
            {t("contact.subtitle") || "Have a question or want to work together? Send me a message!"}
          </p>
        </div>

        <div className="bg-card rounded-xl p-6 border shadow-sm hover:shadow-md transition-shadow">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center space-x-2">
                      <Mail className="h-5 w-5 text-muted-foreground" />
                      <FormControl>
                        <Input 
                          placeholder={t("contact.emailPlaceholder") || "Your email address"} 
                          {...field} 
                        />
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea 
                        placeholder={t("contact.messagePlaceholder") || "Your message"} 
                        className="resize-none min-h-[120px]"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="flex justify-end">
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="transition-all duration-300 ease-in-out"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      {t("contact.sending") || "Sending"}...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      {t("contact.send") || "Send Message"}
                      <Send className="ml-2 h-4 w-4" />
                    </span>
                  )}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
