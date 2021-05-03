/*eslint-disable*/

/* File Description */

/* Local Imports */

/* Third Party Imports */
import React from "react";
import { makeStyles } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: "100%",

      padding: "20px",
      //   width: theme.spacing(16),
      //   height: theme.spacing(16),
    },
    titleText: {},
  },
}));

export default function Question(props) {
  const classes = useStyles();
  //   alert(props.values);
  return (
    <div className={classes.root}>
      <Paper elevation={2}>
        <div className={classes.questionTitle}>
          <Typography style={{ fontWeight: 600 }}>{props.question}</Typography>

          {props.children}
        </div>
      </Paper>
    </div>
  );
}

// /* File Description */

// /* Local Imports */

// /* Third Party Imports */
// import React from 'react';
// import styled from 'styled-components';

// export default function QuestionCard({ question }) {
//   return (
//     <Card>
//       <QuestionTitle>
//         {question.id}. {question.questionText}
//       </QuestionTitle>
//       {question.questionType === 'Radio' ? (
//         <QuestionType onChange={(e) => console.log(e.target.value)}>
//           {question.questionOptions.map((option) => {
//             console.log(option);
//           })}
//           {/* Something <input type="radio" value="value2" name="something" />
//           Something <input type="radio" value="value3" name="something" /> */}
//         </QuestionType>
//       ) : null}
//     </Card>
//   );
// }

// const Card = styled.div`
//   background: white;
//   border-radius: 5px;
//   margin: 5px;
//   flex: 1;
//   max-width: 70%;
//   min-width: 350px;
//   padding: 10px;
//   height: 80px;
//   display: flex;
//   margin-top: 30px;
//   flex-wrap: wrap;
// `;

// const QuestionTitle = styled.div`
//   font-weight: 700;
//   color: #1f212f;
//   font-size: 20px;
//   width: 100%;
// `;

// const QuestionType = styled.div`
//   flex-direction: row;
//   display: flex;
// `;

// const CustomInput = styled.div`
//   flex-direction: row;
//   font-size: 18px;
// `;
