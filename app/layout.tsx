import React from "react";

type LayoutProps = { children: React.ReactNode };

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col">
            <header className="p-5 animate-fadeIn">
                <div className="logo">
                    <img src="/logo.png" alt="Gem Spider Logo" width={50} />
                </div>
                <h1 className="text-3xl font-bold">Gem Spider</h1>
                <p className="text-lg">Token Pre Sale - Get your $SPIDER tokens now!</p>
            </header>
            <main className="flex-1 flex justify-center items-center">{children}</main>
            <footer className="p-4 bg-black/30 fixed bottom-0 w-full">
                <p>© 2025 Gem Spider</p>
            </footer>
        </div>
    );
};

export default Layout;
