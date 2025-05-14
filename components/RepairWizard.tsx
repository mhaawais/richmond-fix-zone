"use client";

import React, { useState } from "react";

// Common issues for all iPhone models
const iphoneIssues = [
  {
    name: "Battery Replacement",
    image:
      "https://widget.xtremeiphonerepair.com/images/WidgetNewIcons/Widget%20New%20Icons/icons/Smart%20phone/1x/short%20battery-100.jpg",
  },
  {
    name: "Broken Screen",
    image:
      "https://widget.xtremeiphonerepair.com/images/WidgetNewIcons/Widget%20New%20Icons/icons/Smart%20phone/1x/broken%20screen-100.jpg",
  },
  {
    name: "Diagnostic",
    image:
      "https://widget.xtremeiphonerepair.com/images/WidgetNewIcons/Widget%20New%20Icons/icons/Smart%20phone/1x/Diagnostic-100.jpg",
  },
  {
    name: "Water Damage",
    image:
      "https://widget.xtremeiphonerepair.com/images/WidgetNewIcons/Widget%20New%20Icons/icons/Smart%20phone/1x/water%20damage-100.jpg",
  },
  {
    name: "Front Camera",
    image:
      "https://widget.xtremeiphonerepair.com/images/WidgetNewIcons/Widget%20New%20Icons/icons/Smart%20phone/1x/front%20camera-100.jpg",
  },
  {
    name: "Charging Port",
    image:
      "https://widget.xtremeiphonerepair.com/images/WidgetNewIcons/Widget%20New%20Icons/icons/Smart%20phone/1x/charging%20port-100.jpg",
  },
  {
    name: "Back Glass",
    image:
      "https://widget.xtremeiphonerepair.com/images/WidgetNewIcons/Widget%20New%20Icons/icons/Smart%20phone/1x/Broken%20glass-100.jpg",
  },
  {
    name: "Carrier Unlock",
    image:
      "https://widget.xtremeiphonerepair.com/images/WidgetNewIcons/Widget%20New%20Icons/icons/Smart%20phone/1x/Carrier%20Unlock-100.jpg",
  },
  {
    name: "Not Turning On",
    image:
      "https://widget.xtremeiphonerepair.com/images/WidgetNewIcons/Widget%20New%20Icons/icons/Smart%20phone/1x/Not%20turning%20On-100.jpg",
  },
  {
    name: "Back Camera",
    image:
      "https://widget.xtremeiphonerepair.com/images/WidgetNewIcons/Widget%20New%20Icons/icons/Smart%20phone/1x/Back%20Camera-100.jpg",
  },
];

