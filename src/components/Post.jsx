import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
const Post = ({imag, tit}) => {
  return (
    <Card sx={{ margin: 5 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title={tit}
        subheader="July 31, 2022"
      />
      <CardMedia
        component="img"
        height="20%"
        image={imag}
        alt="Paella dish"
      />
      
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          To walk into nature is to witness a thousand miracles -Mary Davis. <br/> <br/>
          
          We can’t ignore the maturity of this world even we live in a modern age,
          so we all needed to save and enjoy the Nature and natural things cause it helps us to grow healthy.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;
