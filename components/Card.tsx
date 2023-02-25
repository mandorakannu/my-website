import React from "react";

export default function Card({ skills }: { skills: string}) {
  return <span className="bg-gray-300 px-5 py-3 text-zinc-600 rounded text-center">{skills}</span>;
}
