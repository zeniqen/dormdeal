import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CategoryPage } from "@/components/category-page";
import { categories, getCategoryBySlug, getProductsByCategory, slugifyCategory } from "@/lib/data";

export function generateStaticParams() {
  return categories.map((category) => ({ slug: slugifyCategory(category.name) }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    return {
      title: "Category not found | DormDeal"
    };
  }

  return {
    title: `${category.name} | DormDeal`,
    description: `Browse used ${category.name.toLowerCase()} on DormDeal.`
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  return <CategoryPage categoryName={category.name} products={getProductsByCategory(category.name)} />;
}
