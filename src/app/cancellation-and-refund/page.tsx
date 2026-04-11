import React from 'react';

export default function CancellationAndRefund() {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-8 py-16 lg:py-24 max-w-4xl text-gray-800">
        <h1 className="text-4xl lg:text-5xl font-bold tracking-tighter mb-4 lg:mb-8 text-black">Cancellation & Refund Policy</h1>
        <p className="text-sm text-gray-500 mb-8 uppercase tracking-widest">Last updated on 11-04-2026 13:52:41</p>

        <div className="space-y-6 leading-relaxed text-gray-600">
          <p>
            DEEPIKA TANDULKAR believes in helping its customers as far as possible, and has therefore a liberal
            cancellation policy. Under this policy:
          </p>
          <ul className="list-disc pl-6 space-y-4">
            <li>
              Cancellations will be considered only if the request is made immediately after placing the order.
              However, the cancellation request may not be entertained if the orders have been communicated to the
              vendors/merchants and they have initiated the process of shipping them.
            </li>
            <li>
              DEEPIKA TANDULKAR does not accept cancellation requests for perishable items like flowers,
              eatables etc. However, refund/replacement can be made if the customer establishes that the quality of
              product delivered is not good.
            </li>
            <li>
              In case of receipt of damaged or defective items please report the same to our Customer Service team.
              The request will, however, be entertained once the merchant has checked and determined the same at his
              own end. This should be reported within 30 Days days of receipt of the products. In case you feel that the
              product received is not as shown on the site or as per your expectations, you must bring it to the notice of
              our customer service within 30 Days days of receiving the product. The Customer Service Team after
              looking into your complaint will take an appropriate decision.
            </li>
            <li>
              In case of complaints regarding products that come with a warranty from manufacturers, please refer
              the issue to them. In case of any Refunds approved by the DEEPIKA TANDULKAR, it&apos;ll take 1-2 Days
              days for the refund to be processed to the end customer.
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
