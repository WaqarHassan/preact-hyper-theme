import { h, Component } from "preact";
import style from "./style.scss";
import ReactTable from "react-table";
import "react-table/react-table.css";
import { getOrders } from "../../actions/orderActions";
import { connect } from "preact-redux";
class Order extends Component {
  constructor() {
    super();
    this.state = {
      orders: []
    };
  }

  componentDidMount() {
    this.props.getOrders();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.orders) {
      this.setState({ orders: nextProps.orders });
    }
  }
  render() {
    const data = this.state.orders.data;
    // const data = [
    //   {
    //     name: "Tanner Linsley",
    //     age: 26,
    //     friend: {
    //       name: "Jason Maurer",
    //       age: 23
    //     }
    //   }
    // ];
    const columns = [
      {
        Header: "ID",
        accessor: "id" // String-based value accessors!
      },
      {
        Header: "Delivery Fee",
        accessor: "delivery_fee",
        id: "delivery_fee",
        accessor: d => `${d.delivery_fee} ( ${d.currency} )`
        // Cell: props => <span className="number">{props.value}</span> // Custom cell components!
      },

      // {
      //   id: "friendName", // Required because our accessor is not a string
      //   Header: "Friend Name",
      //   accessor: d => d.friend.name // Custom value accessors!
      // },
      {
        Header: "Order Confirmation Type",
        accessor: "order_confirmation_type"
      },
      {
        Header: "Status",
        accessor: "status"
      },
      {
        Header: "State",
        accessor: "state"
      },
      {
        Header: "Pickup Locations",
        accessor: "pickup_locations",
        Cell: props => (
          <span className="number">
            {props.value.map(p => {
              return (
                <a
                  href={` https://maps.google.de/maps?q=${p.lat},${p.lon}`}
                  target="_blank"
                >
                  {p.name}
                </a>
              );
            })}
          </span>
        )
      },
      // {
      //   Header: "",
      //   accessor: ""
      // },
      // {
      //   Header: "",
      //   accessor: ""
      // },
      // {
      //   Header: "",
      //   accessor: ""
      // },
      // {
      //   Header: "",
      //   accessor: ""
      // },

      // "item_not_available_action": null,
      // "created_at": 1547109391,
      // "updated_at": 1547109391,
      // "delivery_time": {
      //   "type": "now",
      //   "value": null
      // },
      // "pickup_locations": [
      //   {
      //     "id": "ChIJiR8MtFYEGTkRGXEcHJ8qyqA",
      //     "key": "google_places",
      //     "name": "KFC Restaurant",
      //     "description": "90, B/1 ایم ایم عالم روڈ, لاہور",
      //     "lat": 31.5142504,
      //     "lon": 74.3516721
      //   }
      // ],
      // "line_items": [
      //   {
      //     "id": 1254,
      //     "text": "Fvvv",
      //     "image": null,
      //     "quantity": 2.0
      //   }
      // ],
      // "order_steps": [],
      // "address": {
      //   "id": 839,
      //   "title": "Current Location",
      //   "latitude": 31.519801,
      //   "longitude": 74.3433661,
      //   "address_type": {
      //     "id": 5,
      //     "key": "temp_location",
      //     "name": "Temporary Location",
      //     "icon": "https://platform.swyftapp.ninja/assets/address_types/temp_location-bd4016b957d67040cc9de6ac83393bd0d0d51437c97d5aaec05abf29671dea69.png"
      //   },
      //   "description": "90, Block B Gulberg 2, Lahore, Punjab, Pakistan\nLahore\nPunjab\nPakistan",
      //   "geocode_description": "90, Block B Gulberg 2, Lahore, Punjab, Pakistan\nLahore\nPunjab\nPakistan",
      //   "country_code": "PK"
      // },
      // "tracking_url": null,
      // "driver": null
      {
        Header: "Payment Method", // Custom header components!
        accessor: "payment_method"
      },
      {
        Header: () => <span>Actions</span>,
        accessor: "id",
        Cell: row => (
          <div>
            <button class="btn btn-danger">Cancel</button>
          </div>
        )
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
