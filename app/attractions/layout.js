import "./style.css";
import Link from "next/link";
import Navigation from "../ui/Navigation";
export default function DashboardLayout({
  children, // will be a page or nested layout
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav>
        <Navigation></Navigation>
      </nav>

      {children}
    </section>
  );
}
