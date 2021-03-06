/** @jsx jsx */
import { Box, Flex, jsx } from "theme-ui"

const Footer = () => {
  return (
    <Box as="footer" variant="footer">
      Copyright &copy; {new Date().getFullYear()} MizanDev. All rights reserved.
      <br />
      <Flex
        sx={{
          justifyContent: `center`,
          alignItems: `center`,
          mt: 3,
          color: `text`,
          fontWeight: `semibold`,
          a: { color: `text` },
        }}
      >
      </Flex>
    </Box>
  )
}

export default Footer
