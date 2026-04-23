import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({
  apiKey: import.meta.env.VITE_ANTHROPIC_API_KEY // This is the default and can be omitted
});

self.sendMessage = async (message = "Hello, Claude") => {
  const response = await client.messages.create({
    max_tokens: 1024,
    messages: [{ role: "user", content: message }],
    model: "claude-opus-4-7"
  });

  return response.content
}