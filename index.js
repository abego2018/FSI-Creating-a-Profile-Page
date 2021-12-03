let content = document.querySelector('.js-generated.content')
let header = document.createElement('h1')
header.setAttribute('class', 'dog-name')
header.append('Rizzo')
content.append(header)

let image = document.createElement('img')
image.setAttribute('class', 'dog-image')
image.setAttribute('src','./assets/rizzo.jpg')


/*outermost Div*/
let containerOne = document.createElement('div')
containerOne.setAttribute('class', 'dog-content')
containerOne.append(image)
content.append(containerOne)

/*Header*/
let bHeader = document.createElement('h3')
bHeader.textContent = 'Description: '

/*second level div*/
let containerTwo = document.createElement('div')
containerTwo.setAttribute('class', 'dog-details')
containerTwo.append(bHeader)
containerOne.append(containerTwo)

/*paragraph*/
let paraDesc = document.createElement('p')
paraDesc.textContent = "This gentle dog is aloof toward her owner, and never comes when called. She always acts as though any stranger she meets will harm her, and dislikes other animals."
containerTwo.append(paraDesc)

/* feedtime list*/

let feedHeader = document.createElement('h3')
feedHeader.textContent = 'Feeding Time'
containerTwo.append(feedHeader)

let feedtimeMorn = document.createElement('li')
feedtimeMorn.textContent = '9:00 AM'
let feedtimeDay = document.createElement('li')
feedtimeDay.textContent = '12:00 PM'
let feedtimeNight = document.createElement('li')
feedtimeNight.textContent = '5:00PM'

containerTwo.append(feedtimeMorn)
containerTwo.append(feedtimeDay)
containerTwo.append(feedtimeNight)
