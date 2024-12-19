export default function HoldersList({ holders }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-[#FFD700]/20">
            <th className="py-2 px-4 text-[#FFD700] font-bold">Rank</th>
            <th className="py-2 px-4 text-[#FFD700] font-bold">Address</th>
            <th className="py-2 px-4 text-[#FFD700] font-bold">Balance</th>
          </tr>
        </thead>
        <tbody>
          {holders && holders?.slice(0, 8)?.map((holder) => (
            <tr
              key={holder.rank}
              className="border-b border-[#FFD700]/10 hover:bg-[#FFD700]/5 transition-colors"
            >
              <td className="py-3.5 px-4 text-[#FFD700]">#{holder.rank}</td>
              <td className="py-3.5 px-4 text-[#FFD700]/60">
                {holder.address}
              </td>
              <td className="py-3.5 px-4 text-[#FFD700]">{holder.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
