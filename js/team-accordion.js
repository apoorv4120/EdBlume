/**
 * Team Accordion Functionality
 * Mobile-only accordion (below 700px breakpoint)
 * - Contracted: Shows only bio-excerpt
 * - Expanded: Shows both bio-excerpt and bio-full
 */

class TeamAccordion {
    constructor() {
        this.breakpoint = 700;
        this.init();
    }

    init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setupAccordion());
        } else {
            this.setupAccordion();
        }

        // Listen for window resize
        window.addEventListener('resize', () => this.handleResize());
    }

    setupAccordion() {
        // Only setup accordion on mobile (below 700px)
        if (window.innerWidth > this.breakpoint) {
            this.showFullContent();
            return;
        }

        this.setupMobileAccordion();
    }

    setupMobileAccordion() {
        const teamBios = document.querySelectorAll('.team-bio');
        
        teamBios.forEach((bio, index) => {
            // Create the accordion structure
            this.createAccordionStructure(bio, index + 1);
            
            // Add click event listener
            const button = bio.querySelector('.view-more-btn');
            if (button) {
                button.addEventListener('click', (e) => this.handleAccordionClick(e, bio));
            }
        });
    }

    createAccordionStructure(bio, memberIndex) {
        // Get all paragraphs
        const paragraphs = bio.querySelectorAll('p');
        
        if (paragraphs.length < 2) return; // Need at least 2 paragraphs for excerpt/full

        // Create bio-excerpt (first paragraph)
        const excerpt = document.createElement('p');
        excerpt.className = 'bio-excerpt';
        excerpt.textContent = paragraphs[0].textContent;

        // Create bio-full (remaining paragraphs)
        const fullContent = document.createElement('div');
        fullContent.className = 'bio-full';
        
        // Add all paragraphs except the first one
        for (let i = 1; i < paragraphs.length; i++) {
            const p = document.createElement('p');
            p.textContent = paragraphs[i].textContent;
            fullContent.appendChild(p);
        }

        // Create view more button
        const button = document.createElement('button');
        button.className = 'view-more-btn';
        button.setAttribute('data-target', memberIndex);
        button.innerHTML = 'View More <span style="margin-left: 4px;">↓</span>';

        // Clear existing content and add new structure
        bio.innerHTML = '';
        bio.appendChild(excerpt);
        bio.appendChild(fullContent);
        bio.appendChild(button);

        // Set initial state (contracted)
        this.setContractedState(bio);
    }

    setContractedState(bio) {
        const excerpt = bio.querySelector('.bio-excerpt');
        const full = bio.querySelector('.bio-full');
        const button = bio.querySelector('.view-more-btn');

        if (excerpt) excerpt.style.display = 'block';
        if (full) full.style.display = 'none';
        if (button) {
            button.innerHTML = 'View More <span style="margin-left: 4px;">↓</span>';
            button.classList.remove('expanded');
        }
        bio.classList.remove('expanded');
    }

    setExpandedState(bio) {
        const excerpt = bio.querySelector('.bio-excerpt');
        const full = bio.querySelector('.bio-full');
        const button = bio.querySelector('.view-more-btn');

        if (excerpt) excerpt.style.display = 'block';
        if (full) full.style.display = 'block';
        if (button) {
            button.innerHTML = 'View Less <span style="margin-left: 4px;">↑</span>';
            button.classList.add('expanded');
        }
        bio.classList.add('expanded');
    }

    handleAccordionClick(event, bio) {
        event.preventDefault();
        
        const isExpanded = bio.classList.contains('expanded');
        
        if (isExpanded) {
            this.setContractedState(bio);
        } else {
            this.setExpandedState(bio);
        }
    }

    showFullContent() {
        // On desktop, show all content without accordion
        const teamBios = document.querySelectorAll('.team-bio');
        
        teamBios.forEach(bio => {
            const excerpt = bio.querySelector('.bio-excerpt');
            const full = bio.querySelector('.bio-full');
            const button = bio.querySelector('.view-more-btn');

            // Show all content
            if (excerpt) excerpt.style.display = 'block';
            if (full) full.style.display = 'block';
            if (button) button.style.display = 'none';
            
            bio.classList.remove('expanded');
        });
    }

    handleResize() {
        if (window.innerWidth > this.breakpoint) {
            // Switch to desktop mode
            this.showFullContent();
        } else {
            // Switch to mobile mode
            this.setupMobileAccordion();
        }
    }
}

// Initialize the accordion when script loads
const teamAccordion = new TeamAccordion(); 