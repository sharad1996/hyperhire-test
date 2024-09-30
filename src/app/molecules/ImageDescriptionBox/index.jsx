import Image from "next/image";

//https://nextjs.org/icons/next.svg
export default function ImageDescriptionBox({
  icon,
  descriptionText,
  width,
  height,
}) {
  return (
    <div class="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg">
      <div class="p-2 rounded-lg">
        <Image src={icon} width={width} height={height} />
      </div>

      <p class="text-white font-semibold">{descriptionText}</p>
    </div>
  );
}
