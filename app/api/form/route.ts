import connectDB from "@server/databases/connect";
import disconnect from "@server/databases/disconnect";
import clients from "@server/models/client";
export async function POST(request: Request) {
  const data = await request.json(); // This line get request.body as JSON.
  const {email, subject, message} = data;
    try {
    connectDB();
    await new clients({email, subject, message}).save();
    disconnect();
    return new Response("OK", {status: 200})
    }
    catch (err) {
      return new Response("Internal Server Error", {status: 500});
    }  
}
