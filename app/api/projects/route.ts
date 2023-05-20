import connectDB from "@server/databases/connect";
import disconnect from "@server/databases/disconnect";
import links from "@server/models/projectLink";
export async function GET() {
    try{

        await connectDB();
        const res = await links.find({});
        await disconnect();
        return new Response(JSON.stringify(res), {
            headers: {
                "content-type": "application/json; charset=UTF-8",
            },
        });
    }catch(error){
        return new Response(JSON.stringify(error), {
            headers: {
                "content-type": "application/json; charset=UTF-8",
            },
        });
    }
}
