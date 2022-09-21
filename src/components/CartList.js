import React from "react";
// REACT-BOOTSTRAP
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

// UNFINISHED
const CartList = () => {
  return (
    <>
      <Table striped hover variant="dark" className="w-50">
        <thead>
          <tr>
            <th>YOUR CART</th>
            <th>Item</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>DELETE</th>
            <td>Item_1</td>
            <td>Price_1</td>
          </tr>
          <tr>
            <th>DELETE</th>
            <td>Item_2</td>
            <td>Price_2</td>
          </tr>
          <tr>
            <td colSpan={2}>Total:</td>
            <td>Total Price Here</td>
          </tr>
          <tr>
            <td colSpan={3}>
              <div className="d-grid gap-2">
                <Button variant="success" size="lg">
                  Buy
                </Button>
              </div>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default CartList;
