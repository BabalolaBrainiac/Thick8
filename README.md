# T

## Table of Contents
+ [About](#about)
+ [Getting Started](#getting_started)
+ [User example](#example)
+ [Creating Events](#create)
+ [Create Sample Event](#sample)
+ [Attending Events](#attend)
+ [Contributing](#contribution)

## About <a name = "about"></a>
A web/mobile app enabling users to create, host,  advertise, and monetize events.

## Getting Started <a name = "getting_started"></a>
This is a social media mobile and web application which would enable it's users to create custom events, and be have access to features such as monetizing those events, limiting the number of attendees, etc.
Users can also search for events around them, and select those they want to attend. Users timeline will contain events of other users, which would be filtered by the users' preference(users proximity to event location, type of event; whether indoor or outdoor, number of attendees; event may also be just a hangout request by an individual or a couple of friends). 

### Prerequisites
Users will have to sign up and pass a security check. Upon signup, a unique username would be provided a user, which would serve as a unique identifier for each user.

### Application Usage

Signup/Login > Timeline > View Event/Hangout requests around you > Accept Event/Hangout request > Event/Hangout Creator checks out your profile, and if it suits their preferences, accept you as an attendee, after which you get event location and a generated QR code which would be used to verify you at Event/Hangout entry. Upon successful verification, you participate in the event, hangout, or whatever for of meetup said event was described to be.

```
1. User 1(Mary) just moved to a new location. She got a new job in a new country. It is weekend, and she is bored, she doesn't know anyone around, and has a preference for non crowdy spaces so a club is not an option. She searches google and other apps to locate fun places, but those do not exactly fit her preferences. In another instance, she would have selected and 'managed' one of those options, but well, she remembered she downloaded the THICK8 application yesterday. She opened the application, registered seamlessly, and she stated her location, and her timeline returned lists of events, hangouts, outdoor parties, indoor house parties around her. Two particular ones interested her; One is a group of friends hosting a house party for females only; there would be food, drinks, and she even gts the opportunity to meet new people, and most importantly, the houseparty takes a maximum of 10 people, and a ticket of just $5. The perfect party does not exist, they said. Yet, here she was. 

The second event she found interesting was a hangout request. Request was from a young lady who wanted to have drinks at some bar. she did not want to drink alone, and stated she would love to have any woman around who could join her at said bar. She also saw she and the user shared similar interests, so she thought to try make it happen. Oh, and they also get to split the bills. Perfect! She said as he accepted the request. Bar location was shared immediately, and a QR code was generated immediately for her which the lady would verify for security purposes at the bar.
```

## Creating Events <a name = "create"></a>

Creating events, certain parameters would have to be passed to the create events request.

```
Recreate pastEvent? if FALSE
const eventDetails = 
{
userName/userId
eventTitle
eventFeatures
eventDescription
eventOrganizer(s); If more than one, other organizers will have to be tagged, and their consent gotten before event is created
eventTime
eventLocation
maxParticipants
minParticipants
isEventFree/ticketFee
eventDuration
} = req.body
```

## Sample Event <a name = "sample"></a>


```
Passing sample parameters to the createEvent request

const myEvent = new event({
userName: 'test001',
eventTitle: 'KFC Ogba hangout',
eventFeatures: 'Eat', 'gist about new movies', 'know each other', 'talk about Passenger's new album', 'have fun'
eventDescription: 'I am sort of bored and craving KFC Chicken and snacker, lol. I just don't wanna go alone and would like to do so with someone(or people) who would like to do the things listed in the features above. So, yay!! waiting for you!'
eventOrganizer(s): 'test001',
eventTime: '3:00PM WAT',
eventLocation: 'KFC Ogba',
maxParticipants: '4',
minParticipants: '1'
isEventFree/ticketFee: 'No', {splitBills}, {30%:70%}
eventDuration: '3Hrs'
})
```


## Attendiing Events <a name = "attend"></a>
