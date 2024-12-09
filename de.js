function legendParams(g, orient, config, xb, yb, w, h) {
    // Add a group element for the legend
    const legend = g.append('g')
        .attr('class', 'legend')
        .attr('transform', `translate(${xb}, ${yb})`);

    // Set legend orientation
    let legendItems;
    if (orient === 'horizontal') {
        legendItems = legend.selectAll('.legend-item')
            .data(config.items)
            .enter().append('g')
            .attr('class', 'legend-item')
            .attr('transform', (d, i) => `translate(${i * (w + 10)}, 0)`); // Adjust spacing
    } else {
        legendItems = legend.selectAll('.legend-item')
            .data(config.items)
            .enter().append('g')
            .attr('class', 'legend-item')
            .attr('transform', (d, i) => `translate(0, ${i * (h + 10)})`); // Adjust spacing
    }

    // Add rectangles for legend items
    legendItems.append('rect')
        .attr('width', w)
        .attr('height', h)
        .attr('fill', d => d.color);

    // Add text labels for legend items
    legendItems.append('text')
        .attr('x', w + 5)
        .attr('y', h / 2)
        .attr('dy', '0.35em')
        .text(d => d.label)
        .style('font-size', config.fontSize || '10px')
        .style('fill', config.textColor || '#000');

    return legend;
}

// Example usage:
const svg = d3.select('svg'); // Assuming you have an SVG element
const config = {
    items: [
        {label: 'Category 1', color: 'red'},
        {label: 'Category 2', color: 'blue'},
        {label: 'Category 3', color: 'green'}
    ],
    fontSize: '12px',
    textColor: '#333'
};

const legend = legendParams(svg, 'vertical', config, 50, 50, 20, 20);
