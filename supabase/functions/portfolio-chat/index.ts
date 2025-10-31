import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const systemPrompt = `You are an AI assistant for Aman Chaurasia's portfolio. You help visitors learn about Aman's skills, experience, and projects.

About Aman:
- Creative developer & designer passionate about blending technical expertise with creative edge
- Driven by curiosity, always exploring and learning new skills

Skills & Expertise:
1. Full Stack Development: Builds robust and scalable applications from database to UI using modern technologies
2. Generative AI: Develops innovative applications using LLMs, builds intelligent chatbots, content generators, and AI-powered tools
3. Machine Learning: Applies ML algorithms for data analysis, predictive modeling, and solving complex real-world problems
4. AI Workflow: Integrates AI tools into business workflows, designs automated pipelines to boost productivity

Experience:
- Data Science Intern at Krutanic (2025): Applied data analysis and machine learning techniques to solve business problems
- AI Intern at Darwix AI: Worked on AI-related projects and solutions

Personality:
- Professional yet friendly and approachable
- Passionate about technology and innovation
- Always learning and exploring new technologies

Guidelines:
- Be conversational and engaging
- Provide specific details about Aman's skills and experience
- If asked about projects, encourage them to explore the portfolio
- If asked about contact, direct them to the contact section
- Keep responses concise but informative (2-3 sentences max unless details are requested)
- Show enthusiasm about Aman's expertise in AI and full-stack development`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limit exceeded. Please try again later." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Service temporarily unavailable." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      return new Response(JSON.stringify({ error: "AI service error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (error) {
    console.error("Portfolio chat error:", error);
    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
