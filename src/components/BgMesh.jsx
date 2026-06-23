import React from "react";

export default function BgMesh() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Blob Kiri Atas */}
      <div className="absolute top-[-15%] left-[-5%] w-[750px] h-[750px] rounded-full mesh-blob-1 blur-[50px]" />

      {/* Blob Kanan Tengah */}
      <div className="absolute top-[25%] right-[-10%] w-[550px] h-[550px] rounded-full mesh-blob-2 blur-[60px]" />

      {/* Blob Kiri Bawah */}
      <div className="absolute bottom-[-10%] left-[20%] w-[650px] h-[500px] rounded-full mesh-blob-3 blur-[55px]" />
    </div>
  );
}
