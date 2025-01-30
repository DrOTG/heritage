export default function Layout({ children }) {
    return (
      <div className="page-wrapper">
        <div className="sections-container">
          {children}
        </div>
      </div>
    );
  }