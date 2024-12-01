import { styled } from '@mui/material/styles'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import ImageListItemBar from '@mui/material/ImageListItemBar'

const StyledImageList = styled(ImageList)({
  flexDirection: 'row',
  justifyContent: 'center',
  margin: '40px 80px',
})

const StyledImageListItem = styled(ImageListItem)({
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  width: '100%',
  height: 'auto',
  overflow: 'hidden',
});

const StyledImage = styled('img')({
  borderRadius: '5px 5px 0px 0px',
  flex: '1 0 200px',
  height: '200px'
})

const StyledImageListItemBar = styled(ImageListItemBar)({
  backgroundColor: 'black',
  borderRadius: '0px 0px 5px 5px',
  // objectFit: 'contain',
  width: '100%',
  height: '100%',
})

export { StyledImageList, StyledImageListItem, StyledImage, StyledImageListItemBar }