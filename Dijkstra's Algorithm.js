function dijkstra(graph, start) {
    const distances = {};
    const visited = new Set();
    const pq = new PriorityQueue();

    // Initialize distances from start node to all other nodes as INFINITE
    for (let vertex in graph) {
        distances[vertex] = Infinity;
    }

    distances[start] = 0;
    pq.enqueue(start, 0);

    while (!pq.isEmpty()) {
        const currentVertex = pq.dequeue().element;

        if (visited.has(currentVertex)) continue;

        visited.add(currentVertex);

        for (let neighbor in graph[currentVertex]) {
            const distance = distances[currentVertex] + graph[currentVertex][neighbor];

            if (distance < distances[neighbor]) {
                distances[neighbor] = distance;
                pq.enqueue(neighbor, distance);
            }
        }
    }

    return distances;
}

class PriorityQueue {
    constructor() {
        this.queue = [];
    }

    enqueue(element, priority) {
        this.queue.push({ element, priority });
        this.sort();
    }

    dequeue() {
        if (this.isEmpty()) return "Underflow";
        return this.queue.shift();
    }

    isEmpty() {
        return this.queue.length == 0;
    }

    sort() {
        this.queue.sort((a, b) => a.priority - b.priority);
    }
}

// Example graph
const graph = {
    'A': { 'B': 4, 'C': 2 },
    'B': { 'A': 4, 'C': 5, 'D': 10 },
    'C': { 'A': 2, 'B': 5, 'D': 3 },
    'D': { 'B': 10, 'C': 3 }
};

console.log(dijkstra(graph, 'A'));
