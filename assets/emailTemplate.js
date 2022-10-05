const emailTemplate = (to, code) => `<div style="font-size:18px;">
<p>Hi ${to}!</p>

<p>Your verification code is</p>
<p style="font-size:25px;">${code}</p>

<p>
  Enter this code in our [website or app] to activate your account.
</p>

<p>Click here [open code in app] to open the [app/portal landing page].</p>

<p>
  If you have any questions, send us an email to support team.
</p>

<p style="margin:0;">We’re glad you’re here!</p>

<br/>
<p>The Speech team</p>
</div>`;

export default emailTemplate;
