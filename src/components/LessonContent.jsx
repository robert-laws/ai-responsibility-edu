function LessonContent({ content }) {
  return (
    <div className="lesson-content">
      {content.map((block, index) => {
        switch (block.type) {
          case 'text':
            return (
              <p key={index} className="content-text">
                {block.value}
              </p>
            );

          case 'heading':
            return (
              <h2 key={index} className="content-heading">
                {block.value}
              </h2>
            );

          case 'list':
            return (
              <ul key={index} className="content-list">
                {block.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            );

          case 'example':
            return (
              <div key={index} className="content-example">
                <h4>{block.title}</h4>
                <p>{block.value}</p>
              </div>
            );

          case 'definition':
            return (
              <div key={index} className="content-definition">
                <dt>{block.term}</dt>
                <dd>{block.value}</dd>
              </div>
            );

          case 'interactive':
            return (
              <div key={index} className="content-interactive">
                <h4>{block.title}</h4>
                <p className="interactive-prompt">{block.prompt}</p>
                <details className="interactive-discussion">
                  <summary>See Discussion</summary>
                  <p>{block.discussion}</p>
                </details>
              </div>
            );

          case 'keyTakeaway':
            return (
              <div key={index} className="content-takeaway">
                <strong>Key Takeaway</strong>
                <p>{block.value}</p>
              </div>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}

export default LessonContent;
