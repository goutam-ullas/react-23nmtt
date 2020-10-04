/*imports*/
import React, { useRef, useEffect, useState } from "react";
import {
  SliderInput,
  SliderTrack,
  SliderTrackHighlight,
  SliderHandle,
} from "@reach/slider";
import "@reach/slider/styles.css";
import ReactPlayer from "react-player";
import Typekit from "react-typekit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVolumeOff,
  faVolumeUp
} from "@fortawesome/free-solid-svg-icons";
import "./style.css";
import mapboxgl from "mapbox-gl";
mapboxgl.accessToken =
  "pk.eyJ1Ijoibm5pa2l0YSIsImEiOiJjazdtYzV2MDYwMzliM2dubnVubnJuMTRrIn0.6KqRhtWgMc_nGwMPAqmstQ";

/*Main Class*/
class Application extends React.Component {
  /*Constructor*/
  constructor(props) {
    super(props);
    this.state = {
      mapHeight: window.innerHeight,
      mapWidth: window.innerWidth,
      lng: 78.47455,
      lat: 17.37563,
      value: 50,
      index: true,
      aboutState: true,
      aboutWidth: 0,
      researchState: true,
      researchWidth: 0,
      researchBorder: 0,
      legendState: true,
      legendHeight: 0,
      squareText: "",
      circleText: "",
      themeGap: window.innerHeight,
      videoDimX1: 1,
      videoDimX2: 1,
      videoDimX3: 1,
      videoDimX4: 1,
      videoDimX5: 1,
      videoDimX6: 1,
      videoDimX7: 1,
      videoDimX8: 1,
      videoZindex1: 1,
      videoZindex2: 1,
      videoZindex3: 0,
      videoZindex4: 1,
      videoZindex5: 1,
      videoZindex6: 1,
      videoZindex7: 1,
      videoZindex8: 1,
      videoHeight: 0.4 * window.innerHeight,
      videoWidth: 0.4 * window.innerWidth,
      imageDimX1: 0,
      imageZindex1: 1,
      popUp: false,
      popUpX: 0,
      popUpY: 0,
      popUpH: 0,
      popUpW: 0,
      pointName: "",
      layerName: "",
      popUpPad: 0,
      popUpColor: "",
      scaleDistance: 13,
      themeDescWidth: "40%",
      themeDescBottom: 250,
      themeVidLeft: 0.05 * window.innerWidth,
      themeDescLeft: 0.5 * window.innerWidth,
      themeVidRight: 0.29 * window.innerWidth,
      page1Vis: "visible",
      page2Vis: "hidden",
      page3Vis: "hidden",
      page4Vis: "hidden",
      page5Vis: "hidden",
      page1Play: true,
      volumeIcon: faVolumeOff,
      page1mute: true,
      theme3DescTop: window.innerHeight / 4,
      theme3VidTop: window.innerHeight / 4
    };
    /*Bind Functions*/
    this.researchRef = React.createRef();
    this.aboutRef = React.createRef();
    this.legendRef = React.createRef();
    this.video1Ref = React.createRef();
    this.video2Ref = React.createRef();
    this.video3Ref = React.createRef();
    this.video4Ref = React.createRef();
    this.video5Ref = React.createRef();
    this.video6Ref = React.createRef();
    this.video7Ref = React.createRef();
    this.video8Ref = React.createRef();
    this.indexFunction = this.indexFunction.bind(this);
    this.handleAboutResearchClick = this.handleAboutResearchClick.bind(this);
    this.circleFunction = this.circleFunction.bind(this);
    this.circleFunctionDown = this.circleFunctionDown.bind(this);
    this.triangleFunction = this.triangleFunction.bind(this);
    this.aboutFunction = this.aboutFunction.bind(this);
    this.legendFunction = this.legendFunction.bind(this);
    this.researchFunction = this.researchFunction.bind(this);
    this.sliderChange = this.sliderChange.bind(this);
    this.updateDimensions = this.updateDimensions.bind(this);
    this.muteFunction = this.muteFunction.bind(this);
    this.researchURL = this.researchURL.bind(this);

    /*Text Variables*/
    this.aboutText =
      "Goods, Gods and Goddesses alternates performances with moments of their making. In portraying the market, Begum Bazar, and the many goods, gods and goddesses that move this space, I am looking, seeking but also escaping what I’ve been rummaging. These are individual segments, fragments of a whole, a whole I may never conceive. Because the thing is, in the telling of the various parts that will build this whole, I’m left with impressions of acts about acts, of scripted acts and scripting acts, of directing in the Bazar and being directed by the Bazar, of watching people perform with intermittent awareness of my own performance. Here, bodies become, a bride, a mother, a devotee, a woman. Stores advertise wholesale deals, actors play multiple parts, wholesale roles. It is a patch of land, but a theatre, with rehearsals, scripts and episodic memories keeping gender desirable, as imagined by some, exacted and ordered, with its outlines defined, insides determined, and borders enforced.";
    this.theme0Desc =
      "The opening act set in the market scene, outside of the stores with their own smaller acts, is the longest one. It starts at about 10 AM, when the first actors, men, all playing storekeepers gradually enter the scene with women following after. About an hour before noon, the set is full, with all actors, occupying their respective positions. Smaller acts include men and women crossing streets, with women walking past stores in groups. Some actors are to walk with stage directions from google reviews. Others are to act from memory and the nostalgia of a previous act. The vital, perhaps the most challenging part is to co-ordinate the whole scene while the traffic moves as usual along the jagged lanes. The actors, the stores, the space, the traffic, the honking, all merge together, composing, enacting and reenacting. Each corner of the market concentrates on recreating different moments through different acts.";
    this.theme1Desc =
      "I’ve laid out the scenes now, to arrange them, find an order, a cause and effect, the hero and the anti-hero and discern the rehearsal from the act, the actor from the director, the stage from the ground, to sift memories from scripts and index this audience at once synchronized and performing.";
    this.theme2Desc =
      "If nostalgia was the story, would it tell itself? But what if in its rare retelling, those images, objects, sounds and dialogues whose summoning this involves, tells you something else, a story in its multiple digressions, where objects that initially appear like gift shop souvenirs of past, mass manufactured shapes of collective memories, but instead turn out to be just flotsam. And in its salvage, you’re partially pressed between what you felt then and what you know now.";
    this.theme3Desc =
      "This thesis looks at an urban market, Begum Bazar situated in the old city of Hyderabad and its relation to gender. The work, initially set out to explore kitchen objects and their place in shaping one’s life, eventually becomes an exploration into how, space and gender narratives co-exist and help sustain each other. By using the example of this market situated in a major metropolitan Indian city, and through interviews of people occupying and visiting the space, the work speculates on how social hierarchies and practices gain ground.";
    this.theme3Desc1 = "Dear Common Good,";
    this.theme3Desc2 =
      "I’m a designer, currently working on a short film. I have for the longest time followed your chief executive, Mr. Siddharth Gupta and his irrefutable take on naming brands.";
    this.theme3Desc3 =
      "I particularly identify with his naming of the Ganga pressure cooker; my friend’s mother had the same name and we were close friends. My friend, when she got married, also received an entire Ganga cooking range as a wedding gift. I believe, the groom’s family were quite particular about what gifts they wanted. And me, I’ve never taken a meal without bread made from the wheat flour, Annapurna. As best as I can remember, I did not have a friend by this name, though, my grandmother, a devout lady, prayed without end to the goddess, Annapurna.";
    this.theme3Desc4 =
      "Mr. Gupta is a revered Ad Man, and I’d love to have him sit for a talk. This interview, I strongly believe, will put the rest of the plot into perspective.";
  }
  /* Video URLs*/
  theme0Video = "https://player.vimeo.com/video/462185422";
  theme1Video = "https://vimeo.com/448630508/11ec6d4d54";
  theme2Video = "https://vimeo.com/448632066/2ab228f98c";
  theme3Video = "https://vimeo.com/448631543/98f339b864";
  theme4Video = "https://vimeo.com/448631454/d006e93a41";
  theme5Video = "https://vimeo.com/454107513/7c4b053989";
  theme6Video = "https://vimeo.com/448631543/98f339b864";
  theme7Video = "https://vimeo.com/448630300/810e46cfce";
  theme8Video = "https://vimeo.com/448630300/810e46cfce";

