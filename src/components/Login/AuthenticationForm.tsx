import * as React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Loader2 } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const formSchema = z.object({
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  password: z.string().min(1, {
    message: 'Password is required.',
  }),
});

type UserFormValue = z.infer<typeof formSchema>;

const AuthenticationForm: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState(false);

  const form = useForm<UserFormValue>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data: UserFormValue) => {
    setIsLoading(true);
    console.log(data);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <Card className="w-96 bg-card shadow-lg rounded-lg">
      <CardHeader className="space-y-1 pt-8">
        <CardTitle className="text-2xl font-bold text-center text-card-foreground">Welcome</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-muted-foreground">Email Address</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        className="bg-card border-x-0 border-t-0 border-b-2 border-input rounded-none focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-primary p-0 h-9"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-muted-foreground">Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        className="bg-card border-x-0 border-t-0 border-b-2 border-input rounded-none focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-primary p-0 h-9"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex justify-end">
                <Button variant="link" type="button" className="p-0 h-auto text-sm font-normal text-muted-foreground hover:text-primary hover:no-underline">
                    Forgot Password
                </Button>
            </div>

            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg" disabled={isLoading}>
              {isLoading && (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              )}
              Login
            </Button>

            <div className="text-center text-sm text-muted-foreground">
              Don't have an account?{' '}
              <Button
                variant="link"
                type="button"
                className="p-0 h-auto font-semibold text-primary hover:no-underline"
              >
                SignUp
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default AuthenticationForm;
