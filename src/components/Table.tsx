import React from "react";

interface Column {
  header: string;
  accessorKey: string;
  cell?: (item: any, index: number) => React.ReactNode;
}

interface TableProps {
  headers: Column[];
  data: any[];
}

const Table = ({ headers, data }: TableProps) => {
  return (
    <table className="w-full flex flex-col md:table">
      <thead className="hidden md:table-header-group bg-gray-50 border-b border-gray-200">
        <tr>
          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-16">
            Sr. No.
          </th>
          {headers.map((head, i) => (
            <th
              key={i}
              className={`px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${head.header === "Actions" ? "md:text-right" : ""}`}
            >
              {head.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="flex flex-col md:table-row-group bg-transparent md:bg-white md:divide-y divide-gray-200">
        {data.map((item, index) => (
          <tr
            key={item.id || index}
            className="flex flex-col md:table-row hover:bg-gray-50 transition-colors mb-4 md:mb-0 border md:border-none rounded-lg p-4 md:p-0 shadow-sm md:shadow-none bg-white"
          >
            {/* Sr. No. Column */}
            <td className="flex justify-between items-center md:table-cell py-2 md:px-4 md:py-4 whitespace-nowrap text-sm text-gray-500 border-b md:border-none border-gray-100">
              <span className="md:hidden font-bold text-gray-700">Sr. No:</span>
              <span>{index + 1}</span>
            </td>

            {/* Dynamic Columns */}
            {headers.map((head, i) => (
              <td
                key={i}
                className={`flex justify-between items-center md:table-cell py-2 md:px-4 md:py-4 whitespace-nowrap text-sm text-gray-900 border-b md:border-none border-gray-100 last:border-none ${head.header === "Actions" ? "md:text-right" : ""}`}
              >
                <span className="md:hidden font-medium text-gray-500">
                  {head.header}:
                </span>
                <div className={`md:w-full ${head.header === "Actions" ? "flex justify-end" : ""}`}>
                  {head.cell ? (
                    head.cell(item, index)
                  ) : (
                    <span className="truncate max-w-[200px] md:max-w-none block">
                      {item[head.accessorKey]}
                    </span>
                  )}
                </div>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
