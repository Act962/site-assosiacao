import { prefetchNew } from "@/modules/news/server/prefetch";
import { NewsDetailPage } from "@/templates/new-detail";
import { caller, HydrateClient } from "@/trpc/server";
import { Suspense } from "react";
import { Metadata } from "next";
import { ErrorBoundary } from "react-error-boundary";

interface NewsDetailProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const newDetail = await caller.news.getOne({
    slug,
  });

  const article = newDetail.docs[0];

  if (!article) {
    return {};
  }

  return {
    title: article.title,
    description: article.excerpt,
    robots: "index, follow",
    openGraph: {
      images: [article.coverImage?.url || ""],
    },
  };
}

export default async function NewsDetail({ params }: NewsDetailProps) {
  const { slug } = await params;
  prefetchNew({ slug });

  return (
    <HydrateClient>
      <ErrorBoundary fallback={<div>Erro ao carregar notícia</div>}>
        <Suspense fallback={<div>Loading...</div>}>
          <NewsDetailPage slug={slug} />
        </Suspense>
      </ErrorBoundary>
    </HydrateClient>
  );
}
