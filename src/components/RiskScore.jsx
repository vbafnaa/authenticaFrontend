import React from 'react'
import Gauge from './Gauge'

export const RiskScore = () => {
  return (
    <div>
      <Gauge/>
      {/* <div className='absolute flex flex-col bg-white z-1'>
        <span className='text-white '>
     1 Enable two-factor authentication: Two-factor authentication adds an extra layer of security to your digital identity. When enabled, you'll need to enter a code sent to your phone or email in addition to your password to log in.
      
     2 Limit personal information online: Be cautious of sharing personal information such as your full name, home address, phone number, and email address online. Don't post sensitive information on social media or other public platforms.

     3 Be wary of phishing scams: Be cautious of suspicious emails and messages, especially those that ask for personal information. Don't click on links or download attachments from unknown sources. 
      
     4 Monitor your accounts regularly: Regularly check your bank and credit card statements for suspicious activity. If you see anything unusual, contact your bank or credit card company immediately. 
     </span>
      </div> */}

    <div class="bg-violet-200 absolute right-0 w-5/12 h-4/5 mr-20 mt-32 rounded-md"  >
      <div class="mx-auto  items-center gap-y-16 gap-x-8 py-4 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 class="text-lg font-bold tracking-tight text-gray-900 sm:text-3xl">To Make Your Digital Identity More Secure:</h2>

          <dl class="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            <div class="border-t border-gray-200 pt-4">
              {/* <dt class="font-medium text-gray-900">Origin</dt> */}
              <dd class="mt-2 text-md text-gray-900">1. Enable two-factor authentication: Two-factor authentication adds an extra layer of security to your digital identity. When enabled, you'll need to enter a code sent to your phone or email in addition to your password to log in.
</dd>
            </div>

            <div class="border-t border-gray-200 pt-4">
              {/* <dt class="font-medium text-gray-900">Material</dt> */}
              <dd class="mt-2 text-md text-blacks">2. Limit personal information online: Be cautious of sharing personal information such as your full name, home address, phone number, and email address online. Don't post sensitive information on social media or other public platforms.
</dd>
            </div>

            <div class="border-t border-gray-200 pt-4">
              {/* <dt class="font-medium text-gray-900">Dimensions</dt> */}
              <dd class="mt-2 text-md text-gray-900">3. Be wary of phishing scams: Be cautious of suspicious emails and messages, especially those that ask for personal information. Don't click on links or download attachments from unknown sources. 
</dd>
            </div>

            <div class="border-t border-gray-200 pt-4">
              {/* <dt class="font-medium text-gray-900">Finish</dt> */}
              <dd class="mt-2 text-md text-black">4. Monitor your accounts regularly: Regularly check your bank and credit card statements for suspicious activity. If you see anything unusual, contact your bank or credit card company immediately. 
</dd>
            </div>
            {/* <div class="border-t border-gray-200 pt-4"></div> */}
            {/* <div class="border-t border-gray-200 pt-4">
              <dt class="font-medium text-gray-900">Includes</dt>
              <dd class="mt-2 text-sm text-gray-500">Wood card tray and 3 refill packs</dd>
            </div>

            <div class="border-t border-gray-200 pt-4">
              <dt class="font-medium text-gray-900">Considerations</dt>
              <dd class="mt-2 text-sm text-gray-500">Made from natural materials. Grain and color vary with each item.</dd>
            </div> */}
                        {/* <div class="border-t border-gray-200 pt-4"></div> */}

          </dl>
        </div>
        </div>
        </div>

    </div>
  )
}
