import React from 'react'

export const YourProfile = () => {
  return (
    <div className='absolute w-3/4 mt-32 ml-72 mr-20 '>
        <div class="overflow-hidden bg-gradient-to-r from-indigo-700 to-indigo-900 shadow sm:rounded-lg">
  <div class="px-4 py-4 sm:px-6">
    <h3 class="text-xl font-semibold leading-6 text-gray-100">Your Information</h3>
  </div>
  <div class="border-t border-gray-200">
    <dl>
      <div class="bg-gradient-to-r from-gray-100 to-indigo-100  px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-md font-medium text-gray-900">Full name</dt>
        <dd class="mt-1 text-md text-gray-900 sm:col-span-2 sm:mt-0">Arjun Shah</dd>
      </div>
      <div class="bg-gradient-to-r from-indigo-100 to-gray-100  px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium text-gray-900">Email: </dt>
        <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">arjun.shah254@gmail.com</dd>
      </div>
      <div class="bg-gradient-to-r from-gray-100 to-indigo-100  px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium text-gray-900">Password:</dt>
        <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">***</dd>
      </div>
      <div class="bg-gradient-to-r from-indigo-100 to-gray-100  px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium text-gray-900">Address: </dt>
        <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Maker Towers, Worli Hill Road</dd>
      </div>
      <div class="bg-gradient-to-r from-gray-100 to-indigo-100 px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium text-gray-900">City:</dt>
        <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Mumbai</dd>
      </div>
      <div class="bg-gradient-to-r from-indigo-100 to-gray-100  px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium text-gray-900">Attachments</dt>
        <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
          <ul role="list" class="divide-y divide-gray-200 rounded-md border border-gray-200">
            <li class="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
              <div class="flex w-0 flex-1 items-center">
                <svg class="h-5 w-5 flex-shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z" clip-rule="evenodd" />
                </svg>
                <span class="ml-2 w-0 flex-1 truncate">Driving_License.pdf</span>
              </div>
              <div class="ml-4 flex-shrink-0">
                <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Download</a>
              </div>
            </li>
            <li class="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
              <div class="flex w-0 flex-1 items-center">
                <svg class="h-5 w-5 flex-shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z" clip-rule="evenodd" />
                </svg>
                <span class="ml-2 w-0 flex-1 truncate">Aadhar_Card.pdf</span>
              </div>
              <div class="ml-4 flex-shrink-0">
                <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Download</a>
              </div>
            </li>
          </ul>
        </dd>
      </div>
    </dl>
  </div>
</div>

    </div>
  )
}
