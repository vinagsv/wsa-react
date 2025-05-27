import { useState } from "react";
import { Item } from "./Item";

export function PackingList({
  items,
  onDeleteItem,
  onToggleItem,
  onClearItems,
}) {
  const [sortBy, setSortBy] = useState("input");

  const sortedItems =
    sortBy === "description"
      ? [...items].sort((a, b) => a.description.localeCompare(b.description))
      : sortBy === "packed"
      ? [...items].sort((a, b) => Number(a.packed) - Number(b.packed))
      : items;

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearItems}>Clear Items</button>
      </div>
    </div>
  );
}
