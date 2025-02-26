// Bot Variables
const botImage = "https://cdn.discordapp.com/attachments/1172514189290524754/1343692029166616576/Screenshot_2024-09-08_204721.png?ex=67c02c78&is=67bedaf8&hm=2283a280edb4d62f278af5449b9b400afd4747b30cd617ed5fe4dec4ad9b847a&";
const botBio = "🤖 Your Roblox AI assistant. Drop a request, I got you with scripts!";

// 💬 Main Response Logic
function getBotResponse(input) {
    input = input.toLowerCase();

    if (input.includes("teleport")) {
        return `💡 **Teleport Script**:\n\n\`game.Players.LocalPlayer.Character.HumanoidRootPart.CFrame = CFrame.new(x, y, z)\`\nReplace x, y, z with the coordinates you want. 🚀`;
    }
    if (input.includes("speed")) {
        return `⚡ **Speed Script**:\n\n\`game.Players.LocalPlayer.Character.Humanoid.WalkSpeed = 100\`\nChange "100" to adjust the speed. 🏃‍♂️💨`;
    }
    if (input.includes("fly")) {
        return `🦋 **Fly Script**:\n\n\`local player = game.Players.LocalPlayer\nlocal char = player.Character or player.CharacterAdded:Wait()\nchar.Humanoid.PlatformStand = true\n-- Use a fly loop here ✈️\``;
    }
    if (input.includes("invisible")) {
        return `👻 **Invisible Script**:\n\n\`game.Players.LocalPlayer.Character.Head.Transparency = 1\`\n**Heads up!** Might not bypass all anti-cheats. 🕵️‍♂️`;
    }
    return `🤔 Hmm... I don't have that script yet. Try asking for "teleport", "speed", "fly", or "invisible" scripts! 💬`;
}


