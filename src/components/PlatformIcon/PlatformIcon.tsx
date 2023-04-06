import images from "../../assets/images";

export const PlatformIcon = ({ platform }: { platform: string }) => {
  const source = platform === "IOS" ? images.ios : images.android;

  return (
    <img style={{ height: 30, aspectRatio: 1 }} src={source} alt={platform} />
  );
};
