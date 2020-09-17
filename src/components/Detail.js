import React from "react";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state == undefined) {
      // state가 없으면 즉, movie 클릭해서 온 접근이 아니면
      // redirect
      history.push("/");
    }
  }

  render() {
    const { location } = this.props;

    // render() -> componentDidMout() 순으로 실행
    if (location.state) {
      return <span>{location.state.title}</span>;
    } else return null;
  }
}

export default Detail;
