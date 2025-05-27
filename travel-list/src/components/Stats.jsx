export function Stats({ items }) {
  const total = items.length;
  const packed = items.filter((item) => item.packed).length;
  const percentage = total === 0 ? 0 : Math.round((packed / total) * 100);

  return (
    <footer className="stats">
      <em>
        {total === 0
          ? "Your list is empty. Start adding some items!"
          : percentage === 100
          ? "You got everything ready to go!"
          : `You have ${total} items on your list, and you've packed ${packed} (${percentage}%).`}
      </em>
    </footer>
  );
}
