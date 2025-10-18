import Header from "./components/Header";

function MainContent({ children }) {
    return (
        <main className="main-content bg-[#F1F5F9] text-[#212b36] w-full max-h-full overflow-y-auto">
            <Header />
            {/* Page */}
            <div className="page-wrapper p-3 sm:p-5 md:p-7 2xl:p-10">
                {
                    children
                }
            </div>
        </main>
    )
}

export default MainContent;