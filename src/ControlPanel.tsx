import React, { ChangeEvent } from 'react';

interface ControlPanelProps {
  title: string;
  backgroundColor: string;
  textColor: string;
  image: string;
  setTitle: (title: string) => void;
  setBackgroundColor: (color: string) => void;
  setTextColor: (color: string) => void;
  setImage: (image: string) => void;
}

const ControlPanel: React.FC<ControlPanelProps> = ({
  title,
  backgroundColor,
  textColor,
  image,
  setTitle,
  setBackgroundColor,
  setTextColor,
  setImage
}) => {
  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="mb-6">
      <div className="mt-2">
        <label className="block">Title</label>
        <input
          type="text"
          className="border p-2 w-full"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mt-2">
        <label className="block">Background Color</label>
        <input
          type="color"
          className="border p-2 w-full"
          value={backgroundColor}
          onChange={(e) => setBackgroundColor(e.target.value)}
        />
      </div>
      <div className="mt-2">
        <label className="block">Text Color</label>
        <input
          type="color"
          className="border p-2 w-full"
          value={textColor}
          onChange={(e) => setTextColor(e.target.value)}
        />
      </div>
      <div className="mt-2">
        <label className="block">Image</label>
        <input
          type="file"
          className="border p-2 w-full"
          onChange={handleImageUpload}
        />
      </div>
    </div>
  );
};

export default ControlPanel;
