import { useMemo } from "react";

export function useFilter(items, searchTerm, filters, searchKeys = ["descripcion"]) {
  return useMemo(() => {
    if (!Array.isArray(items)) return [];

    return items.filter((item) => {
      if (searchTerm) {
        const searchLower = searchTerm.toLowerCase();
        const matchSearch = searchKeys.some((key) =>
          item[key]?.toString().toLowerCase().includes(searchLower)
        );
        if (!matchSearch) return false;
      }

      for (const [key, value] of Object.entries(filters)) {
        if (value && item[key] !== value) {
          return false;
        }
      }

      return true;
    });
  }, [items, searchTerm, filters, searchKeys]);
}
