let image = [
{
    name: 'Car 1',
    image_src: 'car-1',
    Price: '$14.9 Million'
},
{
    name: 'Car 2',
    image_src: 'car-2',
    Price: '$30 Million'
},
{
    name: 'Car 3',
    image_src: 'car-3',
    Price: '$12 Million'
},
{
    name: 'Car 4',
    image_src: 'car-4',
    Price: '$24 Million'
},
{
    name: 'Car 5',
    image_src: 'car-5',
    Price: '$2 Million'
},
{
    name: 'Car 6',
    image_src: 'car-6',
    Price: '$40 Million'
},
{
    name: 'Car 7',
    image_src: 'car-7',
    Price: '$29 Million'
},
{
    name: 'Car 8',
    image_src: 'car-8',
    Price: '$13 Million'
},
{
    name: 'Car 9',
    image_src: 'car-9',
    Price: '$12.8 Million'
},
{
    name: 'Car 10',
    image_src: 'car-10',
    Price: '$27 Million'
},
{
    name: 'Car 11',
    image_src: 'car-11',
    Price: '$10 Million'
},
{
    name: 'Car 12',
    image_src: 'car-12',
    Price: '$20.5 Million'
}
]
let gallerysection = document.getElementById('wrapper')
let html ="";
image.forEach(e => {
    html += `
    <div class="img-card border-5 my-5 border-dark  bg-light text-center ml-5 h-100  d-flex flex-wrap rounded-3 shadow-lg">
    <div class="img-image w-auto">
        <img src="images/${e.image_src}.jpg" alt="Car 1 class="rounded-3" />
    </div>
    <div class="image-info ">
        <p class="h-25 text-sm text-muted bg-light rounded-3 px-3">Name: ${e.name}<br />
        Price: ${e.Price}</p>
        
    </div>
</div>`

console.log(e)

gallerysection.innerHTML = html
})
