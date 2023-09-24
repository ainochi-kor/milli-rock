import { style } from "@vanilla-extract/css";
import colors from "../styles/source/colors";

export const selectBoxCloseSideStyle = style({
  position: "relative",
});

export const selectBoxInputStyle = style({
  marginRight: 4,
  padding: 4,
});

export const selectBoxButtonStyle = style({
  display: "inline-flex",
});

export const selectBoxListStyle = style({
  backgroundColor: colors.blue[300],
  borderRadius: 8,
  maxHeight: 220,
  overflowY: "scroll",
  position: "absolute",
  padding: 8,
});

export const selectBoxItemStyle = style({
  width: "100%",
  minWidth: 120,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "10px 12px",
  borderRadius: 8,
  ":hover": {
    backgroundColor: colors.gray[500],
  },
});
