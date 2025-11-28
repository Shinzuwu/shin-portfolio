import { useState } from "react";

export default function FCFS() {
  const [processes, setProcesses] = useState([]);
  const [arrival, setArrival] = useState("");
  const [burst, setBurst] = useState("");
  const [result, setResult] = useState(null);

  const addProcess = () => {
    if (!arrival || !burst) return;
    const newProcess = {
      id: `P${processes.length + 1}`,
      arrival: Number(arrival),
      burst: Number(burst),
    };
    setProcesses([...processes, newProcess]);
    setArrival("");
    setBurst("");
  };

  const resetAll = () => {
    setProcesses([]);
    setResult(null);
  };

  const visualizeFCFS = () => {
    if (processes.length === 0) return;

    const sorted = [...processes].sort((a, b) => a.arrival - b.arrival);

    let currentTime = 0;
    let timeline = [];
    let totalWT = 0;
    let totalTAT = 0;

    sorted.forEach((p) => {
      const start = Math.max(currentTime, p.arrival);
      const finish = start + p.burst;

      timeline.push({
        id: p.id,
        start,
        finish,
        burst: p.burst,
      });

      const tat = finish - p.arrival;
      const wt = start - p.arrival;

      totalTAT += tat;
      totalWT += wt;

      currentTime = finish;
    });

    setResult({
      timeline,
      avgWT: totalWT / sorted.length,
      avgTAT: totalTAT / sorted.length,
    });
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#0d0d0d] to-[#161616] text-white px-8 py-10">
      <div className="max-w-5xl mx-auto">

        {/* PAGE TITLE */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight">
            FCFS Scheduling Visualizer
          </h1>
          <p className="text-gray-400 mt-2">
            Add processes, visualize execution timeline, and compute averages.
          </p>
        </div>

        {/* INPUT CARD */}
        <div className="bg-[#111]/60 border border-white/10 backdrop-blur-xl rounded-2xl p-8 shadow-[0_0_20px_#8b5cf610] mb-10">

          <h2 className="text-xl font-semibold mb-6">Add Processes</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              value={arrival}
              onChange={(e) => setArrival(e.target.value)}
              type="number"
              placeholder="Arrival Time (AT)"
              className="bg-[#1a1a1a] border border-white/10 px-4 py-3 rounded-xl outline-none focus:border-purple-500 transition"
            />

            <input
              value={burst}
              onChange={(e) => setBurst(e.target.value)}
              type="number"
              placeholder="Burst Time (BT)"
              className="bg-[#1a1a1a] border border-white/10 px-4 py-3 rounded-xl outline-none focus:border-purple-500 transition"
            />

            <button
              onClick={addProcess}
              className="bg-purple-600 hover:bg-purple-700 transition px-4 py-3 rounded-xl font-semibold shadow-[0_0_10px_#8b5cf650]"
            >
              Add Task
            </button>
          </div>

          {/* PROCESS LIST */}
          <div className="mt-6 space-y-3">
            {processes.map((p) => (
              <div
                key={p.id}
                className="bg-[#1a1a1a]/70 border border-white/10 rounded-xl px-5 py-3 flex justify-between items-center"
              >
                <span className="font-semibold">{p.id}</span>
                <span className="text-gray-300">AT: {p.arrival}</span>
                <span className="text-gray-300">BT: {p.burst}</span>
              </div>
            ))}
          </div>

          {/* ACTION BUTTONS */}
          <div className="flex gap-4 mt-8">
            <button
              onClick={visualizeFCFS}
              className="flex-1 bg-gradient-to-r from-green-600 to-blue-600 hover:opacity-90 transition px-4 py-3 rounded-xl font-semibold shadow-md"
            >
              Visualize FCFS
            </button>

            <button
              onClick={resetAll}
              className="flex-1 bg-[#222] hover:bg-[#333] transition px-4 py-3 rounded-xl font-semibold"
            >
              Reset All
            </button>
          </div>
        </div>

        {/* RESULT AREA */}
        {result && (
          <div className="bg-[#111]/60 border border-white/10 backdrop-blur-xl rounded-2xl p-8 shadow-[0_0_20px_#8b5cf610]">

            <h2 className="text-2xl font-bold mb-6 text-center">Gantt Chart</h2>

            {/* GANTT CHART */}
            <div className="flex gap-4 overflow-x-auto pb-4">
              {result.timeline.map((block) => (
                <div
                  key={block.id}
                  className="min-w-[120px] px-4 py-4 rounded-xl bg-purple-600/80 border border-purple-400/40 shadow-[0_0_15px_#8b5cf690] text-center"
                >
                  <div className="text-lg font-bold">{block.id}</div>
                  <div className="text-sm mt-1 opacity-80">
                    {block.start} → {block.finish}
                  </div>
                </div>
              ))}
            </div>

            {/* AVERAGE VALUES */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">

              <div className="bg-[#1a1a1a] border border-white/10 rounded-xl p-6">
                <h3 className="font-semibold text-purple-400">Average Waiting Time</h3>
                <p className="text-3xl font-bold mt-2">{result.avgWT.toFixed(2)}</p>
              </div>

              <div className="bg-[#1a1a1a] border border-white/10 rounded-xl p-6">
                <h3 className="font-semibold text-purple-400">Average Turnaround Time</h3>
                <p className="text-3xl font-bold mt-2">{result.avgTAT.toFixed(2)}</p>
              </div>

            </div>
          </div>
        )}
      </div>
    </div>
  );
}
