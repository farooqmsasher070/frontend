import Button from "../../../components/common/Button";
import Container from "../../../components/common/Container";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-red-50 to-white">
      <Container>
        <div className="grid min-h-[600px] items-center gap-12 md:grid-cols-2">

          {/* Left */}

          <div>

            <span className="rounded-full bg-red-100 px-4 py-2 text-red-700 font-medium">
              🚚 Free Delivery Across Bangalore
            </span>

            <h1 className="mt-8 text-5xl font-extrabold leading-tight">

              Fresh Meat

              <span className="block text-red-700">
                Delivered in 90 Minutes
              </span>

            </h1>

            <p className="mt-6 text-lg text-gray-600">

              Premium quality chicken, mutton, fish,
              seafood and eggs delivered fresh to your doorstep.

            </p>

            <div className="mt-10 flex gap-4">

              <Button>
                Shop Now
              </Button>

              <button className="rounded-xl border px-6 py-3 font-semibold">
                Browse Products
              </button>

            </div>

          </div>

          {/* Right */}

          <div className="flex justify-center">

            <img
              src="https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=900"
              alt="Fresh Meat"
              className="rounded-3xl shadow-2xl"
            />

          </div>

        </div>
      </Container>
    </section>
  );
}