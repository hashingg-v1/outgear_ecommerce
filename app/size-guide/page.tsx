import { Ruler, User, Shirt, Footprints } from "lucide-react"

export default function SizeGuidePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Size Guide</h1>
        <p className="text-xl text-gray-600">Find your perfect fit for outdoor gear</p>
      </div>

      {/* Measurement Tips */}
      <div className="bg-green-50 rounded-lg p-6 mb-8">
        <div className="flex items-center mb-4">
          <Ruler className="w-6 h-6 text-green-600 mr-2" />
          <h2 className="text-xl font-semibold text-green-800">How to Measure</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-green-700 mb-2">For Clothing:</h3>
            <ul className="text-green-600 space-y-1">
              <li>• Measure over your regular undergarments</li>
              <li>• Keep the tape measure level and snug, not tight</li>
              <li>• Take measurements in the morning when possible</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-green-700 mb-2">For Footwear:</h3>
            <ul className="text-green-600 space-y-1">
              <li>• Measure feet at the end of the day</li>
              <li>• Wear the socks you'll use with the shoes</li>
              <li>• Measure both feet and use the larger size</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Clothing Sizes */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <div className="flex items-center mb-6">
          <Shirt className="w-6 h-6 text-gray-700 mr-2" />
          <h2 className="text-2xl font-bold text-gray-900">Clothing Sizes</h2>
        </div>

        {/* Men's Clothing */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Men's Clothing</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 px-4 py-2 text-left">Size</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Chest (inches)</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Waist (inches)</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Hip (inches)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium">XS</td>
                  <td className="border border-gray-300 px-4 py-2">32-34</td>
                  <td className="border border-gray-300 px-4 py-2">26-28</td>
                  <td className="border border-gray-300 px-4 py-2">32-34</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium">S</td>
                  <td className="border border-gray-300 px-4 py-2">34-36</td>
                  <td className="border border-gray-300 px-4 py-2">28-30</td>
                  <td className="border border-gray-300 px-4 py-2">34-36</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium">M</td>
                  <td className="border border-gray-300 px-4 py-2">36-38</td>
                  <td className="border border-gray-300 px-4 py-2">30-32</td>
                  <td className="border border-gray-300 px-4 py-2">36-38</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium">L</td>
                  <td className="border border-gray-300 px-4 py-2">38-40</td>
                  <td className="border border-gray-300 px-4 py-2">32-34</td>
                  <td className="border border-gray-300 px-4 py-2">38-40</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium">XL</td>
                  <td className="border border-gray-300 px-4 py-2">40-42</td>
                  <td className="border border-gray-300 px-4 py-2">34-36</td>
                  <td className="border border-gray-300 px-4 py-2">40-42</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium">XXL</td>
                  <td className="border border-gray-300 px-4 py-2">42-44</td>
                  <td className="border border-gray-300 px-4 py-2">36-38</td>
                  <td className="border border-gray-300 px-4 py-2">42-44</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Women's Clothing */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Women's Clothing</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 px-4 py-2 text-left">Size</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Bust (inches)</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Waist (inches)</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Hip (inches)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium">XS</td>
                  <td className="border border-gray-300 px-4 py-2">30-32</td>
                  <td className="border border-gray-300 px-4 py-2">24-26</td>
                  <td className="border border-gray-300 px-4 py-2">34-36</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium">S</td>
                  <td className="border border-gray-300 px-4 py-2">32-34</td>
                  <td className="border border-gray-300 px-4 py-2">26-28</td>
                  <td className="border border-gray-300 px-4 py-2">36-38</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium">M</td>
                  <td className="border border-gray-300 px-4 py-2">34-36</td>
                  <td className="border border-gray-300 px-4 py-2">28-30</td>
                  <td className="border border-gray-300 px-4 py-2">38-40</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium">L</td>
                  <td className="border border-gray-300 px-4 py-2">36-38</td>
                  <td className="border border-gray-300 px-4 py-2">30-32</td>
                  <td className="border border-gray-300 px-4 py-2">40-42</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium">XL</td>
                  <td className="border border-gray-300 px-4 py-2">38-40</td>
                  <td className="border border-gray-300 px-4 py-2">32-34</td>
                  <td className="border border-gray-300 px-4 py-2">42-44</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium">XXL</td>
                  <td className="border border-gray-300 px-4 py-2">40-42</td>
                  <td className="border border-gray-300 px-4 py-2">34-36</td>
                  <td className="border border-gray-300 px-4 py-2">44-46</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Footwear Sizes */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <div className="flex items-center mb-6">
          <Footprints className="w-6 h-6 text-gray-700 mr-2" />
          <h2 className="text-2xl font-bold text-gray-900">Footwear Sizes</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Men's Shoes */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Men's Shoes</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-4 py-2 text-left">US Size</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Length (inches)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">7</td>
                    <td className="border border-gray-300 px-4 py-2">9.625</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">8</td>
                    <td className="border border-gray-300 px-4 py-2">9.75</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">9</td>
                    <td className="border border-gray-300 px-4 py-2">10.125</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">10</td>
                    <td className="border border-gray-300 px-4 py-2">10.25</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">11</td>
                    <td className="border border-gray-300 px-4 py-2">10.625</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">12</td>
                    <td className="border border-gray-300 px-4 py-2">10.75</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Women's Shoes */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Women's Shoes</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-4 py-2 text-left">US Size</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Length (inches)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">6</td>
                    <td className="border border-gray-300 px-4 py-2">8.875</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">7</td>
                    <td className="border border-gray-300 px-4 py-2">9.0625</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">8</td>
                    <td className="border border-gray-300 px-4 py-2">9.25</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">9</td>
                    <td className="border border-gray-300 px-4 py-2">9.625</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">10</td>
                    <td className="border border-gray-300 px-4 py-2">9.8125</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">11</td>
                    <td className="border border-gray-300 px-4 py-2">10.1875</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Backpack Sizing */}
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="flex items-center mb-6">
          <User className="w-6 h-6 text-gray-700 mr-2" />
          <h2 className="text-2xl font-bold text-gray-900">Backpack Sizing</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Torso Length</h3>
            <p className="text-gray-600 mb-4">
              Measure from the C7 vertebra (base of neck) to the top of your hip bones.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-4 py-2 text-left">Size</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Torso Length</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">Small</td>
                    <td className="border border-gray-300 px-4 py-2">15-17 inches</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">Medium</td>
                    <td className="border border-gray-300 px-4 py-2">17-19 inches</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">Large</td>
                    <td className="border border-gray-300 px-4 py-2">19-21 inches</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Capacity Guide</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                <span className="font-medium">Day Hikes</span>
                <span className="text-gray-600">20-35L</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                <span className="font-medium">Weekend Trips</span>
                <span className="text-gray-600">35-50L</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                <span className="font-medium">Multi-day Trips</span>
                <span className="text-gray-600">50-80L</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                <span className="font-medium">Extended Expeditions</span>
                <span className="text-gray-600">80L+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
