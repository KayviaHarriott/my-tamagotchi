import * as React from "react";
import Box from "@mui/material/Box";
import Popper, { PopperPlacementType } from "@mui/material/Popper";
import Typography from "@mui/material/Typography";
import Fade from "@mui/material/Fade";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";

interface TemporaryPopUpProps {
  content: React.ReactNode;
}
export const TemporaryPopUp: React.FC<TemporaryPopUpProps> = ({ content }) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState<PopperPlacementType>();

  const handleClick =
    (newPlacement: PopperPlacementType) =>
    (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    //   setOpen((prev) => placement !== newPlacement || !prev);
    setOpen(true)
      setPlacement(newPlacement);

      setTimeout(() => {
        setOpen(false);
      }, 500);
    };

  return (
    <Box sx={{}}>
      <Popper
        // Note: The following zIndex style is specifically for documentation purposes and may not be necessary in your application.
        sx={{ zIndex: 1200 }}
        open={open}
        anchorEl={anchorEl}
        placement={placement}
        transition
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper>
              <Typography sx={{ p:1}}>+1</Typography>
            </Paper>
          </Fade>
        )}
      </Popper>
      <Button onClick={handleClick("top")}>{content}</Button>
    </Box>
  );
};
