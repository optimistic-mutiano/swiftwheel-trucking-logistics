const StickyMobileCTA = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="flex divide-x divide-white/20 bg-black/90 backdrop-blur-lg">
        {/* WhatsApp */}
        <a
          href="https://wa.me/2347063514453"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-4 text-white font-bold bg-green-600 hover:bg-green-700 transition-all"
        >
          💬 WhatsApp
        </a>

        {/* Call */}
        <a
          href="tel:+2347063514453"
          className="flex-1 flex items-center justify-center gap-2 py-4 text-white font-bold bg-blue-600 hover:bg-blue-700 transition-all"
        >
          📞 Call
        </a>
      </div>
    </div>
  );
};

export default StickyMobileCTA;
