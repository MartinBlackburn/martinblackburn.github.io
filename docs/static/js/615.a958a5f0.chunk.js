"use strict";(self.webpackChunkmartinblackburn_github_io=self.webpackChunkmartinblackburn_github_io||[]).push([[615],{560:function(e,t,r){r.d(t,{Z:function(){return s}});var a=r(791),o=r(184),n=function(e){var t="timeline";return e.dark&&(t+=" timeline--dark"),(0,o.jsxs)("div",{className:t,children:[(0,o.jsx)("h1",{className:"timeline__title",children:e.title}),(0,o.jsx)("div",{className:"timeline__content",children:e.children})]})},s=a.memo(n)},701:function(e,t,r){r.d(t,{Z:function(){return u}});var a=r(791),o=["January","February","March","April","May","June","July","August","September","October","November","December"],n=function(e){return String(e<=9?"0"+e:e)},s=function(e){var t=e.getDate(),r=o[e.getMonth()],a=e.getFullYear();return"".concat(n(t)," ").concat(r," ").concat(a)},i=function(e){var t=e.getDate(),r=e.getMonth()+1,a=e.getFullYear();return"".concat(a,"-").concat(n(r),"-").concat(n(t))},l=r(184),h=function(e){return(0,l.jsx)("time",{dateTime:i(e.date),children:s(e.date)})},d=a.memo(h),c=function(e){var t="timelineItem";e.dark&&(t+=" timelineItem--dark");var r=null;return"present"===e.endDate&&(r="present"),e.endDate&&"present"!==e.endDate&&(r=(0,l.jsx)(d,{date:new Date(e.endDate)})),(0,l.jsxs)("div",{className:t,children:[(0,l.jsx)("h2",{className:"timelineItem__title",children:e.title}),(0,l.jsxs)("div",{className:"timelineItem__date",children:[(0,l.jsx)(d,{date:new Date(e.startDate)})," ",r?" - ":""," ",r]}),e.children]})},u=a.memo(c)},615:function(e,t,r){r.r(t),r.d(t,{default:function(){return p}});var a=r(791),o=r(469),n=r(560),s=r(701),i=r(184),l=function(){return(0,i.jsxs)(n.Z,{title:"House 1",children:[(0,i.jsxs)(s.Z,{title:"Offer accepted",startDate:"2021/05/11",children:[(0,i.jsx)("p",{children:"After many many house viewings, we finally got an offer accepted - \xa335,000 over asking price!"}),(0,i.jsx)("p",{children:"Now we just have to wait for them to find a house they want to move to, while we get our paperwork in order, mortgage, surveys, etc."})]}),(0,i.jsx)(s.Z,{title:"Mortgage approved",startDate:"2021/06/03",children:(0,i.jsx)("p",{children:"A little back and forth with the mortgage provider with some proof of identity and other documents and we finally have our mortgage approved."})}),(0,i.jsx)(s.Z,{title:"Seller has found a house",startDate:"2021/06/15",children:(0,i.jsx)("p",{children:"The seller has found a house and had their offer accepted, even better news is that there is no onward chain, so it will be a fairly simple process."})}),(0,i.jsx)(s.Z,{title:"Seller pulled out of onward purchase",startDate:"2021/06/24",children:(0,i.jsx)("p",{children:"The seller has decide that their onward purchase wasn't right for them, and so have pulled out. This means we are now waiting for them to find a new house."})}),(0,i.jsx)(s.Z,{title:"Seller has found another house",startDate:"2021/08/17",children:(0,i.jsx)("p",{children:"The seller has found another house and had their offer accepted, also with no chain. Hopefully this will be the end of our waiting."})}),(0,i.jsx)(s.Z,{title:"Seller pulled out of onward purchase again",startDate:"2021/11/02",children:(0,i.jsx)("p",{children:"Back to waiting, as they decided to pull out of their onward purchase as they didn't like the people who were servicing the property."})}),(0,i.jsx)(s.Z,{title:"Mortgage offer expired",startDate:"2021/12/04",children:(0,i.jsx)("p",{children:"As it has been 6 months since our mortgage offer, it has now expired, so we have to re-apply. Nothing complicated, and it was approved the same day based on our old application, but we've decided to keep an eye out for other properties as this is taking a long time."})}),(0,i.jsx)(s.Z,{title:"Seller has found their 3rd house",startDate:"2022/01/17",children:(0,i.jsx)("p",{children:"The seller has found another house and had their offer accepted, although this one does have a chain."})}),(0,i.jsxs)(s.Z,{title:"Too stressful for the seller",startDate:"2022/02/03",children:[(0,i.jsx)("p",{children:"The seller has decided the whole process is too stressful and have decided not to sell their house, so we are back to viewings again."}),(0,i.jsx)("p",{children:"So thats just over 8 months gone - thankfully we did start keeping an eye out for other properties. Unfortunately, we didn't see anything we liked as much so didn't make offers. Hindsight is a brutal thing."})]})]})},h=a.memo(l),d=function(){return(0,i.jsxs)(n.Z,{dark:!0,title:"House 2",children:[(0,i.jsxs)(s.Z,{dark:!0,title:"Offer accepted",startDate:"2022/03/15",children:[(0,i.jsx)("p",{children:"We got pretty lucky and a house came up not too long after we lost the last one. After a little bidding war we won! Although it was \xa340,000 over asking this time, eeek."}),(0,i.jsx)("p",{children:"They already have an house offer accepted, a new build, but we do have to wait until august for that to be completed."})]}),(0,i.jsxs)(s.Z,{dark:!0,title:"Mortgage down valued",startDate:"2022/05/09",children:[(0,i.jsx)("p",{children:"The mortgage was rejected, they didn't think the house was worth our offer."}),(0,i.jsx)("p",{children:"Our mortgage broker said this has happened a lot recently with this particular mortgage provider and we should try another."})]}),(0,i.jsxs)(s.Z,{dark:!0,title:"Mortgage down valued again",startDate:"2022/05/19",children:[(0,i.jsx)("p",{children:"The mortgage was rejected with another lender. Uh oh."}),(0,i.jsx)("p",{children:"We now have two options, make up the difference ourselves (\xa340,000), or negotiate the price."}),(0,i.jsx)("p",{children:"The seller has refused to reduce the price, so we agreed to make up the difference so long as the survey came back ok."})]}),(0,i.jsxs)(s.Z,{dark:!0,title:"Survey results",startDate:"2022/06/13",children:[(0,i.jsx)("p",{children:"Not good news, the survey listed several major issues, roof replacement, conservatory replacement, penetrating damp on the first floor, rising damp on the ground floor, a crack in the external wall, plus a few other smaller issues."}),(0,i.jsx)("p",{children:"So we have sent the survey to the seller and have said that we are reducing our offer based on the work needed."}),(0,i.jsx)("p",{children:"After several quotes, the work looks like it could be anywhere from \xa320,000 to \xa360,000 to do."})]}),(0,i.jsxs)(s.Z,{dark:!0,title:"Price reduction",startDate:"2022/06/29",children:[(0,i.jsx)("p",{children:"With a lot of back and forth, we ended up with a \xa325,500 price reduction. This also reduces our stamp duty bill by \xa31,275. So a total of \xa326,775 saved that we can use towards repairs. Hopefully enough to cover most of the work needed."}),(0,i.jsx)("p",{children:"It does mean we are still paying \xa315,000 over the value of the house, but as it's a house for life, we feel that it's worth it."}),(0,i.jsx)("p",{children:"We may not be able to do all the repairs/decorating we wanted in one go due to the cost. However, the discount will allow us to do the major ones, such as the roof replacement and fix the damp problems."})]}),(0,i.jsx)(s.Z,{dark:!0,title:"Initial report",startDate:"2022/07/04",children:(0,i.jsx)("p",{children:"We have the initial report from our solicitor. It's outstanding a few enquires from the sellers solicitor, but we should get these soon."})}),(0,i.jsx)(s.Z,{dark:!0,title:"Still outstanding enquires",startDate:"2022/07/21",children:(0,i.jsx)("p",{children:"Still waiting on enquiries from the solicitors. Not even sure what they think they are missing at this point, there is very little communication from either solicitor."})}),(0,i.jsx)(s.Z,{dark:!0,title:"Ready to sign?",startDate:"2022/08/01",children:(0,i.jsx)("p",{children:"Our solicitor just said we'll have the contracts ready to sign buy the end of the week."})}),(0,i.jsx)(s.Z,{dark:!0,title:"Nup not ready",startDate:"2022/08/11",children:(0,i.jsx)("p",{children:"Despite what we were told last week, our solicitor clearly never looked at the file and we are still missing some things from the sellers solicitor."})}),(0,i.jsxs)(s.Z,{dark:!0,title:"Talk to each other",startDate:"2022/08/12",children:[(0,i.jsx)("p",{children:"The estate agent doesn't think there was anything out standing, but our solicitor does."}),(0,i.jsx)("p",{children:"So we have copied them both in on an email asking what they are missing and who needs to provide it."})]}),(0,i.jsxs)(s.Z,{dark:!0,title:"Different name",startDate:"2022/08/17",children:[(0,i.jsx)("p",{children:"Turns out the seller was married after buying the house. So the title deeds with land registry don't reflect her current name. I thought this would have been a basic thing they should have checked at the start, but hey!"}),(0,i.jsx)("p",{children:"So the seller will need to update land registry before we can carry on with the purchase."})]}),(0,i.jsxs)(s.Z,{dark:!0,title:"Autograph time?",startDate:"2022/09/06",children:[(0,i.jsx)("p",{children:"We have finally got our contracts and can now sign and send them off to the solicitors."}),(0,i.jsx)("p",{children:"Actually no, it's full of mistakes and so need to have them amended. Obvious mistakes too, like: the wrong purchase price, wrong stamp duty amount, wrong address for my contact details to name a few."})]}),(0,i.jsxs)(s.Z,{dark:!0,title:"Now it's autograph time",startDate:"2022/09/07",children:[(0,i.jsxs)("p",{children:["We have finally got our ",(0,i.jsx)("em",{children:"correct"})," contracts and can now sign and send them off to the solicitors."]}),(0,i.jsx)("p",{children:"No completion date yet, but we finally feel like we might actually get to move in some time this year."})]}),(0,i.jsx)(s.Z,{dark:!0,title:"Can we move yet?",startDate:"2022/10/15",children:(0,i.jsx)("p",{children:"There has been lots of back and forth over the last month, we don't seem to be any closer to exchanging either."})}),(0,i.jsxs)(s.Z,{dark:!0,title:"Exchange time",startDate:"2022/11/17",children:[(0,i.jsx)("p",{children:"We have finally exchanged and have a completion date."}),(0,i.jsx)("p",{children:"We'll be getting our keys on next week. Wooooooo!!!"}),(0,i.jsx)("p",{children:"Now the fun starts of getting repairs and decorating, as well as organising all the boring, but essential things, like insurance."})]})]})},c=a.memo(d),u=function(){return(0,i.jsxs)(a.Fragment,{children:[(0,i.jsx)(o.Z,{introText:"// home sweet home",titleText:"Our house buying journey",backgroundImage:"".concat("","/images/house/front.jpg"),darken:!0}),(0,i.jsx)(h,{}),(0,i.jsx)(c,{})]})},p=a.memo(u)}}]);
//# sourceMappingURL=615.a958a5f0.chunk.js.map