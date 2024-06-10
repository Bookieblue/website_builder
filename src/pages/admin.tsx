import React, { useState, ChangeEvent } from 'react';
import { useStore } from '../store';
import ControlPanel from '../ControlPanel';

const Admin: React.FC = () => {
  const { header, setHeader, features, setFeatures, footer, setFooter } = useStore();

  const [localHeader, setLocalHeader] = useState(header);
  const [localFeatures, setLocalFeatures] = useState(features.join('\n'));
  const [localFooter, setLocalFooter] = useState(footer);

  const [activeSection, setActiveSection] = useState<'Header' | 'Features' | 'Footer'>('Header');

  const handleHeaderChange = () => {
    setHeader(localHeader);
  };

  const handleFeaturesChange = () => {
    setFeatures(localFeatures.split('\n'));
  };

  const handleFooterChange = () => {
    setFooter(localFooter);
  };

  const handleLinkChange = (index: number, key: string, value: string) => {
    const updatedLinks = localHeader.links.map((link, i) =>
      i === index ? { ...link, [key]: value } : link
    );
    setLocalHeader({ ...localHeader, links: updatedLinks });
  };

  const handleAddLink = () => {
    setLocalHeader({
      ...localHeader,
      links: [...localHeader.links, { name: '', url: '' }],
    });
  };

  const handleRemoveLink = (index: number) => {
    const updatedLinks = localHeader.links.filter((_, i) => i !== index);
    setLocalHeader({ ...localHeader, links: updatedLinks });
  };

  return (
    <div className="grid grid-cols-5 min-h-screen">
      {/* Preview Section */}
      <div className="col-span-4 bg-gray-100 p-4">
        <div>
          <header
            style={{
              backgroundColor: localHeader.backgroundColor,
              color: localHeader.textColor,
            }}
            className="p-4 flexBetween"
          >
            <div>
              {localHeader.logo && (
                <img
                  src={localHeader.logo}
                  alt="Logo"
                  className="inline-block h-8 w-8 mr-2"
                />
              )}
              <h1 className="inline-block text-2xl font-bold">{localHeader.title}</h1>
            </div>
            <nav className="inline-block ml-4">
              {localHeader.links.map((link, index) => (
                <a key={index} href={link.url} className="mr-2 hover:bold">
                  {link.name}
                </a>
              ))}
            </nav>
          </header>

          <section className="p-4">
            <h2>Features</h2>
            <ul>
              {localFeatures.split('\n').map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </section>

          <footer className="p-4">
            <p>{localFooter.text}</p>
          </footer>
        </div>
      </div>

      {/* Control Panel */}
      <div className="col-span-1 p-4 bg-white border-l">
        <h1 className="text-2xl font-bold mb-4">Control Panel</h1>
        <div className="mb-4">
          <button onClick={() => setActiveSection('Header')} className={`px-4 py-2 mr-2 ${activeSection === 'Header' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
            Header
          </button>
          <button onClick={() => setActiveSection('Features')} className={`px-4 py-2 mr-2 ${activeSection === 'Features' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
            Features
          </button>
          <button onClick={() => setActiveSection('Footer')} className={`px-4 py-2 ${activeSection === 'Footer' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
            Footer
          </button>
        </div>

        {activeSection === 'Header' && (
          <>
            <ControlPanel
              title={localHeader.title}
              backgroundColor={localHeader.backgroundColor}
              textColor={localHeader.textColor}
              image={localHeader.logo}
              setTitle={(title: any) => setLocalHeader({ ...localHeader, title })}
              setBackgroundColor={(color: any) => setLocalHeader({ ...localHeader, backgroundColor: color })}
              setTextColor={(color: any) => setLocalHeader({ ...localHeader, textColor: color })}
              setImage={(image: any) => setLocalHeader({ ...localHeader, logo: image })}
            />
            <div className="mt-2">
              <label className="block">Links</label>
              {localHeader.links.map((link, index) => (
                <div key={index} className="flex mb-2">
                  <input
                    type="text"
                    placeholder="Name"
                    value={link.name}
                    onChange={(e) =>
                      handleLinkChange(index, 'name', e.target.value)
                    }
                    className="border p-2 w-full mr-2"
                  />
                  <input
                    type="text"
                    placeholder="URL"
                    value={link.url}
                    onChange={(e) =>
                      handleLinkChange(index, 'url', e.target.value)
                    }
                    className="border p-2 w-full mr-2"
                  />
                  <button
                    onClick={() => handleRemoveLink(index)}
                    className="bg-red-500 text-white px-2 py-1"
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button
                onClick={handleAddLink}
                className="mt-2 bg-blue-500 text-white px-4 py-2"
              >
                Add Link
              </button>
            </div>
            <button
              className="mt-2 bg-blue-500 text-white px-4 py-2"
              onClick={handleHeaderChange}
            >
              Save Header
            </button>
          </>
        )}

        {activeSection === 'Features' && (
          <>
            <ControlPanel
              title="Features Section" // Placeholder title for the features section
              backgroundColor={localHeader.backgroundColor}
              textColor={localHeader.textColor}
              image="" // Placeholder image for the features section
              setTitle={() => {}} // No title update function for the features section
              setBackgroundColor={(color: any) => setLocalHeader({ ...localHeader, backgroundColor: color })}
              setTextColor={(color: any) => setLocalHeader({ ...localHeader, textColor: color })}
              setImage={() => {}} // No image update function for the features section
            />
            <div className="mt-2">
              <label className="block">Features (one per line)</label>
              <textarea
                className="border p-2 w-full"
                rows={5}
                value={localFeatures}
                onChange={(e) => setLocalFeatures(e.target.value)}
              />
            </div>
            <button
              className="mt-2 bg-blue-500 text-white px-4 py-2"
              onClick={handleFeaturesChange}
            >
              Save Features
            </button>
          </>
        )}

        {activeSection === 'Footer' && (
          <>
            <ControlPanel
              title={localFooter.text} // Using footer text as title
              backgroundColor={localHeader.backgroundColor}
              textColor={localHeader.textColor}
              image="" // Placeholder image for the footer section
              setTitle={(text: any) => setLocalFooter({ ...localFooter, text })}
              setBackgroundColor={(color: any) => setLocalHeader({ ...localHeader, backgroundColor: color })}
              setTextColor={(color: any) => setLocalHeader({ ...localHeader, textColor: color })}
              setImage={() => {}} // No image update function for the footer section
            />
            <button
              className="mt-2 bg-blue-500 text-white px-4 py-2"
              onClick={handleFooterChange}
            >
              Save Footer
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Admin;
