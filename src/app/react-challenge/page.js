import Navbar from "../components/Navbar";

const foodData = {
  m1: { description: "Chicken Fried Rice", name: "FriedRice", price: 150.0 },
  m2: { description: "Mutton Briyani", name: "Briyani", price: 175.0 },
  m3: { description: "Idly with Vada", name: "Idly", price: 50.0 },
  m4: { description: "Dosai with potato masala", name: "Dosai", price: 55.0 },
};

export default function FoodList() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="max-w-3xl mx-auto mt-10 bg-white p-6 shadow-md rounded-lg">
        <h2 className="text-xl font-bold mb-4 text-gray-800">Menu Items</h2>
        <ul className="space-y-4">
          {Object.entries(foodData).map(([key, item]) => (
            <li key={key} className="border-b pb-4">
              <div className="text-lg font-semibold text-black">{item.name}</div>
              <div className="text-gray-600 italic text-sm">{item.description}</div>
              <div className="text-orange-800 font-sans font-medium mt-1">₹ {item.price.toFixed(2)}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
