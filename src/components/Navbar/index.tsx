import { insideAppLinks } from "../../navlinks/inside-links";
import { socialMedia } from "../../navlinks/social-media";

export const Navbar = () => {
  return (
    <header className="fixed top-0 backdrop-blur-lg w-full z-10">
      <nav className="w-full px-6 py-4 sm:px-8 sm:py-6 flex justify-end">
        <ul
          className="flex items-center gap-4 max-sm:hidden flex-1"
          aria-hidden
        >
          {insideAppLinks.map(({ name, path }, ind) => (
            <li
              key={`nav-links-${name}-${path}-${ind}`}
              className="custom-effect"
            >
              <a href={path} role="link">
                {name}
              </a>
            </li>
          ))}
        </ul>
        <ul className="flex gap-2">
          {socialMedia.map(({ name, path, icon }, ind) => (
            <li key={`nav-socialmedia-${name}-${ind}`}>
              <a href={path} target="_blank" rel="noopener noreferrer">
                <figure className="w-8 h-8">
                  <img className="w-full h-full" src={icon} alt={name} />
                </figure>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
