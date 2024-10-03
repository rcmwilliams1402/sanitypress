// import { GoogleTagManager } from '@next/third-parties/google'
import SkipToContent from '@/ui/SkipToContent'
import Announcement from '@/ui/Announcement'
import Header from '@/ui/header'
import Footer from '@/ui/footer'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import VisualEditingControls from '@/ui/VisualEditingControls'
import '@/styles/app.css'

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en" className="h-full">
			{/* <GoogleTagManager gtmId='' /> */}

			<body className="flex h-full min-h-screen flex-col bg-canvas text-ink">
				<SkipToContent />
				<Announcement />
				<Header />
				<main id="main-content" tabIndex={-1} className="flex-grow">
					{children}
				</main>
				<Footer />

				<Analytics />
				<SpeedInsights />
				<VisualEditingControls />
			</body>
		</html>
	)
}
