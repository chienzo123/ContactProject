import { Card, CardActionArea,
  CardContent, Typography, CardActions, Button, CardMedia } from '@material-ui/core'
import React, {Component} from 'react'
export default class CardCommon extends Component{
  //  constructor(prop){
  //      super(prop);
  //  }
    render(){
        const {obj} = this.props;
        return(
           

               <Card>
               <CardActionArea>
                    <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image="https://picsum.photos/200/300"
                    title="Contemplative Reptile"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {obj.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    {obj.title.userId}
                    </Typography>
                    </CardContent>
                 </CardActionArea>
                 <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
               </Card>
           
        )
    }
}