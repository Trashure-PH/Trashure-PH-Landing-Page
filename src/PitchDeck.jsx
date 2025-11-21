import React from 'react';
import { Link } from 'react-router-dom';

function PitchDeck() {
    return (
        <div className="bg-white min-h-screen font-sans text-gray-800">
            {/* Navigation */}
            <nav className="bg-white shadow-sm sticky top-0 z-50">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <Link to="/" className="text-2xl font-bold text-green-600 flex items-center gap-2">
                        <img src="/logo.png" alt="Trashure Logo" className="w-8 h-8" />
                        Trashure
                    </Link>
                    <Link to="/" className="text-gray-600 hover:text-green-600 font-medium transition-colors">
                        Back to Home
                    </Link>
                </div>
            </nav>

            {/* 1. Title / Team */}
            <section className="py-20 bg-gradient-to-br from-green-50 to-white">
                <div className="container mx-auto px-6 text-center">
                    <img src="/logo.png" alt="Trashure Logo" className="w-32 h-32 mx-auto mb-6 animate-[float_6s_ease-in-out_infinite]" />
                    <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4">
                        Trashure
                    </h1>
                    <p className="text-5xl text-green-600 font-semibold mb-6">
                        Scan. Claim. Earn
                    </p>
                    <p className="text-xl text-gray-500 max-w-3xl mx-auto mb-12">
                        "A dual-platform recycling ecosystem that brings instant recognition at the kiosk and lasting rewards on mobile.
                    </p>

                    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12">
                        <h2 className="text-3xl font-bold mb-8 text-gray-800">Mission</h2>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            To decentralize waste management by making recycling fun, verifiable, and instantly rewarding through accessible Edge AI technology.
                        </p>
                    </div>
                </div>
            </section>

            {/* 2. Problem */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="flex-1">
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">The Problem</h2>
                            <p className="text-xl text-gray-600 leading-relaxed mb-6">
                                The global recycling system is failing due to three critical friction points:
                            </p>
                            <ul className="space-y-4 text-lg text-gray-600">
                                <li className="flex items-start gap-3">
                                    <span className="text-red-500 text-xl">❌</span>
                                    <span><strong>Low Participation:</strong> Global plastic recycling rate remains stagnant at ~9%.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-red-500 text-xl">❌</span>
                                    <span><strong>Contamination:</strong> "Wish-cycling" ruins entire batches of waste due to lack of guidance.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-red-500 text-xl">❌</span>
                                    <span><strong>Delayed Gratification:</strong> Recycling feels like a chore with no immediate feedback or reward.</span>
                                </li>
                            </ul>
                        </div>
                        <div className="flex-1 bg-red-50 rounded-3xl p-10 flex items-center justify-center">
                            <div className="text-9xl">🗑️</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Solution / Product */}
            <section className="py-20 bg-green-50">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="flex flex-col md:flex-row-reverse items-center gap-12">
                        <div className="flex-1">
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">The Solution: Dual-Mode Ecosystem</h2>
                            <p className="text-xl text-gray-600 leading-relaxed mb-6">
                                A split-interface ecosystem running on the Firebase Spark Plan by offloading AI processing to the edge.
                            </p>
                            <div className="space-y-6">
                                <div className="bg-white p-6 rounded-xl shadow-sm">
                                    <h3 className="text-xl font-bold text-green-700 mb-2">Mode A: The Trashure Kiosk (Edge Node)</h3>
                                    <p className="text-gray-600">Runs on any device with a webcam. Uses TensorFlow.js to identify waste locally. Generates crypto-signed QR receipts for anonymous, rapid usage.</p>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-sm">
                                    <h3 className="text-xl font-bold text-green-700 mb-2">Mode B: The Mobile App (User Hub)</h3>
                                    <p className="text-gray-600">React PWA where users scan receipts to claim points. Features leaderboards, streaks, and a rewards marketplace.</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 bg-white rounded-3xl p-10 flex items-center justify-center shadow-lg">
                            <div className="text-9xl">♻️</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Market Opportunity */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-5xl text-center">
                    <h2 className="text-4xl font-bold text-gray-900 mb-12">Market Opportunity</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="p-8 border-2 border-gray-100 rounded-2xl hover:border-green-200 transition-colors">
                            <h3 className="text-5xl font-bold text-gray-900 mb-2">$1.3T</h3>
                            <p className="text-gray-500 uppercase tracking-wide font-semibold">Waste Management Market</p>
                            <p className="text-gray-600 mt-4">Valued by 2025, driven by Smart City initiatives.</p>
                        </div>
                        <div className="p-8 border-2 border-gray-100 rounded-2xl hover:border-green-200 transition-colors">
                            <h3 className="text-5xl font-bold text-gray-900 mb-2">$29B</h3>
                            <p className="text-gray-500 uppercase tracking-wide font-semibold">Gamification Market</p>
                            <p className="text-gray-600 mt-4">Projected by 2025, with "Green Gamification" trending.</p>
                        </div>
                    </div>
                    <p className="mt-8 text-gray-500">Target Audience: Universities, Corporate Offices, and Smart Cities looking for low-cost ESG solutions.</p>
                </div>
            </section>

            {/* 5. Business Model */}
            <section className="py-20 bg-gray-900 text-white">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-4xl font-bold mb-12 text-center">Business Model</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-gray-800 p-8 rounded-2xl">
                            <div className="text-4xl mb-4">💻</div>
                            <h3 className="text-2xl font-bold mb-4">B2B SaaS Licensing</h3>
                            <p className="text-gray-400">Selling Kiosk software and "Impact Dashboard" to universities and offices for sustainability tracking.</p>
                        </div>
                        <div className="bg-gray-800 p-8 rounded-2xl">
                            <div className="text-4xl mb-4">🏆</div>
                            <h3 className="text-2xl font-bold mb-4">Sponsored Challenges</h3>
                            <p className="text-gray-400">Brands pay to host challenges (e.g., "Recycle 5 Starbucks Cups for 10% off").</p>
                        </div>
                        <div className="bg-gray-800 p-8 rounded-2xl">
                            <div className="text-4xl mb-4">📊</div>
                            <h3 className="text-2xl font-bold mb-4">Data Monetization</h3>
                            <p className="text-gray-400">Aggregating anonymized consumption data for market research.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. MVP / Features */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-green-50 skew-x-12 translate-x-20 opacity-50" />
                <div className="container mx-auto px-6 max-w-6xl relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Core Technology & MVP</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            A scalable, low-cost ecosystem built for rapid deployment and high user engagement.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {/* Feature 1 */}
                        <div className="group bg-white border border-gray-100 rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:border-green-200 transition-all duration-300">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center text-3xl shadow-sm group-hover:scale-110 transition-transform">
                                    👁️
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900">Edge AI Scanner</h3>
                                    <span className="text-xs font-bold tracking-wider text-green-600 uppercase bg-green-50 px-2 py-1 rounded">Zero Server Cost</span>
                                </div>
                            </div>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Proprietary client-side computer vision (TensorFlow.js) that runs locally on any device. Identifies recyclables in <span className="font-bold text-gray-800">under 200ms</span> with 95% accuracy, eliminating expensive cloud inference costs.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="group bg-white border border-gray-100 rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:border-green-200 transition-all duration-300">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-3xl shadow-sm group-hover:scale-110 transition-transform">
                                    🧾
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900">Secure Guest Receipts</h3>
                                    <span className="text-xs font-bold tracking-wider text-blue-600 uppercase bg-blue-50 px-2 py-1 rounded">Frictionless Onboarding</span>
                                </div>
                            </div>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Patented "Scan-and-Go" system. Kiosks generate cryptographically signed QR codes (HMAC) holding session points. Users claim rewards instantly <span className="font-bold text-gray-800">without logging in</span> at the machine.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="group bg-white border border-gray-100 rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:border-green-200 transition-all duration-300">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center text-3xl shadow-sm group-hover:scale-110 transition-transform">
                                    📱
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900">Gamified User Hub</h3>
                                    <span className="text-xs font-bold tracking-wider text-purple-600 uppercase bg-purple-50 px-2 py-1 rounded">High Retention</span>
                                </div>
                            </div>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                A React PWA that turns recycling into a game. Features <span className="font-bold text-gray-800">competitive leaderboards, weekly streaks, and brand-sponsored challenges</span> (e.g., "The Starbucks Cup Quest") to drive habitual usage.
                            </p>
                        </div>

                        {/* Feature 4 */}
                        <div className="group bg-white border border-gray-100 rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:border-green-200 transition-all duration-300">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center text-3xl shadow-sm group-hover:scale-110 transition-transform">
                                    📊
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900">Impact Dashboard</h3>
                                    <span className="text-xs font-bold tracking-wider text-orange-600 uppercase bg-orange-50 px-2 py-1 rounded">B2B Value</span>
                                </div>
                            </div>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Real-time analytics for partners. Tracks waste diversion rates, carbon footprint reduction, and user demographics—providing <span className="font-bold text-gray-800">verifiable ESG data</span> for corporate and government clients.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. Traction / Validation */}
            <section className="py-20 bg-green-50">
                <div className="container mx-auto px-6 max-w-5xl text-center">
                    <h2 className="text-4xl font-bold text-gray-900 mb-12">Traction & Validation</h2>
                    <div className="flex flex-wrap justify-center gap-8">
                        <div className="bg-white px-8 py-6 rounded-2xl shadow-md">
                            <p className="text-4xl font-bold text-green-600 mb-2">&gt;85%</p>
                            <p className="text-gray-600 font-medium">AI Accuracy (MobileNet)</p>
                        </div>
                        <div className="bg-white px-8 py-6 rounded-2xl shadow-md">
                            <p className="text-4xl font-bold text-green-600 mb-2">50k</p>
                            <p className="text-gray-600 font-medium">Daily Reads Capacity (Free Tier)</p>
                        </div>
                        <div className="bg-white px-8 py-6 rounded-2xl shadow-md">
                            <p className="text-4xl font-bold text-green-600 mb-2">Zero</p>
                            <p className="text-gray-600 font-medium">Server Costs (Edge AI)</p>
                        </div>
                    </div>
                    <p className="mt-12 text-xl text-gray-600 italic">"We have successfully proved that MobileNet can run on a standard laptop webcam with &gt;85% accuracy, validating our Zero-Server-Cost approach."</p>
                </div>
            </section>

            {/* 8. Roadmap */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Roadmap</h2>
                    <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">

                        {/* Phase 1 */}
                        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-green-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                <span className="font-bold text-xs">P1</span>
                            </div>
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                                <div className="flex items-center justify-between space-x-2 mb-1">
                                    <div className="font-bold text-slate-900">Phase 1 (Current)</div>
                                </div>
                                <div className="text-slate-500">Web-based MVP deployment on laptops acting as kiosks.</div>
                            </div>
                        </div>

                        {/* Phase 2 */}
                        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 text-slate-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                <span className="font-bold text-xs">P2</span>
                            </div>
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                                <div className="flex items-center justify-between space-x-2 mb-1">
                                    <div className="font-bold text-slate-900">Phase 2</div>
                                </div>
                                <div className="text-slate-500">Integration of Google Gemini API for "Advanced Analysis" (e.g., detecting contamination).</div>
                            </div>
                        </div>

                        {/* Phase 3 */}
                        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 text-slate-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                <span className="font-bold text-xs">P3</span>
                            </div>
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                                <div className="flex items-center justify-between space-x-2 mb-1">
                                    <div className="font-bold text-slate-900">Phase 3</div>
                                </div>
                                <div className="text-slate-500">Hardware prototype integration (Arduino/ESP32) to physically unlock bin lids.</div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 9. Call to Action */}
            <section className="py-24 bg-green-600 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute transform rotate-45 -left-20 top-20 w-96 h-96 bg-white rounded-full" />
                    <div className="absolute transform -rotate-45 -right-20 bottom-20 w-96 h-96 bg-white rounded-full" />
                </div>
                <div className="container mx-auto px-6 text-center relative z-10">
                    <h2 className="text-5xl font-bold text-white mb-8">Help us turn trash into treasure.</h2>
                    <p className="text-2xl text-white mb-12 opacity-90 max-w-3xl mx-auto">
                        We are looking for Beta Testers, University Partners, and Developers.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <button className="pulse-btn bg-white text-green-700 px-12 py-6 rounded-full text-xl font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl">
                            Contact Us
                        </button>
                        <button className="bg-transparent border-4 border-white text-white px-12 py-6 rounded-full text-xl font-semibold hover:bg-white hover:text-green-700 transition-all transform hover:scale-105">
                            Join Beta
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12">
                <div className="container mx-auto px-6 text-center">
                    <p className="text-gray-400">© 2025 Trashure. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default PitchDeck;
