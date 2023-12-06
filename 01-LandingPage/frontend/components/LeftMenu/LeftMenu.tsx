import LeftMenuClient from './LeftMenuClient'

const LeftMenu = () => {
  const inbox = [
    { icon: '🐈', text: 'cat' },
    { icon: '🐶', text: 'dog' },
  ]

  return (
    <>
      <LeftMenuClient profile={'profile'} inbox={inbox}></LeftMenuClient>
    </>
  )
}

export default LeftMenu
