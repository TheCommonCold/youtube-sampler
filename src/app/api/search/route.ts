import { google } from "googleapis";

const youtubeClient = google.youtube({
  version: "v3",
  auth: process.env.YOUTUBE_API_KEY,
});

export async function GET(request: Request) {
  const res = await youtubeClient.search.list({
    part: ["id"]
  });

  return Response.json({ res });
}
