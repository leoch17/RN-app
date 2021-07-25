import { COLORS, SIZES } from "../constants/theme";

export default {
  container: {
    flex: 1,
    backgroundColor: COLORS.LightGray4,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  },
  renderItemTouchableOpacity: {
    padding: SIZES.padding,
    paddingBottom: SIZES.padding * 2,
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.radius,
    alignItems: "center",
    justifyContent: "center",
    marginRight: SIZES.padding,
    ...styles.shadow,
  },
  viewCategories: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.white,
  },
};
