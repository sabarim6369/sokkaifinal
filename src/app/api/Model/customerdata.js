import mongoose from "mongoose";
const wishlistSchema = new mongoose.Schema(
  {
    userid: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      unique: true,
    },
    products: { type: [String], default: [] }, 
  },
  { timestamps: true }
);

const Wishlist =
  mongoose.models.Wishlist || mongoose.model("Wishlist", wishlistSchema);

  const cartDataSchema = new mongoose.Schema(
    {
      userid: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        unique: true,
      },
      products: [
        {
          productId: { type: String, required: true }, // Store product ID
          selectedSize: { type: String, required: true }, // Store selected size
        },
      ],
    },
    { timestamps: true }
  );

const CartData =
  mongoose.models.CartData || mongoose.model("CartData", cartDataSchema);
const historySchema = new mongoose.Schema(
  {
    userid: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      unique: true,
    },
    products: { type: [String], default: [] }, 
  },
  { timestamps: true }
);

const History =
  mongoose.models.History || mongoose.model("History", historySchema);

export { Wishlist, CartData, History };
