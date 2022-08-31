import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Toolbar from "@mui/material/Toolbar";

const Filters = () => {
  return (
    <div>
      <Toolbar />
      <List>
        <ListItem disablePadding></ListItem>
      </List>
      <Divider />
      <List>
        <ListItem disablePadding></ListItem>
      </List>
    </div>
  );
};

export default Filters;
