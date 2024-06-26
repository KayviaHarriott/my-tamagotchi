import LinearProgress, {
  LinearProgressProps,
} from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

interface ProgressBarProps {
  progress: number;
}
function LinearProgressWithLabel(
  props: LinearProgressProps & { value: number }
) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        {/* To change color based on stat active, hunger should be red  */}
        <LinearProgress
          sx={{ color: `${props.value > 80 ? "green" : props.value > 50 ? "orange" : props.value > 0 ? "red" : "grey"}` }}
          color="inherit"
          variant="determinate"
          {...props}
        />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  //   const [progress, setProgress] = React.useState(10);

  //   React.useEffect(() => {
  //     const timer = setInterval(() => {
  //       setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
  //     }, 800);
  //     return () => {
  //       clearInterval(timer);
  //     };
  //   }, []);

  return (
    <Box
      sx={{
        width: "120px",
        // backgroundColor: "lightblue",
        borderRadius: 2,
        // px: 2,
      }}
    >
      {/* <LinearProgressWithLabel value={progress} /> */}
      <LinearProgressWithLabel value={progress} />
    </Box>
  );
};
