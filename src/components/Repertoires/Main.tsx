"use client";

/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react";

export default function Component({ posts }: { posts: any }) {
  const [currentPage, setCurrentPage] = useState(1);
  const repertoiresPerPage = 6;
  const totalPages = Math.ceil(posts.length / repertoiresPerPage);

  const indexOfLastRepertoire = currentPage * repertoiresPerPage;
  const indexOfFirstRepertoire = indexOfLastRepertoire - repertoiresPerPage;
  const currentRepertoires = posts.slice(
    indexOfFirstRepertoire,
    indexOfLastRepertoire,
  );

  const formatDate = (dateString: string) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    // @ts-expect-error known error
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  return (
    <div className="font-sans">
      <div className="container mx-auto max-w-7xl px-4 py-8">
        <h2 className="mb-8 text-center text-3xl font-bold">
          Balkan Repertoires
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((repertoire: any) => (
            <Card
              key={repertoire._id}
              className="overflow-hidden transition-shadow hover:shadow-lg"
            >
              <CardHeader className="p-0">
                <Image
                  src={repertoire.mainImage}
                  alt={repertoire.title}
                  width={300}
                  height={200}
                  className="h-48 w-full object-cover"
                />
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="mb-2 text-xl">
                  {repertoire.title}
                </CardTitle>
                <p className="mb-4 text-muted-foreground">
                  {repertoire.excerpt}
                </p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="mr-2 h-4 w-4" />
                  <span>{formatDate(repertoire.publishedAt)}</span>
                </div>
              </CardContent>
              <CardFooter className="p-4">
                <Link href={`/blog/${repertoire.slug}`} passHref>
                  <Button className="w-full">Read More</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-8 flex items-center justify-center space-x-2">
          <Button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            variant="outline"
            size="icon"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span className="text-muted-foreground">
            Page {currentPage} of {totalPages}
          </span>
          <Button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            variant="outline"
            size="icon"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