// Your full deviceOptions array here (shortened for clarity)
const deviceOptions = [
  {
    label: "iPhone",
    image:
      "https://widget.xtremeiphonerepair.com/images/WidgetNewIcons/Widget%20New%20Icons/devices/iPhone.png",
    models: [
      {
        name: "iPhone 16 Pro Max",
        image:
          "https://boostmyrepair.instantquoteform.com/repairmodelimages/05-11-2024-1730803290iphone-16-pro-max.png",
      },
      {
        name: "iPhone 16 Pro",
        image:
          "https://boostmyrepair.instantquoteform.com/repairmodelimages/05-11-2024-1730803269iphone-16-pro.png",
      },
      {
        name: "iPhone 16 Plus",
        image:
          "https://boostmyrepair.instantquoteform.com/repairmodelimages/05-11-2024-1730803202iphone-16-plus.png",
      },
      {
        name: "iPhone 16",
        image:
          "https://boostmyrepair.instantquoteform.com/repairmodelimages/05-11-2024-1730802434iphone-16.png",
      },
      {
        name: "iPhone 15 Pro Max",
        image:
          "https://t3portal.boostmyrepair.com/repairmodelimages/10-10-2023-1696924217iphone-15-pro-max.png",
      },
      {
        name: "iPhone 15 Pro",
        image:
          "https://t3portal.boostmyrepair.com/repairmodelimages/10-10-2023-1696924297iphone-15-pro.png",
      },
      {
        name: "iPhone 15 Plus",
        image:
          "https://t3portal.boostmyrepair.com/repairmodelimages/10-10-2023-1696924266iphone-15-plus.png",
      },
      {
        name: "iPhone 15",
        image:
          "https://t3portal.boostmyrepair.com/repairmodelimages/10-10-2023-1696924242iphone-15.png",
      },
      {
        name: "iPhone 14 Pro Max",
        image:
          "https://techpro.instantquoteform.com/repairmodelimages/31-10-2022-16672084844-pro-max.png",
      },
      {
        name: "iPhone 14 Pro",
        image:
          "https://techpro.instantquoteform.com/repairmodelimages/31-10-2022-16672084733-14-pro.png",
      },
      {
        name: "iPhone 14 Plus",
        image:
          "https://techpro.instantquoteform.com/repairmodelimages/31-10-2022-16672084612-14-plus.png",
      },
      {
        name: "iPhone 14",
        image:
          "https://techpro.instantquoteform.com/repairmodelimages/31-10-2022-16672084451-14.png",
      },
      {
        name: "iPhone 13 Pro Max",
        image:
          "https://portal.profiix.com/repairmodelimages/21-05-2022-1653138503iphone-13-pro-max.png",
      },
      {
        name: "iPhone 13 Pro",
        image:
          "https://portal.profiix.com/repairmodelimages/21-05-2022-1653138523iphone-13-pro.png",
      },
      {
        name: "iPhone 13",
        image:
          "https://portal.profiix.com/repairmodelimages/21-05-2022-1653138559iphone-13.png",
      },
      {
        name: "iPhone 13 Mini",
        image:
          "https://portal.profiix.com/repairmodelimages/21-05-2022-1653138541iphone-13-mini.png",
      },
      {
        name: "iPhone 12 Pro Max",
        image:
          "https://portal.profiix.com/repairmodelimages/21-05-2022-1653138578iphone-12-pro-max.png",
      },
      {
        name: "iPhone 12 Pro",
        image:
          "https://portal.profiix.com/repairmodelimages/21-05-2022-1653138597iphone-12-pro.png",
      },
      {
        name: "iPhone 12",
        image:
          "https://portal.profiix.com/repairmodelimages/21-05-2022-1653138628iphone-12.png",
      },
      {
        name: "iPhone 12 Mini",
        image:
          "https://portal.profiix.com/repairmodelimages/21-05-2022-1653138614iphone-12-mini.png",
      },
      {
        name: "iPhone 11 Pro Max",
        image:
          "https://portal.profiix.com/repairmodelimages/21-05-2022-1653138646iphone-11-pro-max.png",
      },
      {
        name: "iPhone 11 Pro",
        image:
          "https://portal.profiix.com/repairmodelimages/21-05-2022-1653140165iphone-11-pro.png",
      },
      {
        name: "iPhone 11",
        image:
          "https://portal.profiix.com/repairmodelimages/21-05-2022-1653140183iphone-11.png",
      },
      {
        name: "iPhone XS Max",
        image:
          "https://portal.profiix.com/repairmodelimages/21-05-2022-1653140213xs-max.png",
      },
      {
        name: "iPhone XS",
        image:
          "https://portal.profiix.com/repairmodelimages/21-05-2022-1653140227xs.png",
      },
      {
        name: "iPhone XR",
        image:
          "https://portal.profiix.com/repairmodelimages/21-05-2022-1653140238xr.png",
      },
      {
        name: "iPhone X",
        image:
          "https://portal.profiix.com/repairmodelimages/21-05-2022-1653140249x.png",
      },
      {
        name: "iPhone SE (2020)",
        image:
          "https://portal.profiix.com/repairmodelimages/23-05-2022-1653303942SE-2020.png",
      },
      {
        name: "iPhone 8 Plus",
        image:
          "https://portal.profiix.com/repairmodelimages/23-05-2022-1653303968iphone-8-plus.png",
      },
      {
        name: "iPhone 8",
        image:
          "https://anaheim.boostmyrepair.com/repairmodelimages/iphone-8.png",
      },
      {
        name: "iPhone 7 Plus",
        image:
          "https://portal.profiix.com/repairmodelimages/23-05-2022-16533040147--plus.png",
      },
      {
        name: "iPhone 7",
        image:
          "https://portal.profiix.com/repairmodelimages/23-05-2022-16533040307.png",
      },
      {
        name: "iPhone 6s Plus",
        image:
          "https://portal.profiix.com/repairmodelimages/23-05-2022-16533040506-s-plus.png",
      },
      {
        name: "iPhone 6s",
        image:
          "https://portal.profiix.com/repairmodelimages/23-05-2022-16533040656-s.png",
      },
      {
        name: "iPhone 6 Plus",
        image:
          "https://portal.profiix.com/repairmodelimages/23-05-2022-16533113366-PLUS.png",
      },
      {
        name: "iPhone 6",
        image:
          "https://portal.profiix.com/repairmodelimages/23-05-2022-16533113206.png",
      },
      {
        name: "iPhone 5s Plus",
        image:
          "https://portal.profiix.com/repairmodelimages/23-05-2022-16533112955S.png",
      },
    ],
  },
  {
    label: "Android Phone",
    image:
      "https://widget.xtremeiphonerepair.com/images/WidgetNewIcons/Widget%20New%20Icons/devices/Smart-Phone.png",
    models: [
      {
        name: "Samsung",
        image:
          "https://portal.profiix.com/repairbrandimages/23-05-2022-1653308164samsung.png",
      },
      {
        name: "Google",
        image:
          "https://portal.profiix.com/repairbrandimages/23-05-2022-1653308197google-1.png",
      },
      {
        name: "OnePlus",
        image:
          "https://portal.profiix.com/repairbrandimages/23-05-2022-1653308181oneplus-1.png",
      },
      {
        name: "LG",
        image:
          "https://portal.profiix.com/repairbrandimages/23-05-2022-1653308188lg-1.png",
      },
      {
        name: "Motorola",
        image:
          "https://portal.profiix.com/repairbrandimages/23-05-2022-1653308208motorola-1.png",
      },
    ],
  },
  {
    label: "Tablet",
    image:
      "https://widget.xtremeiphonerepair.com/images/WidgetNewIcons/Widget%20New%20Icons/devices/Tablet.png",
    models: [
      {
        name: "Samsung Tablet",
        image:
          "https://portal.profiix.com/repairbrandimages/23-05-2022-1653308164samsung.png",
      },
      {
        name: "iPad",
        image:
          "https://portal.profiix.com/repairbrandimages/23-05-2022-1653308197google-1.png",
      },
      {
        name: "Surface Tablet",
        image:
          "https://portal.profiix.com/repairbrandimages/23-05-2022-1653308181oneplus-1.png",
      },
    ],
  },
  {
    label: "Computer",
    image:
      "https://widget.xtremeiphonerepair.com/images/WidgetNewIcons/Widget%20New%20Icons/devices/Computer.png",
      models: [
      {
        name: "PC Desktop",
        image:
          "https://portal.profiix.com/repairbrandimages/25-05-2022-1653481016PC-desktop.png",
      },
      {
        name: "Chromebook",
        image:
          "https://portal.profiix.com/repairbrandimages/25-05-2022-1653480984chrome-book.png",
      },
      {
        name: "Macbook",
        image:
          "https://portal.profiix.com/repairbrandimages/25-05-2022-1653480994mac-book.png",
      },
      {
        name: "Laptop",
        image:
          "https://portal.profiix.com/repairbrandimages/25-05-2022-1653481026pc-laptop.png",
      },
      {
        name: "iMac",
        image:
          "https://portal.profiix.com/repairbrandimages/25-05-2022-1653481003imac.png",
      },
      {
        name: "Surface",
        image:
          "https://portal.profiix.com/repairbrandimages/30-05-2022-1653907215250x250-copy.png",
      },
    ],
  },
  {
    label: "Gaming Console",
    image:
      "https://widget.xtremeiphonerepair.com/images/WidgetNewIcons/Widget%20New%20Icons/devices/Gaming-Console.png",
       models: [
      {
        name: "Xbox",
        image:
          "https://portal.profiix.com/repairbrandimages/26-05-2022-1653563200xbox.png",
      },
      {
        name: "PlayStation",
        image:
          "https://portal.profiix.com/repairbrandimages/26-05-2022-1653563205playstation.png",
      },
      {
        name: "Nintendo",
        image:
          "https://portal.profiix.com/repairbrandimages/26-05-2022-1653563210intendo.png",
      },
    ],
  },
  {
    label: "iWatch",
    image:
      "https://widget.xtremeiphonerepair.com/images/WidgetNewIcons/Widget%20New%20Icons/devices/iWatch.png",
       models: [
      {
        name: "",
        image:
          "",
      },
      {
        name: "",
        image:
          "",
      },
      {
        name: "",
        image:
          "",
      },
      {
        name: "",
        image:
          "",
      },
      {
        name: "",
        image:
          "",
      },
      {
        name: "",
        image:
          "",
      },
      {
        name: "",
        image:
          "",
      },
      {
        name: "",
        image:
          "",
      },
      {
        name: "",
        image:
          "",
      },
      {
        name: "",
        image:
          "",
      },
      {
        name: "",
        image:
          "",
      },
      {
        name: "",
        image:
          "",
      },
      {
        name: "",
        image:
          "",
      },
      {
        name: "",
        image:
          "",
      },
    ],
  },
  {
    label: "Unlock",
    image:
      "https://widget.xtremeiphonerepair.com/images/WidgetNewIcons/Widget%20New%20Icons/devices/Unlock.png",
       models: [
      {
        name: "Carrier / SIM Unlock",
        image:
          "https://widget.xtremeiphonerepair.com/images/WidgetNewIcons/Widget%20New%20Icons/icons/Unlock/1x/Carrier%20-%20SIM%20Unlock%20copy-100.jpg",
      },
      {
        name: "Google Account Unlock",
        image:
          "https://widget.xtremeiphonerepair.com/images/WidgetNewIcons/Widget%20New%20Icons/icons/Unlock/1x/Google%20Account%20Unlock%20copy-100.jpg",
      },
      {
        name: "iCloud Account Unlock",
        image:
          "https://widget.xtremeiphonerepair.com/images/WidgetNewIcons/Widget%20New%20Icons/icons/Unlock/1x/iCloud%20Account%20Unlock%20copy-100.jpg",
      },
      {
        name: "Passcode / Pattern Unlock",
        image:
          "https://widget.xtremeiphonerepair.com/images/WidgetNewIcons/Widget%20New%20Icons/icons/Unlock/1x/Passcode%20-%20Pattern%20Unlock%20copy-100.jpg",
      },
    ],
  },
];

