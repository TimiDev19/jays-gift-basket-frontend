import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

export interface NavDropdownItem {
  label: string;
  href: string;
}

export interface NavDropdownProps {
  label?: string;
  items?: NavDropdownItem[];
}

/**
 * NavDropdown
 *
 * A dropdown menu of links for use inside a navbar.
 *
 * Usage:
 * <NavDropdown
 *   label="Products"
 *   items={[
 *     { label: "Analytics", href: "/products/analytics" },
 *     { label: "Automation", href: "/products/automation" },
 *     { label: "Integrations", href: "/products/integrations" },
 *   ]}
 * />
 */
export default function NavDropdown({
  label = "Categories",
  items = [
    { label: "Shop by Recipient", href: "/shopByRecipient" },
    { label: "Shop by Occasion", href: "/shopByOccassion" },
    { label: "Build Your Own Box", href: "/#contact" },
  ],
}: NavDropdownProps) {
  const [open, setOpen] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close on Escape
  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={containerRef}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-1.5 px-3 py-2 text-[16px] text-[#000] transition-colors rounded-md hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
        aria-haspopup="true"
        aria-expanded={open}
      >
        {label}
        <ChevronDown
          size={16}
          className={`transition-transform duration-200 ${
            open ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {open && (
        <div
          role="Categories"
          className="absolute left-0 mt-2 w-56 origin-top-left rounded-lg border border-slate-200 text-[16px] text-[#000] bg-white shadow-lg ring-1 ring-black/5 py-1.5 z-50 animate-[fadeIn_0.12s_ease-out]"
        >
          {items.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              role="menuitem"
              onClick={() => setOpen(false)}
              className="block px-4 py-2 text-sm text-[16px] text-[#000] hover:bg-slate-50 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}