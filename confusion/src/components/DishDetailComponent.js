import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle
} from "reactstrap";

class DishDetail extends Component {
  constructor(props) {
    super(props);
    this.renderDish = this.renderDish.bind(this);

    this.state = {};
  }

  renderDish() {
    var dish = this.props.selectedDish;
    if (dish != null) {
      return (
        <div className="col-12 col-md-5 m-1">
          <Card>
            <CardImg width="100%" object src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText> {dish.description} </CardText>
            </CardBody>
          </Card>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  renderComments() {
    var dish = this.props.selectedDish;
    if (dish != null) {
      if (dish.comments != null) {
        console.log(dish.comments);
        const comments = dish.comments.map(comment => {
          return (
            <div>
              <li className="mt-3 mb-3">{comment.comment}</li>
              <li className="mt-3 mb-3">
                -- {comment.author} , {comment.date}{" "}
              </li>
            </div>
          );
        });
        return (
          <div className="col-12 col-md-5 m-1">
            <h4>Comments</h4>
            <ul className="list-unstyled">{comments}</ul>
          </div>
        );
      }
    } else {
      return <div></div>;
    }
  }

  render() {
    return (
      <div className="row">
        {this.renderDish()}
        {this.renderComments()}
      </div>
    );
  }
}

export default DishDetail;
