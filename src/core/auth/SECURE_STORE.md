# Secure Storage of `access_token` in JavaScript Clients

It's important to understand that storing tokens client-side always carries some level of risk. For long-term storage (i.e., persisting after the browser is closed), here are two main options to consider:

## 1. HTTP-Only Cookies (Preferred)

### Why?

Cookies with the `HttpOnly` flag cannot be accessed via JavaScript, reducing the risk of XSS (Cross-Site Scripting) attacks. You can also set the `Secure` flag to ensure the cookie is only sent over HTTPS, and the `SameSite` flag to control cross-origin requests.

### How?

When the user logs in, the backend should set the `access_token` in an `HttpOnly` cookie. This cookie will be sent automatically with every request to the server that matches the cookie's domain.

Example:

```javascript
// In your server, set the cookie with HttpOnly, Secure, and SameSite
res.cookie('access_token', token, {
  httpOnly: true,
  secure: true, // Only use this if your app is served over HTTPS
  sameSite: 'Strict',
});
```

### Pros:

- Resistant to XSS attacks.
- Automatically sent with requests, no need to manually add the token in your code.

### Cons:

- More challenging to implement cross-origin requests if you have multiple domains (requires careful SameSite settings or CORS headers).

## 2. Local Storage (Less Secure)

### Why?

`LocalStorage` allows you to persist data across browser sessions and is easy to implement. However, it is vulnerable to XSS attacks, which can expose your tokens if an attacker injects malicious scripts into your app.

### How?

You can save the `access_token` in `localStorage` and retrieve it when necessary. You need to ensure that your app has strong XSS protections in place, such as using Content Security Policy (CSP) headers, and sanitizing all input/output.

Example:

```javascript
localStorage.setItem('access_token', token);
```

### Pros:

- Simple and easy to implement.
- Persists across sessions.

### Cons:

- Vulnerable to XSS attacks (an attacker can read the token from `localStorage`).
- Requires manual management (sending token in headers with every request).

## 3. Session Storage (Safer but Session-Limited)

### Why?

`sessionStorage` is similar to `localStorage`, but the data only persists for the duration of the page session. Once the tab or browser is closed, the token is cleared. It’s a good compromise if you don’t need the token after the session ends and want to minimize risk.

### How?

Same as `localStorage`, but use `sessionStorage`.

Example:

```javascript
sessionStorage.setItem('access_token', token);
```

### Pros:

- Slightly safer than `localStorage` since the data is cleared when the browser is closed.

### Cons:

- Still vulnerable to XSS attacks.
- Does not persist if the browser or tab is closed, so the user may need to log in again after closing the tab.

---

## Best Practices for Secure Token Storage:

1. **Use HTTP-Only cookies** for storing sensitive tokens when possible.
2. **Implement strong XSS protections**, including sanitizing user input, using CSP headers, and validating input on both client and server sides.
3. **Rotate tokens regularly** and set appropriate expiration times for your tokens to reduce the impact of a token being compromised.
4. **Use Refresh Tokens** for long-term access, with access tokens being short-lived (typically stored in-memory) and refresh tokens stored in an `HttpOnly` cookie.

By using these methods, you can minimize risks when storing `access_token` client-side.