const RepairWizard = () => {
  const [step, setStep] = useState(1);
  const [selectedDevice, setSelectedDevice] = useState("");
  const [selectedModel, setSelectedModel] = useState("");

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
        {["DEVICE", "MODEL", "ISSUE", "DETAILS", "GET QUOTE"].map(
          (label, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center cursor-pointer"
              onClick={() => navigateToStep(i + 1)}
            >
              <div
                className={`w-10 h-10 flex items-center justify-center rounded-full border-4 ${
                  step === i + 1
                    ? "border-blue-500 text-blue-500"
                    : step > i + 1
                    ? "border-green-500 text-green-500"
                    : "border-gray-300 text-gray-400"
                } font-semibold`}
              >
                {i + 1}
              </div>
              <span
                className={`mt-2 text-sm ${
                  step === i + 1
                    ? "text-blue-500"
                    : step > i + 1
                    ? "text-green-600"
                    : "text-gray-400"
                }`}
              >
                {label}
              </span>
            </div>
          )
        )}
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
              <img
                src={device.image}
                alt={device.label}
                className="h-32 object-contain mb-2"
              />
              <span className="font-semibold text-orange-500 text-center">
                {device.label}
              </span>
            </button>
          ))}
        </div>
      )}

      {/* Step 2: Select Model */}
      {step === 2 && (
        <div className="mt-10">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-semibold mb-4">
              Selected Device: {selectedDevice}
            </h2>
            <button
              onClick={() => setStep(1)}
              className="text-blue-600 underline"
            >
              ← Change Device
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {deviceOptions
              .find((d) => d.label === selectedDevice)
              ?.models?.map((model) => (
                <button
                  key={model.name}
                  onClick={() => {
                    setSelectedModel(model.name);
                    setStep(3);
                  }}
                  className="flex flex-col items-center p-4 border shadow rounded hover:shadow-lg transition bg-white"
                >
                  <img
                    src={model.image}
                    alt={model.name}
                    className="h-32 object-contain mb-2"
                  />
                  <span className="font-semibold text-gray-700 text-center">
                    {model.name}
                  </span>
                </button>
              )) || (
              <div className="col-span-full text-center text-gray-500 text-lg">
                No models available for this device.
              </div>
            )}
          </div>
        </div>
      )}

      {/* Step 3: Select Issue */}
      {step === 3 && (
        <div className="mt-10">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-semibold mb-2">
              Selected Model: {selectedModel}
            </h2>
            <button
              onClick={() => setStep(2)}
              className="text-blue-600 underline"
            >
              ← Change Model
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {iphoneIssues.map((issue) => (
              <div
                key={issue.name}
                className="flex flex-col items-center p-4 border shadow rounded hover:shadow-lg transition bg-white"
              >
                <img
                  src={issue.image}
                  alt={issue.name}
                  className="h-20 object-contain mb-2"
                />
                <span className="font-medium text-gray-700 text-center">
                  {issue.name}
                </span>
              </div>
            ))}
          </div>
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
