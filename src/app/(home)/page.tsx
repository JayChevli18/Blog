import { HeroSection } from "@/components/home/header/HeroSection";
import { Button } from "../../components/ui/button";
import { Navbar } from "@/components/home/header/Navbar";
import { BlogFooter } from "@/components/home/header/BlogFooter";
import { TopArticles } from "@/components/home/header/TopArticles";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <section className="relative py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Featured Articles
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Discover our most popular and trending content
            </p>
          </div>
          <div className="mt-12 text-center">
            <Link href={"/articles"}>
              <Button
                variant="outline"
                className="rounded-full px-8 py-6 text-lg hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900"
              >
                View All Articles
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <TopArticles></TopArticles>
      <BlogFooter></BlogFooter>
    </div>
  );
}
