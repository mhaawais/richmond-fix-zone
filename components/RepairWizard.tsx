"use client";

import React, { useState } from "react";

const deviceOptions = [
  {
    label: "iPhone",
    image: "https://widget.xtremeiphonerepair.com/images/WidgetNewIcons/Widget%20New%20Icons/devices/iPhone.png",
  },
  {
    label: "Android Phone",
    image: "https://widget.xtremeiphonerepair.com/images/WidgetNewIcons/Widget%20New%20Icons/devices/Smart-Phone.png",
  },
  {
    label: "Tablet",
    image: "https://widget.xtremeiphonerepair.com/images/WidgetNewIcons/Widget%20New%20Icons/devices/Tablet.png",
  },
  {
    label: "Computer",
    image: "https://widget.xtremeiphonerepair.com/images/WidgetNewIcons/Widget%20New%20Icons/devices/Computer.png",
  },
  {
    label: "Gaming Console",
    image: "https://widget.xtremeiphonerepair.com/images/WidgetNewIcons/Widget%20New%20Icons/devices/Gaming-Console.png",
  },
  {
    label: "iWatch",
    image: "https://widget.xtremeiphonerepair.com/images/WidgetNewIcons/Widget%20New%20Icons/devices/iWatch.png",
  },
  {
    label: "Unlock",
    image: "https://widget.xtremeiphonerepair.com/images/WidgetNewIcons/Widget%20New%20Icons/devices/Unlock.png",
  },
];

