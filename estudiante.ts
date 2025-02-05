class Estudiante {
    constructor(public id: number, public nombre: string) {}
  
    // Sobreescribimos `toString` para facilitar la identificación
    toString(): string {
      return `Estudiante(id=${this.id}, nombre=${this.nombre})`;
    }
  }
  
  class RegistroEstudiantes {
    private estudiantes: Set<number>; // Usamos un Set para almacenar IDs únicos
    private lista: Map<number, Estudiante>; // Para almacenar la info completa
  
    constructor() {
      this.estudiantes = new Set<number>();
      this.lista = new Map<number, Estudiante>();
    }
  
    agregar(estudiante: Estudiante): boolean {
      if (this.estudiantes.has(estudiante.id)) {
        console.log(`⚠️ Error: El estudiante con ID ${estudiante.id} ya existe.`);
        return false;
      }
      this.estudiantes.add(estudiante.id);
      this.lista.set(estudiante.id, estudiante);
      console.log(`✅ Estudiante agregado: ${estudiante.toString()}`);
      return true;
    }
  
    eliminar(id: number): boolean {
      if (this.estudiantes.has(id)) {
        this.estudiantes.delete(id);
        this.lista.delete(id);
        console.log(`❌ Estudiante con ID ${id} eliminado.`);
        return true;
      }
      console.log(`⚠️ No se encontró estudiante con ID ${id}.`);
      return false;
    }
  
    obtenerEstudiantes(): Estudiante[] {
      return Array.from(this.lista.values());
    }
  }
  
  // 🔥 Uso del sistema
  const registro = new RegistroEstudiantes();
  registro.agregar(new Estudiante(1, "Carlos"));
  registro.agregar(new Estudiante(2, "Ana"));
  registro.agregar(new Estudiante(1, "Luis")); // ⚠️ Error porque ID 1 ya existe
  
  console.log("📜 Lista de estudiantes:");
  console.log(registro.obtenerEstudiantes());
  
  registro.eliminar(1);
  console.log("📜 Lista después de eliminar:");
  console.log(registro.obtenerEstudiantes());
  