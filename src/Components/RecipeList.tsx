import { StyledImageList, StyledImageListItem, StyledImageListItemBar, StyledImage } from 'Components/recipeListStyle'
import { useRecipeList } from 'Components/recipeListLogic'

const RecipeList: React.FC = ()=> {
  const { items, onClick } = useRecipeList()

  return (
    <StyledImageList cols={4} gap={35} >
      {items.map((item) => (
        <StyledImageListItem key={item.img}>
          <StyledImage
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=248&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
          <StyledImageListItemBar
            title={item.title}
            // subtitle={<span>Category: {item.category}</span>}
            subtitle={item.category}
            position="below"
            onClick={onClick}
          />
        </StyledImageListItem>
      ))}
    </StyledImageList>
  )
}

export default RecipeList
