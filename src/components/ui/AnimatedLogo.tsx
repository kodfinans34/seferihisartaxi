export const AnimatedLogo = () => {
    return (
        <div className="relative w-10 h-10 flex items-center justify-center group">
            {/* Outer ring that spins slowly */}
            <svg
                className="absolute inset-0 w-full h-full text-primary animate-[spin_6s_linear_infinite] group-hover:text-primary-hover transition-colors"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="8" strokeDasharray="30 15" />
            </svg>

            {/* Inner taxi icon that bounces slightly on hover */}
            <svg
                className="relative z-10 w-6 h-6 text-secondary group-hover:-translate-y-1 transition-transform duration-300"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5H15V3H9V5H6.5C5.84 5 5.28 5.42 5.08 6.01L3 12V20C3 20.55 3.45 21 4 21H5C5.55 21 6 20.55 6 20V19H18V20C18 20.55 18.45 21 19 21H20C20.55 21 21 20.55 21 20V12L18.92 6.01ZM6.85 7H17.14L18.22 10H5.77L6.85 7ZM19 17H5V12H19V17ZM7.5 16C8.33 16 9 15.33 9 14.5C9 13.67 8.33 13 7.5 13C6.67 13 6 13.67 6 14.5C6 15.33 6.67 16 7.5 16ZM16.5 16C17.33 16 18 15.33 18 14.5C18 13.67 17.33 13 16.5 13C15.67 13 15 13.67 15 14.5C15 15.33 15.67 16 16.5 16Z" />
            </svg>
        </div>
    );
};
