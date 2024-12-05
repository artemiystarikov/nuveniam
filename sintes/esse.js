    function geoMercator() {
        // Create a Mercator projection using D3
        const projection = d3.geoMercator()
            .scale(100)  // Adjust the scale as needed
            .translate([480, 250]);  // Center the projection

        return projection;
    }
    