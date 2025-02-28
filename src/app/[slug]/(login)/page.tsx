import { SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { LogInIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

import { Button } from "@/components/ui/button";

interface LoginPageProps {
  params: Promise<{ slug: string }>;
}

const LoginPage = async ({ params }: LoginPageProps) => {
  const { slug } = await params;
  const { userId } = await auth();

  if (userId) {
    return redirect(`/${slug}`);
  }

  return (
    <div>
      <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] transform">
        <div className="flex flex-col items-center justify-center">
          <Image
            src="/mac.png"
            alt="logo"
            width={100}
            height={100}
            className="rounded-full"
          />
          <p className="pt-4">O melhor lanche do mundo!</p>
        </div>
        <div className="">
          <SignInButton>
            <Button className="mt-5 flex h-full w-full items-center justify-center">
              <p className="flex cursor-pointer flex-row items-center justify-center">
                <LogInIcon className="pr-1" /> Faça login na sua conta
              </p>
            </Button>
          </SignInButton>
        </div>
      </div>

      <div>
        <Button
          variant={"destructive"}
          className="absolute bottom-0 mt-5 flex w-full items-center justify-center rounded-none"
        >
          <Link href={`/${slug}`}>Não deseja fazer login? Clique aqui!</Link>
        </Button>
      </div>
    </div>
  );
};
export default LoginPage;
