#!/bin/bash

echo "========================================"
echo "InfiCode Solution - Setup Script"
echo "========================================"
echo ""

echo "[1/3] Installing dependencies..."
npm install

echo ""
echo "[2/3] Building TypeScript files..."
npm run build

echo ""
echo "[3/3] Setup complete!"
echo ""
echo "========================================"
echo "Next Steps:"
echo "========================================"
echo "1. Configure EmailJS credentials in src/config.ts"
echo "2. Update WhatsApp phone number in src/config.ts"
echo "3. Open setup-guide.html for detailed instructions"
echo "4. Open index.html in your browser to view the website"
echo ""
echo "To start development with auto-compile:"
echo "  npm run watch"
echo ""
echo "========================================"
