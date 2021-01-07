import React from "react";
import { Card, Paper, Typography } from "@material-ui/core";

function PageHeader(props) {
  const { title, subTitle, icon } = props;
  return (
    <Paper elevation={0} square>
      <div>
        <Card>{icon}</Card>
        <div>
          <Typography variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="subtitle2" component="div">
            {subTitle}
          </Typography>
        </div>
      </div>
    </Paper>
  );
}

export default PageHeader;
