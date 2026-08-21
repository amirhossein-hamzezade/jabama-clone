export default function PageWithStickyElement() {
  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* 1. Content BEFORE the sticky element */}
      <div className="h-[50vh] bg-blue-50 flex items-center justify-center">
        <p className="text-gray-500">
          Scroll down to see the sticky element...
        </p>
      </div>

      {/* 2. THE STICKY ELEMENT CONTAINER */}
      {/* The parent container dictates how long the element stays sticky. */}
      <div className="relative h-[150vh] bg-white p-6">
        {/* THIS IS THE STICKY ELEMENT */}
        <div className="sticky top-0 z-30 bg-green-500 text-white p-4 rounded-xl shadow-md font-bold text-center transition-all">
          ⚡ I am sticky! I lock at the top, and return to my spot when you
          scroll up.
        </div>

        {/* Content inside the sticky zone */}
        <div className="mt-8 space-y-4">
          <p className="text-gray-600">
            As you scroll through this white section, the green bar stays at the
            top.
          </p>
          <div className="h-screen bg-gray-100 rounded-lg flex items-center justify-center">
            <span>Scroll back up to watch it return to its original home!</span>
          </div>
        </div>
      </div>

      {/* 3. Content AFTER the sticky element zone */}
      <div className="h-[50vh] bg-red-50 flex items-center justify-center">
        <p className="text-gray-500">
          The sticky element has released and stayed back in its section.
        </p>
      </div>
    </div>
  );
}
