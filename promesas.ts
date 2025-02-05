interface Post {
    id: number;
    title: string;
    body: string;
}

async function getPost(id: number): Promise<Post> {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if (!response.ok) {
        throw new Error("Error al obtener el post");
    }
    return response.json();
}

// 🔥 Uso
getPost(1)
    .then(post => console.log(`Título: ${post.title}`))
    .catch(error => console.error(error));


async function fetchWithRetry<T>(url: string, retries: number = 3): Promise<T> {
    for (let i = 0; i < retries; i++) {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error("Error en la respuesta");
            return await response.json();
        } catch (error) {
            console.error(`Intento ${i + 1} fallido`);
            if (i === retries - 1) throw error;
        }
    }
    throw new Error("No se pudo obtener respuesta");
}

// 🔥 Uso
fetchWithRetry<Post>("https://jsonplaceholder.typicode.com/posts/1")
    .then(post => console.log(post.title))
    .catch(error => console.error("Error final", error));
