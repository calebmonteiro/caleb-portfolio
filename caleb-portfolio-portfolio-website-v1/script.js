document.addEventListener('DOMContentLoaded', () => {
    const typewriterElement = document.getElementById('resume-typewriter');
    const contactInfoElement = document.getElementById('contact-info');
    const typingDelay = 50; // ms

    async function typeChar(element, char) {
        return new Promise(resolve => {
            element.innerHTML += char;
            setTimeout(resolve, typingDelay / 2); // Faster for individual chars
        });
    }

    async function typeString(element, text, tagName = 'p', className = '') {
        const targetElement = tagName ? document.createElement(tagName) : element;
        if (tagName) { // if a new element is created, add class and append it
            if (className) targetElement.className = className;
            element.appendChild(targetElement);
        }
        
        for (const char of text) {
            await typeChar(targetElement, char);
        }
        // If we created a new element, ensure it's the one we return for chaining if needed
        return targetElement; 
    }

    async function typeLineBreak(element) {
        element.appendChild(document.createElement('br'));
    }

    async function typeSectionTitle(text) {
        const titleElement = document.createElement('h2');
        typewriterElement.appendChild(titleElement);
        await typeString(titleElement, text, null); // Type directly into the h2
        await typeLineBreak(typewriterElement);
    }
    
    async function typeSubHeading(text) {
        const subHeadingElement = document.createElement('h3');
        typewriterElement.appendChild(subHeadingElement);
        await typeString(subHeadingElement, text, null);
        await typeLineBreak(typewriterElement);
    }

    async function displayResumeData(data) {
        // Name
        const nameElement = document.createElement('h1');
        typewriterElement.appendChild(nameElement);
        await typeString(nameElement, data.name, null);
        await typeLineBreak(typewriterElement);

        // Contact Info (Header)
        if (contactInfoElement && data.contact) {
            let contactHtml = '';
            if (data.contact.phone) contactHtml += `${data.contact.phone} | `;
            if (data.contact.email) contactHtml += `<a href="mailto:${data.contact.email}">${data.contact.email}</a> | `;
            if (data.contact.linkedin) contactHtml += `<a href="https://${data.contact.linkedin}" target="_blank">LinkedIn</a>`;
            contactInfoElement.innerHTML = contactHtml; // Populate header directly, no typing effect
        }
        
        // Contact (in typewriter section)
        await typeSectionTitle("Contact");
        if (data.contact) {
            if (data.contact.phone) await typeString(typewriterElement, `Phone: ${data.contact.phone}`);
            if (data.contact.email) await typeString(typewriterElement, `Email: ${data.contact.email}`);
            if (data.contact.linkedin) await typeString(typewriterElement, `LinkedIn: ${data.contact.linkedin}`);
            // Removed typeLineBreak(typewriterElement); as typeSectionTitle already adds one
        }

        // Education
        await typeSectionTitle("Education");
        for (const edu of data.education) {
            await typeString(typewriterElement, `${edu.institution}`);
            await typeString(typewriterElement, `${edu.degree}`);
            await typeString(typewriterElement, `Graduation: ${edu.graduationDate}`);
            if (edu.honors) await typeString(typewriterElement, `Honors: ${edu.honors}`);
            if (edu.gpa) await typeString(typewriterElement, `GPA: ${edu.gpa}`);
            // Removed typeLineBreak(typewriterElement); as typeString creates <p> which has bottom margin.
            // And a line break is added after the entire Education section if needed.
        }
        // Adding a single line break after the whole section if there were entries
        if (data.education.length > 0) await typeLineBreak(typewriterElement);


        // Technical Skills
        await typeSectionTitle("Technical Skills");
        for (const [category, skills] of Object.entries(data.technicalSkills)) {
            await typeSubHeading(category.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())); // Add space before caps
            const skillsP = document.createElement('p');
            typewriterElement.appendChild(skillsP);
            await typeString(skillsP, skills.join(', '), null);
            // Removed typeLineBreak(typewriterElement); as typeSubHeading adds one, and <p> has margin.
        }
        // Removed typeLineBreak(typewriterElement); // Already one after section title, and one after last subheading

        // Experience
        await typeSectionTitle("Experience");
        for (const exp of data.experience) {
            await typeSubHeading(`${exp.role} at ${exp.company}`);
            await typeString(typewriterElement, `${exp.location} | ${exp.dates}`);
            const ul = document.createElement('ul');
            typewriterElement.appendChild(ul);
            for (const res of exp.responsibilities) {
                const li = document.createElement('li');
                ul.appendChild(li);
                await typeString(li, res, null);
            }
            // Removed typeLineBreak(typewriterElement);
        }

        // Projects (from resume.json for typewriter section)
        await typeSectionTitle("Projects (Summary)");
        for (const proj of data.projects) {
            await typeSubHeading(`${proj.name} (${proj.date})`);
            if (proj.description && proj.description.length > 0) {
                const ul = document.createElement('ul');
                typewriterElement.appendChild(ul);
                for (const desc of proj.description) {
                    const li = document.createElement('li');
                    ul.appendChild(li);
                    await typeString(li, desc, null);
                }
            } else {
                await typeString(typewriterElement, "No description available.");
            }
            // Removed typeLineBreak(typewriterElement);
        }
        
        // Collegiate Activities
        await typeSectionTitle("Collegiate Activities");
        for (const activity of data.collegiateActivities) {
            await typeSubHeading(`${activity.role} - ${activity.organization}`);
            await typeString(typewriterElement, activity.dates);
            if (activity.responsibilities && activity.responsibilities.length > 0) {
                const ul = document.createElement('ul');
                typewriterElement.appendChild(ul);
                for (const res of activity.responsibilities) {
                    const li = document.createElement('li');
                    ul.appendChild(li);
                    await typeString(li, res, null);
                }
            }
            // Removed typeLineBreak(typewriterElement);
        }

        typewriterElement.innerHTML += "<p>--- End of Resume ---</p>";
    }

    async function fetchResumeAndStart() {
        try {
            const response = await fetch('resume.json');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const resumeData = await response.json();
            // Clear placeholder or loading text
            typewriterElement.innerHTML = ''; 
            await displayResumeData(resumeData);
        } catch (error) {
            console.error("Error fetching or parsing resume.json:", error);
            typewriterElement.innerHTML = `<p style="color: red;">Error loading resume data: ${error.message}</p>`;
        }
    }

    fetchResumeAndStart();
});
