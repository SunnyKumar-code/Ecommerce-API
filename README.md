# eCommerce API

## Base URL
```
https://ecommerce-api-aco4.onrender.com
```

## Authentication

### Register User
**Endpoint:** `POST /register`

### Login User
**Endpoint:** `POST /login`

---

## Wishlist Routes

### Add to Wishlist
**Endpoint:** `POST /add`

### Remove from Wishlist
**Endpoint:** `DELETE /delete`

### Get Wishlist
**Endpoint:** `GET /list`

---

## Product Routes

### Create Product (Only SELLER & ADMIN)
**Endpoint:** `POST /create`

### Get Product List
**Endpoint:** `GET /list`

### Get Product Details
**Endpoint:** `GET /:id`

### Add Review (Only CUSTOMER)
**Endpoint:** `POST /add-review`

---

## Order Routes

### Create Order
**Endpoint:** `POST /create`

---

## Coupon Routes

### Create Coupon
**Endpoint:** `POST /create`

### Get Coupon
**Endpoint:** `GET /get`

---

## Cart Routes

### Add to Cart
**Endpoint:** `POST /add`

### Change Quantity
**Endpoint:** `POST /change-qty`

### Get Cart
**Endpoint:** `GET /`

