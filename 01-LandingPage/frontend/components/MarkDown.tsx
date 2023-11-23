import { Link } from '@mui/icons-material'
import { Box, Button } from '@mui/material'

const MarkDown = ({
  title,
  id,
  children,
}: {
  title: string
  id: string
  children: React.ReactNode
}) => {
  return (
    <>
      <Box display={'flex'}>
        <h1>{title}</h1>
        <Button id={id} href={`#${id}`}>
          <Link></Link>
        </Button>
      </Box>
      {children}
    </>
  )
}

export default MarkDown
