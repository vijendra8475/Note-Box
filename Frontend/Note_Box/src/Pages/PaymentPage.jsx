import React from "react";
import { QrCode, Phone, ShieldCheck } from "lucide-react";

const PaymentPage = () => {
  const whatsappNumber = "7610410552";
  const message = encodeURIComponent(
    "Hi, I have completed the payment. Please find the attached screenshot."
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-gray-50 to-gray-100 px-6">
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-xl p-10 text-center border border-gray-200 relative overflow-hidden">
        
        {/* Decorative Background Icons */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/55/UPI-Logo-vector.svg"
          alt="UPI Logo"
          className="absolute top-6 left-6 w-16 opacity-20"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/44/Google_Pay_Logo.svg"
          alt="GPay"
          className="absolute bottom-8 left-6 w-12 opacity-20"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/f/fd/PhonePe-Logo.svg"
          alt="PhonePe"
          className="absolute top-10 right-6 w-12 opacity-20"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/42/Paytm_logo.png"
          alt="Paytm"
          className="absolute bottom-10 right-6 w-14 opacity-20"
        />

        {/* Header */}
        <div className="mb-6 relative z-10">
          <h1 className="text-3xl font-extrabold text-gray-900">
            Pay Using UPI
          </h1>
          <p className="text-gray-500 mt-2">
            Scan & Pay with GPay, PhonePe, Paytm or any UPI app.
          </p>
        </div>

        {/* QR Code Section */}
        <div className="flex flex-col items-center gap-4 relative z-10">
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 shadow-sm">
            <img
              src={'QR.jpg'}
              alt="UPI QR Code"
              className="w-52 h-52 object-contain"
            />
          </div>
          <p className="text-sm text-gray-600 flex items-center gap-2">
            <QrCode className="w-5 h-5 text-indigo-500" />
            Works across all UPI apps
          </p>
        </div>

        {/* WhatsApp Button */}
        <div className="mt-8 relative z-10">
          <a
            href={`https://wa.me/${whatsappNumber}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-xl shadow-md transition"
          >
            <Phone className="w-5 h-5" /> Share Screenshot on WhatsApp
          </a>
        </div>

        {/* Secure Info */}
        <p className="text-xs text-gray-500 mt-6 flex items-center justify-center gap-2 relative z-10">
          <ShieldCheck className="w-4 h-4 text-green-500" />
          100% Secure UPI Transaction
        </p>
      </div>
    </div>
  );
};

export default PaymentPage;
