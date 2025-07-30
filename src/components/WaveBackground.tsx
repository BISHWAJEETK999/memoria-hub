import waveImage from "@/assets/wave-background.jpg";

interface WaveBackgroundProps {
  children?: React.ReactNode;
  className?: string;
}

export const WaveBackground = ({ children, className = "" }: WaveBackgroundProps) => {
  return (
    <div className={`relative min-h-screen ${className}`}>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: `url(${waveImage})` }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};