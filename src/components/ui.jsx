export const Orn = () => <div className="orn" />
export const Eyebrow = ({ children }) => <p className="eyebrow">{children}</p>

// Centered column; children fade/slide in when the section scrolls into view
export const Wrap = ({ children }) => (
  <div className="wrap flex flex-col items-center justify-center text-center px-4 py-6 max-w-xl mx-auto w-full">
    {children}
  </div>
)
