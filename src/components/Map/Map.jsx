"use client";
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// إصلاح مسارات أيقونات leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

export default function MapRiyadh() {
 // 🟢 العنوان: Altaif Street, Dhahrat Laban, Riyadh
  const lat = 24.5795;
  const lng = 46.5622;
  const zoom = 10; 

  return (
 <div style={{ width: "100%", height: "400px", borderRadius: "12px", overflow: "hidden" }}>
      <iframe
        src="https://www.google.com/maps?q=Altaif+Street,+Dhahrat+Laban,+Riyadh,+Saudi+Arabia&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>  );
}
