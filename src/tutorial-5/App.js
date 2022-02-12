import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  IconButton,
} from "@mui/material";
import {
  Typography,
  Box,
  Button,
  Container,
  TextField,
  FormControl,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function App() {
  const [fields, setFields] = React.useState({
    name: "",
    email: "",
    text: "",
  });

  const [reviews, setReviews] = React.useState(
    JSON.parse(localStorage.getItem("reviews")) || []
  );

  const handleClickSubmit = () => {
    setReviews([...reviews, fields]);

    setFields({
      name: "",
      email: "",
      text: "",
    });
  };

  const handleClickDelete = (i) => {
    setReviews(reviews.filter((_, index) => i !== index));
  };

  const updateFieldValue = (name, value) => {
    setFields({
      ...fields,
      [name]: value,
    });
  };

  React.useEffect(() => {
    window.localStorage.setItem("reviews", JSON.stringify(reviews));
  }, [reviews]);

  return (
    <Container maxWidth="sm">
      <List
        sx={{
          maxWidth: 340,
          bgcolor: "background.paper",
          border: "1px solid #d1d1d1",
          borderRadius: "3%",
          pr: 3,
          m: "auto",
          mb: 4,
        }}
      >
        <Typography sx={{ mt: 1, ml: 5 }} variant="h6" component="div">
          Отзывы:
        </Typography>
        {reviews.length > 0 ? (
          reviews.map((obj, index, arr) => (
            <ListItem key={index} alignItems="flex-start">
              <ListItemAvatar>
                <Avatar />
              </ListItemAvatar>
              <ListItemText
                primary={obj.name}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    ></Typography>
                    {obj.text}
                  </React.Fragment>
                }
              />
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => handleClickDelete(index)}
              >
                <DeleteIcon />
              </IconButton>
            </ListItem>
          ))
        ) : (
          <Typography sx={{ mt: 1, ml: 5 }} variant="h6" component="div">
            Отзывов нет!
          </Typography>
        )}
      </List>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: 280 },
          maxWidth: 331,
          border: "1px solid #d1d1d1",
          borderRadius: "2%",
          pl: 4,
          m: "auto",
        }}
        noValidate
        autoComplete="off"
      >
        <FormControl>
          <Box>
            <Typography
              sx={{ mt: 4, mb: 2, ml: 1 }}
              variant="h6"
              component="div"
            >
              Обратная связь:
            </Typography>
          </Box>
          <Box>
            <TextField
              id="outlined"
              label="Имя"
              placeholder="Имя"
              onChange={(e) => updateFieldValue("name", e.target.value)}
              value={fields.name}
            />
          </Box>
          <Box>
            <TextField
              id="outlined-textarea"
              label="Почта"
              placeholder="Почта"
              onChange={(e) => updateFieldValue("email", e.target.value)}
              value={fields.email}
            />
          </Box>
          <Box>
            <TextField
              id="outlined-multiline-static"
              label="Текст..."
              onChange={(e) => updateFieldValue("text", e.target.value)}
              value={fields.text}
              multiline
              rows="5"
            />
          </Box>
          <Box>
            <Button
              onClick={handleClickSubmit}
              variant="contained"
              sx={{
                width: "280px",
                m: "8px 0 15px 8px",
              }}
            >
              ОТПРАВИТЬ
            </Button>
          </Box>
        </FormControl>
      </Box>
    </Container>
  );
}
