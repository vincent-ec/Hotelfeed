import { useState, useMemo, useEffect, useRef } from "react";
import { hotels } from "./components/hotel-data";
import {
  MapPin,
  Calendar,
  ChevronDown,
  Trophy,
  Bell,
  Info,
  Menu,
  ArrowUpDown,
  ArrowRight,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { HotelCard } from "./components/hotel-card";
import { MapPanel } from "./components/map-panel";
import { FilterBar } from "./components/filter-bar";
import { AiChat } from "./components/ai-chat";
import Vector from "../imports/Vector";

const sortOptions = [
  { value: "recommended", label: "Recommended" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "rating", label: "Guest Rating" },
  { value: "distance", label: "Distance to Venue" },
];

function EventHeader({ headerRef }: { headerRef?: React.RefObject<HTMLDivElement | null> }) {
  return (
    <div ref={headerRef} className="bg-white border-b border-gray-100 sticky top-0 z-30 md:static">
      {/* Top nav */}
      <div className="flex items-center justify-between px-3 sm:px-5 py-2 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <button className="w-8 h-8 flex items-center justify-center rounded-[6px] hover:bg-gray-100 transition-colors">
            <Menu className="w-5 h-5 text-gray-700" />
          </button>
        </div>
        <div className="flex items-center gap-2">
          <button className="relative w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors shrink-0">
            <Bell className="w-4 h-4 text-gray-500" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
          </button>
          <div className="flex items-center gap-2 pl-2 ml-2 border-l border-gray-200">
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-[10px] text-white shrink-0">
              CW
            </div>
            <span className="text-xs text-gray-700 hidden sm:inline">C. Wilson</span>
            <ChevronDown className="w-3 h-3 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Event info bar */}
      <div className="px-3 sm:px-5 py-3">
        <div className="flex items-start sm:items-center justify-between gap-3">
          <div className="flex items-start sm:items-center gap-3 sm:gap-4 min-w-0 flex-1">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-sm shadow-orange-500/20 shrink-0">
              <Trophy className="w-5 h-5 text-white" />
            </div>
            <div className="min-w-0">
              <h1 className="text-base sm:text-lg text-gray-900 tracking-tight">
                Champions Tournament 2025
              </h1>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mt-0.5">
                <span className="flex items-center gap-1 text-xs text-gray-500">
                  <MapPin className="w-3 h-3 shrink-0" />
                  <span className="truncate">134 Brock Street, Sarnia, ON, CA</span>
                </span>
                <span className="flex items-center gap-1 text-xs text-gray-500">
                  <Calendar className="w-3 h-3 shrink-0" />
                  <span className="whitespace-nowrap">February 19 - 21, 2025</span>
                </span>
              </div>
            </div>
          </div>
          <div className="hidden sm:block shrink-0">
            <InfoBanner />
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoBanner() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-50 text-indigo-700 rounded-[6px] text-xs hover:bg-indigo-100 transition-colors whitespace-nowrap"
      >
        <Info className="w-3.5 h-3.5 shrink-0" />
        Group Rates Info
      </button>
      <AnimatePresence>
        {isOpen && (
          <>
            <div className="fixed inset-0 z-30" onClick={() => setIsOpen(false)} />
            <motion.div
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              className="absolute right-0 top-full mt-2 w-72 bg-white rounded-xl shadow-2xl border border-gray-100 p-4 z-40"
            >
              <h3 className="text-sm text-gray-900 flex items-center gap-2">
                Welcome! <span>👋</span>
              </h3>
              <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                All rates are pre-negotiated, best available group rates. You may
                create a block and share with your team, free of charge so your
                team can easily stay together.
              </p>
              <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                If you require assistance or have any questions, please use our
                chat below.
              </p>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function App() {
  const [activeHotelId, setActiveHotelId] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"list" | "map">("list");
  const [sortBy, setSortBy] = useState("recommended");
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([100, 500]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSort, setShowSort] = useState(false);
  const [chatOverlayOpen, setChatOverlayOpen] = useState(false);
  const [maxDistance, setMaxDistance] = useState<number | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        document.documentElement.style.setProperty(
          "--header-height",
          `${headerRef.current.offsetHeight}px`
        );
      }
    };
    updateHeaderHeight();
    window.addEventListener("resize", updateHeaderHeight);
    return () => window.removeEventListener("resize", updateHeaderHeight);
  }, []);

  const handleFilterToggle = (filter: string) => {
    setActiveFilters((prev) =>
      prev.includes(filter) ? prev.filter((f) => f !== filter) : [...prev, filter]
    );
  };

  const handleClearFilters = () => {
    setActiveFilters([]);
    setPriceRange([100, 500]);
    setSearchQuery("");
    setMaxDistance(null);
  };

  const filteredHotels = useMemo(() => {
    let result = [...hotels];

    // Search filter
    if (searchQuery) {
      result = result.filter((h) =>
        h.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Amenity filters
    if (activeFilters.length > 0) {
      result = result.filter((h) =>
        activeFilters.every((f) => h.amenities.includes(f))
      );
    }

    // Price filter
    result = result.filter(
      (h) => h.price >= priceRange[0] && h.price <= priceRange[1]
    );

    // Distance filter
    if (maxDistance !== null) {
      result = result.filter((h) => parseFloat(h.distance) <= maxDistance);
    }

    // Sort
    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => b.guestRating - a.guestRating);
        break;
      case "distance":
        result.sort(
          (a, b) => parseFloat(a.distance) - parseFloat(b.distance)
        );
        break;
      default:
        // Recommended: host hotel first, then by rating
        result.sort((a, b) => {
          if (a.isHostHotel) return -1;
          if (b.isHostHotel) return 1;
          return b.guestRating - a.guestRating;
        });
    }

    return result;
  }, [searchQuery, activeFilters, priceRange, sortBy, maxDistance]);

  return (
    <div className="h-full flex flex-col bg-gray-50 font-['Cera_Pro','Inter',sans-serif] overflow-y-auto md:overflow-hidden">
      <EventHeader headerRef={headerRef} />

      {/* Main content */}
      <div className="flex-1 flex flex-col md:overflow-hidden">
        {/* Toolbar */}
        <div className="sticky top-[var(--header-height,120px)] z-20 md:static px-3 sm:px-5 py-3 bg-white border-b border-gray-100 md:border-b-0">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              {activeFilters.length > 0 && (
                <span className="text-[10px] text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
                  {activeFilters.length} filter{activeFilters.length > 1 ? "s" : ""} active
                </span>
              )}
            </div>
          </div>

          <FilterBar
            sortBy={sortBy}
            onSortChange={setSortBy}
            activeFilters={activeFilters}
            onFilterToggle={handleFilterToggle}
            onClearFilters={handleClearFilters}
            priceRange={priceRange}
            onPriceRangeChange={setPriceRange}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            viewMode={viewMode}
            onViewModeToggle={() => setViewMode(viewMode === "list" ? "map" : "list")}
            maxDistance={maxDistance}
            onMaxDistanceChange={setMaxDistance}
          />
        </div>

        {/* Content area */}
        <div className="flex-1 flex md:overflow-hidden bg-white pr-0 md:pr-5 pb-0 md:pb-5">
          {/* Hotel list — on mobile: only in list mode; on desktop: always visible as sidebar */}
          <motion.div
            layout
            className={`md:overflow-y-auto relative ${
              viewMode === "map"
                ? "hidden md:block md:w-[640px] md:min-w-[640px]"
                : "w-full md:w-[640px] md:min-w-[640px]"
            }`}
          >
            {/* Kayak-style sort/results bar */}
            <div className="sticky top-0 z-10 bg-white px-4 py-2.5 flex items-center justify-between">
              <button
                onClick={() => setChatOverlayOpen(true)}
                className="flex items-center gap-1.5 text-sm text-gray-700 hover:text-brand transition-colors cursor-pointer"
              >
                <div className="w-[15px] h-[17px] shrink-0">
                  <Vector />
                </div>
                <span className="sm:hidden">Booking Assistant</span>
                <span className="hidden sm:inline">Chat with Booking Assistant</span>
                <ArrowRight className="w-3.5 h-3.5 hidden sm:block" />
              </button>
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-900">
                  {filteredHotels.length} results
                </span>
                <span className="text-gray-200">|</span>
                <div className="relative">
                  <button
                    onClick={() => setShowSort(!showSort)}
                    className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    <span className="hidden sm:inline">Sort by{" "}</span>
                    <span className="text-gray-900">
                      {sortOptions.find((s) => s.value === sortBy)?.label}
                    </span>
                    <ChevronDown className={`w-3.5 h-3.5 text-gray-900 transition-transform ${showSort ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {showSort && (
                      <>
                        <div className="fixed inset-0 z-30" onClick={() => setShowSort(false)} />
                        <motion.div
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -4 }}
                          className="absolute top-full mt-1 right-0 bg-white rounded-xl shadow-xl border border-gray-100 py-1 z-40 min-w-[200px]"
                        >
                          {sortOptions.map((opt) => (
                            <button
                              key={opt.value}
                              onClick={() => {
                                setSortBy(opt.value);
                                setShowSort(false);
                              }}
                              className={`w-full text-left px-3 py-2 text-xs hover:bg-gray-50 transition-colors ${
                                sortBy === opt.value ? "text-brand bg-brand-light/50" : "text-gray-700"
                              }`}
                            >
                              {opt.label}
                            </button>
                          ))}
                        </motion.div>
                      </>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            <div className="p-4 flex flex-col gap-3">
              {filteredHotels.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-16 text-gray-400">
                  <MapPin className="w-10 h-10 mb-3 text-gray-300" />
                  <p className="text-sm">No hotels match your filters</p>
                  <button
                    onClick={handleClearFilters}
                    className="mt-2 text-xs text-brand hover:underline"
                  >
                    Clear all filters
                  </button>
                </div>
              ) : (
                filteredHotels.map((hotel) => (
                  <HotelCard
                    key={hotel.id}
                    hotel={hotel}
                    isActive={activeHotelId === hotel.id}
                    onHover={() => setActiveHotelId(hotel.id)}
                    onLeave={() => setActiveHotelId(null)}
                    onClick={() => setActiveHotelId(hotel.id)}
                  />
                ))
              )}
            </div>
            {/* Spacer for mobile floating chat bar */}
            <div className="h-20 md:hidden" />
          </motion.div>

          {/* Map panel — on mobile: only in map mode; on desktop: always visible */}
          <motion.div
            layout
            className={`flex-1 flex flex-col relative overflow-hidden rounded-r-xl ${
              viewMode === "map" ? "block" : "hidden md:flex"
            }`}
          >
            <div className="flex-1 relative overflow-hidden rounded-tr-xl">
              <MapPanel
                hotels={filteredHotels}
                activeHotelId={activeHotelId}
                onHotelHover={(id) => setActiveHotelId(id)}
                onHotelLeave={() => setActiveHotelId(null)}
              />
            </div>
            <div className="rounded-br-xl overflow-hidden hidden md:block">
              <AiChat overlayOpen={chatOverlayOpen} onOverlayChange={setChatOverlayOpen} />
            </div>
          </motion.div>
        </div>

        {/* Mobile floating chat bar */}
        <div className="md:hidden">
          <AiChat variant="mobile-float" overlayOpen={chatOverlayOpen} onOverlayChange={setChatOverlayOpen} />
        </div>
      </div>
    </div>
  );
}