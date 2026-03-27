const categories = [
  {
    name: "Casual",
    image: "https://images.unsplash.com/photo-1678723357379-d87f2a0ec8ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd29tYW4lMjBmYXNoaW9uJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzc0NDQ5MzczfDA&ixlib=rb-4.1.0&q=80&w=1080",
    link: "#"
  },
  {
    name: "Hoodie Cape",
    image: "https://images.unsplash.com/photo-1714046298190-7c33737ddc94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwc3VtbWVyJTIwY29sbGVjdGlvbnxlbnwxfHx8fDE3NzQ1NTkyNDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    link: "#"
  },
  {
    name: "Sweatshirt",
    image: "https://images.unsplash.com/photo-1770902971692-e4b9e3cf3933?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBmYXNoaW9uJTIwY2xvdGhpbmclMjBzdG9yZXxlbnwxfHx8fDE3NzQ1NDMwNzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    link: "#"
  },
  {
    name: "Kimono",
    image: "https://images.unsplash.com/photo-1678723357379-d87f2a0ec8ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd29tYW4lMjBmYXNoaW9uJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzc0NDQ5MzczfDA&ixlib=rb-4.1.0&q=80&w=1080",
    link: "#"
  },
  {
    name: "Takı & Aksesuar",
    image: "https://images.unsplash.com/photo-1769116416641-e714b71851e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhY2Nlc3NvcmllcyUyMGpld2Vscnl8ZW58MXx8fHwxNzc0NTU1OTIxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    link: "#"
  },
  {
    name: "Şal",
    image: "https://images.unsplash.com/photo-1758542988969-39a10168b2ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHlsaXNoJTIwaGFuZGJhZyUyMGFjY2Vzc29yaWVzfGVufDF8fHx8MTc3NDU1OTI1MHww&ixlib=rb-4.1.0&q=80&w=1080",
    link: "#"
  }
];

export function CategorySection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Kategoriler</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((category, index) => (
          <a
            key={index}
            href={category.link}
            className="group relative overflow-hidden rounded-lg aspect-[3/4]"
          >
            <img 
              src={category.image}
              alt={category.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-pink-600/80 via-pink-600/40 to-transparent flex items-end justify-center pb-4">
              <h3 className="text-white text-base md:text-lg font-semibold text-center px-2">{category.name}</h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}