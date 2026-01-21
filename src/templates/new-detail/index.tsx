"use client";

import { RichText } from "@/components/payload/components/rich-text";
import { Button } from "@/components/ui/button";
import { useQueryNew } from "@/modules/news/hooks/use-news";
import { format } from "date-fns";
import { ArrowLeftIcon, ClockIcon, Tag } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

export function NewsDetailPage({ slug }: { slug: string }) {
  const { news, isLoading } = useQueryNew(slug);

  return (
    <div className="min-h-screen bg-white">
      {/* Header Image */}
      {news?.coverImage && (
        <div className="relative h-[50vh] overflow-hidden">
          <img
            src={news.coverImage.url || ""}
            alt={news.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
        </div>
      )}

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {/* Back Button */}

          <Button variant="ghost" className="mb-8" asChild>
            <Link href={"/news"}>
              <ArrowLeftIcon className="mr-2 w-4 h-4" />
              Voltar
            </Link>
          </Button>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            {news?.categories && (
              <span
                className={`px-4 py-1.5 rounded-full text-sm font-semibold bg-gray-100 text-gray-700`}
              >
                <Tag className="w-4 h-4 inline mr-1" />
                {news.categories.name}
              </span>
            )}
            <span className="text-gray-500 flex items-center gap-2">
              <ClockIcon className="w-4 h-4" />
              {news?.publishedAt &&
                format(new Date(news.publishedAt), "d 'de' MMMM 'de' yyyy")}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {news?.title}
          </h1>

          {/* Excerpt */}
          {news?.excerpt && (
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {news?.excerpt}
            </p>
          )}

          {/* Content */}
          <div>{news?.content && <RichText data={news.content} />}</div>
        </motion.div>
      </div>
    </div>
  );
}
