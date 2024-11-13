import { backendUrl } from "../App";
import axios from "axios";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);
  const fetchAllOrders = async () => {
    if (!token) return null;

    try {
      const response = await axios.get(backendUrl + "/api/orders/list", {
        headers: { token },
      });
      if (response.data.success) {
        setOrders(response.data.orders);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, [token]);
  return <div>Order</div>;
};

export default Orders;
