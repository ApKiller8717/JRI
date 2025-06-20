// Product data structure
const products = {
    'product1': {
        name: 'Product Name',
        description: 'Detailed product description goes here. This is a sample description that explains the product features and benefits.',
        images: {
            main: 'assets/images/services/services-single/ser3.jpg',
            secondary: 'assets/images/services/services-single/ser4.jpg',
            additional: 'assets/images/services/services-single/ser1.jpg'
        },
        specifications: [
            { title: 'Material', value: 'High-grade stainless steel' },
            { title: 'Dimensions', value: '100mm x 50mm x 25mm' },
            { title: 'Weight', value: '500g' },
            { title: 'Color', value: 'Silver' },
            { title: 'Warranty', value: '2 years' },
            { title: 'Certification', value: 'ISO 9001:2015' }
        ]
    }
    // Add more products as needed
};

// Function to update product details
function updateProductDetails(productId) {
    const product = products[productId];
    if (!product) return;

    // Update breadcrumb and title
    document.querySelector('.page-title').textContent = product.name;
    document.querySelector('.breadcrumbs-area li:last-child').textContent = product.name;

    // Update description
    document.querySelector('.desc-part').textContent = product.description;

    // Update images
    document.querySelector('.col-lg-6.col-md-6.sm-mb-30 img').src = product.images.main;
    document.querySelector('.col-lg-6.col-md-6 img').src = product.images.secondary;
    document.querySelector('.services-img.mb-35 img').src = product.images.additional;

    // Update specifications
    const specsList = document.querySelector('.check-lists3');
    specsList.innerHTML = ''; // Clear existing specs

    // Create modern table for specifications
    const tableHTML = `
        <div class="specs-table">
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>Specification</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    ${product.specifications.map(spec => `
                        <tr>
                            <td><strong>${spec.title}</strong></td>
                            <td>${spec.value}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
    `;

    // Replace the old specs list with the new table
    specsList.outerHTML = tableHTML;
}

// Add CSS for modern table design
const style = document.createElement('style');
style.textContent = `
    .specs-table {
        margin: 30px 0;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    }
    
    .specs-table table {
        width: 100%;
        border-collapse: collapse;
        background: white;
    }
    
    .specs-table th {
        background: #2b70fa;
        color: white;
        padding: 15px;
        text-align: left;
        font-weight: 500;
    }
    
    .specs-table td {
        padding: 15px;
        border-bottom: 1px solid #eee;
    }
    
    .specs-table tr:hover {
        background-color: #f8f9fa;
    }
    
    .specs-table tr:last-child td {
        border-bottom: none;
    }
    
    @media (max-width: 768px) {
        .specs-table {
            margin: 20px 0;
        }
        
        .specs-table th,
        .specs-table td {
            padding: 10px;
        }
    }
`;
document.head.appendChild(style);

// Initialize with default product
document.addEventListener('DOMContentLoaded', () => {
    updateProductDetails('product1');
}); 