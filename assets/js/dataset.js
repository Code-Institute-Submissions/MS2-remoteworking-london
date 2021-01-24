const gAPI = "AIzaSyCpRl6zH6f6HELDSNwfvLzNZQj_NPaOcZs";

const request =
    [
        {
            placeId: "ChIJP_8Q3TEDdkgRRT5ojRyPikM",
            fields: ["name", "formatted_address", "place_id", "geometry",],
            title: "The Dock @ Tobacco Dock",
            area: "East London",
            para: "In the heart of Tobacco Dock in Wapping, East London, sits a co-working space a stone’s throw from the hustle of the city. Nestled between the exposed brick arches, The Dock offers a spacious buzz of atmosphere full with startups, freelancers and colleagues. <br><br>Whilst just 1 stop to Bank DLR, or 10 minute walk from Tower Hill, The Dock offers hot-desks, less hot (fixed) desks, offices and meeting rooms for a decent rate (desks starting at £20 a day).<br><br>When restrictions ease and summer begins, there’s also a rooftop bar with great views over London. ",
            photo_reference: "./assets/images/listings/thedock.png",
            posted: new Date('2020-12-25'),
            web: "https://www.tobaccodocklondon.com/workspaces/",
            cat_icon: 'desktop'
        }, {
            placeId: "ChIJNYMc2XQPdkgRNrDf5jzuVSU",
            fields: ["name", "formatted_address", "place_id", "geometry"],
            title: "Rude Health Putney",
            area: "West London",
            para: "Whilst the priority in this fine eatery is serving healthy breakfast, lunch & caffeine packed full with local, fresh and seasonal ingredients, the Café also boasts a rather delightful remote working atmosphere - plenty of proper tables and chairs with plug sockets galore.<br><br>Come down early though - seats are limited, even more so given the current restrictions. We recommend rocking up early doors, staying for lunch, and then burning it off with a brisk walk along the River before heading home, or back for round two (if you’re a two lunch kind of person like me …).",
            photo_reference: "./assets/images/listings/rudehealth.jpg",
            posted: new Date('2020-12-01'),
            web: "https://rudehealth.com/rude-health-cafe/ ",
            cat_icon: 'coffee'
        },
        {
            placeId: "ChIJq6pq8FgDdkgR00mfXSJQ_lE",
            fields: ["name", "formatted_address", "place_id", "geometry"],
            title: "Uncommon",
            area: "North London",
            para: "Despite what their name might suggest, Uncommon Highbury & Islington features as part one of a four-part series of spacious and beautifully designed workspaces (check out those in Borough, Fulham and Liverpool St also).<br><br>You guessed it - they provide all the mod-cons one comes to expect with a co-working space - phone booths, meeting rooms, showers, easy transport links and delicious hipster-grade coffee. <br><br>Alongside the full-time offerings, Uncommon also offers day and weekend passes from £24 per day. Something which in this new normal is... increasingly common.",
            photo_reference: "./assets/images/listings/uncommon.jpg",
            posted: new Date('2020-12-31'),
            web: "https://uncommon.co.uk/",
            cat_icon: 'building'
        },
        {
            placeId: "ChIJC9BYx0QDdkgRM8cEOlJ-cgQ",
            fields: ["name", "formatted_address", "place_id", "geometry"],
            title: "Work.Life Bermondsey",
            area: "South London",
            para: "If you’re looking for a central-London base to work alongside other like-minded freelance and remote working types, it doesn’t get much more central than this. Oh and let’s not forget that lunch is sorted courtesy of Borough Market, conveniently located on the doorstep of Work.Life Bermondsey.<br></br>Since this is a co-working space, you are going to need to part with a little cash - prices here start at £310 per month for hot-desk rights, or for those who just need to be out of the house for a few days a week, the £4.50 per hour flex package will suit you nicely.<br><br>In addition to it’s easy transport links across London and beyond, the space also offers bookable meeting rooms, bike storage, showers, social events and lunch & learns, and since it’s an office space, is also able to open during the current UK COVID restrictions.",
            photo_reference: "./assets/images/listings/worklife.jpg",
            posted: new Date('2020-12-31'),
            web: "https://work.life/locations/bermondsey/",
            cat_icon: 'building'
        },
        {
            placeId: "ChIJ2a2DyE0bdkgRNzoEi9LTGo8",
            fields: ["name", "formatted_address", "place_id", "geometry"],
            title: "Headspace",
            area: "South London",
            para: "On the smaller side of co-working offices, Headspace is perfect for those looking for a part-time base in East London. Close to the City and Silicon Roundabout (Old Street), this co-working space offers everything you would expect from such a building, but at a flexible rate - starting at just £40pcm for Headspace membership.<br><br>Suited to freelancers, remote-workers and startups who need to collaborate, Headspace is great for solo work or scaling your startup.<br><br>Oh did we mention they offer free breakfast five days a week? Count me in.",
            photo_reference: "./assets/images/listings/headspace.jpg",
            posted: new Date('2020-12-31'),
            web: "https://www.headspacegroup.co.uk/",
            cat_icon: 'building'
        },
    ];