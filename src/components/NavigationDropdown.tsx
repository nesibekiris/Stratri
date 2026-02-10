import { useState, useRef, useEffect } from 'react';

interface NavItem {
  name: string;
  path: string;
  children: Array<{ name: string; path: string }> | null;
}

interface NavigationDropdownProps {
  item: NavItem;
  isActive: boolean;
  onNavigate: (path: string) => void;
  colors: {
    dark: string;
    accent: string;
  };
}

export function NavigationDropdown({ item, isActive, onNavigate, colors }: NavigationDropdownProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isDropdownHovered, setIsDropdownHovered] = useState(false);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Keep dropdown open if either trigger or dropdown is hovered
  const shouldShowDropdown = isHovered || isDropdownHovered;

  const handleMouseEnter = () => {
    // Clear any pending close timeout
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    // Add a small delay before closing to allow mouse travel to dropdown
    closeTimeoutRef.current = setTimeout(() => {
      setIsHovered(false);
    }, 150); // 150ms delay for safe mouse travel
  };

  const handleDropdownMouseEnter = () => {
    // Clear any pending close timeout
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setIsDropdownHovered(true);
  };

  const handleDropdownMouseLeave = () => {
    setIsDropdownHovered(false);
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative"
    >
      <button
        onClick={() => onNavigate(item.path)}
        className={`px-4 py-2 rounded-sm text-sm font-sans transition-all duration-200 ${
          isActive ? 'font-bold' : 'font-normal'
        }`}
        style={{
          fontFamily: isActive ? 'Cormorant Garamond, serif' : 'IBM Plex Serif, serif',
          color: isActive ? colors.dark : colors.dark,
          backgroundColor: isActive ? '#E8E4DF' : 'transparent',
          border: isActive ? 'none' : '1px solid #E8E4DF',
          boxShadow: isActive ? '0 1px 3px rgba(0, 0, 0, 0.1)' : 'none',
        }}
      >
        {item.name}
      </button>
      
      {/* Safe zone bridge - invisible area between trigger and dropdown */}
      {item.children && shouldShowDropdown && (
        <div 
          className="absolute top-full left-0 h-2 w-full pointer-events-none"
          style={{ zIndex: 40 }}
        />
      )}
      
      {/* Dropdown Panel */}
      {item.children && shouldShowDropdown && (
        <div 
          onMouseEnter={handleDropdownMouseEnter}
          onMouseLeave={handleDropdownMouseLeave}
          className="absolute top-full left-0 mt-2 min-w-[280px] bg-white border rounded-sm shadow-lg py-3 px-4 z-50"
          style={{ 
            borderColor: '#E8E4DF',
            animation: 'fadeIn 150ms ease-out'
          }}
        >
          {item.children.map((child, childIndex) => (
            <button
              key={childIndex}
              onClick={() => {
                onNavigate(child.path);
                setIsHovered(false);
                setIsDropdownHovered(false);
              }}
              className="block w-full text-left py-2 px-3 text-sm font-sans transition-colors duration-150 rounded-sm"
              style={{
                color: colors.dark,
                fontFamily: 'IBM Plex Serif, serif',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#F5F3F0';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              {child.name}
            </button>
          ))}
        </div>
      )}
      
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}