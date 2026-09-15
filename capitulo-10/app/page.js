// page.js continua sendo Server Component (padrao do Next.js)
import LikeButton from './like-button';

// Componente precisa comecar com letra MAIUSCULA
// Desestruturando o objeto props direto no parametro
function Header({ title }) {
  // Chaves {} abrem o "modo JavaScript" dentro do JSX
  // Operador ternario: se nao vier title, mostra o padrao
  return <h1>{title ? title : 'Default title'}</h1>;
}

// export default: diz para o Next.js qual componente e a pagina principal
export default function HomePage() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

  return (
    <div>
      <Header title="Develop. Preview. Ship." />
      <ul>
        {/* map percorre o array e devolve um li para cada nome */}
        {names.map((name) => (
          // key unica para o React identificar cada item da lista
          <li key={name}>{name}</li>
        ))}
      </ul>
      {/* Client Component dentro do Server Component */}
      <LikeButton />
    </div>
  );
}
