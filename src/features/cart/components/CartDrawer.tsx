import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

import { useUIStore } from "../../../store/uiStore";
import CartHeader from "./CartHeader";
import CartList from "./CartList";
import FreeDeliveryProgress from "./FreeDeliveryProgress";
import CouponBox from "./CouponBox";
import CartSummary from "./CartSummary";
export default function CartDrawer() {
  const { isCartOpen, closeCart } = useUIStore();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 z-40 bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
          />

          {/* Drawer */}
          <motion.div
            className="fixed right-0 top-0 z-50 flex h-screen w-full max-w-md flex-col bg-white shadow-2xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              duration: 0.25,
              ease: "easeOut",
            }}
          >

           <CartHeader />

<div className="flex-1 overflow-y-auto">
    <CartList />
</div>

<FreeDeliveryProgress />

<CouponBox />

<CartSummary />

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}