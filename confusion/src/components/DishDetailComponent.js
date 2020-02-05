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
  }

  renderDish(dish) {
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
  }

  renderComments(comments) {
    if (comments != null) {
      const dishComments = comments.map(comment => {
        return (
          <div>
            <li className="mt-3 mb-3">{comment.comment}</li>
            <li className="mt-3 mb-3">
              -- {comment.author} ,{" "}
              {new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "short",
                day: "2-digit"
              }).format(new Date(Date.parse(comment.date)))}
            </li>
          </div>
        );
      });

      return (
        <div className="col-12 col-md-5 m-1">
          <h4>Comments</h4>
          <ul className="list-unstyled">{dishComments}</ul>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  render() {
    if (this.props.dish != null) {
      return (
        <div className="container">
          <div className="row">
            {this.renderDish(this.props.dish)}
            {this.renderComments(this.props.dish.comments)}
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default DishDetail;
