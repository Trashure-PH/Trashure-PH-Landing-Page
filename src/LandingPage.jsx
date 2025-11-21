import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="hero-gradient relative min-h-screen flex items-center justify-center overflow-hidden">
                <div className="particles">
                    {[...Array(5)].map((_, i) => (
                        <div key={i} className="particle" />
                    ))}
                </div>
                <div className="absolute inset-0">
                    <div className="absolute top-10 left-16 w-20 h-20 bg-yellow-300 rounded-full blur-2xl animate-[float_5s_ease-in-out_infinite]" />
                    <div className="absolute bottom-20 right-10 w-28 h-28 bg-blue-300 rounded-full blur-3xl animate-[float_6s_ease-in-out_infinite]" />
                    <div className="absolute top-32 right-24 w-16 h-16 bg-pink-300 rounded-full blur-xl animate-[float_4s_ease-in-out_infinite]" />
                </div>
                <div className="container mx-auto px-6 relative z-10 text-center fade-in max-w-3xl">
                    <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight drop-shadow-xl">
                        Trashure: <span className="text-yellow-300">Turn Trash</span> into <span className="text-green-200">Treasure</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 mt-6">
                        Collect points, earn badges, and redeem real rewards while helping the planet. Recycling has never been this fun and rewarding!
                    </p>
                    <div className="flex flex-wrap gap-6 mt-8 justify-center">
                        <div className="bg-white/20 backdrop-blur-lg px-6 py-4 rounded-2xl shadow-lg hover:scale-105 transition-all">
                            <p className="text-3xl font-bold text-white">🏆 5,000+</p>
                            <p className="text-white/80 text-sm">Active Users</p>
                        </div>
                        <div className="bg-white/20 backdrop-blur-lg px-6 py-4 rounded-2xl shadow-lg hover:scale-105 transition-all">
                            <p className="text-3xl font-bold text-white">♻️ 12 Tons</p>
                            <p className="text-white/80 text-sm">Waste Recycled</p>
                        </div>
                        <div className="bg-white/20 backdrop-blur-lg px-6 py-4 rounded-2xl shadow-lg hover:scale-105 transition-all">
                            <p className="text-3xl font-bold text-white">🌱 50+</p>
                            <p className="text-white/80 text-sm">Kiosks Nationwide</p>
                        </div>
                    </div>
                    <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center">
                        <Link to="/pitch-deck" className="pulse-btn bg-yellow-300 text-green-700 px-10 py-5 rounded-full text-xl font-semibold shadow-xl hover:scale-105 transition-all inline-block">
                            View Pitch Deck
                        </Link>
                        <a href="https://trashure-ph-kiosk.vercel.app" target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white px-10 py-5 rounded-full text-xl font-semibold hover:bg-white hover:text-green-700 hover:scale-105 transition-all inline-block">
                            Demo
                        </a>
                    </div>
                </div>
            </section>

            {/* Problem Statement */}
            <section className="py-28 bg-gradient-to-b from-white relative overflow-hidden">
                <div className="absolute -top-20 -right-20 w-96 h-96 bg-green-200/30 rounded-full blur-3xl" />
                <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-green-300/20 rounded-full blur-2xl" />
                <div className="container mx-auto px-6 max-w-6xl relative z-10">
                    <h2 className="text-5xl font-extrabold text-center mb-16 text-gray-800">The Crisis We Face</h2>
                    <div className="bg-white rounded-3xl shadow-2xl p-14 border border-gray-200 hover:shadow-3xl transition-all">
                        <div className="flex flex-col lg:flex-row gap-12 items-center">
                            <div className="flex-1 flex justify-center">
                                <img src="/logo.png" alt="Eco" className="w-64 opacity-90 animate-[float_6s_ease-in-out_infinite]" />
                            </div>
                            <div className="flex-1">
                                <p className="text-2xl leading-relaxed text-gray-700 mb-6">
                                    The Philippines produces over <span className="font-bold text-green-600">17 million tons</span> of waste every year — yet shockingly, <span className="font-bold text-red-600">61% is never recycled</span>.
                                </p>
                                <p className="text-xl leading-relaxed text-gray-600 mb-6">
                                    Plastics, cans, bottles, and other valuable materials end up in landfills, rivers, and oceans, harming communities and ecosystems.
                                </p>
                                <p className="text-xl leading-relaxed text-gray-600">
                                    <span className="font-semibold text-green-600">We need a new system —</span> one that makes recycling effortless, rewarding, and part of everyday life.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <h2 className="text-5xl font-bold text-center mb-6 text-gray-800">How Trashure Works</h2>
                    <p className="text-center text-xl text-gray-600 mb-16 max-w-2xl mx-auto">
                        Four simple steps to turn your recyclables into real rewards
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[1, 2, 3, 4].map((step) => (
                            <div key={step} className="step-card bg-white rounded-2xl p-8 shadow-lg text-center">
                                <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl font-bold shadow-lg">
                                    {step}
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                                    {step === 1 && 'Deposit Trash'}
                                    {step === 2 && 'AI Recognition'}
                                    {step === 3 && 'Earn Points'}
                                    {step === 4 && 'Redeem Rewards'}
                                </h3>
                                <p className="text-gray-600">
                                    {step === 1 && 'Bring recyclable items like bottles, cans, and plastics...'}
                                    {step === 2 && 'Smart sensors identify materials instantly.'}
                                    {step === 3 && 'Auto credit of Trashure Points based on material value.'}
                                    {step === 4 && 'Exchange points for cash, vouchers, and eco-products.'}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-28 bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <h2 className="text-5xl font-extrabold text-center mb-16 text-gray-800">Why Choose Trashure?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="benefit-card rounded-3xl p-12 shadow-xl bg-gradient-to-br from-white to-green-50 hover:shadow-2xl hover:-translate-y-2 transition-all">
                            <div className="text-5xl mb-6">💰</div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">Cash Rewards</h3>
                            <p className="text-gray-600">Earn real value for your recyclables.</p>
                        </div>
                        <div className="benefit-card rounded-3xl p-12 shadow-xl bg-gradient-to-br from-white to-green-50 hover:shadow-2xl hover:-translate-y-2 transition-all">
                            <div className="text-5xl mb-6">🎮</div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">Gamified Experience</h3>
                            <p className="text-gray-600">Badges, levels, streaks, and rankings.</p>
                        </div>
                        <div className="benefit-card rounded-3xl p-12 shadow-xl bg-gradient-to-br from-white to-green-50 hover:shadow-2xl hover:-translate-y-2 transition-all">
                            <div className="text-5xl mb-6">🌱</div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">Environmental Impact</h3>
                            <p className="text-gray-600">See your effect on the planet in real-time.</p>
                        </div>
                        <div className="benefit-card rounded-3xl p-12 shadow-xl bg-gradient-to-br from-white to-green-50 hover:shadow-2xl hover:-translate-y-2 transition-all">
                            <div className="text-5xl mb-6">🎟️</div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">Exclusive Rewards</h3>
                            <p className="text-gray-600">Get vouchers, discounts, and perks.</p>
                        </div>
                        <div className="benefit-card rounded-3xl p-12 shadow-xl bg-gradient-to-br from-white to-green-50 hover:shadow-2xl hover:-translate-y-2 transition-all">
                            <div className="text-5xl mb-6">📱</div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">App Convenience</h3>
                            <p className="text-gray-600">Manage your points, history, and map of kiosks.</p>
                        </div>
                        <div className="benefit-card rounded-3xl p-12 shadow-xl bg-gradient-to-br from-white to-green-50 hover:shadow-2xl hover:-translate-y-2 transition-all">
                            <div className="text-5xl mb-6">📊</div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">Data Insights</h3>
                            <p className="text-gray-600">Support national environmental data collection.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-r from-green-600 to-green-700 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute transform rotate-45 -left-20 top-20 w-96 h-96 bg-white rounded-full" />
                    <div className="absolute transform -rotate-45 -right-20 bottom-20 w-96 h-96 bg-white rounded-full" />
                </div>
                <div className="container mx-auto px-6 text-center relative z-10">
                    <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Ready to Make a Difference?</h2>
                    <p className="text-2xl text-white mb-12 opacity-90 max-w-3xl mx-auto">Join thousands of Filipinos making an impact.</p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <button className="pulse-btn bg-white text-green-700 px-12 py-6 rounded-full text-xl font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl">
                            Download the App
                        </button>
                        <button className="bg-transparent border-4 border-white text-white px-12 py-6 rounded-full text-xl font-semibold hover:bg-white hover:text-green-700 transition-all transform hover:scale-105">
                            Find a Kiosk
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12">
                <div className="container mx-auto px-6 text-center">
                    <h3 className="text-3xl font-bold mb-2">Trashure</h3>
                    <p className="text-gray-400">Turning Trash into Treasure</p>
                    <div className="text-gray-400 mt-6">
                        <p>© 2025 Trashure. All rights reserved.</p>
                        <p className="mt-2">Making the Philippines greener, one deposit at a time. 🌿</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default LandingPage;