  /* Image URLs */
  theme2Img = "https://i.imgur.com/qaEN8qV.png";

  /* Legend colors */
  godsColor = "#79859a";
  godsStoreColor = "#6999a4";
  restoColor = "#37482b";
  bnwColor = "#355b75";
  kitchenColor = "#75492f";
  groceryColor = "#c2b89e";
  toysColor = "#4971a2";
  plasticColor = "#8f7f56";
  barsColor = "#57858e";
  /* Theme Position Variables*/
  circleState = 0;
  maxThemes = 4;
  triangleState = false;
  /*On Mount*/
  componentDidMount() {
    /*Update Dimenstions based on screen size*/
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);

    /*Initiate Map*/
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/nnikita/ckd7n4m5b04e31ip8ai5a1xfj",
      center: [this.state.lng, this.state.lat],
      zoom: 19.5,
      pitch: 60,
      attributionControl: false,
      interactive: false
    });
    /*Map Functions*/
    this.map.scrollZoom.disable();
    this.map.doubleClickZoom.disable();
    this.map.dragPan.enable();
    var deltaDistance = 100;
    var deltaDegrees = 10;
    function easing(t) {
      return t * (2 - t);
    }
    /*Map- Game Controls*/
    this.map.on("load", () => {
      this.map.getCanvas().focus();
      window.addEventListener(
        "keydown",
        e => {
          e.preventDefault();
          if (e.which === 38) {
            // up
            this.map.panBy([0, -deltaDistance], {
              easing: easing
            });
          } else if (e.which === 40) {
            // down
            this.map.panBy([0, deltaDistance], {
              easing: easing
            });
          } else if (e.which === 37) {
            // left
            this.map.easeTo({
              bearing: this.map.getBearing() - deltaDegrees,
              easing: easing
            });
          } else if (e.which === 39) {
            // right
            this.map.easeTo({
              bearing: this.map.getBearing() + deltaDegrees,
              easing: easing
            });
          }
        },
        true
      );
    });
    /*Map - Dots PopUp*/
    this.map.on("click", e => {
      var pageX = window.event.pageX - window.scrollX;
      var pageY = window.event.pageY - window.scrollY;
      var features = this.map.queryRenderedFeatures(e.point, {
        layers: ["gods"]
      });
      if (features.length) {
        this.setState({
          pointName: features[0].properties.Name,
          layerName: "Place of Worship",
          popUpX: pageX,
          popUpY: pageY,
          popUpH: 500,
          popUpW: 500,
          popUpPad: 3,
          popUpColor: this.godsColor
        });
      } else {
        features = this.map.queryRenderedFeatures(e.point, {
          layers: ["gods-stores"]
        });
        if (features.length) {
          this.setState({
            pointName: features[0].properties.Name,
            layerName: "Religious Store",
            popUpX: pageX,
            popUpY: pageY,
            popUpH: 500,
            popUpW: 500,
            popUpPad: 3,
            popUpColor: this.godsStoreColor
          });
        } else {
          features = this.map.queryRenderedFeatures(e.point, {
            layers: ["restaurant"]
          });
          if (features.length) {
            this.setState({
              pointName: features[0].properties.Name,
              layerName: "Restaurant",
              popUpX: pageX,
              popUpY: pageY,
              popUpH: 500,
              popUpW: 500,
              popUpPad: 3,
              popUpColor: this.restoColor
            });
          } else {
            features = this.map.queryRenderedFeatures(e.point, {
              layers: ["beauty-and-wedding"]
            });
            if (features.length) {
              this.setState({
                pointName: features[0].properties.Name,
                layerName: "Beauty and Wedding Store",
                popUpX: pageX,
                popUpY: pageY,
                popUpH: 500,
                popUpW: 500,
                popUpPad: 3,
                popUpColor: this.bnwColor
              });
            } else {
              features = this.map.queryRenderedFeatures(e.point, {
                layers: ["kitchen-utensils"]
              });
              if (features.length) {
                this.setState({
                  pointName: features[0].properties.Name,
                  layerName: "Kitchen Utensils Store",
                  popUpX: pageX,
                  popUpY: pageY,
                  popUpH: 500,
                  popUpW: 500,
                  popUpPad: 3,
                  popUpColor: this.kitchenColor
                });
              } else {
                features = this.map.queryRenderedFeatures(e.point, {
                  layers: ["grocery-stores"]
                });
                if (features.length) {
                  this.setState({
                    pointName: features[0].properties.Name,
                    layerName: "Grocery Store",
                    popUpX: pageX,
                    popUpY: pageY,
                    popUpH: 500,
                    popUpW: 500,
                    popUpPad: 3,
                    popUpColor: this.groceryColor
                  });
                } else {
                  features = this.map.queryRenderedFeatures(e.point, {
                    layers: ["toys-stores"]
                  });
                  if (features.length) {
                    this.setState({
                      pointName: features[0].properties.Name,
                      layerName: "Toys Store",
                      popUpX: pageX,
                      popUpY: pageY,
                      popUpH: 500,
                      popUpW: 500,
                      popUpPad: 3,
                      popUpColor: this.toysColor
                    });
                  } else {
                    features = this.map.queryRenderedFeatures(e.point, {
                      layers: ["plastic-goods-stores"]
                    });
                    if (features.length) {
                      this.setState({
                        pointName: features[0].properties.Name,
                        layerName: "Plastic Goods Store",
                        popUpX: pageX,
                        popUpY: pageY,
                        popUpH: 500,
                        popUpW: 500,
                        popUpPad: 3,
                        popUpColor: this.plasticColor
                      });
                    } else {
                      features = this.map.queryRenderedFeatures(e.point, {
                        layers: ["bars-and-liquor"]
                      });
                      if (features.length) {
                        this.setState({
                          pointName: features[0].properties.Name,
                          layerName: "Bar and Liquor Store",
                          popUpX: pageX,
                          popUpY: pageY,
                          popUpH: 500,
                          popUpW: 500,
                          popUpPad: 3,
                          popUpColor: this.barsColor
                        });
                      } else {
                        this.setState({
                          popUpH: 0,
                          popUpW: 0,
                          pointName: "",
                          layerName: "",
                          popUpPad: 0,
                          popUpColor: ""
                        });
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    });
    /*Map - Reset PopUps on Drag*/
    this.map.on("drag", () => {
      this.setState({
        popUpH: 0,
        popUpW: 0,
        pointName: "",
        layerName: "",
        popUpPad: 0
      });
    });
    /*Map - Cursor Style*/
    this.map.getCanvas().style.cursor = "all-scroll";
    /*Map - Reset location on move*/
    this.map.on("move", () => {
      this.setState({
        lng: this.map.getCenter().lng.toFixed(4),
        lat: this.map.getCenter().lat.toFixed(4),
        zoom: this.map.getZoom().toFixed(2),
        popUpH: 0,
        popUpW: 0,
        pointName: "",
        layerName: "",
        popUpPad: 0
      });
    });
    /*Map - Change Cursor Style when hover over dots*/
    this.map.on("mousemove", e => {
      // Set variables equal to the current feature's magnitude, location, and time
      var hoverFeatures = this.map.queryRenderedFeatures(e.point, {
        layers: [
          "gods",
          "gods-stores",
          "restaurant",
          "beauty-and-wedding",
          "kitchen-utensils",
          "grocery-stores",
          "toys-stores",
          "plastic-goods-stores",
          "bars-and-liquor"
        ]
      });
      // Check whether features exist
      if (hoverFeatures.length > 0) {
        this.map.getCanvas().style.cursor = "pointer";
      } else {
        this.map.getCanvas().style.cursor = "all-scroll";
      }
    });
    /*Remove PopUp when clicked on About, Research, or Legend windows*/
    window.addEventListener("mousedown", this.handleAboutResearchClick);
    this.researchURL();
  }

  muteFunction() {
    if (this.state.page1mute == true) {
      this.setState({ volumeIcon: faVolumeUp, page1mute: false });
    } else {
      this.setState({ volumeIcon: faVolumeOff, page1mute: true });
    }
  }

  /*When clicked on Home Button*/
  indexFunction() {
    this.setState({
      aboutState: true,
      researchState: true,
      legendState: true
    });
    let pathWithoutTheQuery = window.location.pathname;
    window.location.replace(pathWithoutTheQuery);
  }

  /*Function to Update dimensions*/
  updateDimensions() {
    if (window.innerWidth >= window.innerHeight) {
      this.setState({
        mapWidth: window.innerWidth,
        mapHeight: (9 * window.innerWidth) / 16
      });
    } else {
      this.setState({
        mapHeight: window.innerHeight,
        mapWidth: (16 * window.innerHeight) / 9
      });
    }
  }

  /*Function to remove popups when clicked inside About, Research, or Legend windows*/
  handleAboutResearchClick(event) {
    if (
      this.aboutRef.current.contains(event.target) ||
      this.researchRef.current.contains(event.target) ||
      this.legendRef.current.contains(event.target)
    ) {
      this.setState({
        popUpH: 0,
        popUpW: 0,
        pointName: "",
        layerName: "",
        popUpPad: 0
      });
    }
  }
  /*When clicked on About button*/
  aboutFunction() {
    this.setState(prevState => ({
      aboutState: !prevState.aboutState
    }));
    this.setState({
      popUpH: 0,
      popUpW: 0,
      pointName: "",
      layerName: "",
      popUpPad: 0
    });
    if (this.state.researchState == false) {
      this.setState({ researchWidth: 0, researchState: true });
    }
    if (this.state.legendState == false) {
      this.setState({ legendHeight: 0, legendState: true });
    }
    if (this.state.aboutState == true) {
      this.setState({
        aboutWidth: window.innerWidth / 2,
        themeDescBottom: 50,
        themeVidLeft: 0.05 * window.innerWidth,
        themeDescLeft: 0.05 * window.innerWidth,
        themeVidRight: window.innerWidth / 21,
        theme3DescTop: 0.6 * window.innerHeight,
        theme3VidTop: window.innerHeight / 8,
        videoDimX1: 1
      });
    } else {
      this.setState({
        aboutWidth: 0,
        themeDescBottom: 250,
        themeVidLeft: 0.05 * window.innerWidth,
        themeDescLeft: 0.5 * window.innerWidth,
        theme3DescTop: window.innerHeight / 4,
        theme3VidTop: window.innerHeight / 4,
        themeVidRight: 0.29 * window.innerWidth
      });
    }
  }
  /*When clicked on Legend button*/
  legendFunction() {
    console.log("legend");
    this.setState(prevState => ({
      legendState: !prevState.legendState
    }));
    this.setState({
      popUpH: 0,
      popUpW: 0,
      pointName: "",
      layerName: "",
      popUpPad: 0
    });
    if (this.state.aboutState == false) {
      this.setState({
        aboutWidth: 0,
        aboutState: true,
        themeDescBottom: 250,
        themeVidLeft: 0.05 * window.innerWidth,
        themeDescLeft: 0.5 * window.innerWidth,
        themeVidRight: window.innerWidth / 21,
        theme3VidTop: window.innerHeight / 4,
        theme3DescTop: window.innerHeight / 4,
        themeVidRight: 0.29 * window.innerWidth
      });
    }
    if (this.state.researchState == false) {
      this.setState({
        researchWidth: 0,
        researchState: true,
        themeDescBottom: 250,
        themeVidLeft: 0.05 * window.innerWidth,
        themeDescLeft: 0.5 * window.innerWidth,
        theme3DescTop: window.innerHeight / 4,
        theme3VidTop: window.innerHeight / 4,
        themeVidRight: 0.29 * window.innerWidth
      });
    }
    if (this.state.legendState == true) {
      this.setState({ legendHeight: window.innerHeight / 5 });
      var legendId = document.getElementById("legendWindow");
      legendId.scrollTop = 0;
    } else {
      this.setState({ legendHeight: 0 });
    }
  }
  /*When clicked on Research button*/
  researchFunction() {
    this.setState(prevState => ({
      researchState: !prevState.researchState
    }));
    this.setState({
      popUpH: 0,
      popUpW: 0,
      pointName: "",
      layerName: "",
      popUpPad: 0
    });
    if (this.state.aboutState == false) {
      this.setState({ aboutWidth: 0, aboutState: true });
    }
    if (this.state.legendState == false) {
      this.setState({ legendHeight: 0, legendState: true });
    }
    if (this.state.researchState == true) {
      this.setState({
        researchWidth: window.innerWidth / 2,
        researchBorder: 50,
        themeDescBottom: 50,
        themeVidLeft: 0.05 * window.innerWidth,
        themeDescLeft: 0.05 * window.innerWidth,
        theme3DescTop: 0.6 * window.innerHeight,
        theme3VidTop: window.innerHeight / 8,
        themeVidRight: window.innerWidth / 21,
        videoDimX1: 1
      });
    } else {
      this.setState({
        researchWidth: 0,
        researchBorder: 0,
        themeDescBottom: 250,
        themeVidLeft: 0.05 * window.innerWidth,
        themeDescLeft: 0.5 * window.innerWidth,
        theme3DescTop: window.innerHeight / 4,
        theme3VidTop: window.innerHeight / 4,
        themeVidRight: 0.29 * window.innerWidth
      });
    }
  }
  /*When clicked on Next button*/
  circleFunction() {
    this.setState({
      popUpH: 0,
      popUpW: 0,
      pointName: "",
      layerName: "",
      popUpPad: 0
    });
    this.triangleState = false;
    if (this.circleState > this.maxThemes - 1) {
      this.circleState = 0;
    } else {
      this.circleState += 1;
    }
    if (this.circleState == 0) {
      this.setState({
        page1Vis: "visible",
        page5Vis: "hidden",
        page1Play: true
      });
    }
    if (this.circleState == 1) {
      this.setState({
        page2Vis: "visible",
        page1Vis: "hidden",
        page1Play: false
      });
    }
    if (this.circleState == 2) {
      this.setState({ page3Vis: "visible", page2Vis: "hidden" });
    }
    if (this.circleState == 3) {
      this.setState({ page4Vis: "visible", page3Vis: "hidden" });
    }
    if (this.circleState == 4) {
      this.setState({ page5Vis: "visible", page4Vis: "hidden" });
    }
  }
  /*When clicked on Prev button*/
  circleFunctionDown() {
    this.setState({
      popUpH: 0,
      popUpW: 0,
      pointName: "",
      layerName: "",
      popUpPad: 0
    });
    this.triangleState = false;
    if (this.circleState == 0) {
      this.circleState = this.maxThemes;
    } else {
      this.circleState -= 1;
    }
    if (this.circleState == 0) {
      this.setState({
        page1Vis: "visible",
        page2Vis: "hidden",
        page1Play: true
      });
    }
    if (this.circleState == 1) {
      this.setState({
        page2Vis: "visible",
        page3Vis: "hidden"
      });
    }
    if (this.circleState == 2) {
      this.setState({ page3Vis: "visible", page4Vis: "hidden" });
    }
    if (this.circleState == 3) {
      this.setState({ page4Vis: "visible", page5Vis: "hidden" });
    }
    if (this.circleState == 4) {
      this.setState({
        page5Vis: "visible",
        page1Vis: "hidden",
        page1Play: false
      });
    }
  }

  /*When clicked on Next button*/
  triangleFunction() {
    this.setState({
      popUpH: 0,
      popUpW: 0,
      pointName: "",
      layerName: "",
      popUpPad: 0
    });
    if (this.triangleState == false) {
      this.setState({
        page1Vis: "hidden",
        page2Vis: "hidden",
        page3Vis: "hidden",
        page4Vis: "hidden",
        page5Vis: "hidden",
        page1Play: false
      });
    } else {
      if (this.circleState == 0) {
        this.setState({
          page1Vis: "visible",
          page1Play: true
        });
      }
      if (this.circleState == 1) {
        this.setState({
          page2Vis: "visible"
        });
      }
      if (this.circleState == 2) {
        this.setState({ page3Vis: "visible" });
      }
      if (this.circleState == 3) {
        this.setState({ page4Vis: "visible" });
      }
      if (this.circleState == 4) {
        this.setState({ page5Vis: "visible" });
      }
    }
    this.triangleState = !this.triangleState;
  }

  /*When Slider position is changed*/
  sliderChange(v) {
    this.setState({ value: v });
    var zoomLevel = (1 / 33) * (v - 1) + 18;
    if (zoomLevel < 19) {
      this.setState({
        scaleDistance: Math.round(33.72 - 16.92 * (zoomLevel - 18))
      });
    } else {
      if (zoomLevel < 20) {
        this.setState({
          scaleDistance: Math.round(16.8 - 8.4 * (zoomLevel - 19))
        });
      } else {
        this.setState({
          scaleDistance: Math.round(8.4 - 4.2 * (zoomLevel - 20))
        });
      }
    }
    this.map.zoomTo(zoomLevel);
  }

  /*Function to toggle image size*/
  toggleImage1() {
    this.setState(prevState => ({
      imageDimX1: 1 - prevState.imageDimX1
    }));
    this.setState(prevState => ({
      imageZindex1: prevState.imageZindex1 == 1 ? 10 : 1
    }));
  }

  researchURL() {
    const location = window.location;
    const searchParams = new URLSearchParams(location.search);
    if (searchParams.get("query") == "research") {
      this.setState({
        researchState: false,
        researchWidth: window.innerWidth / 2
      });
    }
  }

  render() {
    return (
      /*Main Div*/
      <div>
        {/*Page 1*/}
        {/*Page 1 Video*/}
        <ReactPlayer
          style={{
            position: "fixed",
            top: 0,
            left: -0.1 * this.state.mapWidth,
            visibility: this.state.page1Vis,
            transition: "width 1s, height 1s, left 1s",
            zIndex: 0
          }}
          url={this.theme0Video}
          height={1.2 * this.state.mapHeight}
          width={1.2 * this.state.mapWidth}
          fluid={true}
          playing={this.state.page1Play}
          controls={false}
          volume={0.05}
          muted={this.state.page1mute}
        />
        {/*Page 1 Description*/}
        <div
          style={{
            padding: 50,
            position: "fixed",
            width: 0.3 * this.state.mapWidth,
            left: 25,
            visibility: this.state.page1Vis,
            zIndex: 1
          }}
        >
          <text className="themeDesc">{this.theme0Desc}</text>
        </div>
        {/*Page 1 Mute Control*/}
        <span
          role="button"
          aria-label="Sound"
          data-balloon-pos="left"
          onClick={this.muteFunction}
          style={{
            fontSize: 32,
            position: "fixed",
            top: 13,
            right: 170,
            visibility: this.state.page1Vis,
            zIndex: 10
          }}
        >
          <FontAwesomeIcon icon={this.state.volumeIcon} />
        </span>
        {/*Map Div*/}
        <div
          ref={el => (this.mapContainer = el)}
          style={{
            position: "fixed",
            left: 0,
            right: 0,
            top: 0,
            height: this.state.mapHeight,
            width: this.state.mapWidth,
            backgroundColor: "transparent"
          }}
        />

        {/* Page 3: Theme 1*/}
        <div
          style={{
            position: "fixed",
            pointerEvents: "none",
            top: 0,
            left: 0,
            height: window.innerHeight,
            width: window.innerWidth,
            visibility: this.state.page3Vis
          }}
        >
          {/*Theme 1 Description*/}
          <div
            style={{
              padding: 20,
              position: "absolute",
              zIndex: 5,
              width: this.state.themeDescWidth,
              bottom: this.state.themeDescBottom,
              left: this.state.themeDescLeft,
              transition: "width 1s, bottom 1s, left 1s"
            }}
          >
            <text className="themeDesc">{this.theme1Desc}</text>
          </div>
          {/*Theme 1 Video*/}
          <ReactPlayer
            className="video"
            ref={el => (this.video1Ref = el)}
            style={{
              bottom: this.state.themeGap / 4,
              zIndex: this.state.videoZindex1,
              left: this.state.themeVidLeft
            }}
            height={this.state.videoHeight}
            width={this.state.videoWidth}
            url={this.theme1Video}
            controls={true}
          />
        </div>

        {/*Page 2: Theme 2*/}
        <div
          style={{
            position: "fixed",
            pointerEvents: "none",
            top: 0,
            left: 0,
            height: window.innerHeight,
            width: window.innerWidth,
            visibility: this.state.page2Vis,
            backgroundColor: "transparent"
          }}
        >
          {/*Theme 2 - Background image*/}
          <img
            style={{
              position: "fixed",
              backgroundColor: "transparent",
              bottom: 0,
              left: -10,
              width: 1.02 * this.state.mapWidth,
              zIndex: 1
            }}
            src={this.theme2Img}
          />
          {/*Theme 2 Description*/}
          <div
            style={{
              padding: 20,
              position: "fixed",
              zIndex: 5,
              width: "40%",
              bottom: this.state.mapHeight / 10,
              left: this.state.themeVidRight,
              transition: "width 1s, bottom 1s, left 1s"
            }}
          >
            <text className="themeDesc">{this.theme2Desc}</text>
          </div>
          {/*Theme 2 Video*/}
          <ReactPlayer
            className="video"
            style={{
              bottom: this.state.mapHeight / 4,
              zIndex: this.state.videoZindex3,
              left: this.state.themeVidRight - 20,
              transition: "left 1s"
            }}
            height={this.state.videoHeight}
            width={this.state.videoWidth}
            url={this.theme2Video}
            controls={true}
            onPlay={() => this.setState({ videoZindex3: 10 })}
            onPause={() => this.setState({ videoZindex3: 0 })}
          />
        </div>

        {/*Page 4: Theme 3*/}
        <div
          style={{
            position: "fixed",
            pointerEvents: "none",
            top: 0,
            left: 0,
            height: window.innerHeight,
            width: window.innerWidth,
            visibility: this.state.page4Vis
          }}
        >
          {/*Theme 3 Description*/}
          <div
            style={{
              padding: 20,
              position: "absolute",
              zIndex: 5,
              width: this.state.themeDescWidth,
              top: 0.9 * this.state.theme3DescTop,
              left: this.state.themeDescLeft,
              transition: "width 1s, top 1s, left 1s"
            }}
          >
            <text className="themeDesc">
              {this.theme3Desc1}
              <br />
              <br />
              {this.theme3Desc2}
              <br />
              <br />
              {this.theme3Desc3}
              <br />
              <br />
              {this.theme3Desc4}
            </text>
          </div>
          {/*Theme 3 Video*/}
          <ReactPlayer
            className="video"
            ref={el => (this.video1Ref = el)}
            style={{
              top: this.state.theme3VidTop,
              zIndex: this.state.videoZindex1,
              left: this.state.themeVidLeft,
              transition: "top 1s"
            }}
            height={this.state.videoHeight}
            width={this.state.videoWidth}
            url={this.theme3Video}
            controls={true}
          />
        </div>

        {/*Page 5: Theme 4*/}
        <div
          style={{
            position: "fixed",
            pointerEvents: "none",
            top: 0,
            left: 0,
            height: window.innerHeight,
            width: window.innerWidth,
            visibility: this.state.page5Vis
          }}
        >
          {/*Theme 4 Description*/}
          <div
            style={{
              padding: 20,
              position: "absolute",
              zIndex: 5,
              width: this.state.themeDescWidth,
              bottom: this.state.themeDescBottom,
              transition: "width 1s, bottom 1s"
            }}
          >
            <text className="themeDesc">{this.theme2Desc}</text>
          </div>
          {/*Theme 4 Video 1*/}
          <ReactPlayer
            className="video"
            style={{
              top: this.state.mapHeight / 5,
              zIndex: this.state.videoZindex4,
              left: this.state.themeVidLeft
            }}
            height={this.state.videoHeight}
            width={this.state.videoWidth}
            url={this.theme4Video}
            controls={true}
          />
          {/*Theme 4 Video 2*/}
          <ReactPlayer
            className="video"
            style={{
              top: this.state.mapHeight / 2,
              zIndex: this.state.videoZindex4,
              left: 5 * this.state.themeVidLeft
            }}
            height={this.state.videoHeight}
            width={this.state.videoWidth}
            url={this.theme5Video}
            controls={true}
          />
          {/*Theme 4 Video 3*/}
          <ReactPlayer
            className="video"
            style={{
              top: this.state.mapHeight / 5,
              zIndex: this.state.videoZindex4,
              left: 10 * this.state.themeVidLeft
            }}
            height={this.state.videoHeight}
            width={this.state.videoWidth}
            url={this.theme6Video}
            controls={true}
          />
          {/*Theme 4 Video 4*/}
          <ReactPlayer
            className="video"
            style={{
              top: this.state.mapHeight / 2,
              zIndex: this.state.videoZindex4,
              left: 15 * this.state.themeVidLeft
            }}
            height={this.state.videoHeight}
            width={this.state.videoWidth}
            url={this.theme7Video}
            controls={true}
          />
        </div>
        {/*Title Bar*/}
        <div className="titlebar" style={{ top: -10, width: 600, zIndex: 10 }}>
          <Typekit kitId="bor7jxc" />
          {/*Home Button*/}
          <span
            role="button"
            aria-label=""
            onClick={this.indexFunction}
            style={{
              fontSize: 48,
              position: "relative",
              display: "inline",
              top: 5.5,
              marginLeft: 10,
              marginRight: 10,
              textAlign: "center"
            }}
          >
            &#9675;
          </span>
          {/*About Button*/}
          <span
            role="button"
            aria-label=""
            onClick={this.aboutFunction}
            style={{
              fontFamily: "ballinger-mono",
              fontSize: 24,
              position: "relative",
              display: "inline",
              top: 0,
              marginLeft: 10,
              marginRight: 10,
              textAlign: "center"
            }}
          >
            About
          </span>
          {/*Slider Button*/}
          <SliderInput
            min={0}
            max={100}
            step={0.1}
            value={this.state.value}
            style={{
              position: "relative",
              display: "inline-block",
              top: -2,
              marginLeft: 10,
              marginRight: 10,
              textAlign: "center",
              verticalAlign: "middle",
              width: 120
            }}
            onChange={value => this.sliderChange(value)}
          >
            <SliderTrack style={{ height: 1 }}>
              <SliderTrackHighlight />
              <SliderHandle />
            </SliderTrack>
          </SliderInput>
          {/*Prev Button*/}
          <span
            role="button"
            aria-label="Previous"
            data-balloon-pos="down-right"
            onClick={this.circleFunctionDown}
            style={{
              fontSize: 32,
              position: "relative",
              display: "inline",
              marginLeft: 10,
              marginRight: 10,
              textAlign: "center"
            }}
          >
            &#x25E7;
          </span>
          {/*previous Button*/}
          <span
            role="button"
            aria-label="Next"
            data-balloon-pos="down-right"
            onClick={this.circleFunction}
            style={{
              fontSize: 32,
              position: "relative",
              display: "inline",
              marginLeft: 10,
              marginRight: 10,
              textAlign: "center"
            }}
          >
            &#x25E8;
          </span>
          {/*Triangle Button*/}
          <span
            role="button"
            aria-label="Map"
            data-balloon-pos="down-right"
            onClick={this.triangleFunction}
            style={{
              fontSize: 30,
              position: "relative",
              display: "inline-block",
              top: 3,
              marginLeft: 10,
              marginRight: 10,
              textAlign: "center"
            }}
          >
            &#9653;
          </span>
          {/*Legend Button*/}
          <span
            role="button"
            aria-label="Legend"
            data-balloon-pos="down-right"
            onClick={this.legendFunction}
            style={{
              fontSize: 32,
              position: "relative",
              display: "inline",
              marginLeft: 10,
              marginRight: 10,
              textAlign: "center"
            }}
          >
            &#9677;
          </span>
          {/*Research Button*/}
          <span
            role="button"
            aria-label=""
            onClick={this.researchFunction}
            style={{
              fontFamily: "ballinger-mono",
              fontSize: 24,
              position: "relative",
              display: "inline",
              top: 0,
              marginLeft: 10,
              textAlign: "center"
            }}
          >
            Research
          </span>
        </div>
        {/*Map Scale Top Right*/}
        <div>
          <span className="mapScaleMain" />
          <span className="mapScaleSide" style={{ right: 25 }} />
          <span className="mapScaleSide" style={{ right: 145 }} />
          <text className="mapScaleNumber" style={{ right: 25 }}>
            {this.state.scaleDistance} meters
          </text>
        </div>
        {/*About Window*/}
        <div
          className="about"
          ref={this.aboutRef}
          style={{
            width: this.state.aboutWidth,
            height: window.innerHeight,
            zIndex: 100
          }}
        >
          {/*About Window - Close Button*/}
          <span
            role="button"
            aria-label=""
            onClick={this.aboutFunction}
            style={{
              fontSize: 22,
              position: "absolute",
              marginLeft: 10,
              marginTop: 10,
              color: "white",
              zIndex: 101
            }}
          >
            &#10005;
          </span>
          {/*About Window - Text Content*/}
          <p style={{ margin: 50 }}> {this.aboutText} </p>
        </div>
        {/*Legend Window*/}
        <div
          id="legendWindow"
          className="legend"
          ref={this.legendRef}
          style={{
            width: window.innerWidth,
            height: this.state.legendHeight,
            fontSize: 28,
            zIndex: 100
          }}
        >
          {/*Legend Window - Close Button*/}
          <span
            role="button"
            aria-label=""
            onClick={this.legendFunction}
            style={{
              fontSize: 22,
              position: "fixed",
              marginLeft: 10,
              marginTop: 10,
              color: "white",
              zIndex: 101
            }}
          >
            &#10005;
          </span>
          {/*Legend Window - Content Div Left*/}
          <div
            style={{
              marginTop: 20,
              marginLeft: 50,
              fontFamily: "ballinger-mono",
              fontWeight: "Light",
              fontSize: 10,
              display: "inline-block"
            }}
          >
            {/*Legend Gods*/}
            <div
              style={{
                marginLeft: 10
              }}
            >
              <span
                className="legendDot"
                style={{ background: this.godsColor }}
              />
              <p
                style={{
                  display: "inline-block",
                  verticalAlign: "middle",
                  marginLeft: 10
                }}
              >
                Place of Worship; # Stores: 63; Commonly Sold: Religion
              </p>
            </div>
            {/*Legend Gods Stores*/}
            <div
              style={{
                marginLeft: 10,
                marginTop: -17
              }}
            >
              <span
                className="legendDot"
                style={{ background: this.godsStoreColor }}
              />
              <p
                style={{
                  display: "inline-block",
                  verticalAlign: "middle",
                  marginLeft: 10
                }}
              >
                Religious Goods; # Stores: 37; Commonly Sold: Idols, Incense,
                Vermillon
              </p>
            </div>
            {/*Legend Beauty & Wedding*/}
            <div
              style={{
                marginLeft: 10,
                marginTop: -17
              }}
            >
              <span
                className="legendDot"
                style={{ background: this.bnwColor }}
              />
              <p
                style={{
                  display: "inline-block",
                  verticalAlign: "middle",
                  marginLeft: 10
                }}
              >
                Beauty & Wedding; # Stores: 196; Commonly Sold: Bangles,
                Jewelry, Cosmetics, Bridal wear
              </p>
            </div>
            {/*Legend Kitchen Utensils*/}
            <div
              style={{
                marginLeft: 10,
                marginTop: -17
              }}
            >
              <span
                className="legendDot"
                style={{ background: this.kitchenColor }}
              />
              <p
                style={{
                  display: "inline-block",
                  verticalAlign: "middle",
                  marginLeft: 10
                }}
              >
                Kitchen Utensils; # Stores: 115; Commonly Sold: Pots, Pans,
                Ladles, Crockery
              </p>
            </div>
            {/*Legend Grocery*/}
            <div
              style={{
                marginLeft: 10,
                marginTop: -17
              }}
            >
              <span
                className="legendDot"
                style={{ background: this.groceryColor }}
              />
              <p
                style={{
                  display: "inline-block",
                  verticalAlign: "middle",
                  marginLeft: 10
                }}
              >
                Grocery; # Stores: 33; Commonly Sold: Grains, Spices
              </p>
            </div>
          </div>
          {/*Legend Window - Content Div Right*/}
          <div
            style={{
              marginTop: 20,
              marginLeft: 100,
              fontFamily: "ballinger-mono",
              fontWeight: "Light",
              fontSize: 10,
              display: "inline-block"
            }}
          >
            {/*Legend Toys*/}
            <div
              style={{
                marginLeft: 10
              }}
            >
              <span
                className="legendDot"
                style={{ background: this.toysColor }}
              />
              <p
                style={{
                  display: "inline-block",
                  verticalAlign: "middle",
                  marginLeft: 10
                }}
              >
                Toys; # Stores: 77; Commonly Sold: Dolls, Bikes, Stuffed animals
              </p>
            </div>
            {/*Legend Plastic Goods*/}
            <div
              style={{
                marginLeft: 10,
                marginTop: -17
              }}
            >
              <span
                className="legendDot"
                style={{ background: this.plasticColor }}
              />
              <p
                style={{
                  display: "inline-block",
                  verticalAlign: "middle",
                  marginLeft: 10
                }}
              >
                Plastic Goods; # Stores: 71; Commonly Sold: Mops, Buckets,
                Diapers
              </p>
            </div>
            {/*Legend Restaurant*/}
            <div
              style={{
                marginLeft: 10,
                marginTop: -17
              }}
            >
              <span
                className="legendDot"
                style={{ background: this.restoColor }}
              />
              <p
                style={{
                  display: "inline-block",
                  verticalAlign: "middle",
                  marginLeft: 10
                }}
              >
                Restaurant; # Stores: 5; Commonly Sold: Meals & snacks
              </p>
            </div>
            {/*Legend Bars & Liquor*/}
            <div
              style={{
                marginLeft: 10,
                marginTop: -17
              }}
            >
              <span
                className="legendDot"
                style={{ background: this.barsColor }}
              />
              <p
                style={{
                  display: "inline-block",
                  verticalAlign: "middle",
                  marginLeft: 10
                }}
              >
                Bar & Liquor; # Stores: 2; Commonly Sold: Alcholic beverages
              </p>
            </div>
          </div>
        </div>
        {/*Research Window*/}
        <div
          className="research"
          ref={this.researchRef}
          style={{
            width: this.state.researchWidth,
            leftBorder: this.state.researchBorder,
            height: window.innerHeight,
            fontSize: 28,
            zIndex: 100
          }}
        >
          {/*Research Window - Inner Box*/}
          <div
            style={{
              left: 0,
              width: 50,
              height: window.innerHeight,
              position: "absolute",
              backgroundColor: "#fd3217",
              zIndex: 101
            }}
          />
          {/*Research Window - Close Button*/}
          <span
            role="button"
            aria-label=""
            onClick={this.researchFunction}
            style={{
              fontSize: 22,
              position: "fixed",
              marginTop: 10,
              marginLeft: 10,
              color: "white",
              zIndex: 102
            }}
          >
            &#10005;
          </span>
          {/*Research Window - Image Holder*/}
          <div
            className="research"
            style={{
              width: this.state.researchWidth,
              leftBorder: this.state.researchBorder,
              height: window.innerHeight,
              fontSize: 28,
              zIndex: 100
            }}
          >
            {/*Research Window - Image 1*/}
            <img
              style={{ marginLeft: 50, marginTop: window.innerHeight / 10 }}
              src="https://i.imgur.com/oEgq3R8.jpg"
              height={(4 * window.innerHeight) / 5}
              width="auto"
            />
            {/*Research Window - Image 2*/}
            <img
              style={{ marginLeft: 50, marginTop: window.innerHeight / 10 }}
              src="https://i.imgur.com/Fn7Komh.jpg"
              height={(4 * window.innerHeight) / 5}
              width="auto"
            />
          </div>
        </div>
        {/*Map Dots PopUps*/}
        <div>
          <text
            style={{
              fontFamily: "ballinger-mono",
              fontWeight: "Light",
              fontSize: 12,
              position: "fixed",
              left: this.state.popUpX,
              top: this.state.popUpY,
              textAlign: "center",
              color: "white",
              backgroundColor: this.state.popUpColor,
              alignSelf: "flex-start",
              padding: this.state.popUpPad
            }}
          >
            {this.state.pointName} <br /> {this.state.layerName}
          </text>
        </div>
      </div>
    );
  }
}
export default Application;