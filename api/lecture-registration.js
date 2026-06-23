export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const privateApiKey = process.env.RESEND_API;

  if (!privateApiKey) {
    return res.status(500).json({ error: 'Server missing private API key.' });
  }

  const {
    role,
    fullName,
    email,
    phone,
    organization,
    roleTitle,
    interests,
    hopeToLearn,
  } = req.body || {};

  if (!role || !fullName || !email || !interests) {
    return res.status(400).json({ error: 'Missing required registration fields.' });
  }

  const html = `
    <h2>New Lecture Registration</h2>
    <p><strong>Role:</strong> ${escapeHtml(role)}</p>
    <p><strong>Full Name:</strong> ${escapeHtml(fullName)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(phone || 'N/A')}</p>
    <p><strong>Organization:</strong> ${escapeHtml(organization || 'N/A')}</p>
    <p><strong>Role Title:</strong> ${escapeHtml(roleTitle || 'N/A')}</p>
    <p><strong>Interests:</strong> ${escapeHtml(interests)}</p>
    <p><strong>Hope To Learn:</strong> ${escapeHtml(hopeToLearn || 'N/A')}</p>
  `;

  try {
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${privateApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Granville Tech <onboarding@resend.dev>',
        to: ['info@granvilletech.co'],
        reply_to: email,
        subject: `Lecture Registration - ${fullName}`,
        html,
      }),
    });

    const responseBody = await resendResponse.json().catch(() => ({}));

    if (!resendResponse.ok) {
      const resendError =
        responseBody?.message || responseBody?.error || `Resend error (${resendResponse.status})`;
      return res.status(502).json({ error: resendError });
    }

    return res.status(200).json({ ok: true, id: responseBody?.id || null });
  } catch (error) {
    return res.status(500).json({ error: error?.message || 'Failed to send registration email.' });
  }
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
