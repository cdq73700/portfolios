import styles from '@/styles/components/SideMenu.styles.module.css'

export default function SideMenu({
  position,
  setIsOpen,
  children,
}: {
  position: string
  setIsOpen: Function
  children: React.ReactNode
}) {
  const { Header, Body, Container } = styles

  return (
    <>
      <div
        className={'h-screen fixed inset-0 bg-black bg-opacity-50'}
        onClick={() => setIsOpen(false)}
      ></div>
      <div className={`w-64 absolute py-0 ${position}`}>
        <div className={Body}>
          <nav className={'h-screen flex-row'}>
            <div className={Header}>HEADER</div>
            <div className={Container}>{children}</div>
          </nav>
        </div>
      </div>
    </>
  )
}
