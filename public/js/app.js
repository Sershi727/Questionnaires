document.getElementById('survey-form').addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData.entries());

  try {
    const response = await fetch('/api/survey', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      alert('Survey submitted successfully!');
    } else {
      alert('Failed to submit survey.');
    }
  } catch (error) {
    console.error('Error:', error);
  }
});