const RepairWizard = () => {
  const [step, setStep] = useState(1);
  const [selectedDevice, setSelectedDevice] = useState("");

  const handleDeviceSelect = (device: string) => {
    setSelectedDevice(device);
    setStep(2);
  };

  const navigateToStep = (targetStep: number) => {
    if (targetStep < step) {
      setStep(targetStep);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Step Indicator */}
      <div className="flex items-center justify-between mb-12 max-w-4xl mx-auto">
        {["DEVICE", "MODEL", "ISSUE", "DETAILS", "GET QUOTE"].map((label, i) => (
          <div
            key={i}
            className="flex flex-col items-center text-center cursor-pointer"
            onClick={() => navigateToStep(i + 1)}
          >
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-full border-4 ${
                step === i + 1 ? "border-blue-500 text-blue-500" : step > i + 1 ? "border-green-500 text-green-500" : "border-gray-300 text-gray-400"
              } font-semibold`}
            >
              {i + 1}
            </div>
            <span
              className={`mt-2 text-sm ${
                step === i + 1 ? "text-blue-500" : step > i + 1 ? "text-green-600" : "text-gray-400"
              }`}
            >
              {label}
            </span>
          </div>
        ))}
      </div>

      {/* Step 1: Select Device */}
      {step === 1 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {deviceOptions.map((device) => (
            <button
              key={device.label}
              onClick={() => handleDeviceSelect(device.label)}
              className="flex flex-col items-center p-4 border shadow rounded hover:shadow-lg transition bg-white"
            >
              <img src={device.image} alt={device.label} className="h-32 object-contain mb-2" />
              <span className="font-semibold text-orange-500 text-center">{device.label}</span>
            </button>
          ))}
        </div>
      )}

      {/* Step 2 placeholder */}
      {step === 2 && (
        <div className="text-center mt-10">
          <h2 className="text-2xl font-semibold mb-4">Selected Device: {selectedDevice}</h2>
          <button onClick={() => setStep(1)} className="text-blue-600 underline">
            ← Change Device
          </button>
        </div>
      )}
    </div>
  );
};

export default RepairWizard;







// "use client";
// import React, { useState } from "react";

// const RepairWizard = () => {
//   const [step, setStep] = useState(1);
//   const [device, setDevice] = useState("");
//   const [model, setModel] = useState("");
//   const [issue, setIssue] = useState("");
//   const [form, setForm] = useState({ name: "", email: "", phone: "" });

//   const handleNext = () => setStep(prev => prev + 1);
//   const handleBack = () => setStep(prev => prev - 1);

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       {/* Step Indicator */}
//       <div className="flex justify-between mb-8">
//         {["DEVICE", "MODEL", "ISSUE", "DETAILS", "GET QUOTE"].map((label, i) => (
//           <div key={i} className={`text-sm font-medium ${step === i + 1 ? "text-blue-600" : "text-gray-400"}`}>
//             {i + 1}. {label}
//           </div>
//         ))}
//       </div>

//       {/* Step 1: Device */}
//       {step === 1 && (
//         <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
//           {["iPhone", "Android Phone", "Tablet", "Computer", "Gaming Console", "iWatch"].map(d => (
//             <button
//               key={d}
//               className="border rounded p-4 shadow hover:bg-blue-100"
//               onClick={() => { setDevice(d); handleNext(); }}
//             >
//               {d}
//             </button>
//           ))}
//         </div>
//       )}

//       {/* Step 2: Model */}
//       {step === 2 && (
//         <div>
//           <h2 className="text-xl font-bold mb-4">Select Model for {device}</h2>
//           <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
//             {(device === "iPhone"
//               ? ["iPhone 16 Pro Max", "iPhone 16", "iPhone 15"]
//               : device === "Android Phone"
//               ? ["Samsung S23", "OnePlus 11", "Pixel 7"]
//               : device === "Tablet"
//               ? ["iPad Pro", "Galaxy Tab S8"]
//               : device === "Computer"
//               ? ["MacBook Pro", "Dell XPS", "HP Spectre"]
//               : device === "Gaming Console"
//               ? ["PS5", "Xbox Series X", "Nintendo Switch"]
//               : device === "iWatch"
//               ? ["Watch Ultra", "Watch Series 8"]
//               : []
//             ).map(m => (
//               <button
//                 key={m}
//                 className="border rounded p-4 shadow hover:bg-blue-100"
//                 onClick={() => { setModel(m); handleNext(); }}
//               >
//                 {m}
//               </button>
//             ))}
//           </div>
//           <button onClick={handleBack} className="mt-4 text-blue-500">← Back</button>
//         </div>
//       )}

//       {/* Step 3: Issue */}
//       {step === 3 && (
//         <div>
//           <h2 className="text-xl font-bold mb-4">Select Issue</h2>
//           <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
//             {["Battery", "Screen", "Camera", "Water Damage", "Speaker", "Other"].map(i => (
//               <button
//                 key={i}
//                 className="border rounded p-4 shadow hover:bg-blue-100"
//                 onClick={() => { setIssue(i); handleNext(); }}
//               >
//                 {i}
//               </button>
//             ))}
//           </div>
//           <button onClick={handleBack} className="mt-4 text-blue-500">← Back</button>
//         </div>
//       )}

//       {/* Step 4: Details Form */}
//       {step === 4 && (
//         <div>
//           <h2 className="text-xl font-bold mb-4">Your Details</h2>
//           <p className="mb-2">Device: <strong>{device}</strong></p>
//           <p className="mb-2">Model: <strong>{model}</strong></p>
//           <p className="mb-4">Issue: <strong>{issue}</strong></p>
//           <div className="space-y-4">
//             <input
//               type="text"
//               placeholder="Name"
//               className="border p-2 w-full"
//               value={form.name}
//               onChange={e => setForm({ ...form, name: e.target.value })}
//             />
//             <input
//               type="email"
//               placeholder="Email"
//               className="border p-2 w-full"
//               value={form.email}
//               onChange={e => setForm({ ...form, email: e.target.value })}
//             />
//             <input
//               type="tel"
//               placeholder="Phone"
//               className="border p-2 w-full"
//               value={form.phone}
//               onChange={e => setForm({ ...form, phone: e.target.value })}
//             />
//           </div>
//           <div className="flex gap-4 mt-6">
//             <button onClick={handleBack} className="text-blue-500">← Back</button>
//             <button onClick={handleNext} className="bg-blue-600 text-white px-6 py-2 rounded">Next</button>
//           </div>
//         </div>
//       )}

//       {/* Step 5: Quote Submitted */}
//       {step === 5 && (
//         <div className="text-center">
//           <h2 className="text-2xl font-bold mb-4">Quote Request Sent!</h2>
//           <p className="mb-4">Thank you, {form.name}. Our team will contact you soon.</p>
//           <p className="mb-6">Or visit us directly for a quick fix!</p>
//           <a
//             href="https://maps.google.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700"
//           >
//             Get Directions
//           </a>
//         </div>
//       )}
//     </div>
//   );
// };

// export default RepairWizard;
