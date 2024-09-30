import Image from "next/image";

//https://nextjs.org/icons/next.svg
export default function ImageContentBox({
  icon,
  descriptionText,
  width,
  height,
}) {
  return (
    <div class="bg-sky-500 p-2 rounded-lg flex items-center w-60">
      <div class="p-2 rounded-lg">
        <Image src={icon} width={width} height={height} />
      </div>

      <p class="text-white font-semibold">{descriptionText}</p>
    </div>
  );
}
