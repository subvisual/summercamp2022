import Link from "./Link";

const navLinks = [
  { label: "Home", url: "/summercamp2022/" },
  { label: "Past Cohort", url: "/summercamp2022/pastCohort" },
  { label: "About us ", url: "/summercamp2022/aboutUs" },
  { label: "Blog ", url: "/summercamp2022/blog" },
  { label: "Contact", url: "/summercamp2022/contact" },
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
