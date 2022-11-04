import NavBarDashBoard from './NavBarDashboard';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
        <h1>Learn coding with bhai Dashboard</h1>
        <NavBarDashBoard />
        {children}
    </> 
  )
}
