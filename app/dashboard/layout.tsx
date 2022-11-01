import NavBarDashBoard from './NavBarDashboard';
export default function RootLayout({children}) {
  return (
    <>
        <h1>Learn coding with bhai Dashboard</h1>
        <NavBarDashBoard />
        {children}
    </> 
  )
}
