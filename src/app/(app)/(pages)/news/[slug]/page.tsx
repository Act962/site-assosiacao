import { prefetchNew } from "@/modules/news/server/prefetch";
import { NewsDetailPage } from "@/templates/new-detail";
import { HydrateClient } from "@/trpc/server";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

interface NewsDetailProps {
  params: Promise<{ slug: string }>;
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
