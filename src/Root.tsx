/*import { useState, useEffect } from "react";
import { Link } from "react-router";
import { PokeAPI } from "./api";
*/

interface Props {
  id: number;
  image: string;
  name: string;
  types: string[];
}

export const Card: React.FC<Props> = (props) => (
  <div className="relative w-96 h-[600px] rounded-3xl 
                  bg-gradient-to-b from-gray-300 via-gray-200 to-gray-100
                  border-[6px] border-white
                  shadow-[0_20px_60px_rgba(0,0,0,0.4)] overflow-hidden
                  transform transition-transform hover:scale-105">

    {/* Effetto holographic overlay */}
    <div className="absolute inset-0 bg-gradient-to-tr from-blue-300/5 via-purple-300/5 to-pink-300/5 pointer-events-none" />

    {/* Top: Nome + HP */}
    <div className="absolute top-4 left-4 right-4 flex justify-between items-start z-10">
      <div>
        <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight">
          {props.name}
        </h2>
        <p className="text-xs text-gray-600">Pokémon</p>
      </div>
      <div className="text-right">
        <p className="text-xs text-gray-600 font-semibold">HP</p>
        <p className="text-3xl font-bold text-red-600">{props.id * 2}</p>
      </div>
    </div>

    {/* Immagine in evidenza */}
    <div className="absolute top-24 left-0 right-0 flex items-center justify-center h-64">
      <div className="relative w-64 h-64 rounded-2xl bg-gradient-to-b from-yellow-200 to-yellow-100 shadow-inner flex items-center justify-center border-2 border-yellow-300">
        <img
          src={props.image}
          alt={props.name}
          className="w-56 h-56 object-contain drop-shadow-lg"
        />
      </div>
    </div>

    {/* Tipo (bottom section) */}
    <div className="absolute bottom-24 left-0 right-0 px-4">
      <div className="text-xs font-bold text-gray-700 mb-2">Type:</div>
      <div className="flex gap-2 flex-wrap">
        {props.types.map((type) => (
          <span
            key={type}
            className={`font-bold text-white px-3 py-1 rounded-full text-xs ${getTypeColor(type)}`}
          >
            {type.toUpperCase()}
          </span>
        ))}
      </div>
    </div>

    {/* Bottom: Numero carta + Rarità */}
    <div className="absolute bottom-2 left-4 right-4 flex justify-between items-end text-xs text-gray-600">
      <span>#{props.id}/151</span>
      <span className="text-xl">★</span>
    </div>
  </div>
);

export function Root() {
  const dragonPattern = `
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill='%235a5a5a' opacity='0.4'%3E%3Cpath d='M50 20 L70 40 L65 60 L50 70 L35 60 L30 40 Z'%3E%3C/path%3E%3Cpath d='M50 20 L60 25 L55 35 L50 30 Z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E")
  `;

  return (
    <div 
      className="flex gap-8 p-8 justify-center items-center min-h-screen"
      style={{
        backgroundImage: dragonPattern,
        backgroundColor: "#d1d5db",
        backgroundRepeat: "repeat"
      }}
    >
      <Card
        id={384}
        image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/384.png"
        name="Rayquaza"
        types={["dragon", "flying"]}
      />
      <Card
        id={646}
        image="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/646_f3.png"
        name="Kyurem Nero"
        types={["dragon", "electro"]}
      />
    </div>
  );
}

function getTypeColor(type: string): string {
  return typeColors[type] ?? "bg-gray-400";
}

const typeColors: { [key: string]: string } = {
  dragon: "bg-purple-700",
  flying: "bg-indigo-400",
  fire: "bg-red-500",
  water: "bg-blue-500",
  grass: "bg-green-500",
  electric: "bg-yellow-400",
  electro: "bg-yellow-400",
  psychic: "bg-pink-500",
  ice: "bg-cyan-400",
  dark: "bg-gray-700",
  fairy: "bg-pink-300",
  normal: "bg-gray-400",
  fighting: "bg-red-700",
  poison: "bg-purple-500",
  ground: "bg-yellow-600",
  rock: "bg-yellow-800",
  bug: "bg-green-700",
  ghost: "bg-indigo-700",
  steel: "bg-gray-500",
};