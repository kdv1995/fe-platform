# PDF Summary Generator

A modern web application that allows users to upload PDF documents and receive AI-generated summaries using OpenAI's API. The application also maintains a history of the last 5 processed documents.

## Tech Stack

- **Frontend Framework**: React 19 with TypeScript
- **Build Tool**: Vite with SWC
- **State Management**: Tanstack Query
- **UI Components**: Ant Design
- **Styling**: Tailwind CSS
- **Routing**: React Router v7
- **HTTP Client**: Axios
- **Deployment**: Vercel

## Features

- **PDF Upload**: Secure and efficient PDF file upload system
- **AI Summary Generation**: Integration with OpenAI's API for intelligent document summarization
- **History Tracking**: Display of the last 5 processed documents with their summaries
- **Modern UI**: Clean and responsive design using Ant Design and Tailwind CSS

## Setup Instructions

1. Clone the repository:

```bash
git clone [repository-url]
cd fe-platform
```

2. Install dependencies:

```bash
npm install
```

3. Create environment file:

```bash
cp .env.example .env
```

4. Configure environment variables:

```bash
# Add backend API URL
VITE_API_URL=""
```

5. Start development server:

```bash
npm run dev
```

## API Documentation

### Upload PDF

- **Endpoint**: `/pdf/upload`
- **Method**: POST
- **Content-Type**: multipart/form-data
- **Request Body**:
  ```json
  {
    "file": PDF_File
  }
  ```
- **Response**:
  ```text
  summary: string
  ```

### Get History

- **Endpoint**: `/pdf/history`
- **Method**: GET
- **Response**:
  ```json
    "documents": [
      {
        "id": "string",
        "title": "string",
        "upload_url": "string",
        "timestamp": "string"
      }
    ]
  ```

## Docker Support

While the primary deployment is through Vercel, a Docker configuration is provided for local development and testing:

### Dockerfile

```dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]
```

### docker-compose.yml

```yaml
version: "3.8"

services:
  app:
    build: .
    ports:
      - "5173:5173"
    environment:
      - VITE_API_URL=${VITE_API_URL}
```

To run with Docker:

```bash
docker-compose up --build
```

## Deployment

The application is deployed on Vercel. The deployment process is automated through Vercel's platform:

1. Connect your GitHub repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Deployments will be automatically triggered on pushes to the main branch

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
