import React from 'react';

interface FeaturesProps {
  features: string[];
}

const Features: React.FC<FeaturesProps> = ({ features }) => {
  return (
    <section className="p-6">
      <h2 className="text-2xl mb-4">Features</h2>
      <ul>
        {features.map((feature, index) => (
          <li key={index} className="mb-2">{feature}</li>
        ))}
      </ul>
    </section>
  );
};

export default Features;
