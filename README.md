# Welcome to my Shop Assistant!

This project is my internship assignment at DEPT®: building a **Shopify-powered Shopping Assistant** using the Storefront MCP AI Agent framework with Remix (React Router).  
The assistant will allow users to search products, add them to a universal cart, and initiate checkout — integrated with a DEPT Shopify instance for demo purposes.

---

### Installation

Clone the repo and install the dependencies:

```bash
git clone https://github.com/NikolAlexandrova/my-shop-assistant.git
cd my-shop-assistant
npm install
```

Environment Variables:
```bash
cp .env.example .env
```
Required variables:
- SHOPIFY_MCP_TOKEN – API token for authenticating with Shopify MCP
- SHOPIFY_MCP_BASE_URL – Base URL of the MCP server
- STOREFRONT_API_TOKEN – (Optional) Storefront API token if querying directly
- SESSION_SECRET – Session encryption key
- DATABASE_URL – Database connection string (e.g., SQLite or Postgres)

### Development

Start the development server with HMR:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.
