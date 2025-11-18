import { create } from "zustand";

const STEAM_FUNNEL_SEGMENT_RENDER: string[] = [
  "     _____________",
  "     \\            \\",
  "      \\            \\",
  "       \\            \\",
  "        \\            \\",
  "         \\            \\",
  "          \\            \\",
  "           \\            \\",
  "            \\            \\",
  "             \\            \\",
  "              \\            \\",
]

const SAIL_SEGMENT_RENDER: string[] = [
  "          ||",
  "         /||\\   ",
  "        / || \\            ",
  "       /  ||  \\          ",
  "      /   ||   \\        ",
  "     /    ||    \\        ",
  "    /     ||     \\      ",
  "   /      ||      \\    ",
  "  /-------||       \\  ",
  "          ||--------\\",
  "          ||         ",
]

enum Segement {
  Sail = 'Sail',
  SteamFunnel = 'Steam Funnel',
}

type AppState = {
  segements: Segement[];

  output: string[];
  setOutput: (output: string[]) => void;
};

const useAppState = create<AppState>()((set) => ({
  segements: [Segement.Sail, Segement.SteamFunnel],
  output:SAIL_SEGMENT_RENDER,
  setOutput: (output) => set(() => ({ output })),
}));

export default function App() {
  const output = useAppState((state) => state.output);
  const segments = useAppState((state) => state.segements);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <h2 className="bg-pink-500">lol</h2>
      <pre className="overflow-x-scroll max-w-[80%]">
        {output.map((l) => (
          <p>{l}</p>
        ))}
      </pre>
      <div className="flex flex-row bg-gray-100 rounded-lg">
        {segments.map((s) => (
          <div className="flex px-6 py-2">
            <p>{s}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
