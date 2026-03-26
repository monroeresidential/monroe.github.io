interface FilterBarProps {
  filters: string[];
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export default function FilterBar({ filters, activeFilter, onFilterChange }: FilterBarProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onFilterChange(filter)}
          className={`px-6 py-2 text-sm font-medium tracking-wider uppercase transition-all duration-300 ${
            activeFilter === filter
              ? 'bg-monroe-dark text-white'
              : 'bg-transparent text-monroe-gray-500 hover:text-monroe-dark border border-monroe-gray-300 hover:border-monroe-dark'
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
