'use client';
// 'use client' no topo marca este arquivo como Client Component (roda no navegador)

import { useState } from 'react';

export default function LikeButton() {
  // useState devolve um array: [valor do estado, funcao que atualiza]
  const [likes, setLikes] = useState(0);

  // Funcao que trata o evento de clique (event handler)
  function handleClick() {
    setLikes(likes + 1);
  }

  return <button onClick={handleClick}>Like ({likes})</button>;
}
