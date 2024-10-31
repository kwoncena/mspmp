const items = [
    { title: "Classic Park Bench", description: "Hand-crafted from 100% authentic, weathered New York wood – this isn’t just a bench; it’s a piece of the city’s rich storytelling. Each scratch, knot, and splinter holds tales of bustling street corners, pigeon picnics, and rainy afternoons. Aged to perfection by nature and nurtured by the finest city grit, this bench practically whispers urban secrets into your ear. Embrace the beauty of NYC’s rustic charm, and remember: splinters are complimentary – a little piece of the city, just for you!", price: 1500, image: "bench.jpg" },
    { title: "Historic Statue", description: "Artisan-crafted statue with a patina of history – a true homage to the legends of old! Choose from an array of distinguished figures: President, Governor, Admiral, or Soldier. Each statue comes meticulously aged to exude gravitas, boasting that timeless ‘seen-it-all’ look that says, I’ve weathered every storm, from city soot to pigeon tributes. Bring a bit of history to your space and let these iconic figures inspire your everyday battles (and add a dash of old-world elegance)!", price: 12000, image: "statue.jpg" },
    { title: "Premium Grass Patch", description: "Limited-Edition 5x5 Grass Patch – available in a range of luxurious sizes! Perfect for adding a slice of nature to your life, this premium turf is handpicked from only the finest patches of urban greenery. Each blade is cultivated to perfection, offering that coveted 'freshly trampled' look unique to city parks. Ideal for picnics, sunbathing, or just staring at thoughtfully, this grass patch brings the great outdoors right to your door – minus the squirrels and city pigeons. Get yours before it’s mown out of stock!", price: 300, image: "grass.jpg" },
    { title: "City Pigeon", description: "Find Your Forever Pigeon – Because Friendship Takes Flight! Get connected (or, well, chosen) by your very own forever pigeon! Your new feathered friend will always be just a mysterious wing-flap away. You and your pigeon will form an unforgettable bond – one that might surprise you at any moment! Remember, pigeons are picky; we can’t guarantee you'll be chosen, and we are not responsible if your preferred pigeon finds another bestie.", price: 25, image: "pigeon.jpg" },
    { title: "Squirrel Residency License", description: "Sponsor a Squirrel – and enjoy a whole year of charming (and mildly chaotic) visits! For just a small investment, you'll be supporting one of the park’s furriest residents, who will occasionally swing by your chosen spot to say hello (or to casually swipe a snack). Your sponsored squirrel comes with a unique personality, from bold acorn-hoarders to shy tree-huggers, each with a knack for lifting spirits and, possibly, sandwich wrappers. Make a friend for life – even if they only remember you when peanuts are involved!", price: 200, image: "squirrel.jpg" },
    { title: "Camellia", description: "Add a Pop of Color with a Beautiful Flowering Shrub – your garden’s new showstopper! This vibrant, easy-going shrub brings a splash of blooms that practically sing with color, making every passerby stop and admire. Expertly cultivated for resilience, it’s the perfect blend of urban toughness and garden elegance. Whether you’ve got a cozy city plot or a sprawling backyard, this flowering shrub will thrive and bloom, no matter how unpredictable your gardening skills might be!", price: 40, image: "camellia.jpg" },
    { title: "Daffodil", description: "Bring Spring Home with Bright Yellow Daffodils – the ultimate symbol of renewal and fresh beginnings! These sun-kissed blooms add an instant burst of warmth and joy, turning any corner of your space into a cheerful haven. Hardy yet delicate, each daffodil stands tall, spreading a feeling of hope and optimism with every golden petal. Perfect for gardens, windowsills, or anywhere you need a reminder that brighter days are always around the corner!", price: 15, image: "daffodil.jpg" },
    { title: "Hydrangea", description: "Enchant with Color-Changing Blooms – nature’s own mood ring for your garden! These large, lush flowers shift hues based on soil acidity, bringing a magical transformation right to your doorstep. From soft pinks to vibrant blues, every bloom tells a story of its surroundings, creating a dynamic, ever-changing display that never gets old. Perfect for the gardener who loves a surprise, these flowers keep things interesting and beautiful season after season!", price: 50, image: "hydrangea.jpg" },
    { title: "Redbud Tree", description: "Transform Your Space with a Lovely Tree Dressed in Vibrant Pink Blossoms! As early spring arrives, this enchanting tree bursts to life with a profusion of pink petals, turning your garden into a scene straight out of a fairytale. Perfect for adding a touch of elegance and romance, it offers a stunning display that signals the end of winter and the start of something beautiful. Easy to care for and delightfully eye-catching, it’s the perfect choice for bringing a bit of magic to your outdoor space!", price: 300, image: "redbud.jpg" },
    { title: "Witch Hazel", description: "Meet the Charming 'Not-Quite-a-Witch' Tree – a small but mighty addition to your garden! While it might not cast any spells, this delightful tree does bring vibrant color and a touch of natural healing to your space. Known for its subtle medicinal properties, it might just help soothe a cough or two, but don't expect it to brew potions! With its vibrant leaves and compact size, it’s the perfect way to add a hint of mystery and wellness to your garden – magical vibes included, but results may vary!", price: 45, image: "witchhazel.png" },
    { title: "Jazz Band Performance", description: "Book a Live Jazz Band – Ready to Swing Wherever, Whenever! Whether it’s a rooftop soirée, an intimate garden gathering, or a surprise serenade in your living room, this band’s got your back (and your beat). With smooth sounds on-demand, they’ll bring the jazz vibes to you anytime, anywhere. So sit back, relax, and let the music come to you – perfect harmony is only a booking away!", price: 5000, image: "jazzband.jpg" },
    { title: "Fountain", description: "Enhance Your Space with a Decorative Fountain – the Perfect Finishing Touch for Any Garden or Park! This elegant fountain brings a sense of tranquility and charm, with gently cascading water that soothes and refreshes. Designed to complement any outdoor setting, it adds a timeless appeal, turning any garden nook or park corner into a peaceful retreat. Easy to install and a delight to watch, this fountain invites you to pause, relax, and enjoy the beauty of flowing water right at your doorstep.", price: 8000, image: "fountain.jpg" },
    { title: "English Elm Tree", description: "Introduce a Touch of Timeless Grandeur with a Towering English Elm – the Epitome of Classic Landscapes. This graceful giant stands tall and proud, lending an air of elegance and history to any setting. With its arching branches and lush canopy, this elm isn't just a tree; it's a legacy. Known for its resilience and long life, this old soul will likely stand sentinel long after we’re gone, making it the perfect addition for those looking to leave a lasting mark on the landscape.", price: 700, image: "english_elmtree.jpg" },
    { title: "American Elm Tree", description: "Add a Robust American Icon to Your Collection with the Majestic American Elm – the Perfect Companion to Your English Elm! This classic American species brings strength and charm to any landscape, with its sweeping branches and unmistakable silhouette. Not only will it outlast generations (and, yes, probably you), but it will also be a stately presence for decades to come. While it may not grow money, it certainly grows character, making it an ideal addition to any timeless garden.", price: 750, image: "americanelmtree.jpg" },
    { title: "Dog Poop Perfume", description: "Introducing Dog Poop Perfume – For Those Who Dare to Make a Statement! We’ve meticulously extracted the ‘essence’ of that distinct doggy aroma, capturing its unforgettable character for the boldest among us. This unique perfume is bottled with precision and a touch of humor. Warning: Apply sparingly – a little goes a long way!", price: 20, image: "dog_shit.jpg" },
    { title: "Reserve Table at Shake Shack", description: "Invest in a Table – and Start Earning, Just Like Real Estate! Why stop at houses? With our exclusive table reservation service at Shake Shack, you can secure a prime table and rent it out to others who crave that perfect spot. Ideal for those who know the value of a seat with a view, this opportunity lets you turn a simple table into a premium experience for others – and a profit for you. Grab your spot now and watch your ‘table estate’ grow!", price: 100, image: "table.jpg" },
    { title: "Exclusive Seating Spot", description: "Exclusive Seating Spot – Reserve a Seat That’s Yours, and Yours Alone! With our unique subscription service, you’ll always have a guaranteed place to sit – no more searching or waiting in line. This spot is exclusively yours, giving you VIP status every time you visit. Subscribe now to claim your permanent place in style, where only you can take a seat!", price: 200, image: "exclusive_spot.jpg" },
    { title: "Madison Square Park Air", description: "Bring Home a Breath of the Big Apple with a Fresh Can of Authentic, Organic, Locally-Grown Madison Square Park Air! Captured straight from the heart of NYC, this can contains the pure essence of Madison Square Park – a mix of city hustle, lush greenery, and a hint of hot dog stand. Perfect as a quirky keepsake or a taste of urban nostalgia, it’s like taking a piece of the park with you, wherever you go. Fresh, invigorating, locally sourced, and 100% authentic!", price: 5, image: "park_air.jpg" },
    { title: "Fallen Leaf", description: "Capture the Essence of Autumn with a Handpicked Fallen Leaf! Each leaf is collected from the park, preserving the unique colors and textures that only fall can bring. From warm reds to vibrant yellows, this natural memento embodies the fleeting beauty of the season. Perfect for adding a touch of autumn to your home or as a thoughtful keepsake, each leaf is a gentle reminder of nature’s artistry.", price: 1, image: "fallenleaf.jpg" }
  ];
  
  const cart = [];
  
  // Display items on the page in a grid format
  function displayItems() {
    const itemsContainer = d3.select("#items");
    itemsContainer.selectAll("*").remove();
  
    items.forEach((item, index) => {
      const itemCard = itemsContainer.append("div").attr("class", "item-card");
  
      // Item image
      itemCard.append("div")
        .attr("class", "item-image")
        .style("background-image", `url(${item.image})`);
  
      // Item title and description
      itemCard.append("h2")
        .attr("class", "item-title")
        .text(item.title);
  
      itemCard.append("p")
        .attr("class", "item-description")
        .text(item.description);
  
      // Price and Add to Cart button
      itemCard.append("p")
        .attr("class", "item-price")
        .text(`Price: $${item.price}`);
  
      itemCard.append("button")
        .text("Add to Cart")
        .on("click", () => addToCart(index));
    });
  }
  
  // Add item to cart with quantity handling
  function addToCart(index) {
    const item = items[index];
    const existingItem = cart.find(cartItem => cartItem.title === item.title);
    
    if (existingItem) {
      existingItem.quantity++;
    } else {
      cart.push({ ...item, quantity: 1 });
    }
    
    updateCartCounter();
    displayCartItems();
    alert("Item added to cart!");
  }
  
  // Update cart counter
  function updateCartCounter() {
    const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById("cart-counter").innerText = totalQuantity;
  }
  
  // Toggle the cart sidebar
  function toggleCart() {
    const cartSidebar = document.getElementById("cart-sidebar");
    cartSidebar.classList.toggle("show");
  }
  
  // Display cart items in the sidebar with quantity controls
  function displayCartItems() {
    const cartItemsContainer = document.getElementById("cart-items");
    cartItemsContainer.innerHTML = "";
  
    cart.forEach((item, index) => {
      const itemDiv = document.createElement("div");
      itemDiv.classList.add("cart-item");
      itemDiv.innerHTML = `
        <p><strong>${item.title}</strong></p>
        <p>Price: $${item.price} x ${item.quantity}</p>
        <div class="quantity-controls">
          <button onclick="updateQuantity(${index}, -1)">-</button>
          <span>${item.quantity}</span>
          <button onclick="updateQuantity(${index}, 1)">+</button>
        </div>
        <p>Total: $${item.price * item.quantity}</p>
      `;
      cartItemsContainer.appendChild(itemDiv);
    });
  
    // Display overall cart total
    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const totalDiv = document.createElement("div");
    totalDiv.classList.add("cart-total");
    totalDiv.innerHTML = `<p><strong>Total Price: $${totalPrice}</strong></p>`;
    cartItemsContainer.appendChild(totalDiv);
  }
  
  // Update quantity of items in cart
  function updateQuantity(index, amount) {
    if (cart[index].quantity + amount > 0) {
      cart[index].quantity += amount;
    } else {
      cart.splice(index, 1); // Remove item if quantity goes to 0
    }
  
    updateCartCounter();
    displayCartItems();
  }
  
  // Open the checkout modal
  function openCheckout() {
    document.getElementById("checkout-modal").style.display = "block";
  }
  
  // Close the checkout modal
  function closeCheckout() {
    document.getElementById("checkout-modal").style.display = "none";
  }
  
  // Handle the checkout form submission
  function submitOrder() {
    const form = document.getElementById("checkout-form");
    form.onsubmit = function(event) {
      event.preventDefault();
      alert("Order placed successfully!");
      closeCheckout();
      clearCart();
    };
  }
  
  // Clear the cart after checkout
  function clearCart() {
    cart.length = 0;
    updateCartCounter();
    displayCartItems();
  }
  
  // Initial display of items
  displayItems();
  