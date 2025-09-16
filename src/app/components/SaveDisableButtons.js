'use client';

export default function SaveDisableButtons() {
  return (
    <div className="flex justify-end gap-4 mt-10">
      <button className="bg-red-600 px-4 py-2 rounded text-white">Disable</button>
      <button className="bg-green-600 px-4 py-2 rounded text-white">Save</button>
    </div>
  );
}
