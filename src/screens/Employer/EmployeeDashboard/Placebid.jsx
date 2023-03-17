import React from "react";
import "../../../css/Employer/CreatePlanpopup.css";
// import React from "react";
// import "../../../css/Employer/OwnCompany.css";
import { theme } from "../../../css/style";
import { styled } from "@mui/material/styles";
import Slider from "@mui/material/Slider";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import { ThemeProvider, Modal } from "@mui/material";
import Radio from "@mui/material/Radio";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Great from "../../../components/Employer/Popups/Great";
import { useDispatch, useSelector } from "react-redux";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { toast } from "react-toastify";
import { create_Own_Plan } from "../../../redux/action/EmployerAction";
import OwnPlanSucess from "../PopupScreen/OwnPlanSucess";
import axiosInstance from "../../../utils/axiosInstance";
import { displayRazorpay } from "../../../RazorPay/RazorPay";
import moment from "moment";

const Boxtab = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("mobile")]: {
    "& .MuiTextField-root": { m: 1, width: "100%" },
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // border: "3px solid red",
  },
  [theme.breakpoints.up("tablet")]: {
    "& .MuiTextField-root": { m: 1, width: "100%" },
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // border: "3px solid red",
  },
  [theme.breakpoints.up("desktop")]: {
    "& .MuiTextField-root": { m: 1, width: "80%" },
    width: "80%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // border: "3px solid red",
  },
  [theme.breakpoints.up("big")]: {
    "& .MuiTextField-root": { m: 1, width: "50%" },
    width: "70%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // border: "3px solid red",
  },
}));

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#F7701D",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#F7701D",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#F7701D",
    },
    "&:hover fieldset": {
      borderColor: " #F7701D",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#F7701D",
    },
  },
});
const CssSelect = styled(Select)({
  "&.MuiSelect-select": {
    color: "#F7701D",
    borderColor: " #F7701D",
  },
  "&.MuiSelect-select:after": {
    // borderBottomColor: "#F7701D",
    borderColor: " #F7701D",
  },
  "&.MuiSelect-select:before": {
    // borderBottomColor: "#F7701D",
    borderColor: " #F7701D",
  },
  "&.MuiSelect-icon": {
    color: "#F7701D",
  },
  "&.MuiSelect-iconOpen": {
    color: "#F7701D",
  },
});
export default function Placebid({ creationtype, PlaceBid }) {
  const { user, scope } = useSelector((state) => state.AuthReducer);
  const dispatch = useDispatch();
  const initialstate = {
    COMPANYNAME: "",
    WEBSITE: "",
    LINKEDIN: "",
    EMAIL: "",
    DESIGNATION: "",
    POSITYPE: "",
    COUNT: "", //  its a bid-slot
    DAYS: "",
  };
  const [isFrom, setForm] = useState(initialstate);
  const [isposttype, setisposttype] = useState(null);
  const [isAmmount, setAmmount] = useState(null);
  const [gotonext, setgotonext] = useState(false);
  const [isRedirectId, setRedirectId] = useState(null);
  const [isdaylen, setisdaylen] = useState([]);

  React.useEffect(() => {
    setisposttype(parseInt(creationtype));
    let days = [];
    let daysRequired = 7;
    for (let i = 1; i <= daysRequired; i++) {
      days.push(moment().add(i, "days").format("YYYY-MM-DD"));
    }
    setisdaylen(days);
  }, []);

  const onChangeText = (e) => {
    const { name, value } = e.target;
    setForm({ ...isFrom, [name]: value });
  };

  const completeform = (e) => {
    e.preventDefault();
    if (!isFrom.COMPANYNAME) {
      toast.error("company   is required");
      return false;
    }
    if (!isFrom.WEBSITE) {
      toast.error("website is required");
      return false;
    }
    if (!isFrom.LINKEDIN) {
      toast.error("LINKEDIN is required");
      return false;
    }
    if (!isFrom.EMAIL) {
      toast.error("Email is required");
      return false;
    }
    if (!isFrom.DESIGNATION) {
      toast.error("designation is required");
      return false;
    }
    if (!isFrom.COUNT) {
      toast.error("no of hire person is required");
      return false;
    }
    if (!isAmmount) {
      toast.error("Bid Ammount is required");
      return false;
    }

    if (parseInt(isAmmount) < 50) {
      toast.error("Bid Ammount should be greater then 50 Rs.");
      return false;
    }


    e.preventDefault();
    displayRazorpay(
      {
        ammount: isAmmount,
        userid: user[0].USER_ID,
      },
      (data) => {
        const bodydata = {
          companyname: isFrom.COMPANYNAME,
          website: isFrom.WEBSITE,
          lprofile: isFrom.LINKEDIN,
          email: isFrom.EMAIL,
          designation: isFrom.DESIGNATION,
          posttype: 1,
          CREATION_TYPE: 4,
          BIT_SLOT: isFrom.COUNT,
          COUNT: 0,
          DAYS: 0,
          AMMOUNT: isAmmount,
          PAYMENT_ID: data.razorpay_order_id,
        };
        axiosInstance
          .post("employer/createownPost", bodydata)
          .then((result) => {
            if (result.data.status === 1) {
              toast.success(
                "Great!Your have initilize post creation please continue"
              );
              setRedirectId(btoa(result.data.data.JOB_ID));
              setForm(initialstate);
              setgotonext(true);
            }
            if (result.data.status === 0) {
              toast.error("Error! somthing wen't wrong");
            }
          });
      }
    );
  };
  return (
    <div className="createpopupplan_container">
      <div className="cpp_container">
        <div className="close_btn_own">
          <CloseIcon onClick={() => PlaceBid(false)} />
        </div>
        <div className="Owncompany">
          <h1>Bid Post</h1>
          <form onSubmit={completeform} className="owncompany_form">
            <div className="own-form">
              <ThemeProvider
                theme={theme}
                sx={{ display: "flex", width: "100%", alignItems: "center" }}
              >
                <Boxtab
                  component="form"
                  sx={{
                    "& .MuiTextField-root": { m: 1 },
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <CssTextField
                    sx={{ color: " #F7701D", width: "70%" }}
                    required
                    id="outlined-required"
                    color="warning"
                    label="Company Name"
                    name="COMPANYNAME"
                    size="small"
                    onChange={onChangeText}
                  />
                  <CssTextField
                    sx={{ color: " #F7701D", width: "70%" }}
                    name="WEBSITE"
                    id="outlined-required"
                    color="warning"
                    label="Website"
                    type="url"
                    size="small"
                    onChange={onChangeText}
                  />{" "}
                  <CssTextField
                    sx={{ color: " #F7701D", width: "70%" }}
                    required
                    id="outlined-required"
                    color="warning"
                    type="url"
                    label="Linkdedin Profile"
                    name="LINKEDIN"
                    size="small"
                    onChange={onChangeText}
                  />
                  <CssTextField
                    sx={{ color: " #F7701D", width: "70%" }}
                    required
                    id="outlined-required"
                    type="email"
                    color="warning"
                    label="Email Address"
                    name="EMAIL"
                    onChange={onChangeText}
                    size="small"
                  />
                  <FormControl style={{ width: "80%", borderColor: "#F7701D" }}>
                    <InputLabel id="demo-simple-select-label">
                      Designition
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="outlined-required"
                      color="warning"
                      value={isFrom && parseInt(isFrom.DESIGNATION)}
                      label="designation"
                      name="DESIGNATION"
                      onChange={onChangeText}
                      size="small"
                    >
                      {scope &&
                        scope.length !== 0 &&
                        scope.map((data, index) => (
                          <MenuItem value={data.SCOPE_ID}>
                            {data.FIELD_NAME}
                          </MenuItem>
                        ))}
                    </Select>
                  </FormControl>
                  <br />
                  <FormControl style={{ width: "80%", borderColor: "#F7701D" }}>
                    <InputLabel id="demo-simple-select-label">
                      Bit Slot
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="outlined-required"
                      color="warning"
                      value={isFrom && parseInt(isFrom.DESIGNATION)}
                      label="Bit Slot"
                      name="COUNT"
                      onChange={onChangeText}
                      size="small"
                    >
                      {isdaylen &&
                        isdaylen.length !== 0 &&
                        isdaylen.map((data, index) => (
                          <MenuItem value={data}>{data}</MenuItem>
                        ))}
                    </Select>
                  </FormControl>
                  {/* <CssTextField
                    id="outlined-number"
                    label="Enter NUmber Of Day's "
                    type="number"
                    name="DAYS"
                    onChange={onChangeText}
                    size="small"
                  /> */}
                  <CssTextField
                    id="outlined-number"
                    label="Enter Bid Ammount which should be greater then 50 &#8360;"
                    type="number"
                    name="Ammount"
                    onChange={(e) => setAmmount(e.target.value)}
                    size="small"
                  />
                </Boxtab>
              </ThemeProvider>
            </div>
            <Button
              type="buttton"
              variant="contained"
              className="profile_btn"
              sx={{
                width: "30%",
                mt: 2,
                mb: 4,
                textTransform: "none",
                color: "#000000",
                backgroundColor: "rgba(247, 112, 29, 0.39)",
                "&:hover": { backgroundColor: "rgba(247, 112, 29, 0.39)" },
              }}
              onClick={completeform}
            >
              Post a Job
            </Button>
          </form>
        </div>
      </div>
      {gotonext && (
        <Great Greatpopup={setgotonext} isRedirectId={isRedirectId} />
      )}
    </div>
  );
}
