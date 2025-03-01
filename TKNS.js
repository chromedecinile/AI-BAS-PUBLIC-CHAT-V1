
const botImage = "https://cdn.discordapp.com/attachments/1172514189290524754/1343692029166616576/Screenshot_2024-09-08_204721.png?ex=67c02c78&is=67bedaf8&hm=2283a280edb4d62f278af5449b9b400afd4747b30cd617ed5fe4dec4ad9b847a&";
const botBio = "🤖 Your Roblox AI assistant. Drop a request, I got you with scripts!";


const AI_API_KEY = process.env.AI_UKDT; // Ensure this is set in your environment
const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent";

async function fetchAIResponse(prompt) {
    try {
        const response = await fetch(`${GEMINI_API_URL}?key=${AI_API_KEY}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }]
            })
        });
        const data = await response.json();
        return data.candidates?.[0]?.content?.parts?.[0]?.text || "⚠️ Error: No response from AI.";
    } catch (error) {
        console.error("AI Fetch Error:", error);
        return "⚠️ Error: Unable to fetch AI response.";
    }
}

async function getBotResponse(input) {
    if (!AI_API_KEY) {
        return "⚠️ AI key is missing. Please configure AI_UKDT properly.";
    }
    
    const prompt = `User: ${input}\nAI:`;
    return await fetchAIResponse(prompt);
}

