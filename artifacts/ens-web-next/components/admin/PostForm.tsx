"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Upload, Eye } from "lucide-react";
import Image from "next/image";
import FocalPointPicker from "./FocalPointPicker";
import type { BlogPostDB } from "@/lib/posts.server";

const CATEGORIES = ["Porezi", "Plate", "Pravo", "Savjeti", "Knjigovodstvo"];

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[šđčćž]/g, (c: string) =>
      ({ š: "s", đ: "dj", č: "c", ć: "c", ž: "z" } as Record<string, string>)[c] ?? c
    )
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

interface PostFormProps {
  post?: BlogPostDB;
}

export default function PostForm({ post }: PostFormProps) {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [title, setTitle] = useState(post?.title ?? "");
  const [slug, setSlug] = useState(post?.slug ?? "");
  const [category, setCategory] = useState(post?.category ?? CATEGORIES[0]);
  const [customCategory, setCustomCategory] = useState("");
  const [author, setAuthor] = useState(post?.author ?? "");
  const [date, setDate] = useState(post?.date ?? "");
  const [readTime, setReadTime] = useState(post?.readTime ?? "");
  const [excerpt, setExcerpt] = useState(post?.excerpt ?? "");
  const [image, setImage] = useState(post?.image ?? "");
  const [content, setContent] = useState(post?.content ?? "");
  const [focalPoint, setFocalPoint] = useState<{ x: number; y: number } | undefined>(
    post?.focalPoint
  );

  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const isEdit = Boolean(post?.id);
  const useCustomCategory = !CATEGORIES.includes(category);

  useEffect(() => {
    if (!isEdit && title) {
      setSlug(generateSlug(title));
    }
  }, [title, isEdit]);

  async function handleFileUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setError("");

    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error ?? "Upload failed");
      }

      const data = await res.json();
      setImage(data.url as string);
      setFocalPoint(undefined);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Greška pri uploadu");
    } finally {
      setUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSaving(true);

    const finalCategory = useCustomCategory ? customCategory || category : category;

    const payload: Partial<BlogPostDB> = {
      title,
      slug,
      category: finalCategory,
      author,
      date,
      readTime,
      excerpt,
      image,
      content,
      ...(focalPoint ? { focalPoint } : {}),
    };

    try {
      let res: Response;
      if (isEdit && post) {
        res = await fetch(`/api/admin/posts/${post.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      } else {
        res = await fetch("/api/admin/posts", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      }

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error ?? "Greška pri snimanju");
      }

      router.push("/admin/dashboard");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Greška pri snimanju");
    } finally {
      setSaving(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Card className="border border-gray-200 shadow-sm">
        <CardContent className="pt-6 space-y-5">
          {/* Title */}
          <div className="space-y-1.5">
            <Label htmlFor="title" className="font-medium">
              Naslov <span className="text-red-500">*</span>
            </Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Naslov blog posta..."
              required
            />
          </div>

          {/* Slug */}
          <div className="space-y-1.5">
            <Label htmlFor="slug" className="font-medium">
              Slug (URL)
            </Label>
            <Input
              id="slug"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              placeholder="url-slug-posta"
              className="font-mono text-sm"
            />
            <p className="text-xs text-gray-400">ens.ba/blog/{slug || "..."}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Category */}
            <div className="space-y-1.5">
              <Label htmlFor="category" className="font-medium">
                Kategorija
              </Label>
              <select
                id="category"
                value={useCustomCategory ? "__custom__" : category}
                onChange={(e) => {
                  if (e.target.value === "__custom__") {
                    setCategory(customCategory || "");
                  } else {
                    setCategory(e.target.value);
                    setCustomCategory("");
                  }
                }}
                className="w-full h-10 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              >
                {CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
                <option value="__custom__">Prilagođena...</option>
              </select>
              {(useCustomCategory || (!CATEGORIES.includes(category) && category)) && (
                <Input
                  value={useCustomCategory ? customCategory : category}
                  onChange={(e) => {
                    setCustomCategory(e.target.value);
                    setCategory(e.target.value);
                  }}
                  placeholder="Unesite kategoriju..."
                  className="mt-2"
                />
              )}
            </div>

            {/* Author */}
            <div className="space-y-1.5">
              <Label htmlFor="author" className="font-medium">
                Autor
              </Label>
              <Input
                id="author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="npr. Amila Hodžić"
              />
            </div>

            {/* Date */}
            <div className="space-y-1.5">
              <Label htmlFor="date" className="font-medium">
                Datum
              </Label>
              <Input
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                placeholder="npr. 15. Januar 2026."
              />
            </div>

            {/* Read time */}
            <div className="space-y-1.5">
              <Label htmlFor="readTime" className="font-medium">
                Vrijeme čitanja
              </Label>
              <Input
                id="readTime"
                value={readTime}
                onChange={(e) => setReadTime(e.target.value)}
                placeholder="npr. 5 min"
              />
            </div>
          </div>

          {/* Excerpt */}
          <div className="space-y-1.5">
            <Label htmlFor="excerpt" className="font-medium">
              Sažetak / Excerpt
            </Label>
            <Textarea
              id="excerpt"
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              placeholder="Kratki opis posta koji se prikazuje u listi..."
              rows={3}
            />
          </div>

          {/* Image upload */}
          <div className="space-y-2">
            <Label className="font-medium">Slika</Label>
            <div className="flex items-center gap-3">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/jpeg,image/jpg,image/png,image/webp,image/gif"
                onChange={handleFileUpload}
                className="hidden"
                id="file-upload"
              />
              <Button
                type="button"
                variant="outline"
                disabled={uploading}
                onClick={() => fileInputRef.current?.click()}
                className="gap-2"
              >
                <Upload className="w-4 h-4" />
                {uploading ? "Uploadovanje..." : "Odaberi sliku"}
              </Button>
              {image && (
                <a
                  href={image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700"
                >
                  <Eye className="w-4 h-4" />
                  Pregled
                </a>
              )}
            </div>

            {image && (
              <div className="mt-3 space-y-3">
                <div className="relative w-48 h-28 rounded-lg overflow-hidden border border-gray-200">
                  <Image
                    src={image}
                    alt="Preview"
                    fill
                    className="object-cover"
                    sizes="192px"
                  />
                </div>
                <FocalPointPicker
                  imageUrl={image}
                  focalPoint={focalPoint}
                  onChange={setFocalPoint}
                />
              </div>
            )}

            {!image && (
              <div className="mt-2">
                <Label htmlFor="imageUrl" className="text-xs text-gray-500">
                  ili unesite URL slike
                </Label>
                <Input
                  id="imageUrl"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  placeholder="/images/blog-1.png"
                  className="mt-1 font-mono text-sm"
                />
              </div>
            )}
          </div>

          {/* Content */}
          <div className="space-y-1.5">
            <Label htmlFor="content" className="font-medium">
              Sadržaj <span className="text-red-500">*</span>
            </Label>
            <Textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Unesite sadržaj blog posta. Koristite prazan red između paragrafa."
              rows={15}
              required
              className="font-mono text-sm leading-relaxed"
            />
            <p className="text-xs text-gray-400">Odvojite paragrafe praznim redom</p>
          </div>
        </CardContent>
      </Card>

      {error && (
        <div className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-md px-4 py-3">
          {error}
        </div>
      )}

      <div className="flex items-center gap-3 pb-8">
        <Button
          type="submit"
          disabled={saving}
          className="bg-[#c0392b] hover:bg-[#a93226] text-white px-8"
        >
          {saving ? "Snimanje..." : "Spremi"}
        </Button>
        <Button
          type="button"
          variant="outline"
          onClick={() => router.back()}
          disabled={saving}
        >
          Otkaži
        </Button>
      </div>
    </form>
  );
}
