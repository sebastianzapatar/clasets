interface User {
    id: number;
    name: string;
    email?: string; // Opcional
  }
  
  function createUser(user: User): void {
    console.log(`Usuario creado: ${user.name} ${user.email ?? "Sin correo"}`);
  }
  
  createUser({ id: 1, name: "Carlos" });
  createUser({ id: 2, name: "Ana", email: "ana@example.com" });
  