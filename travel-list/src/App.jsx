// import { useState } from "react";
// import { Logo } from "./components/Logo";
// import { Form } from "./Form";
// import { PackingList } from "./components/PackingList";
// import { Stats } from "./components/Stats";

// /* eslint-disable react/prop-types */
// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "Charger", quantity: 4, packed: true },
// ];

// export default function App() {
//   const [items, setItems] = useState(initialItems);

//   function handleAddItems(item) {
//     setItems((items) => [...items, item]);
//   }

//   function handleDeleteItem(id) {
//     setItems((items) => items.filter((item) => item.id !== id));
//   }

//   function handleToggleItem(id) {
//     setItems((items) =>
//       items.map((item) =>
//         item.id === id ? { ...item, packed: !item.packed } : item
//       )
//     );
//   }

//   function handleClearItems() {
//     const confirmed = window.confirm(
//       "Are you sure you want to clear all items?"
//     );
//     confirmed && setItems([]);
//   }

//   return (
//     <div>
//       <Logo />
//       <Form onAddItems={handleAddItems} />
//       <PackingList
//         items={items}
//         onDeleteItem={handleDeleteItem}
//         onToggleItem={handleToggleItem}
//         onClearItems={handleClearItems}
//       />
//       <Stats items={items} />
//     </div>
//   );
// }

//=====================
import { useState } from "react";
import { Logo } from "./components/Logo";
import { Form } from "./Form";
import { PackingList } from "./components/PackingList";
import { Stats } from "./components/Stats";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Blog from "./Blog";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 4, packed: true },
];

function Home() {
  const [items, setItems] = useState(initialItems);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearItems() {
    const confirmed = window.confirm(
      "Are you sure you want to clear all items?"
    );
    confirmed && setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearItems={handleClearItems}
      />
      <Stats items={items} />
      <div className="blog-link">
        <Link to="/blog">
          <button>Project Blog</button>
        </Link>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
}
