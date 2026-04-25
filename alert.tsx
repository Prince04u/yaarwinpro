import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface BreadcrumbItem { name: string; url: string; }

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  breadcrumbs?: BreadcrumbItem[];
  jsonLd?: object | object[];
  type?: "website" | "article";
}

const SITE_URL = "https://yaarwin.com";

const upsertMeta = (selector: string, attr: string, key: string, value: string) => {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", value);
};

export const SEO = ({ title, description, keywords, canonical, breadcrumbs, jsonLd, type = "website" }: SEOProps) => {
  const location = useLocation();

  useEffect(() => {
    document.title = title;
    upsertMeta('meta[name="description"]', "name", "description", description);
    if (keywords) upsertMeta('meta[name="keywords"]', "name", "keywords", keywords);
    upsertMeta('meta[property="og:title"]', "property", "og:title", title);
    upsertMeta('meta[property="og:description"]', "property", "og:description", description);
    upsertMeta('meta[property="og:type"]', "property", "og:type", type);
    upsertMeta('meta[name="twitter:title"]', "name", "twitter:title", title);
    upsertMeta('meta[name="twitter:description"]', "name", "twitter:description", description);

    const canonicalUrl = canonical || `${SITE_URL}${location.pathname}`;
    let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) { link = document.createElement("link"); link.setAttribute("rel", "canonical"); document.head.appendChild(link); }
    link.setAttribute("href", canonicalUrl);
    upsertMeta('meta[property="og:url"]', "property", "og:url", canonicalUrl);

    // Build a combined JSON-LD: WebPage + optional Breadcrumb + page-specific
    const blocks: object[] = [];
    blocks.push({
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: title,
      description,
      url: canonicalUrl,
      isPartOf: { "@type": "WebSite", name: "YaarWin", url: SITE_URL },
    });
    if (breadcrumbs && breadcrumbs.length) {
      blocks.push({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((b, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: b.name,
          item: b.url.startsWith("http") ? b.url : `${SITE_URL}${b.url}`,
        })),
      });
    }
    if (jsonLd) {
      (Array.isArray(jsonLd) ? jsonLd : [jsonLd]).forEach((j) => blocks.push(j));
    }

    document.head.querySelectorAll('script[data-seo-jsonld]').forEach((n) => n.remove());
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-seo-jsonld", "true");
    script.text = JSON.stringify(blocks);
    document.head.appendChild(script);
  }, [title, description, keywords, canonical, type, location.pathname, JSON.stringify(breadcrumbs), JSON.stringify(jsonLd)]);

  return null;
};

export const articleJsonLd = ({ headline, description, url }: { headline: string; description: string; url: string }) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline,
  description,
  author: { "@type": "Organization", name: "YaarWin Editorial Team" },
  publisher: { "@type": "Organization", name: "YaarWin", logo: { "@type": "ImageObject", url: `${SITE_URL}/apple-touch-icon.png` } },
  mainEntityOfPage: { "@type": "WebPage", "@id": url.startsWith("http") ? url : `${SITE_URL}${url}` },
  datePublished: "2024-01-01",
  dateModified: new Date().toISOString().split("T")[0],
});
