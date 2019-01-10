import { h, Component } from "preact";
import style from "./style.scss";
import ReactTable from "react-table";
import "react-table/react-table.css";
import { getOrders } from "../../actions/orderActions";
import { connect } from "preact-redux";
class Order extends Component {
  componentDidMount() {
    // this.props.getOrders();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.orders) {
      debugger;
    }
  }
  render() {
    const data = [
      {
        name: "Tanner Linsley",
        age: 26,
        friend: {
          name: "Jason Maurer",
          age: 23
        }
      }
    ];

    const columns = [
      {
        Header: "Name",
        accessor: "name" // String-based value accessors!
      },
      {
        Header: "Age",
        accessor: "age",
        Cell: props => <span className="number">{props.value}</span> // Custom cell components!
      },
      {
        id: "friendName", // Required because our accessor is not a string
        Header: "Friend Name",
        accessor: d => d.friend.name // Custom value accessors!
      },
      {
        Header: props => <span>Friend Age</span>, // Custom header components!
        accessor: "friend.age"
      }
    ];

    return (
      <div>
        <h3> This is orders page</h3>{" "}
        <div>
          <ReactTable data={data} columns={columns} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  orders: state.ordersData.orders
});

export default connect(
  mapStateToProps,
  { getOrders }
)(Order);
