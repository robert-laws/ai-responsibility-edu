import { useState } from 'react';
import { resources, categories, getResourcesByCategory } from '../data/resources';

function LearnMore() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredResources = getResourcesByCategory(activeCategory);

  return (
    <div className="learn-more">
      <h1>Learn More</h1>
      <p className="page-intro">
        Curated resources for deeper exploration of responsible AI use.
      </p>

      <div className="category-filters">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="resources-grid">
        {filteredResources.map((resource) => (
          <a
            key={resource.id}
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="resource-card"
          >
            <h3>{resource.title}</h3>
            <span className="resource-source">{resource.source}</span>
            <p>{resource.description}</p>
          </a>
        ))}
      </div>

      {filteredResources.length === 0 && (
        <div className="no-resources">
          <p>No resources found in this category.</p>
        </div>
      )}

      <div className="suggest-resource">
        <h3>Know a great resource?</h3>
        <p>
          {/* PLACEHOLDER: Add form or contact method for resource suggestions */}
          We&apos;re always looking to expand our collection. Check back for a
          way to suggest resources.
        </p>
      </div>
    </div>
  );
}

export default LearnMore;
