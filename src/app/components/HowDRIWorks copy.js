'use client';
import Image from 'next/image';
import { Pencil, Plus } from 'lucide-react';

const steps = [
  {
    title: 'Talk to Us',
    desc: 'Share your loan troubles — we’re here to support, not judge.',
    icon: '/talk.png',
  },
  {
    title: 'We Negotiate',
    desc: 'Our experts work with your bank to reduce the total amount you owe.',
    icon: '/negotiate.png',
  },
  {
    title: 'You Agree',
    desc: 'Once the negotiated amount is set, you pay the bank directly — no middlemen.',
    icon: '/agree.png',
  },
  {
    title: "You're Sorted",
    desc: 'Pay DRI a one-time fee, and enjoy peace of mind with your debt resolved.',
    icon: '/sorted.png',
  },
];

export default function HowDRIWorks() {
  return (
    <div className="bg-white p-4 rounded-xl shadow mt-10">
      <h2 className="text-xl font-semibold mb-4">How DRI Works ?</h2>
      {steps.map((step, idx) => (
        <div key={idx} className="flex items-start gap-4 mb-4">
          <Image src={step.icon} alt={step.title} width={40} height={40} />
          <div className="flex-1">
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-md">{step.title}</h3>
              <Pencil size={14} className="text-gray-500 cursor-pointer" />
            </div>
            <p className="text-sm text-gray-600">{step.desc}</p>
          </div>
        </div>
      ))}
      <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded text-sm flex items-center">
        <Plus size={14} className="mr-1" /> Add More
      </button>
    </div>
  );
}
