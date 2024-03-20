/**
 * v0 by Vercel.
 * @see https://v0.dev/t/orXcLJ9umFE
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Component() {
  return (
    <div className="mx-auto max-w-3xl grid gap-4 p-4">
      <div className="grid gap-2">
        <div className="text-2xl font-semibold">Sakariye Muse</div>
        <div className="text-sm text-gray-500 dark:text-gray-400">Customer Service Professional</div>
      </div>
      <div className="grid gap-2">
        <div className="text-sm">
          <div className="inline font-semibold">Location:</div>
          London, UK{"\n              "}
        </div>
        <div className="text-sm">
          <div className="inline font-semibold">Email:</div>
          sakariye.muse@example.com
        </div>
        <div className="text-sm">
          <div className="inline font-semibold">Phone:</div>
          +44 123 456 7890{"\n              "}
        </div>
      </div>
      <div className="border-t" />
      <div className="grid gap-2">
        <div className="text-lg font-semibold">Summary</div>
        <div className="text-sm">
          Experienced customer service professional with a passion for delivering exceptional service. Proven ability to
          communicate effectively with customers and resolve issues in a timely manner. Strong team player with a
          positive attitude and a commitment to ensuring customer satisfaction.
        </div>
      </div>
      <div className="grid gap-2">
        <div className="text-lg font-semibold">Skills</div>
        <div className="grid gap-2 md:grid-cols-2">
          <ul className="list-disc list-inside">
            <li>Customer Relationship Management</li>
            <li>Effective Communication</li>
            <li>Problem-Solving</li>
            <li>Team Collaboration</li>
          </ul>
          <ul className="list-disc list-inside">
            <li>Time Management</li>
            <li>Attention to Detail</li>
            <li>Multi-Tasking</li>
          </ul>
        </div>
      </div>
      <div className="grid gap-2">
        <div className="text-lg font-semibold">Experience</div>
        <div className="grid gap-2">
          <div className="font-semibold">Customer Service Representative</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">ABC Hotels, London, UK</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">January 2019 - Present</div>
          <div className="text-sm">
            - Provided friendly and professional service to hotel guests, assisting with check-in and check-out
            procedures and addressing inquiries about hotel amenities and local attractions.
          </div>
          <div className="text-sm">
            - Handled guest complaints and issues, ensuring that problems were resolved to the satisfaction of the guest
            while maintaining the reputation of the hotel.
          </div>
          <div className="text-sm">
            - Collaborated with other hotel staff to ensure a seamless and enjoyable experience for guests, including
            coordinating room service, housekeeping requests, and transportation.
          </div>
        </div>
        <div className="grid gap-2">
          <div className="font-semibold">Front Desk Agent</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">Sunshine Inn, London, UK</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">June 2017 - December 2018</div>
          <div className="text-sm">
            - Welcomed guests to the hotel, processed reservations, and assisted with the registration process, ensuring
            accuracy and efficiency in handling guest information.
          </div>
          <div className="text-sm">
            - Answered incoming calls to the front desk, providing information to guests and addressing their requests
            for services or assistance.
          </div>
          <div className="text-sm">
            - Managed the hotel's online booking system, updating room availability and rates to maximize occupancy and
            revenue.
          </div>
        </div>
      </div>
    </div>
  )
}

