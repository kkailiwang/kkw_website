import React from "react";
import logo from "./images/kkw_logo@2x.png";
import headshot from "./images/headshot.JPG";
import { Spring } from "react-spring/renderprops";
import "./App.css";

// import { Navbar, NavbarBrand,  } from "reactstrap";
import {
  Box,
  AppBar,
  Typography,
  ThemeProvider,
  createMuiTheme,
  Paper,
  Grid,
  Link,
  IconButton
} from "@material-ui/core";
import { Stage, Layer, Rect, Line, Circle, Image } from "react-konva";
import { ArrowDownward, PanoramaWideAngleTwoTone } from "@material-ui/icons";

const theme = createMuiTheme({
  typography: {
    h1: {
      fontFamily: "Montserrat, sans-serif",
      fontWeight: 900,
      color: "#EDD4AD",
      paddingBottom: 20,
      "@media (max-width:600px)": {
        fontSize: "2.5rem"
      }
    },
    h4: {
      fontFamily: "Roboto, sans-serif",
      fontWeight: 100,
      fontSize: 24,
      "@media (max-width:600px)": {
        fontSize: "1rem"
      }
    }
  }
});

// const TRIANGLE = "M20,380 L380,380 L380,380 L200,20 L20,380 Z";
const TRIANGLE = "M0,0 L0,180 L180,180 L180,0 L0,0 Z"; //actually a square
const RECTANGLE = "M20,20 L20,380 L200,380 L200,20 L20,20 Z";
const styles = {
  // container: {
  //   height: '100%',
  //   display: 'flex',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   willChange: 'background',
  // },
  shape: { width: 300, height: 300, willChange: "transform" }
};

class App extends React.Component {
  constructor(props) {
    super(props);
    // document.title = "Keri Kaili Wang";
    this.state = {
      toggle: true,
      scrollPos: 0,
      about: undefined,
      firstSpring: undefined
      // windowWidth: window.innerWidth,
      // windowHeight: window.innerHeight
    };

    // window.onresize = e => {
    //   this.setState({
    //     windowWidth: window.innerWidth,
    //     windowHeight: window.innerHeight
    //   });
    // };
    window.onscroll = e => {
      this.setState({ scrollPos: window.scrollY });
    };
    window.onresize = () => {
      let aboutUnderline = document.getElementById("about-underline");
      let about = document.getElementById("about");
      if (aboutUnderline !== this.state.aboutUnderline) {
        this.setState({ aboutUnderline });
      }
      if (about !== this.state.about) {
        this.setState({ about });
      }
    };
  }
  componentDidMount() {
    this.setState({
      about: document.getElementById("about"),
      aboutUnderline: document.getElementById("about-underline")
    });
  }

  componentDidUpdate() {
    let firstSpring = document.getElementById("firstspring");

    // console.log(firstSpring);
    if (firstSpring && !this.state.firstSpring) {
      this.setState({ firstSpring });
    }
  }

  toggle = () => this.setState(state => ({ toggle: !state.toggle }));

