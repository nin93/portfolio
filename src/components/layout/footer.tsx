import Link from "@/components/ui/link";

export default function Footer() {
  return (
    <footer className="border-muted-background-dark text-muted-foreground-dark border-t py-6 text-center text-xs md:text-sm">
      <p>Built with NextJS and TailwindCSS.</p>

      <p>© 2026 Elia Franzella. All rights reserved.</p>

      <Link
        href="https://www.github.com/nin93/portfolio"
        className="underline underline-offset-2"
      >
        View source code
      </Link>
    </footer>
  );
}
