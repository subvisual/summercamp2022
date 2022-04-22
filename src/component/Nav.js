import Link from "./Link";

const navLinks = [
  { label: "Home", url: "/" },
  { label: "Past Cohort", url: "/pastCohort" },
  { label: "About us ", url: "/aboutUs" },
  { label: "Blog ", url: "/blog" },
  { label: "Contact", url: "/contact" },
];

function Nav() {
  return (
    <nav>
      <div className="flex-container">
        {navLinks.map((link) => (
          <Link href={link.url}>{link.label}</Link>
        ))}
      </div>
    </nav>
  );
}

export default Nav;
