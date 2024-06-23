/* eslint-disable no-unused-vars */
import {
  Box,
  Grid,
  TextField,
  Typography,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { useTodo } from "./useTodo";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const TodoPage = () => {
  const {
    addItems,
    todoName,
    setTodoName,
    todoItems,
    deleteItems,
    setTodoItems,
  } = useTodo();
  return (
    <>
      <Grid className="flex justify-center">
        <Box>
          <Grid>
            <Typography className="text-center">TODO LIST</Typography>
          </Grid>
          <Grid className="rounded-lg !border-2 p-2 mt-3">
            <Box className="w-[25rem] flex items-center justify-center">
              <TextField
                size="small"
                fullWidth
                value={todoName}
                onChange={(e) => setTodoName(e.target.value)}
              />{" "}
              <AddBoxIcon
                className="mx-2 !text-[30px] !text-[#023334] cursor-pointer"
                onClick={() => addItems()}
              />
            </Box>
          </Grid>
          <Grid className="p-2 mt-5 !h-[25rem] overflow-scroll">
            {todoItems?.map((data, i) => (
              <>
                <Box className="rounded-lg !border-2 p-2 mt-3 w-[25rem] flex">
                  <Box className="!w-[80%]">
                    <Typography
                      className={`${
                        data.done === "Y" ? "text-[green]" : "text-[black]"
                      } !ml-4`}
                    >
                      {data.name}{" "}
                      {data.done === "Y" && (
                        <CheckCircleIcon className="!text-[15px]" />
                      )}
                    </Typography>
                  </Box>
                  <Typography className="!ml-5">
                    <DeleteIcon
                      className="!text-[14px] !text-[#023334] !cursor-pointer"
                      onClick={() => deleteItems(i)}
                    />
                  </Typography>
                  <Typography className="!ml-5">
                    <FormControlLabel
                      control={
                        <Checkbox
                          sx={{
                            color: "#023334",
                            "&.Mui-checked": {
                              color: "#023334",
                            },
                            "& .MuiSvgIcon-root": { fontSize: 12 },
                          }}
                          onChange={(e) => {
                            const temp = [...todoItems];
                            if (e.target.checked) {
                              temp[i].done = "Y";
                            } else {
                              temp[i].done = "N";
                            }
                            setTodoItems(temp);
                          }}
                        />
                      }
                    />
                  </Typography>
                </Box>
              </>
            ))}
          </Grid>
        </Box>
      </Grid>
    </>
  );
};

export default TodoPage;
