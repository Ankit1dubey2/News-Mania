import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardActionArea , CardMedia, CardContent, Typography, Button } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 10,
    height: 560,
    background: '#fff',
    borderRadius: 8,
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
});

const CardList = ({ articles }) => {
  const classes = useStyles();

  const truncate = (text, limit) => {
    if (text && text.length > limit) {
      return `${text.substring(0, limit)}...`;
    }
    return text;
  };

  const filteredArticles = articles.filter(article => article.url !== 'https://removed.com');

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {filteredArticles.length > 0 && filteredArticles.map((article) => (
        <Card
          key={`${article.url}-${article.publishedAt}`}
          className={classes.root}
        >
          <CardActionArea component="a" href={article.url} target="_blank" rel="noopener noreferrer">
            <CardHeader
              title={truncate(article.title, 120)}
              subheader={new Date(article.publishedAt).toLocaleDateString()} 
              style={{ fontFamily: 'Open Sans', color: '#333' }}
            />
            <CardMedia
              className={classes.media}
              image={article.urlToImage || '/path/to/default/image.jpg'} 
              title={article.title}
              alt={article.title} 
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                {truncate(article.description, 120)}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
};

export default CardList;
