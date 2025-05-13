// 4. Create a simple pub/sub system with `subscribe`, `publish`, and `unsubscribe`.

function createPubSub() {
  const subscribers = {};

  return {
    subscribe(event, callback) {
      if (!subscribers[event]) {
        subscribers[event] = [];
      }
      subscribers[event].push(callback);
      return () => this.unsubscribe(event, callback); // Return unsubscribe function
    },
    publish(event, data) {
      if (subscribers[event]) {
        subscribers[event].forEach((cb) => cb(data));
      }
    },
    unsubscribe(event, callback) {
      if (subscribers[event]) {
        subscribers[event] = subscribers[event].filter((cb) => cb !== callback);
      }
    },
  };
}

// Example usage:
const pubsub = createPubSub();

function handler(data) {
  console.log("Received:", data);
}

const unsub = pubsub.subscribe("test", handler);
pubsub.publish("test", { msg: "Hello World!" }); // Received: { msg: 'Hello World!' }
unsub(); // Unsubscribe
pubsub.publish("test", { msg: "This will not be received." });
