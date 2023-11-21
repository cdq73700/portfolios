const LeftMenu = () => {
  const items = Array.from({ length: 50 }).map((_, index) => `item${index + 1}`)

  return (
    <>
      {items.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </>
  )
}

export default LeftMenu
