export const Hero = () => {
  return (
    <section className="bg-image w-1/9 h-screen mx-auto flex max-sm:flex-col max-sm:justify-center max-sm:px-8 max-sm:py-6 px-16 py-12 sm:w-full sm:items-center sm:justify-center">
      <div className="max-sm:mx-auto">
        <figure className="w-48 h-48 clip-circle aspect-video">
          <img
            src="/my-cv-photo.jpg"
            alt="My Photo"
            className="w-full h-full object-cover"
          />
        </figure>
      </div>
      <article className="flex flex-col px-4 py-3 sm:px-8 sm:py-3">
        <header className="flex flex-col gap-2 mb-4 max-sm:text-center">
          <h2 className="text-3xl font-extrabold">Carlos Vera</h2>
          <h3 className="text-2xl font-extrabold">Frontend Developer</h3>
        </header>
        <p className="font-bold sm:text-balance md:text-pretty max-sm:text-center">
          A passionate student of computer engineering and React.js entusiast
        </p>
        <ul>
          <li>
            <a href="">
              <img src="" alt="" />
            </a>
          </li>
        </ul>
      </article>
    </section>
  );
};
