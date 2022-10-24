import * as React from "react";
import {
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  Image,
  StyleSheet,
} from "react-native";
import Quotes from "../quotes.json";

import Carousel from "react-native-snap-carousel-v4";

export default class MainCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: [...Quotes],
    };
  }

  _renderItem({ item, index }) {
    return (
      <View
        style={{
          backgroundColor: "floralwhite",
          borderRadius: 5,
          flex: 1,
        }}
      >
        <ImageBackground source={item.image} style={{ flex: 1 }}>
          <Text style={styles.quote}>{item.title}</Text>
          <Text style={styles.quoteName}>{item.text}</Text>
        </ImageBackground>
      </View>
    );
  }

  render() {
    return (
      <View style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}>
        <Carousel
          layout={"stack"}
          // layoutCardOffset={`100`}
          ref={(ref) => (this.carousel = ref)}
          data={this.state.carouselItems}
          sliderWidth={450}
          itemWidth={450}
          renderItem={this._renderItem}
          onSnapToItem={(index) => this.setState({ activeIndex: index })}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  quote: {
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: "white",
    opacity: 0.7,
    marginTop: "80%",
    // marginLeft: 50,
    width: "100%",
    paddingLeft: "10%",
    paddingRight: "10%",
    paddingTop: "3%",
    paddingBottom: "2%",
  },
  quoteName: {
    textAlign: "right",
    // justifyContent: "right",
    backgroundColor: "white",
    opacity: 0.7,
    paddingRight: "10%",
    paddingBottom: "3%",
  },
});
