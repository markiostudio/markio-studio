import Link from "next/link";
import { Bot } from "lucide-react";
import { getGreeting } from "@/lib/utils";
import { GradientButton } from "@/components/dashboard/ui/gradient-button";

export function GreetingSection() {
  const greeting = getGreeting();

  return (
    <section className="mb-8">
      <h1 className="text-2xl font-bold text-white sm:text-3xl">
        {greeting}, user<span className="ml-1">👋</span>
      </h1>
      <p className="mt-2 text-base text-zinc-400 sm:text-lg">
        Let&apos;s build something amazing for your business today.
      </p>
      <Link href="/assistant" className="mt-5 inline-block">
        <GradientButton size="lg">
          <Bot className="h-4 w-4" />
          AI Business Assistant
        </GradientButton>
      </Link>
    </section>
  );
}