  render() {
    const toggle = this.state.toggle;
    if (this.state.about) {
      var toAboutProgress = Math.min(
        1,
        window.scrollY / (0.8 * this.state.about.scrollHeight)
      );
    }
    return (
      // <Box className="App">
      //   <ThemeProvider theme={theme}>
      //     <div
      //       style={{
      //         top: 0,
      //         left: 0,
      //         width: "100%",
      //         height: "100%",
      //         position: "relative"
      //       }}
      //     >
      //       <div
      //         style={{ position: "absolute", top: 0, left: 0, width: "100%" }}
      //       >
      //         <Paper style={{ position: "relative" }}>
      //           <div className="page" width={window.innerWidth}>
      //             <AppBar className="top-bar" color="transparent" elevation={0}>
      //               <a href="#">
      //                 <img src={logo} width={"30"} height="30" />
      //               </a>
      //             </AppBar>

      //             <div
      //               className="center-block"
      //               style={{
      //                 width: `${0.7 * window.innerWidth}px`,
      //                 left: `${0.3 * window.innerWidth}px`
      //               }}
      //             >
      //               <Typography variant="h1">hey y'all!</Typography>
      //               <Grid
      //                 container
      //                 direction="row"
      //                 justify="center"
      //                 alignItems="flex-start"
      //               >
      //                 <Grid item xs={12} sm={6} padding={3}>
      //                   <Typography variant="h4" className="blurb">
      //                     My name is Keri Kaili Wang.
      //                   </Typography>
      //                   <Typography variant="h4" className="blurb">
      //                     I'm a sophomore at Stanford University studying
      //                     computer science and human-computer interaction.
      //                   </Typography>
      //                 </Grid>
      //                 {/* <img
      //           src={headshot}
      //           width={window.scrollY * 10}
      //           className="headshot"
      //         /> */}
      //                 <Grid
      //                   item
      //                   xs={12}
      //                   sm={6}
      //                   className="canvas"
      //                   id="firstspring"
      //                 >
      //                   {/* <Stage
      //             style={{ position: "absolute" }}
      //             width={window.innerWidth * 0.3}
      //             height={window.innerHeight * 0.3}
      //           >
      //             <Layer>
      //               <Rect x={0} y={0} width={100} height={50} fill="red" />
      //               <Line
      //                 points={[80, 80, 200, 80, 200, 0]}
      //                 fill="#FDBE02"
      //                 closed={true}
      //               />
      //             </Layer>
      //           </Stage> */}
      //                   {/* <div className="red-rect" /> */}
      //                   <img src={headshot} width={200} className="headshot" />
      //                   <div className="yellow-triangle" />
      //                 </Grid>
      //               </Grid>
      //             </div>
      //             <Link href="#about" className="down-arrow">
      //               {/* <Typography variant="body2">meet me!</Typography> */}
      //               <IconButton>
      //                 <ArrowDownward />
      //               </IconButton>
      //             </Link>
      //           </div>
      //         </Paper>

      //         <Paper id="about" style={{ position: "relative" }}>
      //           <div className="page">
      //             <Grid
      //               className="about-text-block"
      //               container
      //               direction="row"
      //               justify="center"
      //               alignItems="center"
      //             >
      //               <Grid item xs>
      //                 hey there
      //               </Grid>
      //               <Grid item xs>
      //                 <Typography variant="h1">about</Typography>

      //                 <Grid
      //                   container
      //                   direction="row"
      //                   justify="flex-start"
      //                   alignItems="flex-start"
      //                 >
      //                   <Grid item xs={12} sm={6} padding={3}>
      //                     <div id="about-underline" />
      //                     <br />
      //                     <br />
      //                     <Typography variant="h4" className="right-blurb">
      //                       *insert all the cool stuff about me*
      //                     </Typography>
      //                     <Typography variant="h4" className="right-blurb">
      //                       I'm cool
      //                     </Typography>
      //                   </Grid>
      //                 </Grid>
      //               </Grid>
      //             </Grid>
      //           </div>
      //           <Link href="#stuff" className="down-arrow">
      //             <IconButton>
      //               <ArrowDownward />
      //             </IconButton>
      //           </Link>
      //         </Paper>
      //         <Paper id="stuff" style={{ position: "relative" }}>
      //           <div className="page">
      //             <div className="center-block">
      //               <Typography variant="h1">projects</Typography>

      //               <Grid
      //                 container
      //                 direction="row"
      //                 justify="flex-start"
      //                 alignItems="flex-start"
      //               >
      //                 <Grid item xs={12} sm={6} padding={3}>
      //                   <Typography variant="h4" className="blurb">
      //                     things I've been up to recently
      //                   </Typography>
      //                   <Typography variant="h4" className="blurb">
      //                     I'm cool
      //                   </Typography>
      //                 </Grid>
      //                 {/* <img
      //           src={headshot}
      //           width={window.scrollY * 10}
      //           className="headshot"
      //         /> */}
      //               </Grid>
      //             </div>
      //             <Link href="#stuff" className="down-arrow">
      //               {/* <Typography variant="body2">meet me!</Typography> */}
      //               <IconButton>
      //                 <ArrowDownward />
      //               </IconButton>
      //             </Link>
      //           </div>
      //           {/* <AppBar className="top-bar" color="transparent" elevation={0}>
      //       <a href="#">
      //         <img src={logo} width={"30"} height="30" />
      //       </a>
      //     </AppBar> */}
      //         </Paper>
      //       </div>
      //       {this.state.about ? (
      //         <Spring
      //           style={{ position: "absolute" }}
      //           from={{ color: "#FF352F" }}
      //           to={{
      //             coords: (() => [
      //               this.state.aboutUnderline
      //                 ? 0.55 * window.innerWidth * (1 - toAboutProgress) +
      //                   toAboutProgress * (0.6 * window.innerWidth)
      //                 : //(this.state.aboutUnderline.offsetLeft + 100)
      //                   //0.2 * window.innerWidth //this.state.firstSpring.offsetLeft
      //                   0.3 * window.innerWidth,
      //               0.5 * window.innerHeight +
      //                 toAboutProgress *
      //                   (this.state.aboutUnderline.offsetTop +
      //                     0.4 * window.innerHeight)
      //               //(this.state.about.scrollHeight -
      //               // 0.2 * window.innerHeight)
      //             ])(),
      //             // color: toggle ? "#247BA0" : "#70C1B3",
      //             start: toggle ? "#B2DBBF" : "#B2DBBF",
      //             end: toggle ? "#247BA0" : "#F3FFBD",
      //             scale: [1 + 2.5 * toAboutProgress, 1 - 0.9 * toAboutProgress],
      //             shape: TRIANGLE, //toggle ? TRIANGLE : RECTANGLE,
      //             stop: toggle ? "0%" : "50%",
      //             rotation: `${toAboutProgress * 180}deg`
      //           }}
      //         >
      //           {({
      //             color,
      //             scale,
      //             shape,
      //             start,
      //             end,
      //             stop,
      //             rotation,
      //             coords,
      //             ...rest
      //           }) => (
      //             <svg
      //               style={{
      //                 zIndex: -4,
      //                 // scale3d(${scale}, ${scale}, ${scale})
      //                 transform: ` translate(${coords[0]}px,${coords[1]}px) scale(${scale[0]},
      //                 ${scale[1]}) rotate(${rotation}) `
      //               }}
      //               height={100}
      //               version="1.1"
      //               viewBox="0 0 200 200"
      //             >
      //               <g
      //                 style={{ cursor: "pointer" }}
      //                 fill={color}
      //                 fillRule="evenodd"
      //                 // onClick={this.toggle}
      //               >
      //                 <path id="path-1" d={shape} />
      //               </g>
      //             </svg>
      //           )}
      //         </Spring>
      //       ) : null}
      //     </div>

      //     {/*
      // you can add another component/function by just doing <New_Component/>,
      // just like how index.js used <App/>
      // */}
      //   </ThemeProvider>
      // </Box>

      <div className="header">
        <img src={headshot} width={300} />
      </div>
    );
  }
}

export default App;
