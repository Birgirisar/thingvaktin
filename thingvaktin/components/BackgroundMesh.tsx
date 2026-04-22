export function BackgroundMesh() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {/* Base page color */}
      <div className="absolute inset-0 bg-bg-base" />

      {/* Radial orbs — colors swap per theme via .mesh-orb-* CSS classes */}
      <div className="mesh-orb-1 absolute -top-40 -left-40 h-[700px] w-[700px] rounded-full" />
      <div className="mesh-orb-2 absolute top-1/3 -right-60 h-[600px] w-[600px] rounded-full" />
      <div className="mesh-orb-3 absolute bottom-0 left-1/3 h-[500px] w-[500px] rounded-full" />
      <div className="mesh-orb-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] rounded-full" />

      {/* Fine grain noise overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />
    </div>
  );
}
